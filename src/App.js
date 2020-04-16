import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './App.css';
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import blue from '@material-ui/core/colors/blue';
import SearchIcon from "@material-ui/icons/Search";
import DialogActions from '@material-ui/core/DialogActions';
import LoadContact from './Controller/LoadContact'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import  Landing from './Page/Landing'
import  Contact from './Page/Contact'
import  Profile from './Page/Profile'
import ReactDOM from 'react-dom';
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import  CircularProgress from '@material-ui/core/CircularProgress';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Dialog from '@material-ui/core/Dialog';
import Authentication from './Controller/Authentication'
const theme = createMuiTheme({
  palette: {
    secondary: {
        main: '#E33E7F'
      },
    primary:{
        main:blue[500]
    }
    
    }
  }
)   


 class App extends Component  {
   contactList;
  
  constructor(props) {
    super(props);
   
    this.state = {
      language: "English",
      EnglishLabel:"English",
      ChineseLabel:"Chinese",
      tabValue:"Home",
      open:false,
      formValue:""
      
     
    };
    this.switchLanguage = this.switchLanguage.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this)
  }
     handleClickOpen() {
      this.setState({open:true})
  };
     login(e){
      e.preventDefault();
      var authentication = new Authentication();
      authentication.Login(e).then(res=>{
          if(res!=null)
           {alert("Login Sucessfully!");

           authentication.storedUser(res)
           }
          else 
           alert("Password and email don't match!")
        
        
        }).catch(err=>{
          alert("Unknow error")
          
         })
         ;


     }
     handleClose(){

      this.setState({open:false})
     }

 
   switchLanguage(){
     if(this.state.language=="English")
        this.setState({language:"Chinese",EnglishLabel:"英文",ChineseLabel:"中文"})
     else{
        this.setState({language:"English",EnglishLabel:"English",ChineseLabel:"Chinese"})
      }
    }
   render(){
    console.log("main")
   var  loadcontact = new LoadContact();
   loadcontact.query().then(value=>{
      console.log(value)
      this.contactList=value
    
    })

  return (
    <MuiThemeProvider theme={theme}>
  
      <div>
        <img className="logo" src={require('./assets/img/logo.png')} />
        <AppBar className='AppbarMobile'  position="static">
            <Toolbar>
      
           
              <Typography variant="h6" className='title'>
              </Typography> 
              <Button color="inherit" onClick={this.handleClickOpen} >Login</Button>
              {/* <h4>{this.state.EnglishLabel}</h4>
              <Switch value="checkedA" onChange={this.switchLanguage} />
              <h4>{this.state.ChineseLabel}</h4> */}
         
    
              <IconButton aria-label="delete"  style={{color:'white'}} size="large">
                 <YoutubeSearchedForIcon fontSize="inherit" />
               </IconButton>
            </Toolbar>
          </AppBar>
        <div className='container'>
          
        
     

          <AppBar className='Appbar'  position="static">
            <Toolbar>
              <Button onClick={this.redirectHome} color="inherit">Home</Button>
              <Button onClick={this.redirectContact} color="inherit">Chat</Button>
              <Button onClick={this.redirectProfile} color="inherit">Profile</Button>
           
              <Typography variant="h6" className='title'>
              </Typography> 
              <Button color="inherit" onClick={this.handleClickOpen}>Login</Button>
              {/* <h4>{this.state.EnglishLabel}</h4>
              <Switch value="checkedA" onChange={this.switchLanguage} />
              <h4>{this.state.ChineseLabel}</h4> */}
              
              <Paper component="form"  className='root2'>
                  <InputBase
                    className='input'
                    placeholder="Search "
                  
                  />
                  <IconButton
                    type="submit"
                    className='iconButton'
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
              </Paper>
            </Toolbar>
          </AppBar>

         

        </div>
        <div className="footerWrap">
        <BottomNavigation
            className='footer'
            value={this.state.tabValue}
            onChange={(event, newValue) => {
              this.setValue(newValue);
              console.log(newValue);

              switch(newValue){
               
                case 'home':
                  ReactDOM.render(<Landing/>, document.getElementById('container'));
                  break;
                case 'profile':
                  ReactDOM.render(<Profile/>, document.getElementById('container'));
                  break;
                case 'chat':
                  ReactDOM.render(<Contact/>, document.getElementById('container'));
                  break;

              }
               
            }}
            showLabels
          >
            <BottomNavigationAction label="Home" value='home' icon={<HomeIcon/>} />
            <BottomNavigationAction label="Chat" value='chat'icon={<ChatIcon/>} />
            <BottomNavigationAction label="Profile" value='profile' icon={<AccountCircleIcon  />} />
          </BottomNavigation>
          </div> 
        <div id="container">
          
        </div>    
      
      </div>
      <div className="spinnerWrap"> 
          <CircularProgress className="spinner" />
        </div> 
      <Dialog open={this.state.open}   onClose={this.handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Login</DialogTitle>
            <DialogContent>
              <form onSubmit={this.login}>
                <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    name="email"
                    label="email"
                    type="email"
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="password"
                    name="password"
                    label="password"
                    type="password"
                    fullWidth
                />
                <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button type='submit' onClick={this.loginRequest} color="primary">
                Login
              </Button>
             </DialogActions>    
              </form>
            </DialogContent>
        
       
      </Dialog>
     
  </MuiThemeProvider>
  );}
  setValue(newValue) {
    this.setState({
      tabValue: newValue
    })
  }
  componentDidMount() {
    ReactDOM.render(<Landing />, document.getElementById('container'));


  }

  redirectContact=()=>{
  ReactDOM.render(<Contact list={this.contactList}  />, document.getElementById('container'));
  }
  redirectHome=()=>{
    ReactDOM.render(<Landing/>, document.getElementById('container'));
  }
  redirectProfile=()=>{
    ReactDOM.render(<Profile/>, document.getElementById('container'));
  }
}

export default App

