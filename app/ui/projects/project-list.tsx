import { ProjectsData } from "@/app/projects/page"
import ProjectCard from "./project-card"


export default function ProjectsList({ projects }: ProjectsData) {


    return (
        <>
            <div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 px-4 gap-6 mt-4">
                    {projects.map((project, index) => {
                        return (
                            <li key={index}
                                className="relative max-w-[400]"
                            >
                                <ProjectCard project={project} />
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        </>
    )
}
