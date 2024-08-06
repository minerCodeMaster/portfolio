import Grid from "./Components/Grid";
import NameCard from "./Components/NameCard";
import SkillCard from "./Components/SkillCard";
import TestCard from "./Components/TestCard";
import { ThemeSwitcher } from "./Components/ThemeSwitcher";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center p-4 lg:mx-40">
      <Grid/>
      <h1 className="text-6xl font-thin mt-20 z-30">Lukáš Batók</h1>
      <p className="text-xl font-thin z-30 my-2">Front-end / Full-stack Web Developer</p>
      <div className=" z-30 w-full mt-60">
        <NameCard/>
      </div>
      <div className=" z-30 w-full mt-20">
        <SkillCard/> 
      </div>
    </main>
  );
}
