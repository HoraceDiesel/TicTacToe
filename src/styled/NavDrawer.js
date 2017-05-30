import React from 'react'
import Menu from 'material-ui/svg-icons/navigation/menu'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import styled from 'styled-components'

const StayVisible = styled.div`
	position: absolute;
	margin-left: ${(props)=>( props.open ? `${props.width}px` : 'none')};
	transition: margin .4s;
`

export const NavToggleButton = (props) => {
	return (
		<StayVisible
			{...props}
		>
			<FloatingActionButton
				onTouchTap={props.toggle}
			>
				<Menu />
			</FloatingActionButton>
		</StayVisible>
	)
}