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

const ToastExampleStore = ReactOpener.createStore();
const examples: { label: string; emoji: string; render(): JSX.Element }[] = [
  {
    label: "Success",
    emoji: "✅",
    render: () => {
      return <SuccessExample />;
    },
  },
  {
    label: "Error",
    emoji: "❌",
    render: () => {
      return <ErrorExample />;
    },
  },
  {
    label: "Warning",
    emoji: "❗",
    render: () => {
      return <WarningExample />;
    },
  },
  {
    label: "Info",
    emoji: "ℹ️",
    render: () => {
      return <InfoExample />;
    },
  },
  {
    label: "Custom",
    emoji: "🎨",
    render: () => {
      return <CustomExample />;
    },
  },
  {
    label: "useToast",
    emoji: "🎨",
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
    <Card width={"100%"} maxWidth={1000}>
      <CardBody>
        <Heading size="md" marginBottom={4}>
          ReactToastOpener
        </Heading>
        <Flex height={200} alignItems="flex-start" gap={12}>
          <Grid
            templateColumns="repeat(2, 1fr)"
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
          <Box flex={1} overflow={"auto"} height={"100%"}>
            <ReactOpener store={ToastExampleStore} />
          </Box>
        </Flex>
      </CardBody>
    </Card>
  );
};
