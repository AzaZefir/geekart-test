const dflex = {
  display: "flex",
  alignItems: "center",
};

const font = {
  fontSize: "14px",
};

const appBarStyle = {
  bgcolor: "#fff",
  boxShadow: "none",
};

const toolbarStyle = {
  ...dflex,
  justifyContent: "space-between",
  height: "64px",
};

const logoContainerStyle = {
  ...dflex,
  gap: "50px",
  cursor: "pointer",
};

const logoStyle = {
  ...dflex,
};

const navLinksContainerStyle = {
  display: { mobile: "none", laptop: "flex" },
  alignItems: "center",
  height: "36px",
  width: { laptopL: "713px" },
  justifyContent: "space-between",
};

const linkStyle = {
  ...dflex,
  ...font,
  color: "#7B7EA5",
  gap: "10px",
  textDecoration: "none",
  cursor: "pointer",
  lineHeight: "20px",
  fontWeight: "548",
  letterSpacing: "-0.5px",
  padding: "8px",
};

const activeLinkStyle = {
  ...linkStyle,
  color: "#06082C",
};

const rightBoxStyle = {
  ...dflex,
  gap: "24px",
  display: { mobile: "none", laptop: "flex" },
};

const languageBoxStyle = {
  ...dflex,
  ...font,
  justifyContent: "space-between",
  color: "#06082C",
  gap: "6px",
  cursor: "pointer",
  fontSize: "14px",
  mr: "6px",
};

const userBoxStyle = {
  ...dflex,
  justifyContent: "center",
  backgroundColor: "#F1F3F7",
  width: "40px",
  height: "40px",
  borderRadius: "10px",
  cursor: "pointer",
};

const burgerMenuStyle = {
  display: { mobile: "flex", laptop: "none" },
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
};

export {
  appBarStyle,
  toolbarStyle,
  logoContainerStyle,
  navLinksContainerStyle,
  linkStyle,
  activeLinkStyle,
  rightBoxStyle,
  languageBoxStyle,
  userBoxStyle,
  logoStyle,
  burgerMenuStyle,
};
