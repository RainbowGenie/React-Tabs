import React from 'react'
import TextField from '@mui/material/TextField';

const Bom = () => {
  return (
    <div className="bom-navbar">

        <div className="bom-heading">
<h1>
    ISE Bill-of-Material Creator
</h1>
    </div>
    <div className="bom-form">
      
      <div className="row-1">
        <input type="text"  placeholder='Customer Name'/>
        <input type="number" placeholder=' Total EndPoints' />
      </div>
      <div className="row-2">
        <input type="number" placeholder=' Total Location*' />
        <input type="number"  placeholder='Management Center*'/>
        <input type="number"  placeholder='Latency*'/>
      </div>
      <div className="row-2">
        <input type="number" placeholder=' Locations with Session within 5k*' />
        <input type="number" placeholder=' Locations with Session between 5k to 25k*' />
        <input type="number" placeholder=' Locations with Session between 25k to 50k*' />
      </div>
      <div className="row-2 row3">
        <div className="input-labell">
        <input type="number"  placeholder='Secure Accesss'/>
        <label >Intent based network access acrooss the wired, wireless and VPN</label>
        </div>
        <div className="input-labell">
        <input type="number"  placeholder='Guest Access'/>
        <label > Enable Guest access at ease</label>
        </div>
        <div className="input-labell">
        <input type="number"  placeholder=' Asses Visiblilty (Profiling)'/>
        <label > See whats' on your network and where they are located</label>
        </div>
      </div>
      <div className="row-2 row3">
        <div className="input-labell">
        <input type="number"  placeholder='Complicance '/>
        <label >Deeper Visiblilty and Complicance chance on Desktop/Laptop</label>
        </div>
        <div className="input-labell">
        <input type="number"  placeholder='Enter the number of PSNs used for TACACS'/>
        <label > Role base network device adminstraion over TACASCS</label>
        </div>
        <div className="input-labell">
        <input type="number"  placeholder='Bring Your Own Device (BYOD)'/>
        <label > Deeper Visiblilty and Control chance on Desktop and mobile devices Apps</label>
        </div>
      </div>
      <div className="row-1">
        <input type="text"  placeholder='ISE Virtual Machines'/>
        <input type="number" placeholder=' MDM Managed Devices' />
      </div>
       
      <button className='bom-butoon'>Submit</button>
    </div>
    </div>

    
        
    
  )
}

export default Bom