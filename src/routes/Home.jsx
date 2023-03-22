import { Flex } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import HomepageImage from "../components/HomepageImage";

const Home = () => {
    return (
        <Flex direction="column">
            <HomepageImage />
            <Outlet />
        </Flex>
    );
};

export default Home;
