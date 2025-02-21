import { urlToFetch } from "@/app/lib/utils";
import DisplayManager from "@/app/ui/display-manager";
import ListPresent from "@/app/ui/ certificates/list-present";
import SlidersPresent from "@/app/ui/ certificates/sliders-present";

export interface CertificatesData {
    certifications: Array<{
        title: string;
        issued_by: string;
        date: string;
        path: string;
    }>
}

export default async function CertificatesPage() {
    try {
        const request = await fetch(`${urlToFetch}/data/certificates.json`);
        const data = await request.json();
        const { certifications } = data; 
        return (
            <DisplayManager>
                <SlidersPresent certifications={certifications} />
                <ListPresent certifications={certifications} />
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