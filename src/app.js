import React from 'react'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'

import MainPage from 'pages/main'
import Create from 'pages/create'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Axios from './api'

const list = async () => {
  const list = await Axios.get('/api/users')

  console.log("list: ", list)
  return list
}

const reducer = (initialState = {}, action) => {

  switch(action.type) {
    case 'LIST': {
      console.log('list: ',action)

      return list()
    }
    case 'CREATE': {
      console.log("create: ", action)
    }


    default: return initialState
  }
}

const store = createStore(reducer);

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <CssBaseline />
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
        <NavLink to="/create">Novo Usuário</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/create" component={ Create }  />
        <Route path="/" component={ MainPage } />
      </Switch>
    </Provider>
  </BrowserRouter>
)

export default App;
