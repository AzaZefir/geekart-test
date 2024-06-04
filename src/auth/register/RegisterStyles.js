const registerStyles = {
  position: "absolute",
  top: { mobile: "55%", mobileL: "50%" },
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { mobile: "100%", tablet: "766px" },
  height: { mobile: "776px", mobileL: "614px" },
  background: "rgba(255, 255, 255, 1)",
  borderRadius: { mobile: "24px 24px 0 0", mobileL: "24px" },
  boxShadow: "8px 8px 29px 0px rgba(147, 149, 184, 0.2)",
  border: "none",
  outline: "none",
  boxSizing: "border-box",
};

const searchInputStyles = {
  backgroundColor: "rgba(248, 248, 249, 1)",
  borderRadius: "10px",
  boxSizing: "border-box",
  height: "40px",
  "& fieldset": {
    border: "none",
  },
  "&:hover fieldset": {
    border: "none",
  },
  "&.Mui-focused fieldset": {
    border: "none",
  },
  "& .MuiOutlinedInput-input": {
    padding: "8.5px 0",
  },
};

const searchInputBtnStyles = {
  width: "125px",
  backgroundColor: "rgba(6, 8, 44, 1)",
  color: "rgba(255, 255, 255, 1)",
  "&:hover": {
    backgroundColor: "rgba(241, 243, 247, 1)",
    color: "rgba(6, 8, 44, 1)",
  },
};

const organizationsWrapperStyles = {
  display: "grid",
  columnGap: "54px",
  rowGap: "20px",
  gridTemplateColumns: { mobile: "repeat(1, 1fr)", tablet: "repeat(2, 332px)" },
  height: "323px",
  overflowY: "scroll",
  mt: "24px",
  p: "0 0 0 24px",
  mr: "3px",
  /* Стили для полосы прокрутки */
  "&::-webkit-scrollbar": {
    width: "4px", // Ширина полосы прокрутки
    position: "absolute",
    right: "10px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#fff", // Цвет фона трека
    borderRadius: "4px", // Закругление углов трека
  },
  "&::-webkit-scrollbar-thumb": {
    background: "rgba(204, 207, 218, 1)", // Цвет ползунка
    borderRadius: "4px", // Закругление углов ползунка
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "rgba(6, 8, 44, 1)", // Цвет ползунка при наведении
  },
};

const organizationsImageWrapperStyles = {
  width: "60px",
  height: "60px",
  borderRadius: "35px",
  overflow: "hidden",
  m: "0",
  mr: "12px",
  border: "1px solid rgba(241, 243, 247, 1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const organizationsImageStyles = {
  color: "rgba(6, 8, 44, 1)",
  display: "-webkit-box",
  overflow: "hidden",
  textOverflow: "ellipsis",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  lineHeight: "1.3em",
  maxHeight: "2.5em",
  width: "208px",
};

const organizationsCheckboxStyles = {
  "& .MuiSvgIcon-root": {
    height: "32px",
  },
  "&.Mui-checked": {
    color: "rgba(6, 8, 44, 1)",
  },
  "&:hover": {
    bgcolor: "rgba(241, 243, 247, 0.5)",
  },
};

// sportsmans styles
const sportsmanWrapperStyles = {
  display: "flex",
  gap: "12px",
  mt: "16px",
  p: "0 24px 0 24px",
};

const sportsmansSearchInputStyles = {
  backgroundColor: "rgba(248, 248, 249, 1)",
  borderRadius: "10px",
  boxSizing: "border-box",
  height: "40px",
  "& fieldset": {
    border: "none",
  },
  "&:hover fieldset": {
    border: "none",
  },
  "&.Mui-focused fieldset": {
    border: "none",
  },
  "& .MuiOutlinedInput-input": {
    padding: "8.5px 0",
    "&::placeholder": {
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "-0.5px",
      fontWeight: "500",
      color: "rgba(147, 149, 184, 1)",
    },
  },
};

const sportsmansSearchInputBtnStyles = {
  width: "max-content",
  backgroundColor: "rgba(6, 8, 44, 1)",
  color: "rgba(255, 255, 255, 1)",
  "&:hover": {
    backgroundColor: "rgba(241, 243, 247, 1)",
    color: "rgba(6, 8, 44, 1)",
  },
};

const sportsmansContentWrapperStyles = {
  display: "grid",
  columnGap: "54px",
  rowGap: "20px",
  gridTemplateColumns: { mobile: "repeat(1, 1fr)", tablet: "repeat(2, 332px)" },
  height: "355px",
  overflowY: "scroll",
  mt: "24px",
  p: "0 0 0 24px",
  mr: "3px",
  /* Стили для полосы прокрутки */
  "&::-webkit-scrollbar": {
    width: "4px", // Ширина полосы прокрутки
    position: "absolute",
    right: "10px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#fff", // Цвет фона трека
    borderRadius: "4px", // Закругление углов трека
  },
  "&::-webkit-scrollbar-thumb": {
    background: "rgba(204, 207, 218, 1)", // Цвет ползунка
    borderRadius: "4px", // Закругление углов ползунка
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "rgba(6, 8, 44, 1)", // Цвет ползунка при наведении
  },
};

const sportsmansImageWrapperStyles = {
  width: "60px",
  height: "60px",
  borderRadius: "35px",
  overflow: "hidden",
  m: "0",
  mr: "12px",
};

const sportsmansCheckboxStyles = {
  "& .MuiSvgIcon-root": {
    height: "32px",
  },
  "&.Mui-checked": {
    color: "rgba(6, 8, 44, 1)",
  },
  "&:hover": {
    bgcolor: "rgba(241, 243, 247, 0.5)",
  },
};

const descriptionOfModalContentStyles = {
  mt: "16px",
  textAlign: "start",
  fontSize: "12px",
  lineHeight: "18px",
  letterSpacing: "-0.1px",
  fontWeight: "600",
  color: "rgba(147, 149, 184, 1)",
};

const modalFooterWrapperStyles = {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: { mobile: "column", mobileL: "row" },
  p: "16px 24px 20px 24px",
};

const backSkipBtnsWrapperStyles = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: { mobile: "column", mobileL: "row" },
  alignItems: "center",
  mr: "16px",
};

const backBtnStyles = {
  width: "max-content",
  backgroundColor: "rgba(241, 243, 247, 1)",
  color: "rgba(6, 8, 44, 1)",
  "&:hover": {
    backgroundColor: "rgba(6, 8, 44, 1)",
    color: "rgba(255, 255, 255, 1)",
  },
};

const continueBtnStyles = {
  width: "155px",
  minWidth: "0",
  backgroundColor: "rgba(6, 8, 44, 1)",
  color: "rgba(255, 255, 255, 1)",
  "&:hover": {
    backgroundColor: "rgba(241, 243, 247, 1)",
    color: "rgba(6, 8, 44, 1)",
  },
};

export {
  registerStyles,
  searchInputStyles,
  searchInputBtnStyles,
  organizationsWrapperStyles,
  organizationsImageWrapperStyles,
  organizationsImageStyles,
  organizationsCheckboxStyles,
  sportsmanWrapperStyles,
  sportsmansSearchInputStyles,
  sportsmansSearchInputBtnStyles,
  sportsmansContentWrapperStyles,
  sportsmansImageWrapperStyles,
  sportsmansCheckboxStyles,
  descriptionOfModalContentStyles,
  modalFooterWrapperStyles,
  backSkipBtnsWrapperStyles,
  backBtnStyles,
  continueBtnStyles,
};
