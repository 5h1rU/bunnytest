import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center'
  },
  avatar: {
    height: 120,
    width: 120,
    margin: 10,
    border: 5,
    borderRadius: 100,
    borderColor: 'gray',
    borderStyle: 'solid'
  }
};

const ProfilePicture = props => {
  const { classes, source } = props;
  return (
    <div className={classes.row}>
      <Avatar alt="Remy Sharp" src={source} className={classes.avatar} />
    </div>
  );
};

ProfilePicture.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfilePicture);
