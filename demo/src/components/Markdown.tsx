import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import remarkGfm from "remark-gfm";
import { Divider, Heading } from "@chakra-ui/react";

import { Code } from "./Code";
export const Markdown: React.FC<{ markdown: any }> = ({
  markdown: _markdown,
}) => {
  return (
    <ReactMarkdown
      components={{
        ...ChakraUIRenderer(),
        h1: (props) => (
          <>
            <Heading {...props} size="2xl" />
            <Divider />
          </>
        ),
        h2: (props) => <Heading {...props} size="xl" />,
        h3: (props) => <Heading {...props} size="lg" />,
        h4: (props) => <Heading {...props} size="md" />,
        code: (props) => (
          <Code code={props.children as any} language={props.lang} />
        ),
      }}
      remarkPlugins={[remarkGfm]}
      skipHtml
    >
      {_markdown}
    </ReactMarkdown>
  );
};
