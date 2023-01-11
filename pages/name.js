import UniversitySearcher from "../components/UniversitySearcher";
import hooks from "../utils/hooks";

export default function Name() {
	const { searchUniversitiesByName } = hooks();

	return (
		<div>
			<UniversitySearcher
				dataRetrieverFunction={searchUniversitiesByName}
				searchParamName="name"
			/>
		</div>
	);
}
