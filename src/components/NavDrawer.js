import React , {Component} from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import {Link} from 'react-router'
import {NavToggleButton} from '../styled/NavDrawer'

class NavDrawer extends Component {

	state = {
		open: true,
		width: 250
	}

	toggleMenu = () => {
		this.setState((prevState, props) => {
			return {
				open: !prevState.open
			}
		})
	}

	render() {
		return (
			<div>
				<NavToggleButton 
					toggle={this.toggleMenu}
					width={this.state.width}
					open={this.state.open}
				/>
				<Drawer
					open={this.state.open}
					width={this.state.width}
				>
					<div 
						style={{
							width: '100%',
							height: '100px',
							backgroundColor: 'purple'
						}}
					>
						LoginContainer
					</div>
					<Divider />
					<Link to='/'>
						<MenuItem
							 primaryText='Play'
							 onTouchTap={this.toggleMenu}
						 />
					</Link>
					<Link to='/profile'>
						<MenuItem
							 primaryText='Profile'
							 onTouchTap={this.toggleMenu}
						 />
					</Link>
				</Drawer>
			</div>
		)
	}
}

export default NavDrawer