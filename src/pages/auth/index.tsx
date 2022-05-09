import React, { useEffect, useMemo, useState } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { ClaService } from "@site/src/services/ClaService";
import clsx from "clsx";
import { Link } from "@docusaurus/router";

import styles from "./style.module.css";

export default function Projects(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const claService = useMemo(() => new ClaService(siteConfig), []);
  const [isLoading, setIsLoading] = useState(true);
  const [isOk, setIsOk] = useState(false);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const authCode = urlParams.get("code");
    if (!authCode) {
      console.log("an error was found!");
      setIsLoading(false);
      return;
    }
    const load = async () => {
      try {
        const result = await claService.signCla(authCode);
        setIsOk(result);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };
    load();
  }, []);

  return (
    <Layout
      title="Auth"
      description="Find out about all of the projects of iFood Open Source."
    >
      <main className="padding-top--lg padding-bottom--xl">
        <div className="container">
          {isLoading && (
            <div className="row">
              <div className="col">
                <h1>Just a moment</h1>
                <p>We're getting it done...</p>
              </div>
            </div>
          )}
          {!isLoading && isOk && (
            <div className="row">
              <div className="col">
                <h1>Well done</h1>
                <p>
                  Thanks for signing the CLA. It's a pleasure have you as
                  contribuitor. Learn more about iFood Open Source{" "}
                  <Link to="/">here</Link>
                </p>
              </div>
              <div className={clsx("col", styles.center_img)}>
                <img src="/img/undraw_completing.svg" />
              </div>
            </div>
          )}
          {!isLoading && !isOk && (
            <div className="row">
              <div className="col">
                <h1>Ops</h1>
                <p>Try again later...</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
}
