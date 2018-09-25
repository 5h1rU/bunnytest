import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { animateScroll as scroll } from 'react-scroll';

const styles = {
  root: {
    flexGrow: 1
  }
};

class SubHeader extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
          position="sticky"
        >
          <Tab label={this.props.name} onClick={() => scroll.scrollToTop()} />
          <Tab label="Jobs" onClick={() => scroll.scrollTo(600)} />
        </Tabs>
      </Paper>
    );
  }
}

SubHeader.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SubHeader);
