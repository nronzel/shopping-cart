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
                <CategoryCards
                    imgSource="/categories/switches.jpg"
                    hoverText="switches"
                />
                <CategoryCards
                    imgSource="/categories/chasis.jpg"
                    hoverText="chasis"
                />
                <CategoryCards
                    imgSource="/categories/keycaps.jpg"
                    hoverText="keycaps"
                />
                <CategoryCards
                    imgSource="/categories/cables.jpg"
                    hoverText="cables"
                />
                <Outlet />
            </Flex>
        </Flex>
    );
};

export default Home;
