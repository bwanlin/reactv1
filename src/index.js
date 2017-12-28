import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Routes } from './Routes/Routes'
import configureStore from './redux/configStore'
import './style/main.css'

const store = configureStore()

class App extends React.Component {
    render() {
        return (
          <Provider store={store}>
            <Routes />
          </Provider>
        )
    }
}

ReactDOM.render(
  <App/>,
  app
)

module.hot.accept();
