import React from 'react'
import styled from 'styled-components'
import LogoImg from './img/logo.svg';

const Logo = () => {
	return (
		<Trello>
			<div>
				<img src={LogoImg} alt='logo' />
			</div>
			<h1>Trello</h1>
		</Trello>
	)
}

const Trello = styled.div`
	width: 100%;
	/* height: 100%; */
	display: flex;
	align-items: center;
	justify-content: center;
	/* margin-left: 280px; */
	gap: 20px;
   
	h1 {
		font-size: 50px;
		color: #0c0c0c;
	}
	
`

export default Logo;
