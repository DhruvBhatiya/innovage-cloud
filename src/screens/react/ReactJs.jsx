import { Grid } from '@mui/material';
import React from 'react'
import Sidebar from './sidebar/Sidebar';

const ReactJs = () => {
  return (
    <Grid container spacing={3}>
      <Grid item lg={3} >
        <Sidebar />
      </Grid>
      <Grid item lg={9} ></Grid>
    </Grid>
  )
}

export default ReactJs
