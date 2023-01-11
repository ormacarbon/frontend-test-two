import UniversitySearcher from "../components/UniversitySearcher";
import hooks from "../utils/hooks";

export default function Domain() {
	const { searchUniversitiesByDomain } = hooks();

	return (
		<div>
			<UniversitySearcher
				dataRetrieverFunction={searchUniversitiesByDomain}
				searchParamName="domain"
			/>
		</div>
	);
}
