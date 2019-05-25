import React from 'react'
import ReactDom from 'react-dom'

import {Provider} from 'react-redux'
import store from './store'

// import Main from './Main/Main.jsx'
import Container from './Main/Comtainer'

ReactDom.render(
  <Provider store={store}>
    <Container/>
  </Provider>,
  document.getElementById('root')
)
