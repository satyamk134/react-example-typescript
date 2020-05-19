import React ,{useState}from "react";
import { withRouter } from 'react-router'
import Button from '@material-ui/core/Button';
import {RouteComponentProps} from "react-router";
type PathParamsType = {
  param1: string,
}

// Your component own properties
type PropsType = RouteComponentProps<PathParamsType> & {
 
  link:String, 
  text:String,
  color:string, 
  onClick:Function,
  
}
//const routeToloc = ()=>withRouter(({history})=>history.push('new-location'))


const ButtonLink = ({ history,link,text,color,onClick}:PropsType) => {  
  
  switch(color){
    case 'primary':
        return <Button variant="contained" color="primary" type='button'
                  onClick={() => onClick(history) }>
                  {text} 
              </Button>
        break;
    
    case 'secondary':
      return <Button variant="contained" color="secondary" type='button'
                  onClick={() => onClick(history) }>
                  {text} 
              </Button>
      break;
    default : 
      return <Button variant="contained"  type='button'
                  onClick={() => onClick(history) }>
                  {text} 
            </Button>
      
    
  }
  
    

}
export default withRouter(ButtonLink)