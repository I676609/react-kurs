import React from "react";
import { Card, CardMedia } from "@mui/material";

const ImageComponent = () => {
  const imageUrl = "https://cdn.discordapp.com/attachments/589138984840462336/1171167047653265492/image.png?ex=655bb14f&is=65493c4f&hm=999ba529a30ee2402d4a92bbcdf11a5882bce2fc0ee4ac53e9c0419d9c154d27&";
  // imageUrl og description props kan endres av kursdeltakerne
  return (
    <Card sx={{ my: 4, height: 500 }}>
      <CardMedia component="img" image={imageUrl} />
    </Card>
  );
};

export default ImageComponent;
