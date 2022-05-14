import { Box, Container, Grid, Paper } from '@mui/material';

import Chat from './Chat';
import SideBar from './SideBar';

function App() {
  return (
    <Box sx={{ bgColor: "#F4F5FA" }}>
      <Container>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "calc(100vh - 2rem)",
            m: 2,
          }}
        >
          <Grid container direction="row" height="100%">
            <Grid item md={4} display={{ xs: "none", md: "flex" }}>
              <SideBar />
            </Grid>
            <Grid item md={8} xs={12} height="100%">
              <Chat />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default App;
