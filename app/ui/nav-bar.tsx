'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export const links = [
    { name: "Projects", href: "/projects"},
    { name: "Certificates", href: "/projects/certificates" },
    { name: "About Me", href: "/projects/aboutme" }
]

export default function Navbar() {
    const pathName = usePathname();

    return (
        <div className="flex flex-row gap-2 justify-center mt-3" >
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            "flex items-center p-2 border-2 border-[var(--custom-border)] rounded-lg bg-[var(--custom-bg)] transition-transform hover:animate-scale-me",
                            { 'bg-ky-100 text-blue-600': pathName === link.href, }
                        )}
                    >
                        <p className="hover:text-sky-400" >{link.name}</p>
                    </Link>
                )
            })}
        </div>
    )
}