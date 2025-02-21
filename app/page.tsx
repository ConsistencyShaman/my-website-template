import Link from "next/link";

export default function Home() {
  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-center min-h-[100svh] p-20 gap-16' >
      <main className='flex flex-col gap-8 row-start-2'>

        {/*className="absolute opacity-0 animate-slide-left" */}
        <h1 className="  animate-slide-left mb-10"
        >A project made by...</h1>
        <h1 className="  animate-slide-right"
        >...a web developer</h1>
        <div className="mx-auto">
          <Link href='/projects' key='get in' >
            <button className='border-2 hover:bg-slate-300 rounded-sm px-1 py-2 animate-tilt-inf' >Take a look...</button>
          </Link>
        </div>
      </main>
    </div>
  );
}
