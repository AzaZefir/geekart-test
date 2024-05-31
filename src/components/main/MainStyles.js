const mainWrapperStyles = {
  display: "flex",
  alignItems: "start",
  gap: "24px",
  my: "24px",
  fontSize: "12px",
};

const mainPostStyles = {
  display: "flex",
  alignItems: "start",
  flexDirection: "column",
  width: "765px",
  backgroundColor: "#fff",
  borderRadius: "20px",
  padding: "28px 24px 28px 24px",
  boxSizing: "border-box",
};

const mainRightSideBarStyles = {
  width: "371px",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
};

const mainFilterStyles = {
  backgroundColor: "#fff",
  borderRadius: "20px",
  padding: "24px 20px 24px 20px",
};

const filterStyle = {
  gap: "13px",
  padding: "10px",
  cursor:'pointer',
  borderRadius: "10px",
  height:"40px"
};

const activeFilterStyle ={
  ...filterStyle,
  backgroundColor: "#F1F3F7",
}

export {
  mainWrapperStyles,
  mainPostStyles,
  mainRightSideBarStyles,
  mainFilterStyles,
  filterStyle,
  activeFilterStyle
};
