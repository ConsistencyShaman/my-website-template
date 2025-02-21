import Carousel from "../carousel";
import { CertificatesData } from "@/app/projects/certificates/page";
import Image from "next/image";


export default function SlidersPresent({ certifications }: CertificatesData) {

    return (
        <Carousel arrayLength={certifications.length}>
            {certifications.map((certificate, index) => {
                return (

                    <div key={index} id="certificate-card"
                        className="w-full flex flex-col flex-shrink-0 items-center justify-center h-[600px] my-3">
                        <Image
                            aria-hidden
                            src={`${certificate.path}`}
                            alt={certificate.title}
                            width={600}
                            height={600}
                            className="preview-pdf shadow-xl"
                        />
                        <div className="border border-[var(--custom-border)] rounded-lg px-4 py-2 flex flex-col gap-[8] 
                           bg-[var(--custom-bg)] bg-opcacity-50 mt-4 shadow-xl">
                            <h3 className="text-center">{certificate.title}</h3>
                            <p className="text-center">{certificate.issued_by}</p>
                            <h4 className="text-center">{certificate.date}</h4>
                        </div>
                    </div>

                )
            })}
        </Carousel>
    )
}

SlidersPresent.displayName = 'SlidersPresent';