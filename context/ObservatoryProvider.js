import ObservatoryContext from './ObservatoryContext';

export default function ObservatoryProvider({ children }) {

  const objectValue = {

  };

  return (
    <ObservatoryContext.Provider value={objectValue}>
      {children}
    </ObservatoryContext.Provider>
  );
}
