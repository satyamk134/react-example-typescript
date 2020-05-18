import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ButtonLink from './ButtonLink'
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width:'90%',
      margin:'auto',
      marginTop:'5%'
    },
    paper: {
      padding: theme.spacing(1),
     
      color: theme.palette.text.secondary,
    },
    
  }));
const Product = ({product}:any)=>{
    const classes = useStyles();

    return <Paper className={classes.paper}>
                <div className="image-container">
                        <img alt="shoes" src={product.images[0].link} />
                </div>
                <div className="">
        <h3>{product.productName}</h3>
                </div>
                <div className="">
                    Rs {product.sellingPrice}
                </div>

                <div className="card-footer">
                   <ButtonLink onClick = {()=>'good'} color="secondary" link="register" text="ADD TO CART"></ButtonLink>
                </div>
            
    </Paper>
}
export default Product