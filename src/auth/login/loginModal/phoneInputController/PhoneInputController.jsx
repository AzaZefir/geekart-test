import React from "react";
import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";

const PhoneInputController = ({ control, errors }) => {
  return (
    <Controller
      name="phoneNumber"
      control={control}
      render={({ field: { name, value, onChange, ref, onBlur } }) => (
        <PhoneInput
          value={value}
          onChange={(value, country, event, formattedValue) => {
            onChange(formattedValue);
          }}
          onBlur={onBlur}
          name="phoneNumber"
          type="text"
          country={"ru"}
          enableAreaCodes={true}
          disableDropdown={true}
          onlyCountries={["ru"]}
          inputProps={{
            id: "phoneInput",
            autoComplete: "on",
            name: "Номер телефона",
            country: "ru",
            required: false,
            autoFocus: false,
            name,
            ref,
          }}
          containerStyle={{
            marginBottom: errors.phoneNumber ? "4px" : "24px",
            marginTop:'3px'
          }}
          inputStyle={{
            height: "40px",
            width: "100%",
            background: "rgba(241, 243, 247, 1)",
            border: "1px solid rgba(241, 243, 247, 1)",
            fontSize: "14px",
            paddingRight: "10px",
            paddingLeft:'40px',
            borderRadius: "10px",
            color: "rgba(147, 149, 184, 1)",
          }}
        />
      )}
    />
  );
};

export default PhoneInputController;
