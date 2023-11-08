import React, { useState } from "react";
import { Typography, Box, TextField, Switch, Rating } from "@mui/material";

const Description = () => {
  // Teksten nedenfor kan redigeres av kursdeltakerne for å tilpasse beskrivelsen
  const descriptionText =
    "Start dagen din med oversikt og inspirasjon. Her på Daily får du tilgang til dine viktigste oppgaver, dagens vær og en daglig dose med inspirasjon.";
const [value, setValue] = useState("hei hei");
const [checked, setChecked] = useState(false);
console.log(value);
console.log(checked);
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        It is over
      </Typography>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <Typography variant="body1">{descriptionText}</Typography>
      <Switch value={checked} onChange={(e) => setChecked (e.target.value)} />
      
      <TextField 
      id="standard-basic"
       label="Standard" 
       variant="standard" 
       value={value}
        onChange= {(e) =>setValue(e.target.value) } />
    </Box>
  );
};

export default Description;
