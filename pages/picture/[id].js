import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import ObservatoryContext from '../../context/ObservatoryContext';
import { PictureContainer } from '../explore';

export default function PictureInfo() {
	const router = useRouter();
	const { id } = router.query;

	const { pictures } = useContext(ObservatoryContext);

	const [picture, setPicture] = useState(
		{
			title: '',
			pictureUrl: '',
			description: '',
			date: ''
		});

	useEffect(() => {
		const { data, links } = pictures.find(({ data }) => data[0].nasa_id === id);

		const pictureObject = {
			title: data[0].title,
			pictureUrl: links[0].href,
			description: data[0].description,
			date: data[0].date_created
		};

		setPicture(pictureObject);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<h2>{picture.title}</h2>
			<p>{picture.description}</p>
			<p>{new Date(picture.date).toLocaleDateString('pt-BR')}</p>
			<PictureContainer>
				<Image fill sizes='(max-width: 600px) 20vw' src={picture.pictureUrl} alt={picture.title} />
			</PictureContainer>
		</div>
	);
}
