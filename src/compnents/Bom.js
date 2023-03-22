import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Bom = () => {
  const [isDnac, setIsDnac] = useState(true);
  const [anchorHostName, setAnchorHostName] = useState(null);
  const [anchorIP, setAnchorIP] = useState(null);
  const [anchorSubnet, setAnchorSubnet] = useState(null);
  const [anchorGateway, setAnchorGateway] = useState(null);

  const openHost = Boolean(anchorHostName);
  const openIP = Boolean(anchorIP);
  const openSubnet = Boolean(anchorSubnet);
  const openGateway = Boolean(anchorGateway);

  const handleMouseEnterHost = (event) => {
    setAnchorHostName(event.currentTarget);
  };

  const handleMouseLeaveHost = () => {
    setAnchorHostName(null);
  };

  const handleMouseEnterIP = (event) => {
    setAnchorIP(event.currentTarget);
  };

  const handleMouseLeaveIP = () => {
    setAnchorIP(null);
  };

  const handleMouseEnterSubnet = (event) => {
    setAnchorSubnet(event.currentTarget);
  };

  const handleMouseLeaveSubnet = () => {
    setAnchorSubnet(null);
  };

  const handleMouseEnterGateway = (event) => {
    setAnchorGateway(event.currentTarget);
  };

  const handleMouseLeaveGateway = () => {
    setAnchorGateway(null);
  };

  const onClickDevType = () => {
    setIsDnac(!isDnac);
  };
  return (
    <div className="bom-navbar">
      <div className="bom-heading">
        <h1>Use Case</h1>
      </div>
      <div className="bom-form">
        <div style={{ display: "flex", padding: "20px 0px" }}>
          <div
            style={{
              color: "black",
              fontSize: 28,
              width: "30%",
              paddingLeft: 20,
            }}
          >
            Deployment Type
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "70%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                checked={isDnac}
                sx={{
                  color: "rgb(44, 123, 188)",
                  "& .MuiSvgIcon-root": { fontSize: 28 },
                }}
                onClick={onClickDevType}
              />
              <p style={{ color: "rgb(5, 48, 84)", fontSize: 28 }}>DNAC</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                checked={!isDnac}
                sx={{
                  color: "rgb(44, 123, 188)",
                  "& .MuiSvgIcon-root": { fontSize: 28 },
                }}
                onClick={onClickDevType}
              />
              <p style={{ color: "rgb(5, 48, 84)", fontSize: 28 }}>Non-DNAC</p>
            </div>
          </div>
        </div>
        <hr />
        <div style={{ padding: "20px 0px" }}>
          <div
            style={{
              color: "black",
              fontSize: 28,
              width: "30%",
              paddingLeft: 20,
            }}
          >
            Select Controller
          </div>
          <div
            style={{
              marginLeft: 50,
              marginTop: 30,
            }}
          >
            <ButtonGroup
              variant="outlined"
              aria-label="outlined primary button group"
              orientation="vertical"
            >
              <Button
                style={{
                  color: "rgb(5, 48, 84)",
                  fontSize: 16,
                  borderColor: "rgb(5, 48, 84)",
                }}
                onClick={handleMouseEnterHost}
              >
                HOSTNAME
              </Button>
              <Button
                style={{
                  color: "rgb(5, 48, 84)",
                  fontSize: 16,
                  borderColor: "rgb(5, 48, 84)",
                }}
                onClick={handleMouseEnterIP}
              >
                IP Address
              </Button>
              <Button
                style={{
                  color: "rgb(5, 48, 84)",
                  fontSize: 16,
                  borderColor: "rgb(5, 48, 84)",
                  borderTopWidth: 0,
                }}
                onClick={handleMouseEnterSubnet}
              >
                Subnet
              </Button>
              <Button
                style={{
                  color: "rgb(5, 48, 84)",
                  fontSize: 16,
                  borderColor: "rgb(5, 48, 84)",
                }}
                onClick={handleMouseEnterGateway}
              >
                Gateway
              </Button>
            </ButtonGroup>

            <Menu
              anchorEl={anchorHostName}
              open={openHost}
              onClose={handleMouseLeaveHost}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={handleMouseLeaveHost}>HostName1</MenuItem>
              <MenuItem onClick={handleMouseLeaveHost}>HostName2</MenuItem>
              <MenuItem onClick={handleMouseLeaveHost}>HostName3</MenuItem>
            </Menu>

            <Menu
              anchorEl={anchorIP}
              open={openIP}
              onClose={handleMouseLeaveIP}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={handleMouseLeaveIP}>IP1</MenuItem>
              <MenuItem onClick={handleMouseLeaveIP}>IP2</MenuItem>
              <MenuItem onClick={handleMouseLeaveIP}>IP3</MenuItem>
            </Menu>

            <Menu
              anchorEl={anchorSubnet}
              open={openSubnet}
              onClose={handleMouseLeaveSubnet}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={handleMouseLeaveSubnet}>Subnet 1</MenuItem>
              <MenuItem onClick={handleMouseLeaveSubnet}>Subnet 2</MenuItem>
              <MenuItem onClick={handleMouseLeaveSubnet}>Subnet 3</MenuItem>
            </Menu>

            <Menu
              anchorEl={anchorGateway}
              open={openGateway}
              onClose={handleMouseLeaveGateway}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={handleMouseLeaveGateway}>Gateway 1</MenuItem>
              <MenuItem onClick={handleMouseLeaveGateway}>Gateway 2</MenuItem>
              <MenuItem onClick={handleMouseLeaveGateway}>Gateway 3</MenuItem>
            </Menu>
          </div>
        </div>

        {/* <FormControl sx={{ m: 1 }} style={{ width: "30%" }}>
          <InputLabel id="demo-simple-select-helper-label">Fabric</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Fabric"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1 }} style={{ width: "30%" }}>
          <InputLabel id="demo-simple-select-helper-label">
            Non-Fabric
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Non-Fabric"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl> */}
        {/* <div className="row-1">
          <input type="text" placeholder="Fabric" />
          <input type="text" placeholder=" Non Fabric" />
        </div> */}
        {/* <div className="row-2">
          <input type="number" placeholder=" Total Location*" />
          <input type="number" placeholder="Management Center*" />
          <input type="number" placeholder="Latency*" />
        </div>
        <div className="row-2">
          <input
            type="number"
            placeholder=" Locations with Session within 5k*"
          />
          <input
            type="number"
            placeholder=" Locations with Session between 5k to 25k*"
          />
          <input
            type="number"
            placeholder=" Locations with Session between 25k to 50k*"
          />
        </div>
        <div className="row-2 row3">
          <div className="input-labell">
            <input type="number" placeholder="Secure Accesss" />
            <label>
              Intent based network access acrooss the wired, wireless and VPN
            </label>
          </div>
          <div className="input-labell">
            <input type="number" placeholder="Guest Access" />
            <label> Enable Guest access at ease</label>
          </div>
          <div className="input-labell">
            <input type="number" placeholder=" Asses Visiblilty (Profiling)" />
            <label>
              {" "}
              See whats' on your network and where they are located
            </label>
          </div>
        </div>
        <div className="row-2 row3">
          <div className="input-labell">
            <input type="number" placeholder="Complicance " />
            <label>
              Deeper Visiblilty and Complicance chance on Desktop/Laptop
            </label>
          </div>
          <div className="input-labell">
            <input
              type="number"
              placeholder="Enter the number of PSNs used for TACACS"
            />
            <label> Role base network device adminstraion over TACASCS</label>
          </div>
          <div className="input-labell">
            <input type="number" placeholder="Bring Your Own Device (BYOD)" />
            <label>
              {" "}
              Deeper Visiblilty and Control chance on Desktop and mobile devices
              Apps
            </label>
          </div>
        </div>
        <div className="row-1">
          <input type="text" placeholder="ISE Virtual Machines" />
          <input type="number" placeholder=" MDM Managed Devices" />
        </div> */}

        {/* <button className="bom-butoon">Submit</button> */}
      </div>
    </div>
  );
};

export default Bom;
