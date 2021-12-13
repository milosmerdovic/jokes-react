import moment from "moment";
import React, { useState } from "react";
import "moment/locale/sr";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';

const SingleJokePaper = (props) => {
  const { date, title, jokeText, onRefresh } = props;

  const formattedDate = moment(date).format("LL");
  moment.locale("sr");


  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.7)" }}
    >
      •
    </Box>
  );

  const card = (
    <>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {bull}
          {formattedDate}
          {bull}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">{jokeText}</Typography>
      </CardContent>
      <CardActions>
      <IconButton aria-label="refresh" onClick={onRefresh}>
        <RefreshIcon />
      </IconButton>
      </CardActions>
    </>
  );

  return (
    <Box className='joke-content' >
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};

export default SingleJokePaper;
