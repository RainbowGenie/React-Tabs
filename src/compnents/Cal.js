import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";

const Cal = () => {
  return (
    <div className="bom-navbar">
      <div className="bom-heading">
        <h1>KT Repo</h1>
      </div>
      <div className="bom-form">
        <FormControl sx={{ m: 1 }} style={{ width: "30%" }}>
          <InputLabel id="demo-simple-select-helper-label">Dot1x</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Dot1x"
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
          <InputLabel id="demo-simple-select-helper-label">CWA</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="CWA"
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
          <InputLabel id="demo-simple-select-helper-label">WebAuth</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="WebAuth"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        {/* <div className="row-2">
          <input type="text" placeholder="Dot1x" />
          <input type="text" placeholder=" CWA" />
          <input type="text" placeholder=" WebAuth" />
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

export default Cal;
