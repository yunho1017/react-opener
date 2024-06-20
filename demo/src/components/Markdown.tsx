import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { Code } from "./Code";

export const Markdown: React.FC<{ markdown: any }> = ({
  markdown: _markdown,
}) => {
  return (
    <ReactMarkdown
      components={{
        ...ChakraUIRenderer(),
        code: (props) => (
          <Code code={props.children as any} language={props.lang} />
        ),
      }}
      skipHtml
    >
      {_markdown}
    </ReactMarkdown>
  );
};
