'use client'
import { useForm, SubmitHandler } from 'react-hook-form';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import MyButton from '../../components/buttons/MyButton';
import React from 'react';
import { signIn } from 'next-auth/react';

type formData = {
    email: string,
    password: string
};

export default function Page() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<formData>();

    const handleLoginSubmit: SubmitHandler<formData> = async (data: formData) => {
        await signIn('credentials', {
            email: data.email,
            password: data.password
        })
    }
    return (
        <div>
            <h2 className="text-center py-10 font-bold text-3xl">Log in</h2>

            <form onSubmit={ handleSubmit(handleLoginSubmit) }
                  className="mx-auto flex flex-col items-center gap-4 justify-evenly">

                <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Email Address"
                    type="email"

                    variant="outlined"
                    { ...register('email', { required: true }) }
                />
                { errors.email && <span className="text-red-500">Email is required</span> }

                <TextField
                    margin="dense"
                    id="password"
                    label="Password"
                    type="password"

                    variant="outlined"
                    { ...register('password', { required: true, minLength: 6 }) }
                />
                { errors.password?.type === 'required' && <span className="text-red-500">Password is required</span> }
                { errors.password?.type === 'minLength' &&
                    <span className="text-red-500">Password must be at least 6 characters long</span> }
                <MyButton type="submit">Submit</MyButton>
            </form>
        </div>
    );
}
