import React, { Dispatch } from 'react';
import { connect } from 'react-redux'
import  ButtonLink  from'../components/ButtonLink';
import  { getCount } from '../actions/index';

const SagaExample = ({getCount}:any) => {

    const plusCount = ()=>{
        console.log("count is")
        //dispatch plus count
        
    }

    const minusCount = () => {
        //dispatch minus count
        
    
    }

    return(
        <div>
            <p>counter: 0</p>
            <ButtonLink link="" text="Increment" color="primary" onClick={getCount}/>
            <ButtonLink link="" text="Decrement" color="primary" onClick={minusCount}/>
        </div>
    )

}

const mapDispatchToProps = (dispatch:Dispatch<any>)=>{
    return({getCount:(count:any)=>dispatch(getCount())})
    
}   

export default connect(null, mapDispatchToProps)(SagaExample)