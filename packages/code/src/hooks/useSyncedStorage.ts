import { useCallback, useEffect, useMemo, useState } from "react";

interface StorageBackend<T> {
  get(key: string): Promise<T | null>;
  set(key: string, value: T): Promise<void>;
}

class LocalStorageBackend<T> implements StorageBackend<T> {
  async get(key: string): Promise<T | null> {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  async set(key: string, value: T): Promise<void> {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

class IndexedDBBackend<T> implements StorageBackend<T> {
  private dbName = "SyncedStorageDB";
  private storeName = "keyvaluepairs";

  private async openDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, 1);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        db.createObjectStore(this.storeName, { keyPath: "key" });
      };
    });
  }

  async get(key: string): Promise<T | null> {
    const db = await this.openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(this.storeName, "readonly");
      const objectStore = transaction.objectStore(this.storeName);
      const request = objectStore.get(key);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result ? request.result.value : null);
    });
  }

  async set(key: string, value: T): Promise<void> {
    const db = await this.openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(this.storeName, "readwrite");
      const objectStore = transaction.objectStore(this.storeName);
      const request = objectStore.put({ key, value });
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }
}

function getStorageBackend<T>(): StorageBackend<T> {
  if (typeof window !== "undefined" && "localStorage" in window) {
    return new LocalStorageBackend<T>();
  } else if (typeof indexedDB !== "undefined") {
    return new IndexedDBBackend<T>();
  }
  throw new Error("No suitable storage backend available");
}

export function useSyncedStorage<T>(
  key: string,
  startValue: T,
): [T | null, (value: T | ((val: T) => T)) => Promise<void>] {
  const [storedValue, setStoredValue] = useState<T | null>(startValue);
  const storageBackend = useMemo(() => {
    try {
      return getStorageBackend<T>();
    } catch (error) {
      console.error("Failed to initialize storage backend:", error);
      return null;
    }
  }, []);

  useEffect(() => {
    if (!startValue) {
      (async () => {
        const startValueNotFalsy = await getStorageBackend<T>().get(key);
        setStoredValue(startValueNotFalsy);
      })();
    }
  }, []);

  const setValue = useCallback(async (value: T | null | ((val: T | null) => T | null)) => {
    try {
      if (value === null || undefined) {
      }

      const valueToStore = value instanceof Function ? value(storedValue) : value;
      if (value !== null || undefined) setStoredValue(valueToStore);
      if (storageBackend) {
        await storageBackend.set(key, valueToStore === null ? startValue : valueToStore);
      }

      if (typeof BroadcastChannel !== "undefined") {
        const broadcastChannel = new BroadcastChannel("storage_sync");
        broadcastChannel.postMessage({ type: `update_${key}`, value: valueToStore });
      }
    } catch (error) {
      console.error("Error writing to storage:", error);
    }
  }, [key, storedValue, storageBackend]);

  useEffect(() => {
    let isMounted = true;
    const fetchStoredValue = async () => {
      if (!storageBackend) return;
      try {
        const value = await storageBackend.get(key);
        if (value !== null && isMounted) {
          setStoredValue(value);
        }
      } catch (error) {
        console.error("Error reading from storage:", error);
      }
    };

    fetchStoredValue();

    if (typeof BroadcastChannel !== "undefined") {
      const broadcastChannel = new BroadcastChannel("storage_sync");
      const handleMessage = (event: MessageEvent) => {
        if (event.data && event.data.type === `update_${key}` && isMounted) {
          setStoredValue(event.data.value as T);
        }
      };

      broadcastChannel.addEventListener("message", handleMessage);
      return () => {
        isMounted = false;
        broadcastChannel.removeEventListener("message", handleMessage);
        broadcastChannel.close();
      };
    }

    return () => {
      isMounted = false;
    };
  }, [key, storageBackend]);

  return [storedValue, setValue as (value: T | ((val: T) => T)) => Promise<void>];
}
