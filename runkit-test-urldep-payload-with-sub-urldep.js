const assert = require("assert");

const thisPackageVersion = require("./package.json").version;

const lodashIsNullPackageVersion = require("lodash.isnull/package.json").version;
assert.deepStrictEqual(lodashIsNullPackageVersion, "2.1.0");

const runkitTestUrldepPayloadLeaf = require("runkit-test-urldep-payload-leaf");
const runkitTestUrldepPayloadLeafVersion = require("runkit-test-urldep-payload-leaf/package.json").version;
assert.deepStrictEqual(runkitTestUrldepPayloadLeafVersion, "5.2.0");

module.exports = {
  name: "runkit-test-urldep-payload-leaf",
  version: thisPackageVersion,
  "runkit-test-urldep-payload-leaf": runkitTestUrldepPayloadLeaf
};

if (!module.parent) {
  console.log(JSON.stringify(module.exports, null, 2));
}
