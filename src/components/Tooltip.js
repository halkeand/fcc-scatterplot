import React from 'react'
import styled from 'styled-components'

const StyledTooltip = styled.div`
	background-color: rgba(0, 0, 0, 0.5);
	border-radius: 10px;
	color: white;
	padding: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
`
const CustomTooltip = ({ payload }) => {
	if (payload[0]) {
		const { Doping, Name, Nationality, Place, Time, Year } = payload[0].payload

		return (
			<StyledTooltip>
				<p>{`#${Place} ${Name} (${Nationality}) : ${Time}`}</p>
				<p>{Doping ? Doping : Year}</p>
			</StyledTooltip>
		)
	}
	return <div />
}

export default CustomTooltip
