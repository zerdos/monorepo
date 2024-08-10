// src/importMapReplace.ts

import { oo } from "./importMap";

export function importMapReplace(code: string, origin: string): string {
  // Return early if the code already contains "importMapReplace" to avoid double processing
  if (code.includes("importMapReplace")) {
    return code;
  }

  // Define regex patterns for different types of imports
  const topLevelImportPattern =
    /(import\s*(?:[\w{},*\s]+|[\w{} as,*\s|\$]+|\w+|\$|\$\w+)\s*from\s*)(['"`][^'`"]+['"`])/g;
  const topLeveNoFromPattern =  /(?<![.\"@\w-])import\s*(['"`])(?:(?!\1).)*\1/g;


    const topLevelExportPattern =
    /(export\s*(?:[\w{},*\s]+|[\w{} as,*\s|\$]+|\w+|\$|\$\w+)\s*from\s*)(['"`][^'`"]+['"`])/g;
  const dynamicImportPattern = /(import\()(['"`][^'`"]+['"`])(\))/g;

  // Define a replacer function to modify the import paths
  const replacer = (match: string, p1: string, p2: string, p3char: string) => { 
    const p3 = String(p3char).replace(/[0-9]/g, ""); // Remove numeric characters from p3
   
    if (typeof p2 !== "string") { 
      
      const pkg = match.split('"')[1]
      if (pkg.startsWith("http")) return match;
      if (pkg.startsWith("/")) return match;
      if (pkg.startsWith("./")) return match;
      if (pkg.startsWith(",")) return match;

     return `import "${origin}/*${match.split('"')[1]}?bundle";`;; 
      match; //`import "${origin}/*${p1.slice(1).slice(0,-1)}?bundle"`   
      }
    const packageName = p2.slice(1, -1); // Remove quotes from package name

    if (packageName.startsWith("data:text")) {
      return p1 + `"${packageName}/index.js"` + p3;
    }
    if (
      packageName.startsWith(`${origin}/live`)
      && !packageName.includes("index.js")
    ) {
      return p1 + `"${packageName}/index.js"` + p3;
    }
    if (packageName.startsWith("./") && !packageName.slice(1).includes(".")) {
      return p1 + `"${origin}/live/${packageName.slice(2)}/index.js"` + p3;
    }

    if (packageName.startsWith("/")) {
      return p1 + `"${origin}${packageName}"` + p3;
    }

    if (packageName.startsWith(".") || packageName.startsWith("http")) {
      if (packageName.startsWith("http") && !packageName.startsWith(origin)) {
        const oldUrl = new URL(packageName);
        const newPackageName = new URL(oldUrl.pathname, origin);
        return p1 + `"${newPackageName.toString()}"` + p3;
      }
      return match;
    }

    if (packageName.startsWith("/live")) {
      return p1 + `"${origin}${packageName}/index.js"` + p3;
    }

    if (packageName.startsWith("@/")) {
      return p1 + `"${origin}/${packageName}.mjs"` + p3;
    }

    if (packageName.includes(".")) {
      const extension = packageName.split(".").pop()!;
      if (extension in ["js", "mjs", "ts", "tsx"]) {
        return p1 + `"${origin}/${packageName}"` + p3;
      }
    }

    return p1 + `"${origin}/*${packageName}?bundle"` + p3;
  };

  // Convert code to string if it's not already a string
  const str = typeof code === "string"
    ? code
    : new TextDecoder().decode(new Uint8Array(code));

  // Replace import paths using the replacer function
  let replaced = str
    .replace(topLevelImportPattern, replacer)
    .replace(topLevelExportPattern, replacer)
    .replace(dynamicImportPattern, replacer)
    .replace(topLeveNoFromPattern, replacer);
  // Replace specific package paths based on the import map (oo)
  Object.keys(oo).forEach((pkg) => {
    replaced = replaced.split(`${origin}/*${pkg}?bundle`).join(
      origin + oo[pkg as keyof typeof oo],
    );
  });

  Object.keys(oo).forEach((pkg) => {
    replaced = replaced.split(`"${pkg}"`).join(
      "\"" + origin + oo[pkg as keyof typeof oo] + "\"",
    );
  });

  return `
  /** importMapReplace */
  ` + replaced;
}
