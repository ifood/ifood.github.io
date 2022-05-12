import React, { useEffect, useMemo, useState } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";
import CodeBlock from "@theme/CodeBlock";

import styles from "./style.module.css";
import { ClaService } from "@site/src/services/ClaService";

export default function Projects(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [data, setData] = useState("");
  const claService = useMemo(() => new ClaService(siteConfig), []);

  useEffect(() => {
    const load = async () => {
      const text = await claService.getClaText();
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
              <CodeBlock className={styles.buttonless}>{data}</CodeBlock>
            </div>
          </div>
        </div>
        <div className="container margin-top--lg">
          <div className="row">
            <div className={clsx("col col--12 center-btn", styles.center_btn)}>
              {data && <a href={claService.getGHCodeUrl()} className="button button--primary">
                Accept with GitHub
              </a>}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
