'use client'
import { useState, useRef, useEffect } from "react"
import React from "react";
import Image from "next/image";

interface CarouselProps {
    children: React.ReactNode; // Allows any content inside
    arrayLength: number;
}

export default function Carousel({ children, arrayLength }: CarouselProps) {
    const [index, setIndex] = useState(0);
    const carousel = useRef<HTMLDivElement>(null);

    

    useEffect(() => {
        if (carousel.current) {
            carousel.current.style.transform = `translateX(-${index * 100}%)`;

        }
    }, [index])
   
    useEffect(() => {
        let touchStartX = 0;
        const current = carousel.current;
        const handleTouchStart = (e: TouchEvent) => {
            touchStartX = e.touches[0].clientX; // Get the initial touch position
        };

        const handleTouchEnd = (e: TouchEvent) => {
            const touchEndX = e.changedTouches[0].clientX; // Get the final touch position
            const touchDifference = touchStartX - touchEndX;

            if (touchDifference > 50) {
                setIndex((prevIndex) => Math.min(prevIndex + 1, arrayLength - 1)); // Swipe left, go to the next slide
            } else if (touchDifference < -50) {
                setIndex((prevIndex) => Math.max(prevIndex - 1, 0)); // Swipe right, go to the previous slide
            }
        };

        if (current) {
            current.addEventListener("touchstart", handleTouchStart, { passive: true });
            current.addEventListener("touchend", handleTouchEnd, { passive: true });
        }

        return () => {
            if (current) {
                current.removeEventListener("touchstart", handleTouchStart);
                current.removeEventListener("touchend", handleTouchEnd);
            }
        };
    }, [arrayLength]);

    const nextSlide = () => {
        setIndex((prevIndex) => Math.min(prevIndex + 1, arrayLength - 1));
        //console.log(index);
    }

    const previousSlide = () => {
        setIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        //console.log(index);
    }

    

    return (
        <>
            <div className="w-full max-w-3xl max-auto">
                <div className="relative overflow-hidden rounded-lg shadow-xl">
                    <div id="certficate-wrapper" ref={carousel}
                        className="carousel flex transition-transform duration-1000 ease-in-out transform"
                    >
                        {children}
                    </div>
                    <button onClick={previousSlide}
                        className="hidden sm:block absolute left-4 top-1/3 transform -translate-y-1/2 bg-[var(--custom-bg)] rounded-full p-2 shadow-xl hover:bg-slate-200 transition duration-300 ease-in-out z-10"
                    ><Image
                            aria-hidden
                            src='/navigation-left.svg'
                            alt="github cat"
                            width={30}
                            height={30}
                            className="pl-1 filter dark:invert"
                        /></button>
                    <button onClick={nextSlide}
                        className="hidden sm:block absolute right-4 top-1/3 transform -translate-y-1/2 bg-[var(--custom-bg)] rounded-full p-2 shadow-xl hover:bg-slate-200 transition duration-300 ease-in-out z-10"
                    ><Image
                            aria-hidden
                            src='/navigation-right.svg'
                            alt="github cat"
                            width={30}
                            height={30}
                            className="pr-1 filter dark:invert"
                        /></button>
                </div>
            </div>
        </>
    )
}
