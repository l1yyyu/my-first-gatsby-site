import React from "react";
import Layout from "../layouts/index";
import classnames from "classnames";
import * as styles from "./index.module.less";

const Home = () => {
  return (
    <Layout>
      <div className={classnames(styles.bodyWrapper, "text-center")}>主体</div>
    </Layout>
  );
};

export default Home;
