import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '88vh',
    marginLeft: 20
  },
  wrapper: {
    flex: 1
  },
  row: {
    display: 'flex',
    justifyContent: 'center'
  },
  card: {
    minWidth: 275,
    width: '40%',
    marginBottom: 10
  },
  actions: {
    background: 'rgba(97, 97, 97, 0.06)'
  }
};

const iterator = (jobsList, classes) =>
  jobsList.map(job => {
    return (
      <div className={classes.wrapper} key={job.id}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="title" gutterBottom>
              {job.role}
            </Typography>
            <Typography variant="subheading" color="textSecondary" gutterBottom>
              {job.organizations[0] ? job.organizations[0].name : 'No Available'}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions}>
            <Typography variant="body1" gutterBottom align="left">
              {job.fromMonth} {job.fromYear} - {job.toMonth} {job.toYear}
            </Typography>
            <div>
              <IconButton aria-label="Delete">
                <DeleteIcon />
              </IconButton>
              <IconButton aria-label="Edit">
                <EditIcon />
              </IconButton>
            </div>
          </CardActions>
        </Card>
      </div>
    );
  });

const Jobs = props => {
  const { classes, jobsList } = props;
  return (
    <div className={classes.root}>
      <Typography variant="title" gutterBottom>
        Jobs
      </Typography>
      {iterator(jobsList, classes)}
    </div>
  );
};

Jobs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Jobs);
