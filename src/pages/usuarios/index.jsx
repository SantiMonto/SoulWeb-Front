import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { GET_USUARIOS } from '../../graphql/usuarios/queries';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


const IndexUsuarios = () => {
    const { data, error, loading } = useQuery(GET_USUARIOS);

    useEffect(() => {
        console.log("data servidor", data)
    }, [data]);

    useEffect(() => {
        if (error) {
            toast.error("Error consultando los usuarios");
        }
    });

    if (loading) return <div>Cargando...</div>
    return (
        <>
            <table className='tabla'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Correo</th>
                        <th>Identificación</th>
                        <th>Rol</th>
                        <th>Estado</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.Usuarios ? (
                        <>
                            {data.Usuarios.map((u) => {
                                return (
                                    <tr key={u._id}>
                                        <td>{u.nombre}</td>
                                        <td>{u.apellido}</td>
                                        <td>{u.correo}</td>
                                        <td>{u.identificacion}</td>
                                        <td>{u.rol}</td>
                                        <td>{u.estado}</td>
                                        <td>
                                            <Link to={`/usuarios/editar/${u._id}`}>
                                                <i className="fas fa-edit">Editar</i>
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })}
                        </>
                    ) : (
                        <div>No autorizado</div>
                    )}
                </tbody>
            </table>
        </>
    )
}

export default IndexUsuarios;