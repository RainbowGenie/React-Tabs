import React ,{useState}from 'react'
import './SnapShot.css'

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
const SnapShot = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };
  return (
    <div>
         <div className="snap-navbar">
        <div className="snap-heading">
<h1>
    ISE Bill-of-Material Creator
</h1>
        </div>
            
            <div className="snap-form">
            <div className="container-2">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Radius-Dot 1x
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Profiling
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          BYOD
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Guest
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          Device Admin
        </button>
        <button
          className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(6)}
        >
          TrustSec/SDA
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
            <div className="content-tabs-1">
                <div className="row1-content-tabs">
                <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={version}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Ise Version" />}
    />
                <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={storeId}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="External ID Store" />}
    />
                <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={AuthoType}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Authorization Type" />}
    />
                </div>
                <div className="row1-content-tabs row2tabs">
                <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Eos}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="EndPoint Operating System" />}
    />
                <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Esop}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="EndPoint  Supplicant Types" />}
    />
                
             
                </div>
                <div className="row1-content-tabs row2tabs">
                <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Pos}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Posture" />}
    />
                <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Tpos}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label=" Trouble in Posturing" />}
    />
                
             
                </div>
                <button>Submit</button>
            </div>
          
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="content-tabs-1">
                <div className="row2-content-tabs">
                <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Pos}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Profilling" />}
    />
        </div> <button>Submit</button>
        </div>
        </div>
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <div className="content-tabs-1">
                <div className="row2-content-tabs">
                <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Pos}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="BYOD" />}
    />
        </div> <button>Submit</button>
        </div>
        </div>

        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <div className="content-tabs-1">
                <div className="row2-content-tabs">
                <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Pos}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Guest" />}
    />
        </div> <button>Submit</button>
        </div>
        </div>
        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
          <div className="content-tabs-1">
                <div className="row2-content-tabs">
                <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Pos}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Device Admin" />}
    />
        </div> <button>Submit</button>
        </div>
        </div>
        <div
          className={toggleState === 6? "content  active-content" : "content"}
        >
<div className="content-tabs-1">
                <div className="row2-content-tabs">
                <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={Pos}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="TrustSec/SDA" />}
    />
        </div> <button>Submit</button>
        </div>
        </div>
      </div>
    </div>

            </div>
    </div>
    </div>
  )
}

export default SnapShot

const version =[
    {label:"2.4"},
    {label:"2.6"},
    {label:"2.8"},
    {label:"2.9"},
    {label:"3.1"},
]

const storeId=[
    {label:"Active Directory (AD)"},
    {label:"LDAP"},
    {label:"Radius token"},
]
const AuthoType=[
    {label:"Downloadable ACL"},
    {label:"Dynamic VLAN"},
    {label:"SGT"},
]

const Esop=[
{label:"Select the Supplicant"}
]
const Eos=[
    {label:"windows"},
    {label:"Mac OS"},
    {label:"Linux OS"},
]
const Pos=[
    {label:"Yes"},
    {label:"No"},
    
]
const Tpos=[
    {label:"Yes"},
    {label:"No"},
    
]
