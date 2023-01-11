import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import styled from 'styled-components';
import ObservatoryContext from '../context/ObservatoryContext';

const PictureContainer = styled.div`
  position: relative;
  object-fit: contain;
  width: 600px;
  height: 600px;
`;

export default function PictureCard({ picture, details, moreInfo, saved }) {
	const { id, title, description, date, url } = picture;

	const { setSavedPictures } = useContext(ObservatoryContext);

	const router = useRouter();

	const savePicture = () => {
		const savedPictures = JSON.parse(localStorage.getItem('favPics'));
		const newSavedPictures = saved ? savedPictures.filter(pic => pic.id !== picture.id) : (savedPictures ? [...savedPictures, picture] : [picture]);

		localStorage.setItem('favPics', JSON.stringify(newSavedPictures));
		setSavedPictures(newSavedPictures);

		if (!saved) router.push('/gallery');
	};

	return (
		<div>
			{details && (
				<div>
					<h2>{title}</h2>
					<p>{description}</p>
					<p>{new Date(date).toLocaleDateString('pt-BR')}</p>
					<button onClick={savePicture}>Save/Unsave Picture</button>
				</div>
			)}
			<PictureContainer>
				<Image fill sizes='(max-width: 600px) 20vw' src={url} alt={title} />
			</PictureContainer>
			{moreInfo && <Link href={`/picture/${id}`}>More info</Link>}
		</div>
	);
}
