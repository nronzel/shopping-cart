import { Flex } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import HomepageHero from "../components/HomepageHero";
import CategoryCards from "../components/CategoryCards";

const Home = () => {
    return (
        <Flex direction="column">
            <HomepageHero />
            <Flex>
                <CategoryCards imgSource="/categories/switches.jpg" />
                <CategoryCards imgSource="/categories/chasis.jpg" />
                <CategoryCards imgSource="/categories/keycaps.jpg" />
                <CategoryCards imgSource="/categories/cables.jpg" />
                <Outlet />
            </Flex>
        </Flex>
    );
};

export default Home;
