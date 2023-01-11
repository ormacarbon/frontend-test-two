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

	const searchUniversitiesByName = async (universityName) => {
		try {
			const res = await api.get(`/search?name=${universityName}`);
			return res.data;
		} catch (error) {
			alert(error);
		}
	};

	const searchUniversitiesByDomain = async (domainPage) => {
		try {
			const res = await api.get(`/search?domain=${domainPage}`);
			return res.data;
		} catch (error) {
			alert(error);
		}
	};

	return {
		searchUniversitiesByCountry,
		searchUniversitiesByName,
		searchUniversitiesByDomain,
	};
};

export default hooks;
