import React, { createContext } from "react";
import hooks from "./hooks";

const Context = createContext();

function AuthProvider({ children }) {
	const { searchUniversitiesByCountry } = hooks();
	return (
		<Context.Provider
			value={{
				searchUniversitiesByCountry,
			}}
		>
			{children}
		</Context.Provider>
	);
}

export { Context, AuthProvider };
