import UniversitySearcher from "../components/UniversitySearcher";
import { Context } from "../utils/AppContext";
import { useContext } from "react";

export default function Country() {
	const { searchUniversitiesByCountry } = useContext(Context);

	return (
		<div>
			<UniversitySearcher
				dataRetrieverFunction={searchUniversitiesByCountry}
				searchParamName="country"
			/>
		</div>
	);
}
