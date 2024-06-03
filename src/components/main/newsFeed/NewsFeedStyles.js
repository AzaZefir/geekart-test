const newsFeedsStyles = {
  display: { mobile: "flex", tablet: "none" },
  gap: "16px",
  overflow: "auto",
  padding: "0 16px",
  scrollbarWidth: "none", // Firefox
  "&::-webkit-scrollbar": {
    display: "none", // Chrome, Safari, Opera
  },
  mb: "13px",
  mt: "16px",
};

const newsFeedStyles = {
  minWidth: "320px",
  height: "287px",
  backgroundPosition: "center",
  backgroundSize: "cover",
  borderRadius: "18.42px",
  padding: "12px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  boxSizing: "border-box",
};

export { newsFeedsStyles, newsFeedStyles };
