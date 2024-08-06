'use client'

import SkillCardTemplate from "./SkillCardTemplate"

export default function NameCard() {

    return (
        <div className="flex flex-col z-30">
            <h2 className="text-3xl font-medium self-center">My skills</h2>
            <div className="grid grid-cols-1 grid-rows-6 sm:grid-cols-2 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-4">
                <SkillCardTemplate name="Next.js" link="nextjs.org"/>
                <SkillCardTemplate name="Tailwind css" link="tailwindcss.com"/>
                <SkillCardTemplate name="Prisma ORM" link="prisma.io"/>
                <SkillCardTemplate name="PostgreSQL" link="postgresql.org"/>
                <SkillCardTemplate name="Git" link="github.org"/>
                <SkillCardTemplate name="Typescript" link="typescriptlang.org"/>
            </div>
        </div>
    )
}