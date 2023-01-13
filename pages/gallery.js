import React, { useState, useEffect, useContext } from 'react';
import Layout from '../components/Layout';
import PictureCard from '../components/PictureCard';
import ObservatoryContext from '../context/ObservatoryContext';
import { PictureCardsGrid } from '../styles';

export default function Gallery() {
	const { savedPictures } = useContext(ObservatoryContext);

	const [galleryPics, setGalleryPics] = useState([]);

	useEffect(() => {
		const localPictures = JSON.parse(localStorage.getItem('favPics'));

		setGalleryPics(localPictures);
	}, [savedPictures]);

	return (
		<Layout currentPage='gallery'>
			<PictureCardsGrid>
				{galleryPics.map(picture => (
					<PictureCard key={picture.id} picture={picture} details />
				))}
			</PictureCardsGrid>
		</Layout>
	);
}
