import React, { useState } from "react";
import PrimarySearchAppBar from "./AppBar";
import LeftMenu from "./LeftMenu";
// import CssBaseline from "@material-ui/core/CssBaseline";
import { CssBaseline, Container } from "@material-ui/core";

const AuthLayout = (props) => {
  const [drawerOpenState, setDrawerOpenState] = React.useState(false);

  const drawerOpen = () => {
    if (drawerOpenState) setDrawerOpenState(false);
    else setDrawerOpenState(true);
    console.log(drawerOpenState);
  };
  return (
    <>
      <CssBaseline />
      <PrimarySearchAppBar props={props} drawerOpen={drawerOpen} />
      <LeftMenu
        props={props}
        drawerOpen={drawerOpenState}
        drawerOpenAction={drawerOpen}
      />
    </>
  );
};

export default AuthLayout;
