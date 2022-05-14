import { FunctionComponent, useState } from 'react';

import {
    List, ListItem, ListItemAvatar, ListItemButton, ListItemText, OutlinedInput, Stack
} from '@mui/material';
import { grey } from '@mui/material/colors';

import Avatar, { AvatarProps } from './Avatar';

export const ChatList = [
  {
    avatar: "/img/avatar/1.png",
    status: "online",
    name: 'Felecia Rower"',
    lastMessage:
      "Hey John, I am looking for the best admin template. Could you please help me to find it out?",
  },
  {
    avatar: "/img/avatar/2.png",
    status: "offline",
    name: 'Felecia Rower"',
    lastMessage:
      "Hey John, I am looking for the best admin template. Could you please help me to find it out?",
  },
  {
    avatar: "/img/avatar/3.png",
    status: "busy",
    name: 'Felecia Rower"',
    lastMessage:
      "Hey John, I am looking for the best admin template. Could you please help me to find it out?",
  },
  {
    avatar: "/img/avatar/4.png",
    status: "away",
    name: 'Felecia Rower"',
    lastMessage:
      "Hey John, I am looking for the best admin template. Could you please help me to find it out?",
  },
];

export type SideBarProps = {};

const SideBar: FunctionComponent<SideBarProps> = () => {
  const [selected, setSelected] = useState(0);
  return (
    <Stack width="100%">
      <Stack
        width="100%"
        direction="row"
        alignItems="center"
        borderBottom={`1px solid ${grey[300]}`}
      >
        <Stack direction="row" spacing={2} p="0.75rem 1.25rem">
          <Avatar src="" status="online" />
        </Stack>
        <OutlinedInput
          size="small"
          fullWidth
          placeholder="Search for contact..."
          sx={{ borderRadius: 8, mr: 2 }}
        />
      </Stack>
      <Stack flexGrow={1} spacing={2} px={1}>
        <List>
          {ChatList.map((item, index) => {
            return (
              <ListItem
                disablePadding
                key={index}
                onClick={() => setSelected(index)}
              >
                <ListItemButton
                  selected={selected === index}
                  sx={{ borderRadius: 2 }}
                >
                  <ListItemAvatar>
                    <Avatar
                      src={item.avatar}
                      status={item.status as AvatarProps["status"]}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.name}
                    secondary={item.lastMessage}
                    secondaryTypographyProps={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Stack>
    </Stack>
  );
};

export default SideBar;
