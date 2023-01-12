import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
	font-size: large;

	header {
		position: fixed;
		top: 0;
		width: 100vw;
		z-index: 1;
		background-color: white;
		text-align: center;
		padding: 20px 0px;
		border-bottom: 1px solid black;
	}

	footer {
		position: fixed;
		bottom: 0;
		width: 100vw;
		z-index: 1;
		background-color: white;
		text-align: center;
		padding: 20px 0px;
		border-top: 1px solid black;
		padding-top: 8px;
	}

	header nav {
		margin: 20px 0px;

		a {
			margin-right: 20px;
		}
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 20vh;
		margin-bottom: 5vh;
	}
`;

export const Button = styled.button`
	padding: 12px 20px 21px;
	margin-left: 10px;
	font-size: x-large;
	border: 2px solid black;
	border-radius: 10px;
	background-color: transparent;
`;

export const PictureCardContainer = styled.div`
	border: 2px solid black;
	margin-bottom: 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 10px;

	section {
		position: relative;
  	object-fit: cover;
		overflow: hidden;
  	width: 300px;
  	height: 300px;
		border-radius: 100%;
		margin: 10px 30px;
	}
`;
