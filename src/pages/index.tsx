import React from "react";
import Layout from "../layouts/index";
import SEO from "../components/SEO";
import classnames from "classnames";
import * as styles from "./index.module.less";

const Home = () => {
  return (
    <Layout>
      <SEO
        title="l1yyyu的博客"
        description="这是l1yyyu的博客"
        keywords="博客 l1yyyu"
      />
      <div className={classnames(styles.bodyWrapper, "text-center")}>主体</div>
    </Layout>
  );
};

export default Home;
