import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Template from '../containers/template'
import TicTacToe from '../containers/TicTacToe'
import Profile from '../containers/profile'

const createRoutes = () => {
	return (
		<Route path='/' component={Template}>
			<IndexRoute component={TicTacToe} />
			<Route path='/profile' component={Profile} />
		</Route>
	)
}

const routes = createRoutes()

export default routes