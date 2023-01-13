import UniversitySearcher from "../components/UniversitySearcher";
import { Context } from "../utils/AppContext";
import { useContext } from "react";
import Head from "next/head";

export default function Name() {
	const { searchUniversitiesByName } = useContext(Context);

	return (
		<div>
			<Head>
				<title>Name</title>
			</Head>
			<UniversitySearcher
				dataRetrieverFunction={searchUniversitiesByName}
				searchParamName="name"
			/>
		</div>
	);
}
