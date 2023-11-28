"use client";

import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    darkMode === true ? setTheme("light") : setTheme("dark");
  };

  const { setTheme } = useTheme();

  return (
    <>
      <div className="btn">
        <Button onClick={toggleTheme} variant="outline" size="icon">
          {darkMode ? (
            <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          ) : (
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          )}
        </Button>
      </div>
    </>
  );
}
