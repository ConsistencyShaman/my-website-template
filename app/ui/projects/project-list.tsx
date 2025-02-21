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

// older stuff... Keep it just in case
{/* <div className="flex flex-col items-start gap-2">
                                    <div>
                                        <h3>{project.title}</h3>
                                        <h4>{project.frameworks}</h4>
                                    </div>
                                    <p>{project.description}</p>

                                    <ul><h4 className="text-xl font-medium">Languages</h4>
                                        {project.languages.map((language, index) => {
                                            return (
                                                <li key={index} >{language}</li>
                                            )
                                        })}
                                    </ul>
                                    <div>
                                        <h4 className="text-xl font-medium">Date</h4>
                                        <p>{project.date}</p>
                                    </div>
                                    <div className="absolute bottom-5 right-5 flex gap-4">
                                        <a href={project.source_code} target="_blank" rel="noopener noreferrer"
                                            className={project.source_code === '' ? 'hidden' : 'visible'}>
                                            <Image
                                                aria-hidden
                                                src='/github-mark.svg'
                                                alt="github cat"
                                                width={45}
                                                height={45}
                                                className="filter dark:invert"
                                            />
                                        </a>
                                        <a href={project.deploy_url} target="_blank" rel="noopener noreferrer"
                                            className={project.deploy_url === '' ? 'hidden' : 'visible'}>
                                            <Image
                                                aria-hidden
                                                src='/globe.svg'
                                                alt="github cat"
                                                width={45}
                                                height={45}
                                                className="filter dark:invert"
                                            />
                                        </a>
                                    </div>
                                </div> */}