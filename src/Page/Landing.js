import React, { Component } from 'react';
import SearchIcon from "@material-ui/icons/Search";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import PinDropOutlinedIcon from '@material-ui/icons/PinDropOutlined';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import PinDropIcon from '@material-ui/icons/PinDrop';
import blue from '@material-ui/core/colors/blue';
import '../Css/Landing.css';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
class Landing extends React.Component {
  
     imgList=[require('../assets/img/home.png'),require('../assets/img/home2.jpg'),require('../assets/img/home3.jpg'),require('../assets/img/home4.jpg'),require('../assets/img/home5.jpg'),require('../assets/img/home6.jpg')]
     render(){
       var count = 0;
       const table = []
       for(let j = 0; j < 2; j++){
       const subtable = [] 

       for (let i = 0; i < 3; i++) {
          subtable.push(
               <Card className="root">
                <CardActionArea>
                  <CardMedia component="img" src={this.imgList[count]} height="240" />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                      </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                </CardActions>
            </Card>
            

          )
          if(count<5)
          count++; }
          table.push(<div className='row'> {subtable} </div>)  
      
        }
        return(
        
          <MuiThemeProvider theme={theme}>
            <div className="formGroup">
                <FormControl className="form">
                    <InputLabel htmlFor="age-native-simple">House Type </InputLabel>
                    <Select native>
                      <option aria-label="None" value="" />
                      <option value={10}>Ten</option>
                      <option value={20}>Twenty</option>
                      <option value={30}>Thirty</option>
                    </Select>
                </FormControl>
                <FormControl className="form">
                  <InputLabel htmlFor="input-with-icon-adornment">Please input Address</InputLabel>
                  <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment position="start">
                        <PinDropIcon className="iconInput"/>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl className="form">
                    <InputLabel htmlFor="age-native-simple">Choose City</InputLabel>
                    <Select native>
                      <option aria-label="None" value="" />
                      <option value={10}>ON</option>
                      <option value={20}>AL</option>
                      <option value={30}>NS</option>
                    </Select>
                </FormControl>
                <FormControl className="form">
                    <InputLabel htmlFor="age-native-simple">Choose Province</InputLabel>
                    <Select native>
                      <option aria-label="None" value="" />
                      <option value={10}>Ontario</option>
                      <option value={20}>Alberta</option>
                      <option value={30}>Nova Scotia</option>
                      <option value={30}>Quebec</option>
                    </Select>
                </FormControl>
               
            </div>

                  {table}
                
          
           </MuiThemeProvider>

        );

    }
}
export default Landing;