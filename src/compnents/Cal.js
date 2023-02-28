import React from 'react'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
const Cal = () => {
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
      setValue(event.target.value);
    };
  return (
    <div>
        <div className="cal-navbar">
        </div>
        <div className="cal-heading">
<h1>
    ISE Bill-of-Material Creator
</h1>
            
    </div>
    <div className="cal-form">
    <section class="container">
      {/* <header>Registration Form</header> */}
      <form action="#" class="form">
      <div class="column">

        <div class="input-box">
          <label>Customer Name</label>
          <input type="text" placeholder="Enter the Customer name" required />
        </div>

        <div class="input-box">
          <label>BDM's Name</label>
          <input type="text" placeholder="Enter the Name here" required />
        </div>
        </div>

        <div class="column">
          <div class="input-box">
            <label>Deal ID</label>
            <input type="number" placeholder="Enter phone number" required />
          </div>
          <div class="input-box">
            <label>BDM'S Contact Number</label>
            <input type="text" placeholder="Enter Contact Number" required />
          </div>
        </div>
        {/* <div class="gender-box">
          <h3>Gender</h3>
          <div class="gender-option">
            <div class="gender">
              <input type="radio" name="gender" checked />
              <label for="check-male">SDA</label>
            </div>
            <div class="gender">
              <input type="radio" name="gender" />
              <label for="check-female">Migration</label>
            </div>
            <div class="gender">
              <input type="radio" name="gender" />
              <label for="check-other">Non-Sda</label>
            </div>
          </div>
        </div> */}
       
        <div className="project-select">

      
        <FormLabel id="demo-controlled-radio-buttons-group">Project Type: Migration</FormLabel>
        <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="SDA" control={<Radio />} label="SDA" />
        <FormControlLabel value="Migration" control={<Radio />} label="Migration" />
        <FormControlLabel value="Non-Sda" control={<Radio />} label="Non-Sda" />
      </RadioGroup>
        <FormLabel id="demo-controlled-radio-buttons-group">Migration Type:</FormLabel>
        <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="ISE to ISE Migration" control={<Radio />} label="ISE to ISE Migration" />
        <FormControlLabel value="Non-SDA to SDA Migration" control={<Radio />} label="Non-SDA to SDA Migration" />
        <FormControlLabel value="ACS to ISE to ISE Migration" control={<Radio />} label="ACS to ISE to ISE Migration" />
      </RadioGroup>

       
    </div>
        <button>Submit</button>
      </form>
    </section>
    </div>
    </div>
  )
}

export default Cal