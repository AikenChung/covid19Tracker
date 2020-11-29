import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styled from 'styled-components';

const StyledCard = styled(Card)`
margin: 0 2% !important;
`;

const CardComponent = ({ className, cardTitle, value, lastUpdate, cardSubtitle }) => (
  <Grid item xs={12} md={3} component={Card} className={cx(StyledCard, className)}>
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        {cardTitle}
      </Typography>
      <Typography variant="h5" component="h2">
        <CountUp start={0} 
                  end={value} 
                  duration={2.75} 
                  separator="," />
      </Typography>
      <Typography color="textSecondary">
        {new Date(lastUpdate).toDateString()}
      </Typography>
      <Typography variant="body2" component="p">
        {cardSubtitle}
      </Typography>
    </CardContent>
  </Grid>
);

export default CardComponent;