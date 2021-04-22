import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Form = ({ getVariables }) => {
  const [missionName, setMissionName] = useState('');
  const [rocketName, setRocketName] = useState('');
  const [launchYear, setLaunchYear] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const launchFilters = {
      ...(missionName !== '' && { missionName }),
      ...(rocketName !== '' && { rocketName }),
      ...(launchYear !== '' && { launchYear: parseInt(launchYear) })
    }

    getVariables(launchFilters)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container item justify='space-between'>
        <Grid item>
          <TextField
            label='Mission Name'
            variant='filled'
            value={missionName}
            onChange={e => setMissionName(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            label='Rocket Name'
            variant='filled'
            value={rocketName}
            onChange={e => setRocketName(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            inputProps={{ type: 'number'}}
            label='Launch Year'
            variant='filled'
            value={launchYear}
            onChange={e => setLaunchYear(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button variant='contained' type='submit'>Submit</Button>
        </Grid>
      </Grid>
    </form>
  )
}

export default Form;