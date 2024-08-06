"use client";

import { Switch } from "@nextui-org/react";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(true)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    if(theme == "light"){
        setMounted(false);
    }
}, [theme])

const switchChange = () => {
  if(!mounted){
      setTheme("dark");
      console.log(theme)
  }else{
      setTheme("light");
      console.log(theme)
  }
    setMounted(!mounted)
}

  return (
    <div className="z-40">
      <Switch isSelected={mounted} onValueChange={switchChange}>Dark Mode</Switch>
    </div>
  )
};