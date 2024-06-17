import { Flex, Heading, Spacer } from "@chakra-ui/react";
import { ToastExamples } from "./components/ToastExamples";
import { Examples } from "./components/Examples";

function App() {
  return (
    <Flex gap={24} direction={"column"} align={"center"}>
      <Heading marginTop={32}>React Opener</Heading>
      <Examples />
      <ToastExamples />
      <Spacer height={32} />
    </Flex>
  );
}

export default App;
