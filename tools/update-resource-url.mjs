import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const configFile = resolve(".", "ha-config", "configuration.yaml");

try {
  let config = await readFile(configFile, "utf-8");
  const timestamp = Date.now();
  const newUrl = `/local/mushroom-dev/loader.js?v=${timestamp}`;
  
  // Update the resource URL with new timestamp
  config = config.replace(
    /url:\s*\/local\/mushroom-dev\/loader\.js\?v=\w+/,
    `url: ${newUrl}`
  );
  
  await writeFile(configFile, config);
  console.log(`Updated resource URL to: ${newUrl}`);
} catch (error) {
  console.log("No resource URL found in configuration.yaml to update");
}
