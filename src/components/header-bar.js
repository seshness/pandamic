import React from 'react';

import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

import ContentUndo from 'material-ui/svg-icons/content/undo';
import ContentRedo from 'material-ui/svg-icons/content/redo';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const HeaderBar = () => (
  <AppBar
    title="Pandamic 🐼😰🐛"
    showMenuIconButton={false}
    iconElementRight={
        <IconMenu
          iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
          }
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
        <MenuItem primaryText="Undo" leftIcon={<ContentUndo />} />
        <MenuItem primaryText="Redo" leftIcon={<ContentRedo />} disabled={true} />
      </IconMenu>
    }
  >
  </AppBar>
)

export default HeaderBar;
