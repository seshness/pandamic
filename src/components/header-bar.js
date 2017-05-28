import React from 'react';

import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

import { white } from 'material-ui/styles/colors';

import ContentUndo from 'material-ui/svg-icons/content/undo';
import ContentRedo from 'material-ui/svg-icons/content/redo';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import EpidemicIcon from '../icons/epidemic';

const HeaderBar = ({undo, redo}) => (
  <AppBar
    title={
      <div>
        <EpidemicIcon style={{
          marginRight: '10px'
        }} color={white} />
        Pandamic 🐼😰🐞
      </div>
    }
    showMenuIconButton={false}
    iconElementRight={
        <IconMenu
          iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
          }
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
        <MenuItem primaryText="Undo" leftIcon={<ContentUndo />} {...undo} />
        <MenuItem primaryText="Redo" leftIcon={<ContentRedo />} {...redo} />
      </IconMenu>
    }
  >
  </AppBar>
)

export default HeaderBar;
