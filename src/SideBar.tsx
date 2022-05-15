import { FunctionComponent } from 'react';

import {
    List, ListItem, ListItemAvatar, ListItemButton, ListItemText, OutlinedInput, Stack
} from '@mui/material';
import { grey } from '@mui/material/colors';

import { Models } from './api';
import Avatar, { AvatarProps, Status } from './Avatar';
import { useAppContext } from './context';

export type SideBarProps = {};

const SideBar: FunctionComponent<SideBarProps> = () => {
  const { model, setModel, lastMsgWith } = useAppContext();
  return (
    <Stack width="100%">
      <Stack
        width="100%"
        direction="row"
        alignItems="center"
        borderBottom={`1px solid ${grey[300]}`}
      >
        <Stack direction="row" spacing={2} p="0.75rem 1.25rem">
          <Avatar src="" status={Status.ONLINE} />
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
          {Models.map((item, index) => {
            return (
              <ListItem
                disablePadding
                key={index}
                onClick={() => setModel(item.engine)}
              >
                <ListItemButton
                  selected={model.engine === item.engine}
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
                    secondary={lastMsgWith(item.engine) || item.level}
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
