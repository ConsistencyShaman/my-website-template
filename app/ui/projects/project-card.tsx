import Image from "next/image";
import { Project } from "@/app/projects/page";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="border border-[var(--custom-border)] rounded-lg px-4 py-2 flex flex-col gap-[8] 
                            bg-[var(--custom-bg)] bg-opcacity-50 shadow-xl max-w-md relative">
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
                    className={project.source_code === '' ? 'hidden' : 'visible'}
                >
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
        </div>
    )
}