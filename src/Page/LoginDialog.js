import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';

class LoginDialog extends React.Component {
    constructor(props){
        super(props);
        this.state={openhere:this.props.open}
        
        this.handleClose = this.handleClose.bind(this);
    }
  
    handleClose(){
        this.setState({openhere:false})
    }

    render(){
        return(
         
            <div>
           
      
            </div>
   
        );

    }
}
export default LoginDialog;