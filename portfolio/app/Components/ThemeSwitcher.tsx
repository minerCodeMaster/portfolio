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
  }else{
      setTheme("light");
  }
    setMounted(!mounted)
}

  return (
    <div className="absolute z-40">
      <Switch isSelected={mounted} onValueChange={switchChange} />
    </div>
  )
};