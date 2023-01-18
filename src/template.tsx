import React from "react";
import Layout from "./components/Layout";
import { MDXProvider } from "@mdx-js/react";
import RefetchButton from "@components/RefetchButton";
import { Link, PageProps } from "gatsby";
import Button from "@components/ui/Button";
import { ArrowLeft, ArrowRight } from "react-feather";
import CodeHighlight from "@components/CodeHighlight";
const components = {
  RefetchButton,
  code: CodeHighlight,
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
  next: {
    title: string;
    slug: string;
  };
  previous: {
    title: string;
    slug: string;
  };
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
        {/* @ts-ignore */}
        <MDXProvider components={components}>{children}</MDXProvider>
      </article>
      {/* navigation buttons */}
      <div className="flex w-full justify-between mt-5">
        {hasPrev ? (
          <div className="flex flex-col flex-start">
            <Link to={pageContext.previous.slug}>
              <Button className="flex justify-center items-center w-28">
                <ArrowLeft /> Previous
              </Button>
            </Link>
            <p className="p-2">
              <strong>{pageContext.previous.title}</strong>
            </p>
          </div>
        ) : (
          <div />
        )}
        {hasNext && (
          <div className="ml-auto flex flex-col flex-start">
            <Link to={pageContext.next.slug}>
              <Button className="flex justify-center items-center w-28">
                Next
                <ArrowRight />
              </Button>
              <p className="p-2">
                <strong>{pageContext.next.title}</strong>
              </p>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
}
