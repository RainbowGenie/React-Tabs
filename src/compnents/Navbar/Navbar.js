import React from "react";
import Cisco from "../../assests/Cisco";
import "./Navbar.css";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Bom from "../Bom";
import Cal from "../Cal";
import SnapShot from "../SnapShot";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";

const menuData = [
  { id: "1", title: "Fabric", type: 0 },
  { id: "2", title: "Non Fabric", type: 0 },
  { id: "3", title: "Dot1x", type: 1 },
  { id: "4", title: "CWA", type: 1 },
  { id: "5", title: "WebAuth", type: 1 },
  { id: "6", title: "Menu1", type: 2 },
  { id: "7", title: "Menu2", type: 2 },
];
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const NavigationBar = () => {
  const [value, setValue] = React.useState("1");
  const [currentMenuIndex, setCurrentMenuIndex] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event, index) => {
    setCurrentMenuIndex(index);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="navbar-header">
        <div className="header-content">
          <img src="CX2.png" style={{ width: 110, height: 68 }} alt="" />
          {/* <Cisco /> */}
          <h2>iWild</h2>
          {/* <img src="CX.jpg" style={{ width: 110, height: 68 }} alt="" /> */}
          <Cisco />
        </div>
        <div className="navbar-tab">
          <Box className="navbar-tab">
            <>
              <Tabs
                className="navbar-tabs"
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  sx={{ color: "gray" }}
                  label="Use Case"
                  {...a11yProps(0)}
                />
                <Tab sx={{ color: "gray" }} label="KT Repo" {...a11yProps(1)} />
                <Tab
                  sx={{ color: "gray" }}
                  label="Presales"
                  {...a11yProps(2)}
                />
              </Tabs>
            </>
            <TabPanel value={value} index={0}>
              <Bom />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Cal />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Cal />
            </TabPanel>
          </Box>
          {/* <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: 30,
            }}
          >
            <Button
              color="primary"
              aria-controls="simple-menu"
              aria-haspopup="true"
              className={currentMenuIndex === 0 ? "active" : ""}
              style={{
                width: "fit-content",
                padding: "5px 20px",
                color: "gray",
                background: "transparent",
                borderRadius: 0,
                fontSize: "1.7rem",
                textTransform: "capitalize",
                marginBottom: 30,
              }}
              onClick={(e) => handleClick(e, 0)}
            >
              Use Case
            </Button>
            <Button
              color="primary"
              aria-controls="simple-menu"
              aria-haspopup="true"
              className={currentMenuIndex === 1 ? "active" : ""}
              style={{
                width: "fit-content",
                padding: "5px 20px",
                color: "gray",
                background: "transparent",
                borderRadius: 0,
                fontSize: "1.7rem",
                textTransform: "capitalize",
                marginBottom: 30,
              }}
              onClick={(e) => handleClick(e, 1)}
            >
              KT Repo
            </Button>
            <Button
              color="primary"
              aria-controls="simple-menu"
              aria-haspopup="true"
              className={currentMenuIndex === 2 ? "active" : ""}
              style={{
                width: "fit-content",
                padding: "5px 20px",
                color: "gray",
                background: "transparent",
                borderRadius: 0,
                fontSize: "1.7rem",
                textTransform: "capitalize",
                marginBottom: 30,
              }}
              onClick={(e) => handleClick(e, 2)}
            >
              Presales
            </Button>
          </div>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            className="header-menu"
          >
            {menuData.map(
              (item) =>
                item.type === currentMenuIndex && (
                  <MenuItem
                    key={item.id}
                    onClick={handleClose}
                    style={{
                      background: "#053054",
                      color: "white",
                      fontSize: "1.3rem",
                    }}
                  >
                    {item.title}
                  </MenuItem>
                )
            )}
          </Menu> */}
        </div>
      </div>
    </div>
  );
};
export default NavigationBar;
