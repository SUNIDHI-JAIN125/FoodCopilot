
"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { setTheme } = useTheme()

const [isDarkMode, setIsDarkMode] = React.useState(false);

React.useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains('dark'));
}, []);

const toggleTheme = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
    setIsDarkMode(!isDarkMode);
};

return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
        {isDarkMode ? (
            <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
        ) : (
            <SunIcon className="h-[1.2rem] w-[1.2rem]" />
        )}
        <span className="sr-only">Toggle theme</span>
    </Button>
);
}
