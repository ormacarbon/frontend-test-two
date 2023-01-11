import { useState } from 'react';
import ObservatoryContext from './ObservatoryContext';

export default function ObservatoryProvider({ children }) {
	const [pictures, setPictures] = useState([]);
	const [savedPictures, setSavedPictures] = useState([]);

	const objectValue = {
		pictures,
		setPictures,
		savedPictures,
		setSavedPictures,
	};

	return (
		<ObservatoryContext.Provider value={objectValue}>
			{children}
		</ObservatoryContext.Provider>
	);
}
