import React, { createContext } from "react";
import hooks from "./hooks";

const Context = createContext();

function AppContext({ children }) {
	const {
		searchUniversitiesByCountry,
		searchUniversitiesByDomain,
		searchUniversitiesByName,
	} = hooks();
	return (
		<Context.Provider
			value={{
				searchUniversitiesByCountry,
				searchUniversitiesByDomain,
				searchUniversitiesByName,
			}}
		>
			{children}
		</Context.Provider>
	);
}

export { Context, AppContext };
