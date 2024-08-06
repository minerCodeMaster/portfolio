"use client"

import { Card, CardBody } from "@nextui-org/react"
import Image from "next/image"

export default function SkillCardTemplate( {name, link}: {name: string, link: string}) {

    const src = "https://img.logo.dev/" + link + "?token=pk_HKI_KqgvTWu166DcvbwfoQ&format=png&size=192"

    return (
        <Card fullWidth className=" my-2">
            <CardBody className="flex flex-row items-center relative">
                <div className=" absolute mt-auto mb-auto border-none overflow-hidden rounded-2xl">
                    <Image src={src} alt="test" width={48} height={48} className=" p-1"/>
                </div>
                <h2 className="text-2xl text-foreground font-medium ml-auto mr-auto">{name}</h2>
            </CardBody>
        </Card>
    )
}