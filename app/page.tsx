import fs from "fs";
import path from "path";
import Link from "next/link";

export default function Home() {
  const docsRoot = path.join(process.cwd(), "docs");
  const apps = fs.existsSync(docsRoot)
    ? fs.readdirSync(docsRoot, { withFileTypes: true }).filter((d) => d.isDirectory())
    : [];

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "3rem 1.5rem" }}>
      <h1>Zent Legal Docs</h1>
      {apps.map((appDir) => {
        const docs = fs
          .readdirSync(path.join(docsRoot, appDir.name))
          .filter((f) => f.endsWith(".md"))
          .map((f) => f.replace(/\.md$/, ""));
        return (
          <section key={appDir.name} style={{ marginTop: "2rem" }}>
            <h2 style={{ textTransform: "capitalize" }}>{appDir.name}</h2>
            <ul>
              {docs.map((doc) => (
                <li key={doc}>
                  <Link href={`/${appDir.name}/${doc}/`}>{doc.replace(/-/g, " ")}</Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </main>
  );
}
