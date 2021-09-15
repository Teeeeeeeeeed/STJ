import React from 'react';
import { AppBar, Button, Container, createStyles, Grid, IconButton, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import { positions } from '@material-ui/system';
import { Dehaze } from '@material-ui/icons';
import { classicNameResolver } from 'typescript';

interface FashionHeaderProps {
  /**
    * What background color to use
    */
  backgroundColor?: string;
  /**
   * Label 1
   */
  label1?:string;
  /**
   * Label 2
   */
  label2?:string;
  /**
   * Label 3
   */
  label3?:string;
  /**
   * Label 4
   */
  label4?:string;
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
      height:'60px',
      width:'100%',
    },
  })
)

export const FashionHeader = ({
  backgroundColor,
  label1,
  label2, 
  label3, 
  label4, 
  ...props
}: FashionHeaderProps) => (
  <div>
    <AppBar position="absolute" style={{backgroundColor}} {...props}>
      <Container maxWidth='lg'>
        <Toolbar style={{padding:'0 0 0 0'}}>
          <Typography variant="h6" className={useStyles().title}>
            <Grid container justify="center">
              <Grid item xs={3} sm={3} >
                <Button className={useStyles().Button} >{label1}</Button>
              </Grid>
              <Grid item xs={3} sm={3} >
                <Button className={useStyles().Button} >{label2}</Button>
              </Grid>
              <Grid item xs={3} sm={3} >
                <Button className={useStyles().Button} >{label3}</Button>
              </Grid>
              <Grid item xs={3} sm={3} >
                <Button className={useStyles().Button} >{label4}</Button>
              </Grid>
            </Grid>
          </Typography>
        </Toolbar>
        </Container>
    </AppBar>
  </div>
)