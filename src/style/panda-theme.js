import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { green400, green700 } from 'material-ui/styles/colors';

const pandaTheme = getMuiTheme({
  palette: {
    primary1Color: green700,
    primary2Color: green400,
  },
  appBar: {
    height: 50,
  },
});

export default pandaTheme;
