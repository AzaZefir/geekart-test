import {
  Box,
  Checkbox,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { Fragment } from "react";
import { SearchIcon } from "../../../../../assets/modal/SearchIcon";
import ReusableButton from "../../../../../components/ui/ReusableButton";
import { organizationsData } from "../../../../../data";

const OrganizationStep = ({ activeStep }) => {
  return (
    <Fragment>
      {activeStep === 2 && (
        <>
          <Box
            sx={{
              display: "flex",
              gap: "12px",
              mt: "46px",
              p: "0 24px 0 24px",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Поиск"
              sx={{
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
              }}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" sx={{ padding: "0" }}>
                    <IconButton edge="start" aria-label="search">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <ReusableButton
              buttonStyles={{
                width: "125px",
                display: activeStep === 0 ? "none" : "block",
                backgroundColor: "rgba(6, 8, 44, 1)",
                color: "rgba(255, 255, 255, 1)",
                "&:hover": {
                  backgroundColor: "rgba(241, 243, 247, 1)",
                  color: "rgba(6, 8, 44, 1)",
                },
              }}
            >
              Найти
            </ReusableButton>
          </Box>
          <Box
            sx={{
              display: "grid",
              columnGap: "54px",
              rowGap: "20px",
              gridTemplateColumns: "repeat(2, 332px)",
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
            }}
          >
            {organizationsData.map((s) => (
              <Box
                key={s.id}
                sx={{
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="figure"
                    sx={{
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
                    }}
                  >
                    <img src={s.img} alt={s.name} sx={{ overflow: "hidden" }} />
                  </Box>
                  <Box sx={{ my: "6px" }}>
                    <Typography
                      variant="h6"
                      component="p"
                      sx={{
                        color: "rgba(6, 8, 44, 1)",
                        display: "-webkit-box",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                        lineHeight: "1.3em",
                        maxHeight: "2.5em",
                        width: "208px",
                      }}
                    >
                      {s.name}
                    </Typography>
                  </Box>
                </Box>
                <Checkbox
                  sx={{
                    "& .MuiSvgIcon-root": {
                      height: "32px",
                    },
                    "&.Mui-checked": {
                      color: "rgba(6, 8, 44, 1)",
                    },
                    "&:hover": {
                      bgcolor: "rgba(241, 243, 247, 0.5)",
                    },
                  }}
                />
              </Box>
            ))}
          </Box>
        </>
      )}
    </Fragment>
  );
};

export default OrganizationStep;
