import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { global } from 'styled-jsx/css';
import Layout from '../components/Layout';
import ObservatoryContext from '../context/ObservatoryContext';

const PictureContainer = styled.div`
  position: relative;
  object-fit: contain;
  width: 600px;
  height: 600px;
`;

export { PictureContainer };

export default function Explore() {
	const [filter, setFilter] = useState('');
	const [loading, setLoading] = useState(false);

	const { pictures, setPictures } = useContext(ObservatoryContext);

	const fetchPictures = async () => {
		setLoading(true);

		const response = await fetch(`https://images-api.nasa.gov/search?media_type=image&q=${filter}`);
		const data = await response.json();

		console.log(data.collection.items);
		setPictures(data.collection.items);

		setLoading(false);
	};

	return (
		<Layout currentPage='explore'>
			<input onChange={({ target }) => setFilter(target.value)} />
			<button onClick={fetchPictures}>Search</button>
			{/* {(pictures.length === 0) && <h2>No results...</h2>} */}
			{loading ? <h2>Loading...</h2> : (
				<div>
					{pictures.map(({ links, data }) => (
						<div key={data[0].nasa_id}>
							<h2>{data[0].title}</h2>
							<PictureContainer>
								<Image fill sizes='(max-width: 600px) 20vw' src={links[0].href} alt={data[0].title} />
							</PictureContainer>
							<Link href={`/picture/${data[0].nasa_id}`}>More info</Link>
						</div>
					))}
				</div>
			)}
		</Layout>
	);
}
