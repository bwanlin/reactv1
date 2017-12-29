import React from 'react'
import { withRouter } from 'react-router'
import { CSSTransitionGroup } from 'react-transition-group'


const Test = () => (<div>HOMEPAGE</div>)

const App = () => {
	return (
		<div className="container">
			<CSSTransitionGroup
				transitionName="example"
				transitionEnterTimeout={500}
				transitionLeaveTimeout={300}
			>
				<Test />
			</CSSTransitionGroup>
		</div>
	)
}

App.propTypes = {
}

export default withRouter(App)
