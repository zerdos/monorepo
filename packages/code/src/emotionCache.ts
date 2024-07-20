import createEmotionCache from "@emotion/cache";

import { EmotionCache } from "@emotion/cache";
export { EmotionCache };


const emotionCacheWithExtraDefault = (createEmotionCache as unknown as { default: typeof createEmotionCache })
  .default;
const cache = typeof emotionCacheWithExtraDefault === "function"
  ? emotionCacheWithExtraDefault
  : createEmotionCache;
export default cache;
