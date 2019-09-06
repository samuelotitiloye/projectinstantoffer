import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

// Material-UI components
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const styles = {
  SvgIcon: {
    width: 45,
    height: 45,
  },
};

class Nav extends Component {

  state = {
    left: false,
  }

  toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    this.setState({ ...this.state, [side]: open });
  };

  sideList = side => (
    <div
      styles={{ width: 250 }}
      onClick={this.toggleDrawer(side, false)}
      onKeyDown={this.toggleDrawer(side, false)}
    >
      <List>
        <ListItem button>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
          <Link className="nav-link" to="/home">
            {/* Show this link if they are logged in or not,
            but call this link 'Home' if they are logged in,
            and call this link 'Login / Register' if they are not */}
            {this.props.user.id ?
              <ListItemText primary="Home"></ListItemText>
              :
              'Login'}
          </Link>
        </ListItem>
        <ListItem button>
          <Link className="nav-link" to="/signed-documents">
          <ListItemText primary="Signed Documents"></ListItemText>
          </Link>
        </ListItem>
        <ListItem button>
          <Link className="nav-link" to="/Drafts">
            <ListItemText primary="Drafts"></ListItemText>
          </Link>
        </ListItem>
      </List>
      <Divider />
      {this.props.user.id && (
        <List>
          <ListItem button>
            <LogOutButton className="nav-link" />
          </ListItem>
        </List>
      )}
    </div>
  );

  render() {
    return (
      <div className="nav">
        <Grid container >
          <Grid item xs={1}>
            <IconButton onClick={this.toggleDrawer('left', true)}>
              <SvgIcon 
              className="menu-button"
              style={styles.SvgIcon}>
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </SvgIcon>
            </IconButton>
          </Grid>
          <Grid item xs={10} className="title-block">
            <Link to="/home">
                <h2 className="nav-title">Instant Offer</h2>
            </Link>
          </Grid>
          <Grid item xs={1}>
          </Grid>
        </Grid>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          {this.sideList('left')}
        </Drawer>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
