import React from "react";
import { articleImages } from "../../../../data";
import ImagesGrid from "../../../ui/ImagesGrid";

const ArticleImages = () => {
  return <ImagesGrid data={articleImages} gap={12}/>;
};

export default ArticleImages;
