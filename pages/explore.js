import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { useState } from 'react';
import Layout from '../components/Layout';
import PictureCard from '../components/PictureCard';
import ObservatoryContext from '../context/ObservatoryContext';

export default function Explore() {
	const [filter, setFilter] = useState('');
	const [loading, setLoading] = useState(false);
	const [onSearch, setOnSearch] = useState(false);

	const { pictures, setPictures } = useContext(ObservatoryContext);

	const fetchPictures = async () => {
		setOnSearch(true);
		setLoading(true);

		const response = await fetch(`https://images-api.nasa.gov/search?media_type=image&q=${filter}`);
		const data = await response.json();

		const rawPictures = data.collection.items;
		const formattedPictures = rawPictures.map(({ data, links }) => ({
			id: data[0].nasa_id,
			title: data[0].title,
			url: links[0].href,
			description: data[0].description,
			date: data[0].date_created
		}));

		console.log(formattedPictures);
		setPictures(formattedPictures);

		setLoading(false);
	};

	/* {(pictures.length === 0) && <h2>No results...</h2>} */
	return (
		<Layout currentPage='explore'>
			<input onChange={({ target }) => setFilter(target.value)} />
			<button onClick={fetchPictures}>Search</button>
			{onSearch && (
				loading ? <h2>Loading...</h2> : (
					pictures.length === 0 ? <h2>No results.</h2> : (
						<div>
							{pictures.map(picture => <PictureCard key={picture.id} picture={picture} moreInfo />)}
						</div>
					)
				)
			)}
		</Layout>
	);
}
