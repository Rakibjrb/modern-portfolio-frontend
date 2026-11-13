import type { Metadata } from "next";
import { Suspense as SuspenseWrapper } from "react";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/helper/fetchData";
import DetailsSkeleton from "./_components/DetailsSkeleton";
import DetailsPageComponent from "./_components/DetailsPage";
import ChangePageButton from "@/components/shared/ChangePageButton";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Rakibul Hasan Portfolio",
      description: "Project details not found",
    };
  }

  return {
    title: `${project.title} | Projects - Rakibul Hasan Portfolio`,
    description: project.shortDescription || project.fullDescription || `Details of ${project.title}`,
    openGraph: {
      title: project.title,
      description: project.shortDescription || project.fullDescription,
      images: project.thumbnail ? [{ url: project.thumbnail }] : [],
    },
  };
}

const SuspenseContent = async ({ slug }: { slug: string }) => {
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <DetailsPageComponent project={project} />;
};

const DetailsPage = async ({ params }: Props) => {
  const { slug } = await params;

  return (
    <div className="relative min-h-screen h-screen w-full text-white p-6 overflow-x-hidden overflow-y-auto">
      {/* Background Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-blue-600/10 blur-[140px] pointer-events-none" />
      <div className="fixed -bottom-20 right-0 w-[450px] h-[450px] bg-purple-600/10 blur-[150px] pointer-events-none" />

      {/* Navigation button */}
      <ChangePageButton text="All Projects" destination="/projects" />

      <div className="max-w-6xl mx-auto relative z-10 pt-28 lg:pt-20 pb-24">
        <SuspenseWrapper fallback={<DetailsSkeleton />}>
          <SuspenseContent slug={slug} />
        </SuspenseWrapper>
      </div>
    </div>
  );
};

export default DetailsPage;
