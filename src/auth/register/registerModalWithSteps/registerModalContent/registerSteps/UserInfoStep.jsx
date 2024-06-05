import React, { Fragment, useState } from "react";
import { Box } from "@mui/material";
import CustomTextField from "../../../../../components/ui/CustomTextField";
import CalendarDatePicker from "../../../../../components/ui/CalendarDatePicker";
import SelectSex from "../../../../../components/ui/SelectSex";
import SelectCitizenShip from "../../../../../components/ui/SelectCitizenShip";
import ChangeUserAvatar from "../../../../../components/ui/ChangeUserAvatar";

const UserInfoStep = ({ activeStep }) => {
  const [citizenship, setCitizenship] = useState("");
  const [sex, setSex] = useState("");

  const handleCitizenshipChange = (event) => {
    const {
      target: { value },
    } = event;
    setCitizenship(value);
  };

  const handleSexChange = (event) => {
    const {
      target: { value },
    } = event;
    setSex(value);
  };

  return (
    <Fragment>
      {activeStep === 3 && (
        <Box
          sx={{
            overflow: { mobile: "scroll", mobileL: "unset" },
            height: { mobile: "500px", mobileL: "unset" },
          }}
        >
          <ChangeUserAvatar />

          <Box
            sx={{
              display: "grid",
              columnGap: "20px",
              rowGap: "24px",
              gridTemplateColumns: {
                mobile: "repeat(1, 1fr)",
                mobileL: "repeat(2, 1fr)",
              },
              m: "0 24px 83px 24px",
            }}
          >
            <CustomTextField label="Имя" placeholder="Введите имя" />
            <CustomTextField label="Фамилия" placeholder="Введите фамилию" />
            <CustomTextField
              label="Отчество (необязательно)"
              placeholder="Введите отчество"
            />

            <CalendarDatePicker />

            <SelectSex sex={sex} handleSexChange={handleSexChange} />

            <SelectCitizenShip
              citizenship={citizenship}
              handleCitizenshipChange={handleCitizenshipChange}
            />
          </Box>
        </Box>
      )}
    </Fragment>
  );
};

export default UserInfoStep;
