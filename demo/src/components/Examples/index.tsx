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
import { ModalAsyncExample } from "./ModalAsync";

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
    label: "Modal Async",

    render: () => {
      return <ModalAsyncExample />;
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
    ExampleStore.open(() => {
      return component;
    });
  };

  return (
    <Card
      width={"100%"}
      maxWidth={1000}
      borderRadius={{ base: 0, md: "var(--chakra-radii-md)" }}
    >
      <CardBody>
        <Heading size="md" marginBottom={4}>
          ReactOpener
        </Heading>
        <Flex
          height={{ md: 250 }}
          alignItems="flex-start"
          gap={12}
          direction={{ base: "column", md: "row" }}
        >
          <Grid gap={6} flex={1} height="fit-content" width={"100%"}>
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
          <Box flex={1} overflow={"auto"} height={"100%"} width={"100%"}>
            <ReactOpener store={ExampleStore} />
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};
