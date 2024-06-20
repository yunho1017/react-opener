import React from "react";
import { Highlight, themes } from "prism-react-renderer";

export const Code: React.FC<{
  className?: string;
  code: string;
  language?: React.ComponentProps<typeof Highlight>["language"];
}> = ({ className, code, language = "jsx" }) => {
  return (
    <Highlight code={code} theme={themes.vsDark} language={language}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre
          style={{ ...style, padding: 12, overflow: "auto" }}
          className={className}
        >
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
