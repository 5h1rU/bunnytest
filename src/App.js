import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SubHeader from './components/SubHeader';
import Bio from './components/Bio';
import Jobs from './components/Jobs';
import logo from './img/torrebio.png';
import { getUserInfoFromTorre } from './resources/torre.js';

const styles = {
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10
  },
  logo: {
    height: 24
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: true,
      jobsList: [],
      person: {},
      picture: '',
      name: ''
    };
  }

  async componentDidMount() {
    this.getUser('felipejaner');
  }

  getUser = async username => {
    this.setState({ isFetching: true });
    const payload = await getUserInfoFromTorre(username);
    this.setState({
      jobsList: payload.jobs,
      person: payload.person,
      picture: payload.person.picture,
      name: payload.person.name.split(' ')[0],
      isFetching: false
    });
  };

  responseLinkedin = response => {
    this.setState({
      person: {
        name: response.formattedName,
        professionalHeadline: response.headline
      },
      picture: response.pictureUrl
    });
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar position="sticky">
          <Toolbar variant="dense">
            <img
              className={this.props.classes.logo}
              src={logo}
              alt="Torre Bio test"
            />
          </Toolbar>
          <SubHeader name={this.state.name} />
        </AppBar>
        <Bio
          isFetching={this.props.isFetching}
          person={this.state.person}
          picture={this.state.picture}
          responseLinkedin={this.responseLinkedin}
          getUser={this.getUser}
        />
        <Jobs id="jobs" jobsList={this.state.jobsList} />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
