import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';
import PictureCard from '../../components/PictureCard';
import ObservatoryContext from '../../context/ObservatoryContext';

export default function PictureInfo() {
	const router = useRouter();
	const { id } = router.query;

	const { pictures } = useContext(ObservatoryContext);

	const [picture, setPicture] = useState();

	useEffect(() => {
		if (pictures[0].title === '') router.push('/explore');
		else {
			const currentPicture = pictures.find(picture => picture.id === id);

			setPicture(currentPicture);
		}
		
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (picture) return <PictureCard details picture={picture}  />;
}
