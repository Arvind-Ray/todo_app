
import React from 'react';
import {Link, Redirect} from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import LoginPageStyle from './../../assets/jss/LoginPageStyle/LoginPageStyle.jsx';
import CircularProgress from '@material-ui/core/CircularProgress';


class LoginPage extends React.Component {

  state = {
    user: "",
    password: ""
  };
  
  
  

  handleLoginSubmit = () => {
    if(this.state.user== "shaadi" && this.state.password==123){
     setTimeout(this.props.history.push('/home'), 2000) 
    } 
  }

  render(){
    const { classes } = this.props;
    const {user, password} = this.state || {};
    
    return (
      
      <main className={classes.main}>
      {this.state.password== 123 && this.state.user== "shaadi" && <CircularProgress  color="secondary" />}
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="user">User Name</InputLabel>
              <Input 
                value={user}
                onChange={(e) => this.setState({user: e.target.value})}
              id="user" name="user" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input 
               value={password}
               onChange={(e) => this.setState({password: e.target.value})}
              name="password" type="password" id="password"  />  {/*autoComplete="current-password"*/ }
            </FormControl>
            <Button
              // type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              // component= {Link} to= {'/home'}
              onClick = {this.handleLoginSubmit}
            >
              Sign in
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}


export default withStyles(LoginPageStyle)(LoginPage);