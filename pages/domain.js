import UniversitySearcher from "../components/UniversitySearcher";
import { Context } from "../utils/AppContext";
import { useContext } from "react";
import Head from "next/head";

export default function Domain() {
	const { searchUniversitiesByDomain } = useContext(Context);

	return (
		<div>
			<Head>
				<title>Domain</title>
			</Head>
			<UniversitySearcher
				dataRetrieverFunction={searchUniversitiesByDomain}
				searchParamName="domain"
			/>
		</div>
	);
}
