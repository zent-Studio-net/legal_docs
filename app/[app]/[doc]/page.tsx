import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllDocParams, getDoc } from "@/lib/docs";

export function generateStaticParams() {
  return getAllDocParams();
}

export const dynamicParams = false;

export default async function DocPage({
  params,
}: {
  params: Promise<{ app: string; doc: string }>;
}) {
  const { app, doc } = await params;
  const entry = getDoc(app, doc);
  if (!entry) notFound();

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "3rem 1.5rem", lineHeight: 1.6 }}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{entry.content}</ReactMarkdown>
    </main>
  );
}
