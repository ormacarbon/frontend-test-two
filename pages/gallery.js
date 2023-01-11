import React, { useContext, useEffect, useState } from 'react';
import Layout from '../components/Layout';
import PictureCard from '../components/PictureCard';
import ObservatoryContext from '../context/ObservatoryContext';

export default function Gallery() {
	const { savedPictures, setSavedPictures } = useContext(ObservatoryContext);

	useEffect(() => {
		const localPictures = JSON.parse(localStorage.getItem('favPics'));

		setSavedPictures(localPictures);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (savedPictures) return (
		<Layout currentPage='gallery'>
			{savedPictures.map(picture => (
				<PictureCard key={picture.id} picture={picture} details saved />
			))}
		</Layout>
	);
}
