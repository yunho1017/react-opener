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
import { SuccessExample } from "./Success";
import { ErrorExample } from "./Error";
import { WarningExample } from "./Warning";
import { InfoExample } from "./Info";
import { UseToastExample } from "./UseToast";
import { CustomExample } from "./Custom";
import { CustomPositionExample } from "./CustomPosition";
import { CustomStyleExample } from "./CustomStyle";

const ToastExampleStore = ReactOpener.createStore();
const examples: { label: string; emoji: string; render(): JSX.Element }[] = [
  {
    label: "Success",
    emoji: "✅",
    render: () => {
      return <SuccessExample key="Success" />;
    },
  },
  {
    label: "Error",
    emoji: "❌",
    render: () => {
      return <ErrorExample key="Error" />;
    },
  },
  {
    label: "Warning",
    emoji: "❗",
    render: () => {
      return <WarningExample key="Warning" />;
    },
  },
  {
    label: "Info",
    emoji: "ℹ️",
    render: () => {
      return <InfoExample key="Info" />;
    },
  },
  {
    label: "Custom",
    emoji: "🛠️",
    render: () => {
      return <CustomExample key="Custom" />;
    },
  },
  {
    label: "CustomStyle",
    emoji: "🎨",
    render: () => {
      return <CustomStyleExample key="CustomStyle" />;
    },
  },
  {
    label: "CustomPosition",
    emoji: "🔼",
    render: () => {
      return <CustomPositionExample />;
    },
  },
  {
    label: "useToast",
    emoji: "🪝",
    render: () => {
      return <UseToastExample />;
    },
  },
];

export const ToastExamples = () => {
  const handleClick = (component: JSX.Element) => {
    ToastExampleStore.getState().closeAll();
    ToastExampleStore.open({ element: component });
  };

  return (
    <Card
      width={"100%"}
      maxWidth={1000}
      borderRadius={{ base: 0, md: "var(--chakra-radii-md)" }}
    >
      <CardBody>
        <Heading size="md" marginBottom={4}>
          ReactToastOpener
        </Heading>
        <Flex
          height={{ md: 250 }}
          gap={12}
          direction={{ base: "column", md: "row" }}
        >
          <Grid
            width={"100%"}
            templateColumns={{ md: "repeat(2, 1fr)" }}
            gap={6}
            flex={1}
            height="fit-content"
          >
            {examples.map((example) => (
              <GridItem>
                <Button
                  width="100%"
                  onClick={() => {
                    handleClick(example.render());
                  }}
                >
                  {example.emoji} {example.label}
                </Button>
              </GridItem>
            ))}
          </Grid>
          <Box width={"100%"} flex={1} overflow={"auto"} height={"100%"}>
            <ReactOpener store={ToastExampleStore} />
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};
