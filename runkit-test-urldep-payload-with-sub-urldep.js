const assert = require("assert");

const thisPackageVersion = require("./package.json").version;

const lodashIsNullPackageVersion = require("lodash.isnull/package.json").version;
assert.deepStrictEqual(lodashIsNullPackageVersion, "2.1.0");

const runkitTestUrldepPayloadLeaf = require("runkit-test-urldep-payload-leaf");
assert.deepStrictEqual(runkitTestUrldepPayloadLeaf.version, "5.2.0");
assert.deepStrictEqual(runkitTestUrldepPayloadLeaf.hasPretendFix, true);

module.exports = {
  name: "runkit-test-urldep-payload-with-sub-urldep",
  version: thisPackageVersion,
  "runkit-test-urldep-payload-leaf": runkitTestUrldepPayloadLeaf
};

if (!module.parent) {
  console.log(JSON.stringify(module.exports, null, 2));
}
