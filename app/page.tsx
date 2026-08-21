import Link from "next/link";
import { listApps, listDocs } from "@/lib/docs";

export default async function Home() {
  const apps = await listApps();
  const appDocs = await Promise.all(apps.map(async (app) => ({ app, docs: await listDocs(app) })));

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "3rem 1.5rem" }}>
      <h1>Zent Legal Docs</h1>
      {appDocs.map(({ app, docs }) => (
        <section key={app} style={{ marginTop: "2rem" }}>
          <h2 style={{ textTransform: "capitalize" }}>{app}</h2>
          <ul>
            {docs.map((doc) => (
              <li key={doc}>
                <Link href={`/${app}/${doc}/`}>{doc.replace(/-/g, " ")}</Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
