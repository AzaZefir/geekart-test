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
  
};

const logoContainerStyle = {
  ...dflex,
  gap: "50px",
  cursor: "pointer",
  mb:'6px',

};

const logoStyle = {
  ...dflex,
};

const navLinksContainerStyle = {
  display: { xs: "none", md: "flex" },
  alignItems: "center",
  // gap: "30px",
  height: "36px",
  width: "713px",
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
  padding:'8px'
};

const activeLinkStyle = {
  ...linkStyle,
  color: "#06082C",
};

const rightBoxStyle = {
  ...dflex,
  gap: "24px",
  mb:'6px',
};

const languageBoxStyle = {
  ...dflex,
  ...font,
  justifyContent: "space-between",
  color: "#06082C",
  gap: "6px",
  cursor: "pointer",
  fontSize: "14px",
  mr:"6px"
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
};
