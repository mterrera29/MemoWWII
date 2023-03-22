import React, { createContext, useState } from 'react';

export const PuntosContext = createContext(null);

export const PuntosProvider = ({ children }) => {
  const [puntosTotal, setPuntosTotal] = useState(0);

  return (
    <PuntosContext.Provider value={[puntosTotal, setPuntosTotal]}>
      {children}
    </PuntosContext.Provider>
  );
};
