import fs from "fs";
import path from "path";
import matter from "gray-matter";

const DOCS_ROOT = path.join(process.cwd(), "docs");

export type DocParams = { app: string; doc: string };

export function getAllDocParams(): DocParams[] {
  if (!fs.existsSync(DOCS_ROOT)) return [];
  const apps = fs.readdirSync(DOCS_ROOT, { withFileTypes: true }).filter((d) => d.isDirectory());

  return apps.flatMap((appDir) => {
    const appPath = path.join(DOCS_ROOT, appDir.name);
    return fs
      .readdirSync(appPath)
      .filter((f) => f.endsWith(".md"))
      .map((f) => ({ app: appDir.name, doc: f.replace(/\.md$/, "") }));
  });
}

export function getDoc(app: string, doc: string) {
  const filePath = path.join(DOCS_ROOT, app, `${doc}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(raw);
  return { content, frontmatter: data };
}

export function getAppDocs(app: string) {
  const appPath = path.join(DOCS_ROOT, app);
  if (!fs.existsSync(appPath)) return [];
  return fs
    .readdirSync(appPath)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
