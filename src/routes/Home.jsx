import { Flex } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import HomepageHero from "../components/HomepageHero";

const Home = () => {
    return (
        <Flex direction="column">
            <HomepageHero />
            <Outlet />
        </Flex>
    );
};

export default Home;
