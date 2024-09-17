import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const cardData = [
  { id: 1, title: "Card 1", image: "https://via.placeholder.com/300" },
  { id: 2, title: "Card 2", image: "https://via.placeholder.com/300" },
  { id: 3, title: "Card 3", image: "https://via.placeholder.com/300" },
  { id: 4, title: "Card 4", image: "https://via.placeholder.com/300" },
  { id: 5, title: "Card 5", image: "https://via.placeholder.com/300" },
  { id: 6, title: "Card 6", image: "https://via.placeholder.com/300" },
  { id: 7, title: "Card 7", image: "https://via.placeholder.com/300" },
  { id: 8, title: "Card 8", image: "https://via.placeholder.com/300" },
  { id: 9, title: "Card 9", image: "https://via.placeholder.com/300" },
  { id: 10, title: "Card 10", image: "https://via.placeholder.com/300" },
];

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box
          sx={{
            paddingTop: "100px",
            paddingBottom: "60px",
            backgroundColor: "#F7F9FC",
            minHeight: "calc(100vh - 60px)",
          }}
        >
          <Grid container spacing={3}>
            {cardData.map((card) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={card.image}
                    alt={card.title}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {card.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}
