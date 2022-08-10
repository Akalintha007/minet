import { Box, Grid, Modal, styled, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'

interface Props {
    openDropDown: boolean
}

const DropDown = ({openDropDown} : Props) => {

    const [open, setOpen] = useState<boolean>(openDropDown);
     const [value, setValue] = React.useState(0);

     const handleChange = (event: React.SyntheticEvent, newValue: number) => {
       setValue(newValue);
     };

     const handleClose = () => {
        setOpen(false)
     }

     const MainBox = styled(Box)({
      borderBottom: 1,
      borderColor: "#000"
    });

  return (
    <div>
      <Modal open={open}>
        <MainBox >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="tabs-basic"
          >
            <Tab label="Item-1" />
            <Tab label="Item-2" />
            <Tab label="Item-3"/>
          </Tabs>
          <Grid container>
            {/* {
              Explore options
            } */}
            
          </Grid>
        </MainBox>
    
      </Modal>
    </div>
  );
}

export default DropDown