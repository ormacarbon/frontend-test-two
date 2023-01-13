import React, { useState, useEffect } from "react";
import UniversitiesTable from "../components/UniversitiesTable";
import {
	Input,
	Button,
	TableContainer,
	SpaceBetween,
	Label,
	TableMenu,
} from "../styles/componentStyles";

export default function UniversitySearcher(props) {
	const dataRetrieverFunction = props.dataRetrieverFunction;
	const searchParamName = props.searchParamName;

	const [searchParam, setSearchParam] = useState("");
	const [universitiesResults, setUniversitiesResult] = useState([]);
	const [listUpdated, setListUpdated] = useState([]);
	const [listLength, setListLength] = useState(0);
	const [offset, setOffset] = useState(0);
	const [limit, setLimit] = useState(15);
	const [pageNumber, setPageNumber] = useState(1);
	const [isThereAnError, setisThereAnError] = useState(false);

	useEffect(() => {
		updateList();
		calculatePageNumber();
	}, [universitiesResults, offset, limit]);

	useEffect(() => {
		updateListLength();
	}, [universitiesResults]);

	const searchUniversities = async (event) => {
		event.preventDefault();
		setisThereAnError(false);
		try {
			setUniversitiesResult(await dataRetrieverFunction(searchParam));
		} catch (error) {
			setisThereAnError(true);
			setUniversitiesResult([]);
		}
		setOffset(0);
	};

	const updateListLength = () => {
		setListLength(universitiesResults.length);
	};

	const updateList = () => {
		const endNumber = offset + Number(limit);
		const newList = universitiesResults.slice(offset, endNumber);
		setListUpdated(newList);
	};

	const goForward = (event) => {
		event.preventDefault();
		const newOffset = offset + Number(limit);
		if (newOffset < listLength) setOffset(newOffset);
	};

	const goBack = (event) => {
		event.preventDefault();
		const newOffset = offset - Number(limit);
		if (newOffset >= 0) setOffset(newOffset);
	};

	const calculatePageNumber = () => {
		const calculatedPageNumber = offset / Number(limit) + 1;
		setPageNumber(calculatedPageNumber);
	};

	return (
		<div>
			<h3>Search universities by {searchParamName}</h3>
			<form>
				<Label>{searchParamName}:</Label>
				<br />
				<Input
					value={searchParam}
					type="text"
					onChange={(e) => setSearchParam(e.target.value)}
				/>
				<br />
				<br />
				<Button onClick={(e) => searchUniversities(e)}>Search</Button>
			</form>
			<br />
			<form>
				<Label>Limit: </Label>
				<Input
					value={limit}
					type="number"
					onChange={(e) => setLimit(e.target.value)}
				/>
			</form>
			<br />
			{isThereAnError && (
				<div>There was an error when trying to fetch the data.</div>
			)}

			<br />
			<TableContainer>
				<UniversitiesTable list={listUpdated} />
				<TableMenu>
					<SpaceBetween>
						<Button onClick={(e) => goBack(e)}>&lt;</Button>
						<label>{pageNumber}</label>
						<Button onClick={(e) => goForward(e)}>&gt;</Button>
					</SpaceBetween>
				</TableMenu>
			</TableContainer>
		</div>
	);
}
