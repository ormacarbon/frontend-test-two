import UniversitySearcher from "../components/UniversitySearcher";
import { Context } from "../utils/AppContext";
import { useContext } from "react";

export default function Domain() {
	const { searchUniversitiesByDomain } = useContext(Context);

	return (
		<div>
			<UniversitySearcher
				dataRetrieverFunction={searchUniversitiesByDomain}
				searchParamName="domain"
			/>
		</div>
	);
}
