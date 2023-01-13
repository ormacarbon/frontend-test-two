import { useEffect, useState } from 'react';
import ObservatoryContext from './ObservatoryContext';
import { useTheme } from 'next-themes';

export default function ObservatoryProvider({ children }) {
	const [pictures, setPictures] = useState([]);
	const [savedPictures, setSavedPictures] = useState([]);

	const { theme, setTheme } = useTheme();

	useEffect(() => {
		const favPics = localStorage.getItem('favPics');

		if (!favPics) localStorage.setItem('favPics', JSON.stringify([]));
		
		setTheme('dark');

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const valueObj = {
		pictures,
		setPictures,
		savedPictures,
		setSavedPictures,
		theme,
		setTheme,
	};

	return (
		<ObservatoryContext.Provider value={valueObj}>
			{children}
		</ObservatoryContext.Provider>
	);
}
