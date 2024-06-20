import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import { ReactOpener } from "react-opener";
import { ModalExample } from "./Modal";
import { ToastExample } from "./Toast";
import { UseOpenerExample } from "./UseOpener";
import styled from "@emotion/styled";
import { Code } from "../Code";

export const StyledCode = styled(Code)`
  height: 100%;
`;

const ExampleStore = ReactOpener.createStore();
const examples: { label: string; render(): JSX.Element }[] = [
  {
    label: "Modal",

    render: () => {
      return <ModalExample />;
    },
  },
  {
    label: "Toast",

    render: () => {
      return <ToastExample />;
    },
  },
  {
    label: "useOpener",

    render: () => {
      return <UseOpenerExample />;
    },
  },
];

export const Examples = () => {
  const handleClick = (component: JSX.Element) => {
    ExampleStore.getState().closeAll();
    ExampleStore.open({ element: component });
  };

  return (
    <Card width={"100%"} maxWidth={1000}>
      <CardBody>
        <Heading size="md" marginBottom={4}>
          ReactOpener
        </Heading>
        <Flex height={200} alignItems="flex-start" gap={12}>
          <Grid templateColumns="1fr" gap={6} flex={1} height="fit-content">
            {examples.map((example) => (
              <GridItem>
                <Button
                  width="100%"
                  onClick={() => {
                    handleClick(example.render());
                  }}
                >
                  {example.label}
                </Button>
              </GridItem>
            ))}
          </Grid>
          <Box flex={1} overflow={"auto"} height={"100%"}>
            <ReactOpener store={ExampleStore} />
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};
