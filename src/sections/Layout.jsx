import React from "react";
import Header from "./Header";
import { Flex, Spacer } from "@chakra-ui/react";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <Flex direction="column" alignItems="center" h="100vh">
            <Header />
            <Outlet />
            <Spacer />
            <Footer />
        </Flex>
    );
};

export default Layout;
