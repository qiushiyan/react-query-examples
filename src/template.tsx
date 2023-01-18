import React from "react";
import Layout from "./components/Layout";
import { MDXProvider } from "@mdx-js/react";
import RefetchButton from "@components/RefetchButton";
import { Link, PageProps } from "gatsby";
import Button from "@components/ui/Button";
import { ArrowLeft, ArrowRight } from "react-feather";
import PrismSyntaxHighlight from "@components/Prism";
const components = {
  RefetchButton,
  code: ({ children, className }) => {
    return className ? (
      <PrismSyntaxHighlight className={className}>
        {children}
      </PrismSyntaxHighlight>
    ) : (
      <code>{children}</code>
    );
  },
};

type TocLink = {
  title: string;
  url: string;
};

type TableofContents = {
  [key: string]: TocLink[];
};

type PageContext = {
  title: string;
  previous: string;
  next: string;
  slug: string;
  tableOfContents: TableofContents;
};

export default function PostTemplate({
  children,
  pageContext,
}: PageProps<unknown, PageContext>) {
  const hasPrev = !!pageContext.previous;
  const hasNext = !!pageContext.next;
  return (
    <Layout>
      <article className="prose prose-invert">
        <h1>{pageContext.title}</h1>
        <MDXProvider components={components}>{children}</MDXProvider>
      </article>
      {/* navigation buttons */}
      <div className="flex w-full justify-between mt-5">
        {hasPrev ? (
          <Link to={pageContext.previous}>
            <Button className="flex justify-center items-center">
              <ArrowLeft /> Previous
            </Button>
          </Link>
        ) : (
          <div />
        )}
        {hasNext && (
          <Link to={pageContext.next}>
            <Button className="flex justify-center items-center ml-auto">
              Next
              <ArrowRight />
            </Button>
          </Link>
        )}
      </div>
    </Layout>
  );
}
