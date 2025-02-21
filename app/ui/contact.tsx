'use client'

import Image from "next/image"
import { ContactData } from "@/app/lib/contact-context"



export default function Contact({ contactData, class_name = '', class_a = '', class_p = '' }:
    {
        contactData: ContactData;
        class_name: string;
        class_a: string;
        class_p: string;
    }) {

 

    return (
        <>
            <div className={`flex ${class_name}`} >
                <a className={`${class_a} flex gap-2 items-center`} href={`mailto:${contactData.email}`}>
                    <Image
                        aria-hidden
                        src='/email.svg'
                        alt="github cat"
                        width={20}
                        height={20}
                        className="filter dark:invert"
                    />
                    <p className={`hover:text-sky-400 ${class_p}`}>E-mail</p>
                </a>
                <a className={`${class_a} flex gap-2 items-center`} href={contactData.github} target="_blank" rel="noopener noreferrer">
                    <Image
                        aria-hidden
                        src='/github-mark.svg'
                        alt="github cat"
                        width={18}
                        height={18}
                        className="filter dark:invert"
                    />
                    <p className={` ${class_p} hover:text-sky-400`}>GitHub</p>
                </a>
                <a className={`${class_a} flex gap-2 items-center`} href={contactData.linkedin} target="_blank" rel="noopener noreferrer">
                    <Image
                        aria-hidden
                        src='/linkedin.svg'
                        alt="github cat"
                        width={27}
                        height={27}
                        
                    />
                    <p className={` ${class_p} hover:text-sky-400`}>LinkedIn</p>
                </a>
            </div>
        </>
    )
}