import React from 'react'

import { connect } from 'react-redux'

import {addTodo} from '../actions/tabAction'

import BottomBar from '../BottomBar/BottomBar'
import Header from "../Home/Header/Header";

class Main extends React.Component{

  constructor(props){
    super(props)
  }

  click(){
    this.props.dispatch(addTodo({
      num:10
    }))
  }


  render() {
    return (
      <div>
        <Header/>
        <BottomBar/>
      </div>
    )
  }

}

export default connect(
  state => ({
    num: state.tabReducer.num
  })
)(Main)
