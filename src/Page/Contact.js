import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import ListSubheader from '@material-ui/core/ListSubheader';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import HistoryIcon from '@material-ui/icons/History';
import '../Css/Contact.css';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

const theme = createMuiTheme({
  palette: {
    secondary: {
        main: '#E33E7F'
      },
    primary:{
        main:blue[500]
    }
    
    }
  },
)
class Contact extends React.Component {
    tableHistoryList=[];
    state={display:true};
    top=0;

    imgList=[require('../assets/img/home.png'),require('../assets/img/home2.jpg'),require('../assets/img/home3.jpg'),require('../assets/img/home4.jpg'),require('../assets/img/home5.jpg'),require('../assets/img/home6.jpg')]
   
  constructor(props){
      super(props);
  
  }
    // listenScrollEvent=e=>{
        
     
    //     // console.log( e.target.scrollTop)
    //     if(e.target.scrollTop==0){
    //         this.state.display=false;
            
    //     }
    //     else{ this.state.display=true;}
    //     console.log(this.state.display)
    //     } 



     render(){
        console.log(this.props.list);   
        var tableHistoryList=[];
        var tableChatList=[];

        for (var i =0;i<this.props.list.length;i++){
            console.log('here')
            tableHistoryList.push(
                <div>
                    
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src= {this.props.list[i]['avatar']} />
                        </ListItemAvatar>
                        <ListItemText
                        primary={this.props.list[i].username}
                        secondary={
                            <React.Fragment>
                            {" — I'll be in your neighborhood doing errands this…"}
                            </React.Fragment>
                        }
                        />
                         <Divider/>
                    </ListItem>  
                   
                </div>
            )
        }
       
      
        return(
           <div>
                  {/* <div className="iconTextWrapper"><HistoryIcon/> <div className="historyListLabel"><h3 className="h3"> History of chat users  </h3></div> <HistoryIcon/> <div className="ChatListLabel"><h3 className="h3"> History of chat users  </h3></div></div> */}
                  <Divider/>
                  <List  onScroll={this.listenScrollEvent}  className="ListHistorys" 
                  component="nav"
                  aria-labelledby="nested-list-subheader" >
                    {tableHistoryList}
                  </List>
                  <List className="ListHistorys" className='ListChat'>
                     <ListItem alignItems="flex-start">
                        <Avatar
                        style={{marginRight:20}}
                        edge="end"
                        alt="Remy Sharp"
                        src= {require('../assets/img/1.jpg')}
                        />
                      <ListItemText primary="Dennis" className='listLeftTextWrap'
                      secondary={
                      <div className='subText' >  
                            <React.Fragment >
                                <div className='textLine'>
                                    {" — I'll be in yodcdsdcscs成都市城市都将产生都慈善的成绩技术都 i 今晚 i 哦鸡尾酒单位递交诶哦我就哦文件佛我家俄方 i 哦我就饿哦飞机为哦 if 就哦 i 为福建哦 i 微积分 i 哦为福建哦 i 家csdcscsdcsdcsdsdcur neighborhood doing errands this…"}
                                </div>
                            </React.Fragment>
                            <Divider/>
                            <React.Fragment >
                                <div className='textLine'>
                                    {" —     I'll be in your neighborhood doing errands thiscifejfoijwoeijoweifjweofjweifjiowejfowejfoiwejofjwejfoiwejfjweoifjwoiefjweoijfoiwejfoewiofjowfijweofiewofjweoifjfjweoifjewofiwejf"}
                                </div>
                            </React.Fragment>
                            <Divider/>
                            <React.Fragment >
                                <div className='textLine'>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </div>
                            </React.Fragment>
                            <Divider/>         
                                </div>
                            
                                }
                                />
                            
                         
                              
                        
                        </ListItem>
                             
                        <ListItem  alignItems="flex-start">
                        
                       
                     
                        <ListItemText
                         
                         className='listTextRightWrap'
                            primary="Dennis"
                            secondary={
                                    <div className='subText'>
                                        <React.Fragment >
                                           <div className='textLine'> 
                                                {" — I'll be in yodcdsdcsccdckowckecweciojwoicsdcscsdcsdcsdsdcur neighborhood doing errands this…"}
                                           </div>
                                        </React.Fragment >
                                        <Divider/>
                                        <React.Fragment >
                                            <div className='textLine'>
                                                {" —  I'll be in your neighborhood doing errands thiscifejfoijwoeijoweifjweofjweifjiowejfowejfoiwejofjwejfoiwejfjweoifjwoiefjweoijfoiwejfoewiofjowfijweofiewofjweoifjfjweoifjewofiwejf"}
                                            </div>
                                        </React.Fragment>
                                        <Divider/>
                                        <React.Fragment >
                                            <div className='textLine'>
                                                {" — I'll be in your neighborhood doing errands this…"}
                                            </div>
                                        </React.Fragment>
                                        <Divider/>
                                        </div>
                                }
                                />
                            
                         
                                <Avatar
                                style={{marginLeft:20}}
                                edge="end"
                                alt="Remy Sharp"
                                src= {require('../assets/img/1.jpg')}
                                />
                     
                        
                        </ListItem>
                        
                    </List>
                 
       
            


                  
           </div>

        );

    }
}
export default Contact;