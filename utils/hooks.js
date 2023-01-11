import api from "./api";

const hooks = () => {
	const searchUniversitiesByCountry = async (countryName) => {
		try {
			const res = await api.get(`/search?country=${countryName}`);
			return res.data;
		} catch (error) {
			alert(error);
		}
	};

	return {
		searchUniversitiesByCountry,
	};
};

export default hooks;
