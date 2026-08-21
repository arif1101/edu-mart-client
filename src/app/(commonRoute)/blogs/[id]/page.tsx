import { notFound } from "next/navigation";
import { getBlogBySlug } from "@/data/blogsData";
import BlogDetailsClient from "@/components/page/blog/BlogDetailsClient";

interface BlogDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: BlogDetailsPageProps) {
  const { id } = await params;
  const blog = getBlogBySlug(id);

  if (!blog) {
    return {
      title: "Article Not Found | EduMart",
    };
  }

  return {
    title: `${blog.title} | EduMart Journal`,
    description: blog.excerpt,
  };
}

export default async function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const { id } = await params;
  const blog = getBlogBySlug(id);

  if (!blog) {
    notFound();
  }

  return <BlogDetailsClient blog={blog} />;
}
