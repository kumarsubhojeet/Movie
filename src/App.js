import React from 'react'

import Home from './Components/Home'
import DetailPage from './Components/DetailPage'

import {Switch , Route} from "react-router-dom"

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/DetailPage/:id' 
      children={<DetailPage />}></Route>
     
    </Switch>
  )
}

export default App
