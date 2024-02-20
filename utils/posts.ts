import path from 'path'
import fs from 'fs'

export const getPosts = async () => {
  const DIR = "../pages"
  const files = fs
    .readdirSync(DIR)
    .filter((file) => file.endsWith(".mdx"));
  const META = /export\s+const\s+meta\s+=\s+(\{(\n|.)*?\n\})/;

  const postsData = files.map((file) => {
    // grab the metadata
    const name = path.join(DIR, file);
    const contents = fs.readFileSync(name, "utf8");
    const match = META.exec(contents);

    if (!match || typeof match[1] !== "string")
      throw new Error(`${name} needs to export const meta = {}`);

    const meta = eval("(" + match[1] + ")");
    // remove the ".mdx" from the filename
    const slug = file.replace(/\.mdx?$/, "");
    return {
      ...meta,
      slug,
    };
  });

  return postsData;
};
