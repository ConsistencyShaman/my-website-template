'use client'

import { useState, useEffect } from "react";
import { CertificatesData } from "@/app/projects/certificates/page";
import Image from "next/image";
import Button from "../button";

export default function ListPresent({ certifications }: CertificatesData) {

    const [imagePath, setImagePath] = useState('');

    const showCertificate = (index: number) => {
        setImagePath(certifications[index].path);
    }

    useEffect(() => {
        if (imagePath) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [imagePath]);

    return (
        <main className="flex justify-center items-center min-h-screen mt-4 max-w-4xl">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-5">
                {certifications.map((certificate, index) => {
                    return (
                        <li key={index}
                            className="border border-[var(--custom-border)] rounded-lg p-4 grid grid-cols-1 sm:grid-cols-[2fr_1fr] max-w-[400] 
                            bg-[var(--custom-bg)] bg-opcacity-50 shadow-xl"
                        >
                            <div className="flex flex-col items-start gap-4">
                                <h3>{certificate.title}</h3>
                                <p>{certificate.issued_by}</p>
                                <h4>{certificate.date}</h4>
                            </div>
                            <div className="flex flex-col items-end">
                                {certificate.issued_by === 'Code Academy' ? (
                                    <Image src={'/Codecademy_icon.svg'} alt="Codecademy Icon" width={100} height={100} />
                                ) : (
                                    <Image src={'/coursera-icon.svg'} alt="Coursera Icon" width={70} height={70} />
                                )}
                            </div>
                            <div className="col-span-2 mt-2 justify-self-center">
                                <Button onClick={() => showCertificate(index)} name={'Show Certificate'} className="" />
                            </div>
                        </li>
                    )
                })
                }
            </ul>
            {/* Cert Image */}
            {imagePath &&
                <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75 z-50" >
                    <div className="relative">
                        <button onClick={() => setImagePath('')}
                            className="absolute right-4 top-4 z-10"
                        ><Image src={'/close-icon.svg'} alt="Close Icon" width={40} height={40} /></button>
                        <Image src={imagePath} alt="imagePath" width={800} height={800} />
                    </div>
                </div>
            }
        </main>
    )
}