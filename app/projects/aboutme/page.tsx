// Fetch from json file at public/data

// Should I use contact-context to fetch all data from profile?? 

// Profile

import { urlToFetch } from "@/app/lib/utils";

import Contact from "../../ui/contact";
import { ContactData } from "@/app/lib/contact-context";

interface PersonalInfo {
    name: string;
    role: string;
}

interface Language {
    language: string;
    level: string;
}

interface ProfileData {
    personal_info: PersonalInfo;
    contact: ContactData;
    about_me: string;
    skills: string[];
    frameworks: string[];
    experience: string;
    education: string;
    languages: Language[];
    interests: string[];
    goals: string;
}

export default async function Profile() {
    try {
        const request = await fetch(`${urlToFetch}/data/personalData.json`);
        const data: ProfileData = await request.json();

        // Destructure the object for access
        const {
            personal_info,
            contact,
            about_me,
            skills,
            frameworks,
            //experience,
            //education,
            languages,
            interests,
            goals
        } = data;

        {}
        return (
            <>
                <div className='flex flex-col justify-center items-center gap-5  my-5' >

                    <section className="flex flex-col items-center justify-center border-b border-[var(--custom-border)] rounded-b-mb px-2 pb-3 gap-2">
                        <h4 className="font-medium text-lg">{personal_info.name}</h4>
                        <p><strong>{personal_info.role}</strong></p>
                        <Contact contactData={contact}
                            class_name="flex flex-row items-center justify-center gap-5 md:flex-col md:gap-2"
                            class_a=""
                            class_p="hidden md:block"
                        />
                    </section>
                    {/* About Content */}
                    <div className='flex flex-col md:items-start justify-center max-md:max-w-3xl px-3 md:flex-row border-b border-[var(--custom-border)] rounded-b-mb md:max-w-4xl' >
                        {/* Left Panel */}
                        <div className='flex justify-center border-b border-[var(--custom-border)] pb-2 md:border-0 md:flex-col md:justify-start  md:mb-3'>
                            <div className="text-right border-r xs:flex xs:border-0 xs:text-left md:flex-col border-[var(--custom-border)]">
                                <section className=" p-2 xs:border-r border-[var(--custom-border)]">
                                    <h3>Skills</h3>
                                    <ul className="">
                                        {skills.map((skill, index) => (
                                            <li key={index}>{skill}</li>
                                        ))}
                                    </ul>
                                </section>
                                <section className=" p-2 xs:border-r border-[var(--custom-border)] ">
                                    <h3>Frameworks</h3>
                                    <ul className="">
                                        {frameworks.map((framework, index) => (
                                            <li key={index}>{framework}</li>
                                        ))}
                                    </ul>
                                </section>
                            </div>
                            <div className="xs:flex md:flex-col">
                                <section className=" p-2 xs:border-r border-[var(--custom-border)]">
                                    <h3>Languages</h3>
                                    <ul className="">
                                        {languages.map((language, index) => (
                                            <li key={index}>{language.language} <strong>-</strong> {language.level}</li>
                                        ))}
                                    </ul>
                                </section>
                                <section className="p-2 md:border-r border-[var(--custom-border)]">
                                    <h3>Interests</h3>
                                    <ul className="">
                                        {interests.map((interest, index) => (
                                            <li key={index}>{interest}</li>
                                        ))}
                                    </ul>
                                </section>
                            </div>
                        </div>
                        {/* Right Panel */}
                        <div className='flex flex-col justify-center gap-2 mb-2'>
                            <section className="pt-2 px-4">
                                <h3>About Me</h3>
                                <p className="text-justify">{about_me}</p>
                            </section>
                            {/*<section className="pt-2 px-4">
                                <h3>Experience</h3>
                                <p className="text-justify">{experience}</p>
                            </section>

                            <section className="pt-2 px-4">
                                <h3>Education</h3>
                                <p className="text-justify">{education}</p>
                            </section>*/}

                            <section className="py-2 px-4">
                                <h3>My Goals</h3>
                                <p className="text-justify">{goals}</p>
                            </section>
                        </div>
                    </div>
                </div >
            </>
        );
    } catch (error) {
        console.error('Error fetching JSON data:', error);
        return (
            <>
                <div>Error loading data</div>
            </>
        );
    }
}