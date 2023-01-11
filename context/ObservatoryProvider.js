import { useState } from 'react';
import ObservatoryContext from './ObservatoryContext';

export default function ObservatoryProvider({ children }) {
	const [pictures, setPictures] = useState([]);

	const objectValue = {
		pictures,
		setPictures,
	};

	return (
		<ObservatoryContext.Provider value={objectValue}>
			{children}
		</ObservatoryContext.Provider>
	);
}
