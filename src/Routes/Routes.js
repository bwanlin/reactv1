import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../Pages/Home'

export class Routes extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/" component={Home} />
					<Route render ={ () => {
						return <p>You're lost.</p>
					}} />
				</Switch>
			</Router>
			)
	}
}
