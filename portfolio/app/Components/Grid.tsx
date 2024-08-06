"use client"

import { useEffect, useState } from "react"

export default function Grid() {

    const useWidth = () => {
        const [width, setWidth] = useState(0)
        const handleResize = () => setWidth(window.innerWidth)
        useEffect(() => {
            handleResize()
            window.addEventListener('resize', handleResize)
            return () => window.removeEventListener('resize', handleResize)
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])
        return width
      }

    const [squareSize, setSquareSize] = useState(64);
    const width = useWidth();

    useEffect(() => {
        if(width < 550){
            setSquareSize(width/6);
        }else if(width < 800){
            setSquareSize(width/8);
        }else if(width < 1100){
            setSquareSize(width/12)
        }else{
            setSquareSize(width/20)
        }
    }, [width])

    return (
        <>
            <div className="absolute inset-0 bg-none z-10 top-14">
            <svg aria-hidden="true" className="absolute inset-0 h-full w-full z-0 -top-1">
            <defs>
                <pattern id="gridPattern" width={squareSize} height={squareSize} patternUnits="userSpaceOnUse">
                <path d="M0 96V0.5H96" fill="none" className=" stroke-foreground/50" strokeDasharray={2}></path>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gridPattern)"></rect>
            </svg>
        </div>
        <div className="absolute inset-0 z-20 shadow-[inset_0px_-608px_150px_0px] shadow-s-primary"></div>
        <div className=" h-10 lg:h-[40rem] w-64 lg:w-[40rem] bg-gradient-to-tr from-b-primary lg:from-b-primary/25 to-b-secondary lg:to-b-secondary/25 absolute top-32 right-4 rotate-12 lg:rotate-45 blur-3xl lg:right-32 lg:top-32 "></div>
      </>
    )
}