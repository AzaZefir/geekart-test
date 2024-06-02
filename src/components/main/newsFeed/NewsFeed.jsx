import React from "react";
import { Box, Typography } from "@mui/material";
import { newsFeedStyles, newsFeedsStyles } from "./NewsFeedStyles";
import { newsFeedsData } from "../../../data";

const NewsFeed = () => {
  const maxVisibleTags = 2;

  return (
    <Box component="section" sx={newsFeedsStyles}>
      {newsFeedsData.map(({ id, bg, header, title, hashTag, date }) => {
        const visibleTags = hashTag.slice(0, maxVisibleTags);
        const hiddenTagsCount = hashTag.length - maxVisibleTags;

        return (
          <Box
            key={id}
            sx={{ ...newsFeedStyles, background: `url(${bg}) center/cover` }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "11px" }}>
              {visibleTags.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    backgroundColor: "#FFFFFF26",
                    borderRadius: "100px",
                    padding: "7px 14px",
                    width: "max-content",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: "#F1F3F7", fontSize: "14px" }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              ))}
              {hiddenTagsCount > 0 && (
                <Box
                  sx={{
                    backgroundColor: "#FFFFFF26",
                    borderRadius: "100px",
                    padding: "7px 14px",
                    width: "max-content",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: "#F1F3F7", fontSize: "14px" }}
                  >
                    +{hiddenTagsCount}
                  </Typography>
                </Box>
              )}
            </Box>

            <Box>
              {" "}
              <Typography
                variant="h5"
                sx={{
                  color: "rgba(255, 255, 255, 1)",
                  fontWeight: "600",
                  fontSize: "20px",
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                  textOverflow: "ellipsis",
                  letterSpacing: "-0.8px",
                }}
              >
                {header}
              </Typography>
              <Typography
                component="p"
                sx={{
                  mt: "10.92px",
                  fontSize: "12px",
                  lineHeight: "18px",
                  display: "flex",
                  alignItems: "center",
                  color: "rgba(241, 243, 247, 1)",
                }}
              >
                {title}{" "}
                <Box
                  component="span"
                  sx={{
                    width: "3px",
                    height: "3px",
                    bgcolor: "rgba(241, 243, 247, 1)",
                    borderRadius: "50%",
                    mx: "6px",
                  }}
                />{" "}
                {date}
              </Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default NewsFeed;
