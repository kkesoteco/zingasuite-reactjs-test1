import * as React from "react";
import zingashop from "./zingashop.svg";
import zingalify from "./zingalify.svg";
import { styled, alpha } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuList from "@mui/material/MenuList";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import Divider from "@mui/material/Divider";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { black } from "@mui/material/colors";
import Entities from "./entities";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto"
  }
}));

const useStyles = makeStyles({
  customWidth: {
    "& div": {
      // this is just an example, you can use vw, etc.
      width: "250px"
    }
  }
});

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  }
}));

export default function PrimarySearchAppBar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorZingaEl, setAnchorZingaEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [isZingaMenuOpen, setIsZingaMenuOpen] = React.useState(null);
  const [entity, setEntity] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const classes = useStyles();
  const styles = {
    customizeToolbar: {
      minHeight: "70px"
    },
    menu: (base) => ({
      ...base,
      marginTop: 0
    })
  };

  const entityChangeAction = (event) => {
    setEntity(event);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // const handleZingaMenuOpen = (event) => {
  //   setAnchorZingaEl(event.currentTarget);
  //   setIsZingaMenuOpen(true);
  // };

  const zingaMenuToggleHandler = (event) => {
    if (isZingaMenuOpen) {
      console.log("hello");
      setIsZingaMenuOpen(null);
      setAnchorZingaEl(null);
    } else {
      console.log("hello2");
      setAnchorZingaEl(event.currentTarget);
      setIsZingaMenuOpen(true);
    }
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleZingaMenuClose = (event) => {
    if (event.target.localName === "body") {
      return;
    }
    console.log("hello");
    setIsZingaMenuOpen(null);
    setAnchorZingaEl(null);
  };

  const menuId = "primary-search-account-menu";
  const menuZingaId = "zinga-menu";

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
  const renderZingaMenu1 = (
    <Popper
      open={isZingaMenuOpen}
      anchorEl={anchorZingaEl}
      role={undefined}
      placement="bottom-start"
      transition
      disablePortal
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === "bottom-start" ? "left top" : "right top"
          }}
        >
          <Paper style={{ width: "250px" }} sx={{ padding: "0", margin: 0 }}>
            {/* handleZingaMenuClose */}
            <ClickAwayListener onClickAway={handleZingaMenuClose}>
              <Container sx={{ padding: "0", margin: 0 }}>
                <Box
                  style={{
                    paddingLeft: "5px",
                    paddingBottom: "0px"
                  }}
                >
                  <Typography component="h6" variant="h6">
                    Switch Entity:
                  </Typography>
                </Box>
                <Box style={{ padding: "5px" }}>
                  <Typography component="div" variant="body1">
                    Select the Entity to manage.
                  </Typography>
                  <Entities
                    entity={entity}
                    entityChangeAction={entityChangeAction}
                  />
                </Box>

                <Box
                  style={{
                    paddingLeft: "5px",
                    paddingBottom: "0px",
                    marginTop: "20px"
                  }}
                >
                  <Typography component="h6" variant="h6">
                    ZingaSuite App :
                  </Typography>
                </Box>
                <Box style={{ padding: "10px" }}>
                  <Typography component="div" variant="body1">
                    ZingaSuite Apps for increasing your productivity.{" "}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    padding: "10px",
                    margin: 0,
                    "&:hover": {
                      backgroundColor: "grey",
                      opacity: [0.9, 0.8, 0.7]
                    }
                  }}
                >
                  <img
                    src={zingashop}
                    alt="logo"
                    height="13px"
                    style={{ margin: "5px" }}
                  />
                  <br />
                  <Typography component="div" variant="body2">
                    Setup your Online store Fast.
                  </Typography>
                </Box>
                <Box style={{ padding: "10px" }}>
                  <img
                    src={zingalify}
                    alt="logo"
                    height="13px"
                    style={{ margin: "5px" }}
                  />
                  <br />
                  <Typography component="div" variant="body2">
                    Recruitment and Training Management tool.
                  </Typography>
                </Box>
              </Container>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );

  const renderZingaMenu = (
    <Menu
      anchorEl={anchorZingaEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
      getContentAnchorEl={null}
      id={menuZingaId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      className={classes.customWidth}
      open={isZingaMenuOpen}
      onClose={handleZingaMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <div style={{ width: "100%" }}>
          <img
            src={zingashop}
            alt="logo"
            height="13px"
            style={{
              marginTop: "10px"
            }}
          />
        </div>
        <Typography variant="body2" flexWrap component="div">
          Build and Sell your products and services in a breeze.
        </Typography>
      </MenuItem>

      <MenuItem onClick={handleMenuClose}>
        <img
          src={zingalify}
          alt="logo"
          height="16px"
          style={{ margin: "15px" }}
        />
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const handleMenuClick = () => {
    props.drawerOpen(true);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        className={styles.customizeToolbar}
        elevation={2}
        sx={{ height: "60px" }}
      >
        <Toolbar variant="regular" className={styles.customizeToolbar}>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <img src={zingashop} alt="logo" width="100px" />
          {/*<Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          ></Typography> 
           <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search> */}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="small"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="small"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="small"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <IconButton
              size="small"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={zingaMenuToggleHandler}
              color="inherit"
            >
              <AppsRoundedIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="small"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
            <IconButton
              size="small"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={zingaMenuToggleHandler}
              color="inherit"
            >
              <AppsRoundedIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {renderZingaMenu1}
    </Box>
  );
}
