const GITHUB_OWNER = "zent-Studio-net";
const GITHUB_REPO = "legal_docs";
const GITHUB_BRANCH = "main";

const RAW_BASE = `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/${GITHUB_BRANCH}`;
const API_BASE = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents`;

// Revalidate frequently so new docs show up fast without a redeploy.
const REVALIDATE_SECONDS = 30;

type GithubContentEntry = { name: string; type: "file" | "dir" };

export async function listApps(): Promise<string[]> {
  const res = await fetch(`${API_BASE}/docs?ref=${GITHUB_BRANCH}`, {
    next: { revalidate: REVALIDATE_SECONDS },
  });
  if (!res.ok) return [];
  const entries: GithubContentEntry[] = await res.json();
  return entries.filter((e) => e.type === "dir").map((e) => e.name);
}

export async function listDocs(app: string): Promise<string[]> {
  const res = await fetch(`${API_BASE}/docs/${app}?ref=${GITHUB_BRANCH}`, {
    next: { revalidate: REVALIDATE_SECONDS },
  });
  if (!res.ok) return [];
  const entries: GithubContentEntry[] = await res.json();
  return entries
    .filter((e) => e.type === "file" && e.name.endsWith(".md"))
    .map((e) => e.name.replace(/\.md$/, ""));
}

export async function getDoc(app: string, doc: string): Promise<string | null> {
  const res = await fetch(`${RAW_BASE}/docs/${app}/${doc}.md`, {
    next: { revalidate: REVALIDATE_SECONDS },
  });
  if (!res.ok) return null;
  return res.text();
}
