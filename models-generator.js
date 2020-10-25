const { compile } = require("json-schema-to-typescript");
const { schema } = require("./src/app/form-1.json");
const fs = require("fs");

compile(schema, "Form1Model").then((ts) => fs.writeFileSync("./src/app/form-1.model.ts", ts));
