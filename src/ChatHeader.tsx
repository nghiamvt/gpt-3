import * as React from 'react';

import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import { IconButton, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

import Avatar from './Avatar';
import { useAppContext } from './context';

export default function Header() {
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
            {model.level}
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
}
