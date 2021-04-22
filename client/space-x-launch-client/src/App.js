import React, { useState } from 'react';
import { ApolloProvider } from 'react-apollo'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';


import Table from './Components/Table/SpaceXTable';
import Form from './Components/Form/Form';
import getLaunches from './HelperFunctions/Launches';
import client from './HelperFunctions/Apollo';

function App() {
  const [variables, setVariables] = useState(null)
  const getVariables = (variables) => {
    setVariables(variables);
  }
  return(
    <ApolloProvider client={client}>
      <Grid 
        container 
        justify='center' 
        alignItems='center' 
        style={{ marginTop: '5em' }}
      >
        <Grid item xs={9}>
          <Card>
            <Grid container justify='center'>
              <Grid item>
                <CardHeader title='Space X Launches' />
              </Grid>
            </Grid>
            <CardContent>
              <Card>
              <Grid container justify='center'>
                <Grid item>
                <CardHeader subheader='Filter By'/>
                </Grid>
              </Grid>
                <CardContent>
                  <Form getLaunches={getLaunches} getVariables={getVariables} />
                </CardContent>
              </Card>
              <Card style={{ marginTop:'1em' }}>
                <CardHeader subheader='Launches' />
                <Table variables={variables} getLaunches={getLaunches}/>
              </Card>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ApolloProvider>
  )
}

export default App;
