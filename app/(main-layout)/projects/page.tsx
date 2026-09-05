import type { Metadata } from "next";
import { Suspense as SuspenseWrapper } from "react";
import Projects from "@/components/ui/pages/projects/Projects";
import ChangePageButton from "@/components/shared/ChangePageButton";
import ProjectsSkeleton from "./ProjectsSkeleton";
import { APIResponse } from "@/types/api.response.types";

export const metadata: Metadata = {
    title: "Planet Venus | Projects",
    description: "Work showcase | Rakibul Hasan",
};

const getProjects = async (): Promise<APIResponse> => {
    // await new Promise((resolve) => setTimeout(resolve, 10000));

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/projects`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error("Failed to fetch projects");
    }

    return res.json();
};

const SuspenseContent = async () => {
    const projects = await getProjects();
    return <Projects projectsData={projects} />;
};

const ProjectsPage = () => {
    return (
        <div
            className="relative h-screen w-full text-white p-6 overflow-x-hidden overflow-y-auto"
        >
            {/* Background Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/5 blur-[120px] pointer-events-none" />

            <ChangePageButton text="Contact Me" destination="/contact" />

            <div className="max-w-7xl mx-auto relative z-10 pt-32 lg:pt-8 pb-20">
                <div
                    className="mb-20"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter italic text-white">
                        Projects <span className="text-slate-500 text-3xl md:text-5xl not-italic font-light">I've completed</span>
                    </h1>
                    <p className="text-slate-400 mt-4 tracking-[0.3em] uppercase text-xs">Featured work & Experiments</p>
                </div>

                {/* <ProjectsSkeleton /> */}

                <SuspenseWrapper fallback={<ProjectsSkeleton />}>
                    <SuspenseContent />
                </SuspenseWrapper>
            </div>
        </div>
    );
};

export default ProjectsPage;