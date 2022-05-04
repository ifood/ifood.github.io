import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import CodeBlock from "@theme/CodeBlock";

import styles from "./style.module.css";

export default function Projects(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [data, setData] = useState("");

  const env = siteConfig.customFields;
  const url = `${env.githubUrl}/authorize?scope=user:email&client_id=${env.githubClientId}&redirect_uri=${siteConfig.url}/auth`;

  useEffect(() => {
    const load = async () => {
      const response = await fetch(env.claUrl as string);
      const data = await response.blob();
      const text = await data.text();
      setData(text);
    };
    load();
  }, []);

  return (
    <Layout
      title={`Contributor license agreement`}
      description="Find out about all of the projects of iFood Open Source."
    >
      <main className="padding-top--lg padding-bottom--xl">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Contributing to iFood Open Source Projects</h1>
              <p>
                Welcome to the iFood Open Source contributor license agreement
                (CLA). iFood requires that all contributions to its projects are
                accompanied by a signed CLA before the contributions can be
                accepted for iFood projects.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <CodeBlock>{data}</CodeBlock>
            </div>
          </div>
        </div>
        <div className="container margin-top--lg">
          <div className="row">
            <div className={clsx("col col--12 center-btn", styles.center_btn)}>
              <a href={url} className="button button--secondary">
                Accept with GitHub
              </a>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
