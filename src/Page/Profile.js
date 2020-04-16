import React, { Component } from 'react';
import '../Css/Profile.css';
import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import EmailIcon from '@material-ui/icons/Email';
import WcIcon from '@material-ui/icons/Wc';
import Typography from '@material-ui/core/Typography';
import MessageIcon from '@material-ui/icons/Message';
const theme = createMuiTheme({
    palette: {
      secondary: {
          main: '#E33E7F'
        },
      primary:{
          main:blue[500]
      },
   
      
      }
    },
  )
  
class Profile extends React.Component {

    render(){
        return(
        <MuiThemeProvider  theme={theme}>
            <Card className="card">
                <CardContent>
                    <Typography variant="body2" >
                    <img className='avatar' src={require('../assets/img/profile.png')}/>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className="button" variant="contained" color="primary" component="span">
                        Edit
                    </Button>
                    <Button className="button" variant="contained"  component="span">
                        Logout
                    </Button>

                </CardActions>
            </Card>
            <List className="list"
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                    Nested List Items
                    </ListSubheader>
                }
             
                >
                <ListItem button>
                    <ListItemIcon>
                    <EmailIcon />
                    </ListItemIcon>
                    <ListItemText primary="xudawww757@gmail.com" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                    <WcIcon />
                    </ListItemIcon>
                    <ListItemText primary="Male" />
                </ListItem>
                <ListItem button >
                    <ListItemIcon>
                    <MessageIcon/>
                    </ListItemIcon>
                    <ListItemText primary="No introduction for myself." />
       
                </ListItem>
           
            </List>
        </MuiThemeProvider>   
            )

    }
}
export default  Profile;