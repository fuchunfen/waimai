import React from 'react'

import { connect } from 'react-redux'

import {addTodo} from '../actions/tabAction'

import BottomBar from '../BottomBar/BottomBar'

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
      <BottomBar/>
    )
  }

}

export default connect(
  state => ({
    num: state.tabReducer.num
  })
)(Main)
