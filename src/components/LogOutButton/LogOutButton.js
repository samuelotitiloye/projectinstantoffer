import React from 'react';
import { connect } from 'react-redux';

//Material UI
import ListItemText from '@material-ui/core/ListItemText';

const LogOutButton = props => (
  <ListItemText
    className={props.className}
    onClick={() => props.dispatch({ type: 'LOGOUT' })}
    primary="Log Out">
  </ListItemText>
);

export default connect()(LogOutButton);
