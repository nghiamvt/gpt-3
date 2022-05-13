import {
    Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem,
    TimelineOppositeContent, TimelineSeparator
} from '@mui/lab';
import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material';

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
        <CustomizedTimeline />
      </Box>
    </Container>
  );
}

export default App;

function CustomizedTimeline() {
  const prompt = "Write a poem about dinousaurs in the snow?";
  const response =
    "Dinosaurs in the snow How delightful it must have been to wander through the cold with your long, scaly tails and your huge, toothy jaws it must have been a sight to see these acient creatures Roaming the frozen earth";
  return (
    <Timeline position="alternate">
      {[1, 2, 3, 4, 5].map(i => {
        return (
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: "auto 0" }}>
              10:00 am
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary"></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ p: 2 }}>
              <Typography variant="h6" component="span">
                {prompt}
              </Typography>
              <Typography variant="body1" fontStyle="italic">
                {response}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
