import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core'
import styles from './Cards.module.css'

const Cards = ( data) => {
  for (const item in data){
    console.log("HERE",item);

  }
  if (!data) {
    return 'Loading...';
  }
 
  return (
    <div className={'styles.container'}>

      <Grid container spacing={3} justifyContent ="center">
        <Grid item component ={Card}>
        <CardContent>
          <Typography color = "textSecondary" gutterBottom> Infected </Typography>
          <Typography variant='h5'> value????</Typography>
          <Typography color='textSecondary'>REAL DATE </Typography>
          <Typography variant='body2'> Number of Active cases of COVID 19</Typography>
        </CardContent>
        </Grid>
        <Grid item component ={Card}>
        <CardContent>
          <Typography color = "textSecondary" gutterBottom> recoverd </Typography>
          <Typography variant='h5'> REAl DATA</Typography>
          <Typography color='textSecondary'>REAL DATE </Typography>
          <Typography variant='body2'> Number of Recoveries cases of COVID 19</Typography>
        </CardContent>
        </Grid>
        <Grid item component ={Card}>
        <CardContent>
          <Typography color = "textSecondary" gutterBottom> Deaths</Typography>
          <Typography variant='h5'> REAl DATA</Typography>
          <Typography color='textSecondary'>REAL DATE </Typography>
          <Typography variant='body2'> Number of Deaths cases of COVID 19</Typography>
        </CardContent>
        </Grid>

      </Grid>

    </div>
  )
}

export default Cards