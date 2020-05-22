import React ,{ useState, useEffect, useCallback, Dispatch }  from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from "react-router-dom";
import { setUserLoginStatus } from '../../actions/index' 
import TemporaryDrawer from '../Drawer'
import { TloginStatus} from '../../actions'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'sticky',
    top: 0,
    zIndex:2
  },
  appBar:{
    position:"sticky",
    top:0
  },
  toolBar:{
    minHeight:'8vh'
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const  Header = ({loggedIn,logout}:any) => {
  const classes = useStyles();
  const history = useHistory();
 
  // const [loggedIn,setlogin] = useState(false);
  // const [sideBar,setSideBar] = useState(false);
  
 

 
  const handleClick = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userInfo')
    logout(false)
        history.push('/login')
  }

  const setSideBarHandler = () => {
    //console.log("set bar called",sideBar);
    //setSideBar(true);
    //console.log("set bar called",sideBar);
  }


  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          {loggedIn === true?<IconButton edge="start" onClick={setSideBarHandler} className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton >:''
          }
          
          <Typography variant="h6" className={classes.title}>
            MyApp
          </Typography>
          {loggedIn === true && <div><Button color="inherit">menu</Button>
           <Button onClick = {handleClick} color="inherit">Logout</Button></div>
           }
         
        </Toolbar>
      </AppBar>
      
    </div>
  );
}

interface IUserStatus{
  userStatus:TloginStatus
}
const mapStateToProps = (state:IUserStatus)=>{
  return ({loggedIn:state.userStatus.loginStatus })
}


const mapDispatchToProps = (dispatch:Dispatch<any>) => {
  //console.log("dispatch called in visible to do list",dispatch)
  return ({
      logout: (status:any) => dispatch(setUserLoginStatus(status))
})}

export default connect(mapStateToProps,mapDispatchToProps)(Header)






