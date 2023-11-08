import * as React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static" sx={{
      backgroundColor:"#500"
    }}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          React app 
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
