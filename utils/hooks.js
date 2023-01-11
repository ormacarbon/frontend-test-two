import api from "./api";

const hooks = () => {
	const searchUniversitiesByCountry = async (countryName) => {
		try {
			const res = await api.get(`/search?country=${countryName}`);
			return res.data;
		} catch (error) {
			throw new Error(error.message);
		}
	};

	const searchUniversitiesByName = async (universityName) => {
		try {
			const res = await api.get(`/search?name=${universityName}`);
			return res.data;
		} catch (error) {
			throw new Error(error.message);
		}
	};

	const searchUniversitiesByDomain = async (domainPage) => {
		try {
			const res = await api.get(`/search?domain=${domainPage}`);
			return res.data;
		} catch (error) {
			throw new Error(error.message);
		}
	};

	return {
		searchUniversitiesByCountry,
		searchUniversitiesByName,
		searchUniversitiesByDomain,
	};
};

export default hooks;
