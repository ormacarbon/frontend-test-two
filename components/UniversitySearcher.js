import React, { useState, useEffect } from "react";
import UniversitiesTable from "../components/UniversitiesTable";

export default function UniversitySearcher(props) {
	const dataRetrieverFunction = props.dataRetrieverFunction;
	const searchParamName = props.searchParamName;

	const [searchParam, setSearchParam] = useState("");
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
		setUniversitiesResult(await dataRetrieverFunction(searchParam));
		setOffset(0);
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
			<h3>Search universities by {searchParamName}</h3>
			<form>
				<label>Country Name</label>
				<br />
				<input
					value={searchParam}
					type="text"
					onChange={(e) => setSearchParam(e.target.value)}
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
			<UniversitiesTable list={listUpdated} />
			<form>
				<button onClick={(e) => goBack(e)}>&lt;</button>
				<label>{pageNumber}</label>
				<button onClick={(e) => goForward(e)}>&gt;</button>
			</form>
		</div>
	);
}
