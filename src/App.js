import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LocationListContainer from './containers/LocationListContainer';
import './App.css';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

const cities =[
  'Buenos Aires,ar',
  'Mar del Plata,ar',
  'Santa Fe,ar',
  'Franck,ar',
  'Rosario,ar',
  'Sunchales,ar'
];

class App extends Component {

  render() {

     return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='h4' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
          <LocationListContainer cities={cities}></LocationListContainer>

          </Col>
          <Col xs={12} md={6}>
          <Paper elevation={4}>
            <div className = 'details'>
              <ForecastExtendedContainer/>
            </div>
          </Paper>
          </Col>
        </Row>
      </Grid>
    );  

  }
}

export default App;