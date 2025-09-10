import { cp, rm, readdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const src = resolve(".", "dist");                         // Mushroom build output
const dst = resolve(".", "ha-config", "www", "mushroom-dev");

if (!existsSync(src)) {
  console.error("ERROR: dist/ not found. Run `npm run build:mushroom` first.");
  process.exit(1);
}

await rm(dst, { recursive: true, force: true });
await cp(src, dst, { recursive: true });

// Generate a loader that imports only the main mushroom.js (complete build)
const files = (await readdir(dst)).filter(f => f === "mushroom.js");

const imports = files.map(f => `import "./${f}";`).join("\n");
const timestamp = Date.now();
const banner = `// Auto-generated loader for Mushroom dev. ${(new Date()).toISOString()}\n// Build: ${timestamp}\n`;

await writeFile(resolve(dst, "loader.js"), banner + imports + "\n");

console.log(`Synced ${files.length} modules to /www/mushroom-dev and wrote loader.js`);
