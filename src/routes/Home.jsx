import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";

function Home() {
  return (
    <Flex w="100%" h="100vh" direction="column">
      <Header />
    </Flex>
  );
}

export default Home;
