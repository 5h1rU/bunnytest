import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import LinkedinSDK from 'react-linkedin-sdk';
import ProfilePicture from './ProfilePicture';
import FormDialog from './Dialog';
import background from '../img/background.jpg';

const styles = {
  root: {
    '&::before': {
      filter: 'blur(10px)',
      backgroundSize: 'cover',
      backgroundImage: `url(${background})`,
      height: '100vh',
      left: 0,
      right: 0,
      zIndex: -1,
      display: 'block',
      content: '""',
      position: 'absolute',
      opacity: 0.4
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '88vh'
  },
  wrapper: {
    flex: 1
  },
  row: {
    display: 'flex',
    justifyContent: 'center'
  }
};

class Bio extends React.Component {
  render() {
    if (this.props.isFetching) {
      return (
        <div className={this.props.classes.root}>
          <CircularProgress
            variant="determinate"
            value={this.state.completed}
          />
        </div>
      );
    } else {
      return (
        <div className={this.props.classes.root}>
          <div className={this.props.classes.wrapper}>
            <ProfilePicture source={this.props.picture} />
            <Typography
              className={this.props.classes.row}
              variant="headline"
              gutterBottom
            >
              Hello, my name is {this.props.person.name}
            </Typography>
            <Typography
              className={this.props.classes.row}
              variant="title"
              gutterBottom
            >
              {this.props.person.professionalHeadline}
            </Typography>
            <div className={this.props.classes.row}>
              <FormDialog getUser={this.props.getUser} />
            </div>
            <div className={this.props.classes.row}>
              <LinkedinSDK
                clientId="77knq524b45r2n"
                callBack={this.props.responseLinkedin}
                fields=":(id,formatted-name,headline,summary,positions,picture-url,interests,publications,patents,skills,certifications,educations,courses,three-current-positions,three-past-positions,honors-awards)"
                loginButtonText={'Merge with LinkedIn'}
                logoutButtonText={'Logout from LinkedIn'}
                buttonType={'button'}
                // icon={<Icon />}
                getOAuthToken
              />
            </div>
          </div>
        </div>
      );
    }
  }
}

Bio.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Bio);
