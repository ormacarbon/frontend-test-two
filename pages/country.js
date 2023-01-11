import React, { useState, useContext, useEffect } from "react";

export default function Country() {
	const [countryName, setCountryName] = useState("");

	const searchUniversities = () => {
		//...
	};

	return (
		<div>
			<h3>Search universities by country</h3>
			<form>
				<label>Country Name</label>
				<br />
				<input
					value={countryName}
					type="text"
					onChange={(e) => setCountryName(e.target.value)}
				></input>
				<br />
				<br />
				<button onClick={() => searchUniversities()}>Search</button>
			</form>
		</div>
	);
}
