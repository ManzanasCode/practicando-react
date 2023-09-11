import { useEffect } from 'react';
//import { useState } from 'react';

function ImagenMono() {
  useEffect(() => {
    loadCharacters();
  }, []);

  return <>imagenMono</>;
}

function loadCharacters() {
  console.log('loadCharacters');
}

export default ImagenMono;
