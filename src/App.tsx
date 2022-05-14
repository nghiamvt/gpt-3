import { Box, Container, Grid, Paper } from '@mui/material';

import Chat from './Chat';
import SideBar from './SideBar';

function App() {
  return (
    <Box sx={{ bgColor: "#F4F5FA" }}>
      <Container sx={{ py: { xs: 0, md: 10 } }}>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            height: { xs: "95vh", md: "50rem" },
          }}
        >
          <Grid container direction="row" height="100%">
            <Grid item md={4} display={{ xs: "none", md: "flex" }}>
              <SideBar />
            </Grid>
            <Grid item md={8}>
              <Chat />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default App;
