import * as React from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";

const drawerWidth = 240;

const LeftMenu = (props) => {
  const drawerOpen = props.drawerOpen;
  // console.log(props);
  const handleMenuClick = () => {
    props.drawerOpenAction(false);
  };
  return (
    <>
      <Drawer
        position="fixed"
        open={drawerOpen}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box"
          },
          zIndex: 80
        }}
      >
        <Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Drawer>
    </>
  );
};

export default LeftMenu;
