import { promises as fs } from "node:fs";

const foo = async () => {
  const pkg = JSON.parse(await fs.readFile("package.json"));
  console.log(pkg);
};

export { foo };
