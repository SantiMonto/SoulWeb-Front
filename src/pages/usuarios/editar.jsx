import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GET_USUARIO } from '../../graphql/usuarios/queries'
import Input from '../../components/input';
import { useMutation, useQuery } from '@apollo/client';
import ButtonLoading from '../../components/ButtonLoading';
import useFormData from '../../hook/useFormData';
import { EDITAR_USUARIO } from '../../graphql/usuarios/mutations';
import { toast } from 'react-toastify';
// import DropDown from 'components/Dropdown';
// import { Enum_EstadoUsuario } from 'utils/enums';

const EditarUsuario = () => {
    const { form, formData, updateFormData } = useFormData(null);
    const { _id } = useParams();
    const { data: queryData,
        error: queryError,
        loading: queryLoading,
    } = useQuery(GET_USUARIO, {
        variables: { _id },
    });

    const [editarUsuario, { data: mutationData, loading: mutationLoading, error: mutationError }] =
        useMutation(EDITAR_USUARIO);

    const submitForm = (e) => {
        e.preventDefault();
        console.log('fs', formData)
        editarUsuario({
            variables: { _id,...formData }
        });
    };

    useEffect(()=>{
        if (mutationData) {
            toast.success("Usuario modificado con exito")
        }
        console.log('Mutacion edicion',mutationData)
    },[mutationData]);

    useEffect(() => {
        if (mutationError) {
            toast.error("Error modificando el usuario");
        }
        if(queryError){
            toast.error("Error modificando el usuario");
        }
    },[queryError,mutationError]);

    if (queryLoading) return <div>Cargando...</div>

    return (
        <div className='form'>
            <Link to='/usuarios'>
                <i class="far fa-user">Usuarios</i>
            </Link>
            <h1 className='m-4 font-bold text-center'>Editar Usuario</h1>
            <form
                onSubmit={submitForm}
                onChange={updateFormData}
                ref={form}
                className='flex flex-col items-center justify-center'
            >
                <Input
                    label='Nombre de la persona:'
                    type='text'
                    name='nombre'
                    defaultValue={queryData.Usuario.nombre}
                    required={true}
                />
                <Input
                    label='Apellido de la persona:'
                    type='text'
                    name='apellido'
                    defaultValue={queryData.Usuario.apellido}
                    required={true}
                />
                <Input
                    label='Correo de la persona:'
                    type='email'
                    name='correo'
                    defaultValue={queryData.Usuario.correo}
                    required={true}
                />
                <Input
                    label='Identificación de la persona:'
                    type='text'
                    name='identificacion'
                    defaultValue={queryData.Usuario.identificacion}
                    required={true}
                />
                {/* <DropDown
          label='Estado de la persona:'
          name='estado'
          defaultValue={queryData.Usuario.estado}
          required={true}
          options={Enum_EstadoUsuario}
        /> */}
                <span>Rol del usuario: {queryData.Usuario.rol}</span>
                <ButtonLoading
                    disabled={Object.keys(formData).length === 0}
                    loading={mutationLoading}
                    text='Confirmar'
                />
            </form>
        </div>
    );
};

export default EditarUsuario;
