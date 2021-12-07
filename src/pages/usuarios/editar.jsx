import React from 'react'
import { useParams } from 'react-router';
import { useQuery } from '@apollo/client';
import { GET_USUARIO } from '../../graphql/usuarios/queries';

const EditarUsuario = () => {
    const { data, error, loading } = useQuery(GET_USUARIO);
    const {_id} = useParams();
    return (
        <div>
            Editar Usuario {_id}
        </div>
    )
}

export default EditarUsuario;
