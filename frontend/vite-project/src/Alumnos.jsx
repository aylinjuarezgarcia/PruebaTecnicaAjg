import React from 'react';
import { useQuery } from '@tanstack/react-query';

const Alumnos = () => {
  const { data, error, isLoading } = useQuery({
    queryKey:   ['alumnos'], 
    queryFn:
    async () => {
       const response = await fetch('http://localhost:5000/api/alumnos')
       if (!response.ok) {
         throw new Error('Error al obtener los alumnos')
       }
       return response.json()
   }
   
   }
   )
  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Lista de Alumnos</h1>
      <ul>
        {data.map((alumno) => (
          <li key={alumno.id}>
            {alumno.nombre} {alumno.apellido}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Alumnos;