import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { RiExternalLinkFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

import styles from "./style.module.css";

export default function Projects(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const requestUrl = useBaseUrl("/data/projects.json");
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      const response = await fetch(requestUrl);
      const data = await response.json();
      setData(data);
    };
    load();
  }, []);

  return (
    <Layout
      title={`Projects | ${siteConfig.title}`}
      description="Find out about all of the projects of iFood Open Source."
    >
      <main>
        <div className={clsx("container padding-top--lg padding-bottom--xl")}>
          <h1>Projects</h1>
          <div className="row margin-top--md">
            {!data.length && <div className="col col--12 margin-top--lg"><p><i>Ops! Nothing found.</i></p></div>}
            {!!data.length && data.map((project) => (
              <div className="col col--3 margin-top--lg" key={project.id}>
                <div className={styles.project_card}>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <hr />
                  <a
                    href={project.homepage}
                    aria-label="Go to link"
                    title="Go to the project website"
                    className="margin-right--md"
                    target="_blank"
                  >
                    <RiExternalLinkFill size="1.3rem" />
                  </a>
                  <a
                    href={project.html_url}
                    aria-label="Go to link"
                    title="Go to GitHub"
                    className="margin-right--md"
                    target="_blank"
                  >
                    <FaGithub size="1.3rem" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
