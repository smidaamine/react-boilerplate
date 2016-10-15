import React, { Component } from 'react';

import Hello from './hello/hello';
import InputText from './common/inputText';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import style from './style.css';

import * as helloActions from '../actions/hello';
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {username : this.props.helloUser};
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
       
        this.props.actions.sayHello(this.state.username);
    }
    handleChange(event){
    
        this.setState({username :  event.target.value});
    }
    render(){
        return (
            <div className={style.app}>
            <InputText name="username" placeholder="Name" onChange={this.handleChange} />
                <Hello name={this.props.helloUser}/>
                <input type="button" onClick={this.handleClick} value="Say Hello"/>
           </div>
           
        );
    }

}

function mapStateToprops(state){

    return {helloUser : state.hello.username};
}

function mapDispatchToprops(dispatch) {
  return {
    actions: bindActionCreators(helloActions, dispatch)
  };
}

export default connect(mapStateToprops,mapDispatchToprops)(App);