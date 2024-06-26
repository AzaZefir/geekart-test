import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { filterData } from "../../../../data";
import {
  activeFilterStyle,
  filterListStyle,
  filterStyle,
  filterStyles,
} from "./FilterStyles";

const Filter = () => {
  const [activeFilter, setActiveFilter] = useState(1);

  const handleFilterChoose = (id) => {
    setActiveFilter(id);
  };
  return (
    <Box sx={filterStyles}>
      <Typography variant="h1">Фильтр ленты</Typography>

      <List disablePadding sx={filterListStyle}>
        {filterData.map((item) => (
          <ListItem
            key={item.id}
            sx={item.id === activeFilter ? activeFilterStyle : filterStyle}
            onClick={() => handleFilterChoose(item.id)}
          >
            <ListItemIcon sx={{ minWidth: "inherit" }}>
              {React.cloneElement(item.icon, {
                color: item.id === activeFilter ? "#06082C" : "#7B7EA5",
              })}
            </ListItemIcon>
            <ListItemText
              primary={item.value}
              primaryTypographyProps={{
                variant: "body2",
                fontWeight: "548",
                color: item.id === activeFilter ? { color: "#06082C" } : "",
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Filter;
