const { compile } = require("json-schema-to-typescript");
const fs = require("fs");
const glob = require("glob");
const path = require("path");
const { paramCase } = require("change-case");

const BASE = "src/app";

const root = path.join(BASE, "**/*.json");

glob(root, {}, (error, matches) => {
  matches.forEach((m) => {
    console.info("Found file: " + m);

    const jsonPath = "./" + m;
    const { schema, name } = require(jsonPath);

    const modelName = name + "Model";
    console.info("Model name: " + modelName);

    compile(schema, modelName).then((ts) => {
      const out = BASE + "/" + paramCase(name) + ".model.ts";
      console.info("Writing to " + out + "...");
      fs.writeFileSync(out, ts);
    });
  });
});
