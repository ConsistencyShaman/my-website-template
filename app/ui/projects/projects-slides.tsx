
import { ProjectsData } from "@/app/projects/page"
import Carousel from "../carousel"
import ProjectCard from "./project-card"

export default function ProjectsSlides({ projects }: ProjectsData) {

    return (
        <>
            <Carousel arrayLength={projects.length}>
                {projects.map((project, index) => {
                    return (
                        <div key={index}
                            className="w-full flex flex-col flex-shrink-0 items-center justify-center h-[400px] my-3"
                        >
                        <ProjectCard project={project} />   
                        </div>
                    )
                })
                }

            </Carousel>
        </>
    )
}