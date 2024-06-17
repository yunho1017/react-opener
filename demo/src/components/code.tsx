import { Highlight, themes } from "prism-react-renderer";

export const Code: React.FC<{
  code: string;
}> = (props) => {
  return (
    <Highlight code={props.code} theme={themes.vsDark} language="jsx">
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre style={{ ...style, height: "100%", overflow: "auto" }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
