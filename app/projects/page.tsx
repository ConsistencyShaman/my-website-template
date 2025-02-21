// fetch from json
import { urlToFetch } from "../lib/utils";
import DisplayManager from "../ui/display-manager";
import ProjectsList from "../ui/projects/project-list";
import ProjectsSlides from "../ui/projects/projects-slides";

// export interface ProjectsData {
//     projects: Array<{
//         title: string;
//         description: string;
//         languages: string[];
//         frameworks: string;
//         date: string;
//         source_code: string;
//         deploy_url: string;
//     }>
// }

// Define the type for a single project
export interface Project {
    title: string;
    description: string;
    languages: string[];
    frameworks: string;
    date: string;
    source_code: string;
    deploy_url: string;
}

// Define the type for the overall project data
export interface ProjectsData {
    projects: Project[];
}

export default async function ProjectsPage() {
    try {
        const request = await fetch(`${urlToFetch}/data/projects.json`);
        const data = await request.json();
        const { projects } = data;
        
        return (
            <DisplayManager>
                <ProjectsSlides projects={projects} />
                <ProjectsList projects={projects} />
            </DisplayManager>
        )
    } catch (error) {
        console.error('Error fetching JSON data:', error);
        return (
            <>
                <div>Error loading data</div>
            </>
        );
    }
}