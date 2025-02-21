'use client'

import Image from "next/image";
import Contact from "./contact";
import { links } from "./nav-bar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";


import { useContact } from "../lib/contact-context";

export default function Footer() {

    const { github, linkedin, email } = useContact();
    const contactData = {
        github, linkedin, email
    }
    const pathName = usePathname();

    return (
        <footer className='flex flex-row justify-center gap-5 mb-5 mt-1 border-t border-dashed border-[var(--custom-border)] py-5 mx-auto max-w-4xl'>

            <section className="flex-col justify-center items-start w-24 px-2 ">
                <h2>Contact</h2>
                <div className="w-24 ">

                    <Contact contactData={contactData}
                        class_name="flex-col items-start gap-2 w-full"
                        class_a=""
                        class_p=""
                    />

                </div>
            </section>

            <section className="flex-col items-start justify-center gap-2 border-x border-[var(--custom-border)] px-4">
                <h2>Pages</h2>
                <div className="flex flex-col gap-2 justify-center" >
                    <Link
                        key='home'
                        href='/'
                    ><p className="hover:text-sky-400">Home</p>
                    </Link>
                    {links.map((link) => {
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={clsx(
                                    "",
                                    { 'text-blue-600': pathName === link.href, }
                                )}
                            >
                                <p className="hover:text-sky-400" >{link.name}</p>
                            </Link>
                        )
                    })}
                </div>
            </section>

            <section className=" flex-col justify-center items-start gap-2 ">
                <h2>Made using: </h2>
                <Image
                    src="/next.svg"
                    alt="Next.js logo"
                    width={125}
                    height={38}
                    priority
                    className="filter dark:invert"
                />
                <a
                    className="flex gap-3 items-center hover:underline"
                    href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                        className="filter dark:invert"
                    />
                    Go nextjs.org
                </a>
            </section>
        </footer>

    )
}