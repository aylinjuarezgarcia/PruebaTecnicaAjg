// src/AlumnosList.jsx
import React from 'react';
import { useQuery } from 'react-query';

const fetchAlumnos = async () => {
    const response = await fetch('http://localhost:5000/api/Alumnos');
    if (!response.ok) {
        throw new Error('Error al obtener los alumnos');
    }
    return response.json();
};

const AlumnosList = () => {
    const { data, error, isLoading } = useQuery('alumnos', fetchAlumnos);

    if (isLoading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <ul>
            {data.map((alumno) => (
                <li key={alumno.id}>
                    {alumno.nombre} {alumno.apellido}
                </li>
            ))}
        </ul>
    );
};

export default AlumnosList;
