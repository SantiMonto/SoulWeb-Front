import { useMutation } from '@apollo/client';
import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import ButtonLoading from '../../components/ButtonLoading';
import Input from '../../components/input';
import { useAuth } from '../../context/authContext';
import { LOGIN } from '../../graphql/auth/mutations';
import useFormData from '../../hook/useFormData';
import {useNavigate} from 'react-router';

const Login = () => {
    const {setToken} = useAuth();
    const navigate = useNavigate();
    const { form, formData, updateFormData } = useFormData();

    const [login, { data: mutationData, loading: mutationLoading, error: mutationError }] =
        useMutation(LOGIN);

    const submitForm = (e) => {
        e.preventDefault();

        login({
            variables: formData,
        });
    };

    useEffect(()=>{
        if(mutationData){
            if (mutationData.login.token) {
                setToken("token", mutationData.login.token)
                navigate('/');
            };
            console.log(mutationData)
        }
    },[mutationData,setToken,navigate])
    return (
        <div className='flex flex-col items-center justify-center w-full h-full p-10'>
            <h1 className='text-xl font-bold text-gray-900'>Iniciar sesión</h1>
            <form className='flex flex-col' onSubmit={submitForm} onChange={updateFormData} ref={form}>
                <Input name='correo' type='email' label='Correo' required={true} />
                <Input name='password' type='password' label='Contraseña' required={true} />
                <ButtonLoading
                    disabled={Object.keys(formData).length === 0}
                    loading={mutationLoading}
                    text='Iniciar Sesión'
                />
            </form>
            <span>¿No tienes una cuenta?</span>
            <Link to='/auth/registro'>
                <span className='text-blue-700'>Regístrate</span>
            </Link>
        </div>
    )
}

export default Login;
