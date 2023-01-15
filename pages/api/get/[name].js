import axios from "axios";
import pokemon from "pokemontcgsdk";

pokemon.configure({ apiKey: process.env.API_KEY });

export default async (req, res) => {
	try {
		const { name } = req.query;

		// const api = axios.create({
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 		"x-api-key": process.env.API_KEY,
		// 	},
		// });

		// const URL = `https://api.pokemontcg.io/v2/cards?q=name:"${name}"`;

		// const cards = await api.get(URL);

		const qry = await pokemon.card.all({ q: `name:"${name}"`});

		res.status(200).json({ data: qry });
	} catch (error) {
		res.json(error);
	}
};
