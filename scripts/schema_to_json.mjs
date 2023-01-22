#!/usr/bin/env node

"use strict";
import { Command } from "commander";
import * as fs from "fs";
import https from "https";
import { compileFromFile } from "json-schema-to-typescript";
import path from "path";

const ensure_dir_exists = (filepath) => {
  const dirname = path.dirname(filepath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensure_dir_exists(dirname);
  fs.mkdirSync(dirname);
};

const download = (url, filename, cb) => {
  if (fs.existsSync(filename)) {
    console.log(`File ${filename} already exists. Skipping download.`);
    return cb();
  }
  ensure_dir_exists(filename);
  const file = fs.createWriteStream(filename).on("error", (err) => {
    console.error("Problem creating filestream for download.", err);
  });
  const request = https
    .get(url, (res) => {
      res.pipe(file);
      file.on("finish", () => {
        console.log("Finished downloading");
        file.close(cb);
      });
    })
    .on("error", (err) => {
      fs.unlink(filename);
      console.error("Problem dling", err);
    });
};

const is_valid_url = (str) => {
  let url;
  try {
    url = new URL(str);
  } catch (e) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
};

const get_schema_and_compile = async (url, schema_fname, declaration_fname) => {
  if (!is_valid_url(url)) {
    console.error("Invalid url given", url);
    process.exit(-1);
  }
  console.log("Downloading schema from url", url);
  download(url, schema_fname, () => {
    compileFromFile(schema_fname)
      .then((ts) => {
        console.log(
          "Creating typescript declaration from downloaded schema",
          schema_fname
        );
        ensure_dir_exists(declaration_fname);
        fs.writeFileSync(declaration_fname, ts);
        console.log("Finished creating types");
      })
      .catch((reason) =>
        console.error("Failed to create type declarations", reason)
      );
  });
};

const program = new Command("schema_to_json")
  .argument(
    "[schema-url]",
    "url of schema to create ts declarations from",
    "https://melvoridle.com/assets/schema/gameData.json"
  )
  .argument(
    "[schema-filename]",
    "output filename for downloaded schema",
    "schema/gameData.json"
  )
  .argument(
    "[declaration-filename]",
    "output filename for generated typescript declaration file",
    "types/schema/gameData.d.ts"
  )
  .action((url, schema_fname, declaration_fname) => {
    console.log(
      `Running with urL : ${url}, schema_filename : ${schema_fname}, declaration_fname : ${declaration_fname}`
    );
    get_schema_and_compile(url, schema_fname, declaration_fname);
  })
  .parse();
