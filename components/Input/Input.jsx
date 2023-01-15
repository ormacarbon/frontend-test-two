import React from "react";
import { InputContainer, InputStyled, LeftIconContainer } from "./style";

const Input = ({ leftIcon, value, onChange,onClick, ...rest }) => {
	return (
		<React.Fragment>
			<InputContainer>
				<LeftIconContainer onClick={onClick}>{leftIcon}</LeftIconContainer>
				<InputStyled {...rest} value={value} onChange={onChange}/>
			</InputContainer>
		</React.Fragment>
	);
};

export default Input;
