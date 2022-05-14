import { FunctionComponent, useState } from 'react';

import AttachmentIcon from '@mui/icons-material/Attachment';
import MicIcon from '@mui/icons-material/Mic';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import { IconButton, OutlinedInput, Paper, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

import Avatar from './Avatar';
import Message from './Message';

const Header = () => (
  <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    borderBottom={`1px solid ${grey[300]}`}
  >
    <Stack direction="row" spacing={2} p="0.75rem 1.25rem">
      <Avatar alt="Remy Sharp" src="/img/avatar/1.png" />
      <Stack>
        <Typography variant="subtitle1" fontWeight={500} lineHeight={1.2}>
          Felecia Rower
        </Typography>
        <Typography variant="caption" color={grey[500]}>
          Employee
        </Typography>
      </Stack>
    </Stack>
    <Stack direction="row">
      <IconButton>
        <PhoneOutlinedIcon />
      </IconButton>
      <IconButton>
        <VideocamOutlinedIcon />
      </IconButton>
      <IconButton>
        <SearchOutlinedIcon />
      </IconButton>
    </Stack>
  </Stack>
);

export type ChatProps = {};

const Chat: FunctionComponent<ChatProps> = () => {
  const [message, setMessage] = useState("");
  return (
    <Stack bgcolor="#F7F7F8" height="100%">
      <Header />
      <Stack flexGrow={1} p={2} spacing={2}>
        <Stack direction="row-reverse" spacing={2}>
          <Avatar alt="Remy Sharp" src="" sx={{ height: 32, width: 32 }} />
          <Message isMine>How can we help? We're here for you!</Message>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Avatar src="/img/avatar/2.png" sx={{ height: 32, width: 32 }} />
          <Message isTyping />
        </Stack>
      </Stack>
      <Paper sx={{ m: 2, p: 1 }}>
        <form
          onSubmit={e => {
            e.preventDefault();
            console.log(message);
            setMessage("");
          }}
        >
          <OutlinedInput
            size="small"
            autoFocus
            fullWidth
            placeholder="Type your mesage here..."
            sx={{ fieldset: { border: "none" } }}
            onChange={e => setMessage(e.target.value)}
          />

          <IconButton>
            <MicIcon />
          </IconButton>
          <IconButton>
            <AttachmentIcon />
          </IconButton>
        </form>
      </Paper>
    </Stack>
  );
};

export default Chat;
