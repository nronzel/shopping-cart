import { Button, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons"
import React from "react";

function ThemeSwitcher() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Button
            onClick={toggleColorMode}
            p="2px 4px"
            size="lg"
            bgColor="transparent"
        >
            {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        </Button>
    );
}

export default ThemeSwitcher
