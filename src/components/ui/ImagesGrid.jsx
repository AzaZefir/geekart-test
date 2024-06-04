import { ImageList, ImageListItem, Typography } from "@mui/material";
import React from "react";

const ImagesGrid = ({ data, type, style, onClick, selectedImages, gap }) => {
  return (
    <ImageList
      sx={{
        width: "100%",
        my: "0",
        gridTemplateColumns: {
          mobile: "repeat(2, 1fr) !important",
          mobileL: "repeat(3, 1fr) !important",
        },
      }}
      gap={gap}
    >
      {data.map((item) => (
        <ImageListItem
          key={item.img}
          sx={{ ...style }}
          onClick={() => onClick(item)}
        >
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
              opacity: selectedImages?.some(
                (selected) => selected.id === item.id
              )
                ? "0.5"
                : "1",
            }}
          />
          {type === "stepper" && (
            <Typography
              variant="h1"
              component="span"
              sx={{
                width: "max-content",
                padding: "7px 14px 7px 14px",
                position: "absolute",
                top: " 150px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "rgba(255, 255, 255, 1)",
                borderRadius: "100px",
                color: "rgba(6, 8, 44, 1)",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "20px",
                letterSpacing: "-0.5px",
              }}
            >
              {item.title}
            </Typography>
          )}
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ImagesGrid;
