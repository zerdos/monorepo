import { sessionToJSON } from "@/lib/make-sess";
import diff from "fast-diff";
import { ICodeSession } from "./interfaces";

type Change = [-1 | 0 | 1, string];
export type Diff = Change | [0 | -1, number];

export function createDiff(original: ICodeSession, revision: ICodeSession) {
  const result = diff(sessionToJSON(original), sessionToJSON(revision));
  const Diff: Diff[] = result.map((r) => r[0] === 1 ? r : [r[0], r[1].length]);
  return Diff;
}

export function applyDiff(sess: ICodeSession, Diff: Diff[]) {
  const original = sessionToJSON(sess);
  let result = "";
  let index = 0;

  for (const item of Diff) {
    const operation = item[0];
    const value = item[1];

    if (item[0] === -1 && typeof value === "number") {
      // DELETE
      index += value;
    } else if (operation === 0 && typeof value === "number") {
      // KEEP
      result += original.slice(index, index += value);
    } else {
      // INSERT
      result += value;
    }
  }

  return result;
}
