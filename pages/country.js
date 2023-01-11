import UniversitySearcher from "../components/UniversitySearcher";
import hooks from "../utils/hooks";

export default function Country() {
	const { searchUniversitiesByCountry } = hooks();

	return (
		<div>
			<UniversitySearcher
				dataRetrieverFunction={searchUniversitiesByCountry}
				searchParamName="country"
			/>
		</div>
	);
}
