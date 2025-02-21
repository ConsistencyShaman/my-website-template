'use client'

/**
 * This component displays a slider or list based on the selected style.
 * 
 * @param {React.ReactNode} props.children - The child components that are passed into the Display component.
 * 
 * @example
 * <Display>
 *   <SlidersPresent />
 *   <ListPresent />
 * </Display>
 * 
 * SliderPresent much be the first Children otherwise the logic will be switched
 */

import React from "react";
import { useState } from "react";
import Image from "next/image";
import Button from "./button";

interface DisplayProps {
    children: React.ReactNode;

}

export default function DisplayManager({ children }: DisplayProps) {
    const [displayStyle, setDisplayStyle] = useState('list');

    const handleDisplay = () => {

        if (displayStyle === 'sliders') {
            setDisplayStyle('list');
            console.log(childrenArray);
        } else {
            setDisplayStyle('sliders');
            console.log(childrenArray);
        }
    }

    const childrenArray = React.Children.toArray(children);

    return (
        <div className="flex flex-col justify-center items-center gap-1 my-5">
            <Button onClick={handleDisplay} name={'Change Display'} className="w-36" />
            <div className="flex flex-row gap-5 mt-[5]">
                <button onClick={() => setDisplayStyle('sliders')}
                    className="transform hover:scale-110"
                ><Image
                        src={'/carousel-horizontal.svg'}
                        alt='Sliders Icon'
                        width={20}
                        height={20}
                        className="filter dark:invert"
                    /></button>

                <button onClick={() => setDisplayStyle('list')}
                    className="transform hover:scale-110"
                ><Image
                        src={'/list.svg'}
                        alt="List Icon"
                        width={20}
                        height={20}
                        className="filter dark:invert"
                    /></button>
            </div>
            {displayStyle === 'sliders' ?
                (
                    <>
                        {childrenArray[0]}
                    </>
                ) : (
                    <>
                        {childrenArray[1]}
                    </>
                )
            }
        </div>
    )
}