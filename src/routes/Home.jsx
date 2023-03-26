import { Flex, Grid, Spacer } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import HomepageHero from "../components/HomepageHero";
import CategoryCards from "../components/CategoryCards";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

const Home = () => {
  return (
    <Flex direction="column" h="100vh" alignItems="center">
      <Header />
      <HomepageHero />
      <Grid gridTemplateColumns={{ sm: "1fr 1fr", lg: "1fr 1fr 1fr 1fr" }}>
        <CategoryCards
          imgSource="/categories/switches.jpg"
          hoverText="switches"
        />
        <CategoryCards imgSource="/categories/chasis.jpg" hoverText="chasis" />
        <CategoryCards
          imgSource="/categories/keycaps.jpg"
          hoverText="keycaps"
        />
        <CategoryCards imgSource="/categories/cables.jpg" hoverText="cables" />
        <Outlet />
      </Grid>
      <Spacer />
      <Footer />
    </Flex>
  );
};

export default Home;
