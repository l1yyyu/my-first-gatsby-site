import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";
import { useIntl } from "react-intl";

interface SEOProps {
  /**
   * seo中title 标题
   */
  title?: string;
  /**
   * seo中的description 描述
   */
  description?: string;
  /**
   * seo中的keywords 关键词
   */
  keywords?: string;
  /**
   * 语言
   */
  lang?: string;
  children?: ReactNode;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  children,
  lang = "zh-CN",
}) => {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          "http-equiv": "pragma",
          content: "no-cache",
        },
        {
          "http-equiv": "cache-control",
          content: "no-cache",
        },
        {
          "http-equiv": "expires",
          content: "0",
        },
        {
          name: `description`,
          content: description,
        },
        {
          name: `keywords`,
          content: keywords,
        },
        {
          name: `viewport`,
          content: `width=device-width, initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no`,
        },
      ]}
    >
      {children}
    </Helmet>
  );
};

export default SEO;
