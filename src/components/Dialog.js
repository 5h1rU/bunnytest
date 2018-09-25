import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class FormDialog extends React.Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleClose = value => {
    this.props.getUser(this.state.username);
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Change Profile</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Get Profile</DialogTitle>
          <DialogContent>
            <DialogContentText>
              What's your Torre Bio username?
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="username"
              label="username"
              onChange={this.handleChange('username')}
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Get Profile
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
