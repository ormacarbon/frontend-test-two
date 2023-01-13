import React, { useContext } from 'react';
import { useState } from 'react';
import Layout from '../components/Layout';
import PictureCard from '../components/PictureCard';
import ObservatoryContext from '../context/ObservatoryContext';
import { Button, PictureCardsGrid } from '../styles';

export default function Explore() {
	const picsPerPage = 9;

	const [filter, setFilter] = useState('');
	const [loading, setLoading] = useState(false);
	const [onSearch, setOnSearch] = useState(false);
	const [pageTop, setPageTop] = useState(0);
	const [pageBottom, setPageBottom] = useState(picsPerPage);

	const { pictures, setPictures, theme } = useContext(ObservatoryContext);

	const fetchPictures = async () => {
		setOnSearch(true);
		setLoading(true);

		const response = await fetch(`https://images-api.nasa.gov/search?media_type=image&q=${filter}`);
		const json = await response.json();

		const rawPictures = json.collection.items;
		const formattedPictures = rawPictures.map(({ data, links, url }) => ({
			id: data[0].nasa_id,
			title: data[0].title,
			url: links[0].href || url,
			description: data[0].description,
			date: data[0].date_created
		}));

		setPictures(formattedPictures);
		setLoading(false);
	};

	const previousPage = () => {
		if (pageTop !== 0) {
			setPageTop(prev => prev - picsPerPage);
			setPageBottom(prev => prev - picsPerPage);
		}
	};

	const nextPage = () => {
		if (pageBottom < pictures.length) {
			setPageTop(prev => prev + picsPerPage);
			setPageBottom(prev => prev + picsPerPage);
		}
	};

	const inputStyle = { padding: '0px 10px 10px 10px', lineHeight: '2', fontSize: 'x-large', border: '2px solid black', borderRadius: '10px', width: '50vw' };

	return (
		<Layout currentPage='explore'>
			<div style={{ marginBottom: '30px' }}>
				<input style={inputStyle} onChange={({ target }) => setFilter(target.value)} />
				<Button appTheme={theme} onClick={fetchPictures}>Search</Button>
			</div>
			{onSearch && (
				loading ? <h2>Loading...</h2> : (
					pictures.length === 0 ? <h2>No results.</h2> : (
						<>
							<PictureCardsGrid>
								{pictures.slice(pageTop, pageBottom).map(picture => <PictureCard key={picture.id} picture={picture} moreInfo />)}
							</PictureCardsGrid>
							<div style={{ marginBottom: '15px' }}>
								<Button appTheme={theme} onClick={previousPage}>Previous Page</Button>
								<Button appTheme={theme} onClick={nextPage}>Next Page</Button>
							</div>
						</>
					)
				)
			)}
		</Layout>
	);
}
