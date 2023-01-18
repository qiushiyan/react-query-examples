import React from "react";
import Highlight, { Language, defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";

const PrismSyntaxHighlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  const language = className.replace(/language-/gm, "") as Language;
  return (
    <Highlight
      {...defaultProps}
      code={children as string}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <code className={className} style={style}>
          {tokens.slice(0, -1).map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </code>
      )}
    </Highlight>
  );
};

export default function CodeHighlight({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return className ? (
    <PrismSyntaxHighlight className={className}>
      {children}
    </PrismSyntaxHighlight>
  ) : (
    <code>{children}</code>
  );
}
