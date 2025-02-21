'use client'

import Navbar from "../ui/nav-bar";
import Footer from "../ui/footer";
import { ContactProvider } from "../lib/contact-context"; // Shared data (Contact Data)

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <header className="border-b border-dashed border-[var(--custom-border)] mb-1 py-5 mx-auto max-w-4xl">
        <Navbar />
      </header>
      <main className="mx-auto max-w-4xl">
        {children}
      </main>
      <ContactProvider>
        <Footer />
      </ContactProvider>

    </>
  )
}