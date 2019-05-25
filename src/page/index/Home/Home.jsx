import React from 'react'

import Header from './Home'

/**
 * @constructor <Home />
 * @description 首页Tab代码
 */

class Home extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }

}

export default Home
