import UniversitySearcher from "../components/UniversitySearcher";
import { Context } from "../utils/AppContext";
import { useContext } from "react";

export default function Name() {
	const { searchUniversitiesByName } = useContext(Context);

	return (
		<div>
			<UniversitySearcher
				dataRetrieverFunction={searchUniversitiesByName}
				searchParamName="name"
			/>
		</div>
	);
}
