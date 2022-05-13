import React from 'react';

import { Box, Button, Card, Container, Grid, Stack, TextField, Typography } from '@mui/material';

function App() {
  return (
    <Container sx={{ p: 10 }}>
      <Box px={{ xs: 0, sm: 10 }}>
        <Typography variant="h3" fontWeight={700} mb={2}>
          Fun with AI
        </Typography>
        <Typography variant="subtitle1" fontWeight={500}>
          Enter prompt
        </Typography>
        <TextField multiline fullWidth rows={10} />
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          my={2}
        >
          <Button variant="contained" size="large">
            Submit
          </Button>
        </Stack>

        <Typography variant="h5" fontWeight={700} mb={2}>
          Responses
        </Typography>
        <Card sx={{ bgcolor: "#E4E4E4", mb: 4 }}>
          <Grid container spacing={2} p={4}>
            <Grid item sm={12} md={2}>
              <Typography variant="subtitle1" fontWeight={500} pl={2}>
                Prompt:
              </Typography>
            </Grid>
            <Grid item sm={12} md={10}>
              <Typography variant="body1" pl={2}>
                Write a poem about dinousaurs in the snow
              </Typography>
            </Grid>
            <Grid item sm={12} md={2}>
              <Typography variant="subtitle1" fontWeight={500} pl={2}>
                Response:
              </Typography>
            </Grid>
            <Grid item sm={12} md={10}>
              <Typography variant="body1" pl={2}>
                Dinosaurs in the snow How delightful it must have been to wander
                through the cold with your long, scaly tails and your huge,
                toothy jaws it must have been a sight to see these acient
                creatures Roaming the frozen earth
              </Typography>
            </Grid>
          </Grid>
        </Card>
        <Card sx={{ bgcolor: "#E4E4E4" }}>
          <Grid container spacing={2} p={4}>
            <Grid item sm={12} md={2}>
              <Typography variant="subtitle1" fontWeight={500} pl={2}>
                Prompt:
              </Typography>
            </Grid>
            <Grid item sm={12} md={10}>
              <Typography variant="body1" pl={2}>
                Write a poem about dinousaurs in the snow
              </Typography>
            </Grid>
            <Grid item sm={12} md={2}>
              <Typography variant="subtitle1" fontWeight={500} pl={2}>
                Response:
              </Typography>
            </Grid>
            <Grid item sm={12} md={10}>
              <Typography variant="body1" pl={2}>
                Dinosaurs in the snow How delightful it must have been to wander
                through the cold with your long, scaly tails and your huge,
                toothy jaws it must have been a sight to see these acient
                creatures Roaming the frozen earth
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Box>
    </Container>
  );
}

export default App;
