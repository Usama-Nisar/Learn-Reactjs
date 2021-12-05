import React from 'react';

import Grid from '@material-ui/core/Grid';
import { color } from '../node_modules/@material-ui/system';



export default function App5() {
 

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} style= { {backgroundColor : 'green' } } >
          <h5>xs=12</h5>
        </Grid>
        <Grid item xs={6} style= { {backgroundColor : 'red' } }>
          <h5>xs=6</h5>
        </Grid>
        <Grid item xs={6} style= { {backgroundColor : 'yellow' } }>
          <h5>xs=6</h5>
        </Grid>
        <Grid item xs={3} style= { {backgroundColor : 'green' } }>
          <h5>xs=3</h5>
        </Grid>
        <Grid item xs={3} style= { {backgroundColor : 'red' } }>
          <h5>xs=3</h5>
        </Grid>
        <Grid item xs={3} style= { {backgroundColor : 'yellow' } }>
          <h5>xs=3</h5>
        </Grid>
        <Grid item xs={3} style= { {backgroundColor : 'green' } }>
          <h5>xs=3</h5>
        </Grid>
      </Grid>
    </div>
  );
}