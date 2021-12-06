import React, { useState } from "react";
import moment from "moment";
import "moment/locale/sr";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const JokeArea = (props) => {
  const { date, title, jokeText } = props;

  const formattedDate = moment(date).format("LL"); // SETS DATE TO BE PRINTED IN SERBIAN LANGUAGE DD-Month-YYYY
  moment.locale("sr");

  const [isExpanded, setIsExpanded] = useState(false); // isExpanded SET TO FALSE INITIALLY 

  const trimmedJokeText = isExpanded ? jokeText : jokeText.substring(0, 30) + "..."; // IF IS EXPANDED - SHOW FULL TEXT AND VICE VERSA
  
  const showMoreOrLess = () => {
    // const visible = !isExpanded;
    // setIsExpanded(visible);

    setIsExpanded(!isExpanded); // WHEN BUTTON IS CLICKED CHANGE isExpanded STATUS 
  };

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
        <Typography variant="body2">{trimmedJokeText}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={showMoreOrLess}>
          {isExpanded ? 'Manje' : 'Više'}
        </Button>
      </CardActions>
    </>
  );

  return (
    <Box sx={{ maxWidth: 300, maxHeight: 200, display: "inline-block" }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};

// unesi proptypes!!!

export default JokeArea;
