import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { getDoc } from "@/lib/docs";

export default async function DocPage({
  params,
}: {
  params: Promise<{ app: string; doc: string }>;
}) {
  const { app, doc } = await params;
  const content = await getDoc(app, doc);
  if (!content) notFound();

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "3rem 1.5rem", lineHeight: 1.6 }}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]}>{content}</ReactMarkdown>
    </main>
  );
}
