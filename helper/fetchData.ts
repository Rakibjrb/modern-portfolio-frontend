import { IAbout } from "@/types/about.interface";
import { APIResponse } from "@/types/api.response.types";
import { aboutFallbackData } from "./fallbacks/about.fallback";
import { IProject } from "@/types/projects.interface";
import { projectsFallbackData } from "./fallbacks/projects.fallback";
import { IExperience } from "@/types/experience.interface";
import { experienceFallbackData } from "./fallbacks/experiences.fallback";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API;

export const fetchData = async (
  tag: string,
  endpoint: string,
): Promise<APIResponse> => {
  const res = await fetch(`${baseUrl}${endpoint}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${tag} data`);
  }

  return res.json();
};

export const getAbout = async (): Promise<IAbout> => {
  let data: IAbout;
  try {
    const res = await fetchData("Information", "/api/about");
    data = res.data;
  } catch {
    data = aboutFallbackData;
  }
  return data;
};

export const getProjects = async (): Promise<IProject[]> => {
  let data: IProject[];
  try {
    const res = await fetchData("Projects", "/api/projects?page=1&limit=9");
    data = res.data;
  } catch {
    data = projectsFallbackData;
  }
  return data;
};

export const getProjectBySlug = async (
  slug: string,
): Promise<IProject | null> => {
  let data: IProject | null;
  try {
    const res = await fetchData("Project", `/api/projects/${slug}`);
    data = res.data;
  } catch {
    data = null;
  }
  return data;
};

export const getExperience = async (): Promise<IExperience> => {
  let data: IExperience;
  try {
    const res = await fetchData("Experience", "/api/experiences");
    data = res.data;
  } catch {
    data = experienceFallbackData;
  }
  return data;
};
