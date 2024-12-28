import { hash, Record } from "@/external/immutable";
import type { ICodeSession } from "@/lib/interfaces";
import diff from "fast-diff";

type Diff = [-1 | 0 | 1, string];
export type Delta = Diff | [0 | -1, number];

export interface CodePatch {
  oldHash: string;
  newHash: string;
  patch: Delta[];
  reversePatch: Delta[];
}

class SessionPatcher {
  public static computeTextDelta(original: string, revised: string): Delta[] {
    return diff(original, revised).map(([op, text]) => op === 1 ? [op, text] : [op, text.length]);
  }

  public static applyTextDelta(original: string, delta: Delta[]): string {
    let result = "";
    let index = 0;

    for (const [op, val] of delta) {
      if (op === -1 && typeof val === "number") {
        index += val; // DELETE
      } else if (op === 0 && typeof val === "number") {
        result += original.slice(index, index += val); // KEEP
      } else {
        result += val; // INSERT
      }
    }
    return result;
  }

  public static computeSessionHash(cx: ICodeSession): string {
    return String(hash(cx));
  }

  public static sanitizeSession(p: ICodeSession): ICodeSession {
    p.messages = p.messages || [];
    p.code = p.code
      .split("\n")
      .filter((line) =>
        !(line.startsWith("//") && line.includes(".tsx")) &&
        line.trim() !== ("// " + p.codeSpace)
      )
      .join("\n");

    p.code = `// ${p.codeSpace}.tsx\n${p.code}`;

    return Record<ICodeSession>({
      i: p.i || 0,
      codeSpace: p.codeSpace || "",
      messages: p.messages,
      code: p.code || `export default () => <>\n  Nothing\n</>;`,
      html: p.html || "",
      css: p.css || "",
      transpiled: typeof p.transpiled === "string" ? p.transpiled : "",
    })(p).toJS() as ICodeSession;
  }

  public static sessionToJSON(s: ICodeSession): string {
    const { i, codeSpace, code, html, css, transpiled, messages } = s;
    return JSON.stringify({ i, codeSpace, messages, code, html, css, transpiled });
  }

  public static applySessionPatch(sess: ICodeSession, codePatch: CodePatch): ICodeSession {
    const patchedJson = applyTextDelta(
      sessionToJSON(sanitizeSession(sess)),
      codePatch.patch,
    );
    const newSess = sanitizeSession(JSON.parse(patchedJson));
    if (computeSessionHash(newSess) !== codePatch.newHash) {
      throw new Error("Unable to calculate CodePatch");
    }
    return newSess;
  }

  public static generateSessionPatch(oldSess: ICodeSession, newSess: ICodeSession): CodePatch {
    const oldRec = sanitizeSession(oldSess);
    const newRec = sanitizeSession(newSess);

    const oldHash = computeSessionHash(oldRec);
    const newHash = computeSessionHash(newRec);

    const oldStr = sessionToJSON(oldRec);
    const newStr = sessionToJSON(newRec);

    const patch = computeTextDelta(oldStr, newStr);
    const reversePatch = computeTextDelta(newStr, oldStr);

    const codePatch: CodePatch = { oldHash, newHash, patch, reversePatch };
    if (computeSessionHash(applySessionPatch(oldSess, codePatch)) !== newHash) {
      throw new Error("Unable to calculate CodePatch");
    }
    return codePatch;
  }
}

export const applyTextDelta = SessionPatcher.applyTextDelta;
export const computeTextDelta = SessionPatcher.computeTextDelta;
export const computeSessionHash = SessionPatcher.computeSessionHash;
export const sanitizeSession = SessionPatcher.sanitizeSession;
export const sessionToJSON = SessionPatcher.sessionToJSON;
export const applySessionPatch = SessionPatcher.applySessionPatch;
export const generateSessionPatch = SessionPatcher.generateSessionPatch;
