import React from 'react';

import Button from '@mui/material/Button';
import StarSharpIcon from '@mui/icons-material/StarSharp';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#353844',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'white',
  border: 'solid',
}));



const StatsDisplay = (props) => {
  let data = props.currentPlayer.data;
  if (data !== undefined) {
    return (
      data.segments.filter((char) => {
        return char.metadata.isActive === true;
      }).map((stat) => {
        const overview = data.segments[0].stats;
        return (
          <Box key={stat.attributes.id}
            sx={{
              display: 'grid',
              gap: 1,
            }}>
            <Grid container spacing={1} direction="row" justifyContent='center' columns='8'>

              <Grid container spacing={1} direction='row' justifyContent='center'>
                <Grid item xs={3}>
                  <Item>
                    Rank:
                    {overview.rankScore.metadata.rankName}
                    <img alt='rank badge' src={overview.rankScore.metadata.iconUrl}></img>
                  </Item>
                </Grid>
                <Grid item xs={3}>
                  <Item>
                    Main Legend: {stat.metadata.name}
                    <img alt='legend' src={stat.metadata.portraitImageUrl} width="120" height="120"></img>
                  </Item>
                </Grid>
              </Grid>

              <Grid item xs={5}>
                <Item>
                  Player ID: {data.platformInfo.platformUserHandle}
                  <Button onClick={() => props.updateFavorites({
                    ...stat,
                    'platform': data.platformInfo.platformSlug,
                    'user': data.platformInfo.platformUserHandle,
                  'level': overview.level.displayValue}
                    )} size='small'>
                    <StarSharpIcon  ></StarSharpIcon>
                  </Button>
                </Item>
              </Grid>
              <Grid item xs={5}>
                <Item>Platform: {data.platformInfo.platformSlug}</Item>
              </Grid>
              <Grid item xs={5}>
                <Item>Level:{overview.level.displayValue}</Item>
              </Grid>
              <Grid item xs={5}>
                <Item>Total Kills as {stat.metadata.name}: {stat.stats.kills.displayValue  ? stat.stats.kills.displayValue : 'N/A'}</Item>
              </Grid>
              <Grid item xs={5}>
                <Item>Lifetime Kills:{overview.kills.displayValue}</Item>
              </Grid>
              <Grid item xs={5}>
                <Item>Total Damage as {stat.metadata.name}: {stat.stats.damage ? stat.stats.damage.displayValue : 'N/A'}</Item>
              </Grid>
            </Grid>
          </Box>
        )
      })
    );
  }
}



export default StatsDisplay;