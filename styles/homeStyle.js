import styled,  {keyframes} from "styled-components";

// ANIMATIONS
export const Float = keyframes`
  0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-20px);
	}
	100% {

		transform: translatey(0px);
	}

`
export const Focus = keyframes `
0% {
    letter-spacing: -0.5em;
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
`

// COMPONENTS

export const Container = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80vw;
    animation: ${Focus} 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

    img {
        margin-left: 4em;
        animation: ${Float} 6s ease-in-out infinite;
    }

    @media (max-width: 1200px) {
        flex-direction: column;
        align-items: center;

        img {
            margin-left: 0;
            margin-bottom: 4em;
            max-width: 60%;
            height: auto;
        }
    }
`


 


export const TextContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    margin-right: 4em;
    line-height: 2em;
    max-width: 45%;
    box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    
    h1 {
        align-self:flex-start;
        margin-bottom: .5em;
    }

    p {
        font-size: 1.2em;

        span {
            font-weight: bold;
            color: #00ff00;
        }
    }

    a {
        align-self: flex-start;
        text-decoration: none;
        margin: 2em;
        color: ${(props) => props.theme.colors.textColor};
        font-weight: bold;
        transition: all .2s ease-in;


        &:hover {
            transform: scale(1.1);
            color: #00ff00;
        }
    }

    @media (max-width: 1200px) {
        max-width: 900px;
        margin-right: 0;
        
        h1, 
        p,
        a {
            align-self: center;
            text-align: center;
        }

        h1 {
            font-size: 1.4em;
        }

        p {
            font-size: 1em;
        }
    }
`

