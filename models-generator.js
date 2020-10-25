const { compile } = require("json-schema-to-typescript");
const fs = require("fs");
const glob = require("glob");
const path = require("path");
const { paramCase } = require("change-case");

const BASE = "src/app";

const root = path.join(BASE, "**/*.json");

const matches = glob.sync(root, {});
matches.forEach((m) => {
  console.info("Found file: " + m);

  const jsonPath = "./" + m;
  const { schema, name } = require(jsonPath);

  const modelName = name + "Model";
  console.info("Model name: " + modelName);

  compile(schema, modelName).then((generatedCode) => {
    const out = BASE + "/" + paramCase(name) + ".model.ts";
    console.info("Writing to " + out + "...");

    const newSourceCode = removeIndexer(generatedCode);
    fs.writeFileSync(out, newSourceCode);
  });
});

/**
 * Removed indexers
 * @param {string} ts - The source code
 * @returns {string}
 */
function removeIndexer(ts) {
  return ts.replace(
    /^\s*\[k:\s*string\]:\s*(?:unknown|any);\s*[\r\n]+(\s*)/gm,
    (_m, nextIndent) => nextIndent
  );
}
