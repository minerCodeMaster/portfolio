"use client"

import { Button, Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";
import Image from "next/image";

export default function TestCard() {
    return(
        <div className=" flex flex-row justify-evenly w-full">
            <Card isFooterBlurred className=" w-[20%]">
                <Image className=" object-cover" src="/digi.jpg" alt="test" width={600} height={600} />
                <CardFooter className="justify-between border-none border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 h-10">
                    <p>I am testing hard!</p>
                    <Button variant="flat" size="sm" radius="lg" className=" bg-white/5 text-tiny text-white/80">
                        Click me
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}