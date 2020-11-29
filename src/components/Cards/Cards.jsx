import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CardComponent from './Card/Card';

import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 0;
`;

const CardComponentInfected = styled(CardComponent)`
border-bottom: 10px solid rgba(0, 0, 255, 0.5);
`;
const CardComponentRecovered = styled(CardComponent)`
border-bottom: 10px solid rgba(0, 255, 0, 0.5);
`;
const CardComponentDeaths = styled(CardComponent)`
border-bottom: 10px solid rgba(255, 0, 0, 0.5);
`;
const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <Div>
        <Typography gutterBottom variant="h4" component="h2">Global</Typography>
      <Grid container spacing={3} justify="center">
        <CardComponentInfected
          cardTitle="Infected"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of active cases from COVID-19."
        />
        <CardComponentRecovered
          cardTitle="Recovered"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of recoveries from COVID-19."
        />
        <CardComponentDeaths
          cardTitle="Deaths"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of deaths caused by COVID-19."
        />
      </Grid>
    </Div>
  );
};

export default Info;