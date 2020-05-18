import React ,{ useState, useEffect, useCallback }  from 'react';
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
import TemporaryDrawer from '../../components/Drawer'

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

const  Header = ({logout}) => {
  const classes = useStyles();
  const history = useHistory();
 
  const [loggedIn,setlogin] = useState(false);
  const [sideBar,setSideBar] = useState(false);
  
  useEffect(() => {
    //checking if token is present in localStorage
    //console.log("localStorage.getItem('token') ",localStorage.getItem('token') )
    if(localStorage.getItem('token') === 'undefined' || !localStorage.getItem('token') )
    {
      //console.log("invalid token");
      setlogin(false)
    }else{
      //console.log("user is logged in with valid token");
      let userInfo = JSON.parse(localStorage.getItem('userInfo'))
      if(userInfo){
        if(userInfo.role === 'admin') {
          history.push('/dashboard')
        }else{
          history.push("/products")
        }
        setlogin(true)
      }
     
    }
   
  },[history]);

 
  const handleClick = useCallback(() => {
    localStorage.removeItem('token')
    localStorage.removeItem('userInfo')
    logout(false)
    history.push('/login')
  })

  const setSideBarHandler = () => {
    //console.log("set bar called",sideBar);
    setSideBar({...sideBar,sideBar:true});
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
      <TemporaryDrawer open={sideBar}></TemporaryDrawer>
    </div>
  );
}






const mapDispatchToProps = dispatch => {
  //console.log("dispatch called in visible to do list",dispatch)
  return ({
      logout: status => dispatch(setUserLoginStatus(status))
})}

export default connect(
  null,mapDispatchToProps
)(Header)






