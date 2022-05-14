import * as React from 'react';

import AttachmentIcon from '@mui/icons-material/Attachment';
import MicIcon from '@mui/icons-material/Mic';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import { IconButton, OutlinedInput, Paper, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

import Avatar from './Avatar';
import { useAppContext } from './context';
import Message from './Message';

export type ChatProps = {};

const Chat: React.FunctionComponent<ChatProps> = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const bottomRef = React.useRef<HTMLDivElement>(null);

  const { messages, sendMessage } = useAppContext();

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    scrollToBottom();
  }, []);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!inputRef.current) return;
    scrollToBottom();
    sendMessage({
      name: "",
      message: inputRef.current.value,
      isResponse: false,
      created: Math.round(new Date().getTime() / 1000),
    });
    inputRef.current.value = "";
  };

  return (
    <Stack bgcolor="#F7F7F8" height="100%">
      <Header />
      <Stack
        flexGrow={1}
        p={2}
        spacing={2}
        sx={{ overflowY: "auto", scrollBehavior: "smooth", height: "100%" }}
      >
        {messages.map((msg, index) => {
          const isMine = msg.isResponse;
          const avatar = isMine ? "https://i.pravatar.cc/300" : "";
          return (
            <Stack
              direction={isMine ? "row" : "row-reverse"}
              spacing={2}
              key={index}
            >
              <Avatar
                alt={msg.name}
                src={avatar}
                sx={{ height: 32, width: 32 }}
              />
              <Message isMine isTyping={!msg.message}>
                {msg.message}
              </Message>
            </Stack>
          );
        })}

        <div ref={bottomRef} />
      </Stack>
      <Paper sx={{ m: 2, p: 1 }}>
        <form onSubmit={handleSubmit}>
          <OutlinedInput
            size="small"
            autoFocus
            fullWidth
            placeholder="Type your mesage here..."
            sx={{ fieldset: { border: "none" } }}
            inputRef={inputRef}
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

const Header = () => {
  const { model } = useAppContext();
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      borderBottom={`1px solid ${grey[300]}`}
    >
      <Stack direction="row" spacing={2} p="0.75rem 1.25rem">
        <Avatar alt={model.name} src={model.avatar} status={model.status} />
        <Stack>
          <Typography variant="subtitle1" fontWeight={500} lineHeight={1.2}>
            {model.name}
          </Typography>
          <Typography variant="caption" color={grey[500]}>
            {`$${model.price}/1K tokens`}
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
};
