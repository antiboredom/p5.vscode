const fs = require("fs");
const path = require("path");
const got = require("got");
const yaml = require("js-yaml");
const libraryInstallURLS = require("./library_installation_urls.json");
const stream = require("stream");
const util = require("util");
const pipeline = util.promisify(stream.pipeline);

// Downloads contributor library info from the git repo for the p5.js website and generates a json file combining descriptions, meta info, and library download urls.

const libraryMetaURL =
  "https://raw.githubusercontent.com/processing/p5.js-website/main/src/data/libraries/libraries.json";
const libraryDescriptionsURL =
  "https://raw.githubusercontent.com/processing/p5.js-website/main/src/data/en.yml";

async function main() {
  let out = [];

  let libraryMeta = await got(libraryMetaURL).json();
  libraryMeta = libraryMeta.core.concat(libraryMeta.contributed);

  let descriptions = await got(libraryDescriptionsURL);
  descriptions = yaml.safeLoad(descriptions.body)["libraries"];

  for (l of libraryMeta) {
    l.desc = descriptions[l.name];
    l.install = libraryInstallURLS[l.name];
    if (!l.install) {
      console.error("Missing install url for", l.name, l.url);
      continue;
    }
    if (l.name === "p5.sound") {
      continue;
    }
    out.push(l);
  }
  fs.writeFileSync("src/libraries.json", JSON.stringify(out, null, 2));
}

main();
