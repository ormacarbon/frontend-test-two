import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import ObservatoryContext from '../context/ObservatoryContext';

const PictureContainer = styled.div`
  position: relative;
  object-fit: contain;
  width: 600px;
  height: 600px;
`;

export default function PictureCard({ picture, details, moreInfo }) {
	const { id, title, description, date, url } = picture;

	const { savedPictures, setSavedPictures } = useContext(ObservatoryContext);

	const [isPicSaved, setIsPicSaved] = useState(false);

	useEffect(() => {
		const localPics = JSON.parse(localStorage.getItem('favPics'));
		const picSaved = localPics.some(pic => pic.id === id);

		setIsPicSaved(picSaved);
		setSavedPictures(localPics);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const editFavs = () => {
		let newFavPics;

		if (isPicSaved) newFavPics = savedPictures.filter(pic => pic.id !== id);
		else newFavPics = [...savedPictures, picture];

		localStorage.setItem('favPics', JSON.stringify(newFavPics));
	
		setSavedPictures(newFavPics);
		setIsPicSaved(prev => !prev);
	};

	return (
		<div>
			{details && (
				<div>
					<h2>{title}</h2>
					<p>{description}</p>
					<p>{new Date(date).toLocaleDateString('pt-BR')}</p>
				</div>
			)}
			<PictureContainer>
				<Image fill sizes='(max-width: 600px) 20vw' src={url} alt={title} />
			</PictureContainer>
			<button onClick={editFavs}>{isPicSaved ? 'Unsave Picture' : 'Save Picture'}</button>
			{moreInfo && <Link href={`/picture/${id}`}>More info</Link>}
		</div>
	);
}
