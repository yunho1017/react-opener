import { Flex, Heading, Link, Spacer } from "@chakra-ui/react";
import { Examples } from "../components/Examples";
import { ToastExamples } from "../components/ToastExamples";

export function Demo() {
  return (
    <Flex direction={"column"} gap={8}>
      <Heading marginTop={24} textAlign="center">
        React Opener
      </Heading>
      <Flex justifyContent="center" gap={8}>
        <Link color="teal.500" href="/">
          Demo
        </Link>
        |
        <Link color="teal.500" href="/docs">
          Docs
        </Link>
      </Flex>
      <Flex gap={24} direction={"column"} align={"center"}>
        <Examples />
        <ToastExamples />
      </Flex>
      <Spacer height={32} />
    </Flex>
  );
}
