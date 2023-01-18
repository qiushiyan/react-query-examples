import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";
import * as styles from "@styles/sidebar.module.css";
import clsx from "clsx";

type MdxNode = {
  frontmatter: {
    title: string;
  };
  fields: {
    slug: string;
    group: string;
  };
};

type Data = {
  allMdx: {
    nodes: MdxNode[];
  };
};

type SidebarLink = {
  title: string;
  slug: string;
};

export default function Sidebar() {
  const data = useStaticQuery<Data>(graphql`
    query MyQuery {
      allMdx(sort: { fields: { group: ASC } }) {
        nodes {
          frontmatter {
            title
          }
          fields {
            slug
            group
          }
        }
      }
    }
  `);
  const links = data.allMdx.nodes.reduce<{ [key: string]: SidebarLink[] }>(
    (acc, current) => {
      if (!acc.hasOwnProperty(current.fields.group)) {
        acc[current.fields.group] = [];
      }
      acc[current.fields.group].push({
        title: current.frontmatter.title,
        slug: current.fields.slug,
      });
      return acc;
    },
    {}
  );
  return (
    <nav
      className={clsx(
        styles.sidebar,
        "capitalize h-screen sticky top-10 font-serif"
      )}
    >
      {Object.keys(links).map((group) => {
        return (
          <div className="mb-5" key={group}>
            <h3 className="text-2xl mb-1">
              <strong>{group}</strong>
            </h3>
            <ul>
              {links[group].map((link) => {
                return (
                  <li className="mb-1 text-lg" key={link.slug}>
                    <Link to={link.slug}>{link.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </nav>
  );
}
