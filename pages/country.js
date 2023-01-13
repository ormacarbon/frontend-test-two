import UniversitySearcher from "../components/UniversitySearcher";
import { Context } from "../utils/AppContext";
import { useContext } from "react";
import Head from "next/head";

export default function Country() {
	const { searchUniversitiesByCountry } = useContext(Context);

	return (
		<div>
			<Head>
				<title>Country</title>
			</Head>
			<UniversitySearcher
				dataRetrieverFunction={searchUniversitiesByCountry}
				searchParamName="country"
			/>
		</div>
	);
}
