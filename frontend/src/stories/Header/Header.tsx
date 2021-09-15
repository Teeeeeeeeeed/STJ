import React from 'react';
import { AppBar, Button, createStyles, Grid, IconButton, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import { positions } from '@material-ui/system';
import { Dehaze } from '@material-ui/icons';
import './Header.css';
import { classicNameResolver } from 'typescript';

interface HeaderProps {
  /**
    * What background color to use
    */
  backgroundColor?: string;
}
/**
 * need to use makeStyles to override material ui component styles. normal css will not work
 */
const useStyles = makeStyles((theme: Theme)=>
  createStyles({
    title:{
      flexGrow: 1,
    },
    Button:{
      height:'61px',
      width:'100%',
    },
  })
)

export const Header = ({
  backgroundColor, 
  ...props
}: HeaderProps) => (
  <div>
    <AppBar position="absolute" style={{backgroundColor}} {...props}>
        <Toolbar style={{padding:'0 0 0 15px'}}>
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          width='75px'
          height='auto'
          viewBox="0 0 150 40">
            <g>
              <g>
                <path className="st0" d="M4.8,37.9h39.4c0,0,1.9-0.1,3.3-1.4c1.2-1.2,1.8-3.5,1.8-3.5l3.6-12.8c0,0,0.4-2.6-0.7-3.8
                  c-1.1-1.3-3.5-1.3-3.5-1.3l-20-0.4c0,0-0.4-0.1-0.6-0.6c-0.4-0.8-0.7-2.1,0.2-3.2c0.6-0.8,1.5-1.6,3-2.1c1-0.4,2.5-0.7,3.7-0.7
                  c1,0,1.9,0.3,2.6,0.6C37.8,8.8,38,9,38.3,9.2c1.7,1.3,0.2,3.8,0.2,3.8l18-0.3l1.8-6.1c0,0,0.7-3.2-0.8-5.1
                  c-1.1-1.4-4.5-1.7-4.5-1.7L0,0l11.4,8.8l-3,9.2c0,0-0.4,1.8,0.1,2.9c0.6,1.1,2,1.5,2,1.5L34,22.4c0,0,0.2,3-0.9,4.5
                  c0,0,0,0-0.1,0.1c-1.1,1.5-2.7,2.8-4.3,3.2c0,0,0,0-0.1,0c0,0,0,0-0.1,0c-1.8,0.4-3.8-0.2-5.1-1.2c0,0,0,0,0,0c-1.1-0.8-1-3-1-3
                  L4.8,25.8l-2.3,7.5c0,0-0.6,2.1,0,3.2C3,37.7,4.8,37.9,4.8,37.9z"/>
              </g>
              <polygon className="st1" points="104.3,0 59.2,0.1 101.2,9.2 	"/>
              <path className="st1" d="M75.9,37.9l10-26.9H67.7l-6.9,19.2c0,0-0.8,3.2,0.1,5.2c0.9,2.1,3.4,2.8,3.4,2.8L75.9,37.9z"/>
              <path className="st0" d="M82.7,36.7l2.8-9.7l18.1,0.1c0,0-0.8,3.4,0.6,4.2c0,0,0,0,0.1,0c0,0,0.1,0,0.1,0c0,0,0,0,0,0
                c1.6,0.7,4.2,0.8,5.9,0.4c0,0,0.1,0,0.1,0c0,0,0,0,0.1,0c0,0,0.1,0,0.1,0c1.7-0.4,2.4-1.2,2.8-1.9c0.3-0.6,0.7-1.4,0.7-1.4l8.4-23
                L106.6,0l36,0.1l-11.9,33.8c0,0-0.9,2.9-2.3,4.4c-1.3,1.4-3.1,1.4-3.1,1.4l-39.4,0.1c0,0-2.2,0.2-3-0.6
                C82.1,38.4,82.7,36.7,82.7,36.7z"/>
            </g>
          </svg>
          <Typography variant="h6" className={useStyles().title}>
            <Grid container spacing={0} justify="flex-end">
              <Grid item xs={6} sm={3} md={2}>
                <Button className={useStyles().Button} >FASHION</Button>
              </Grid>
              <Grid item xs={6} sm={3} md={2}>
                <Button className={useStyles().Button} >CONSULTING</Button>
              </Grid>
            </Grid>
          </Typography>
        </Toolbar>
    </AppBar>
  </div>
)