import React ,{Component,PropTypes} from 'react';
import style from './style.css';


const Hello  = ({name})=>{
    return (
        <h1 className={style.red}>Hello, {name}</h1>
        );

};


Hello.propTypes = {
    name : PropTypes.string.isRequired
};


export default Hello;