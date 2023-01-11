import React, { useState, useContext, useEffect } from "react";
import hooks from "../utils/hooks";

export default function Country() {
	const { searchUniversitiesByCountry } = hooks();
	const [countryName, setCountryName] = useState("");
	const [universitiesResults, setUniversitiesResult] = useState([]);

	const searchUniversities = async (event) => {
		event.preventDefault();
		setUniversitiesResult(await searchUniversitiesByCountry(countryName));
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
				<button onClick={(e) => searchUniversities(e)}>Search</button>
			</form>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Country</th>
						<th>Webpage</th>
					</tr>
				</thead>
				<tbody>
					{universitiesResults?.map((item, index) => (
						<tr>
							<td>{item?.name}</td>
							<td>{item?.country}</td>
							<td>{item?.web_pages[0]}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
