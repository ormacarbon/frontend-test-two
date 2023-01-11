import React, { useState, useContext, useEffect } from "react";
import hooks from "../utils/hooks";

export default function Country() {
	const { searchUniversitiesByCountry } = hooks();
	const [countryName, setCountryName] = useState("");
	const [universitiesResults, setUniversitiesResult] = useState([]);
	const [listUpdated, setListUpdated] = useState([]);
	const [offset, setOffset] = useState(0);
	const [limit, setLimit] = useState(12);
	const [pageNumber, setPageNumber] = useState(1);

	useEffect(() => {
		updateList();
		calculatePageNumber();
	}, [universitiesResults, offset, limit]);

	const searchUniversities = async (event) => {
		event.preventDefault();
		setUniversitiesResult(await searchUniversitiesByCountry(countryName));
		setOffset(0);
		updateList();
	};

	const updateList = () => {
		const endNumber = offset + Number(limit);
		const newList = universitiesResults.slice(offset, endNumber);
		setListUpdated(newList);
	};

	const goForward = (event) => {
		event.preventDefault();
		const newOffset = offset + Number(limit);
		setOffset(newOffset);
	};

	const goBack = (event) => {
		event.preventDefault();
		const newOffset = offset - Number(limit);
		if (newOffset >= 0) {
			setOffset(newOffset);
		}
	};

	const calculatePageNumber = () => {
		const calculatedPageNumber = offset / Number(limit) + 1;
		setPageNumber(calculatedPageNumber);
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
				/>
				<br />
				<br />
				<button onClick={(e) => searchUniversities(e)}>Search</button>
			</form>
			<br />
			<form>
				<label>Limit</label>
				<input
					value={limit}
					type="number"
					onChange={(e) => setLimit(e.target.value)}
				/>
			</form>
			<br />
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Country</th>
						<th>Webpage</th>
					</tr>
				</thead>
				<tbody>
					{listUpdated?.map((item, index) => (
						<tr key={index}>
							<td>{item?.name}</td>
							<td>{item?.country}</td>
							<td>{item?.web_pages[0]}</td>
						</tr>
					))}
				</tbody>
			</table>
			<form>
				<button onClick={(e) => goBack(e)}>&lt;</button>
				<label>{pageNumber}</label>
				<button onClick={(e) => goForward(e)}>&gt;</button>
			</form>
		</div>
	);
}
