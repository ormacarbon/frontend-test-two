import { useEffect, useState } from 'react';
import ObservatoryContext from './ObservatoryContext';

export default function ObservatoryProvider({ children }) {
	const [pictures, setPictures] = useState([]);
	const [savedPictures, setSavedPictures] = useState([]);

	useEffect(() => {
		const favPics = localStorage.getItem('favPics');

		if (!favPics) localStorage.setItem('favPics', JSON.stringify([]));
	});

	const valueObj = {
		pictures,
		setPictures,
		savedPictures,
		setSavedPictures,
	};

	return (
		<ObservatoryContext.Provider value={valueObj}>
			{children}
		</ObservatoryContext.Provider>
	);
}
