import React from 'react';
import AppBar from 'material-ui/AppBar';

import ActionSearch from 'material-ui/svg-icons/action/search';
import IconButton from 'material-ui/IconButton';

const HeaderBar = () => (
  <AppBar
    title="Pandamic 🐼😰🐛"
    showMenuIconButton={false}
    iconElementRight={<IconButton><ActionSearch /></IconButton>}
  />
)

export default HeaderBar;
