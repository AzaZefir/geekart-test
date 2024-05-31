import { ImageList, ImageListItem } from "@mui/material";
import React from "react";
import { articleImages } from "../../../../data";

const ArticleImages = () => {
  return (
    <ImageList sx={{ width: "100%", my: "0" }} cols={3} gap={12}>
      {articleImages.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            style={{
              width: "100%",
              height: "200px",
              overflow: "hidden",
              borderRadius: "14px",
            }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ArticleImages;
