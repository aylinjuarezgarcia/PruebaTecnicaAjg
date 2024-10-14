import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [color, setColor] = useState('white');
  const navigate = useNavigate();

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Prueba Técnica</h1>
      <div style={{ width: '100px', height: '100px', backgroundColor: color, margin: '0 auto' }} />
      <div>
        <button onClick={() => handleColorChange('green')}>Verde</button>
        <button onClick={() => handleColorChange('yellow')}>Amarillo</button>
        <button onClick={() => handleColorChange('red')}>Rojo</button>
      </div>
      <button onClick={() => navigate('/Alumnos')}>Ver Alumnos</button>
    </div>
  );
};

export default Home;
