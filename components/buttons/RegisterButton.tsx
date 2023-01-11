import MyButton from "./MyButton";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type formData = {
    email: string,
    name: string,
    password: string
};

export function RegisterButton() {

    const [open, setOpen] = useState(false);

    // Register MyButton click
    function handleRegisterClick() {
        setOpen(true)
    }
    function handleClose() {
        setOpen(false)
    }

    const handleRegisterSubmit: SubmitHandler<formData> = (data: formData) => {
        console.log(data)
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm<formData>();

    return (
        <>
            <MyButton onClick={ handleRegisterClick } type='button' color='white'>Register</MyButton>

            {/*Modal*/}

            <Dialog open={ open } onClose={ handleClose }>
                <DialogTitle>Register</DialogTitle>
                <form onSubmit={handleSubmit(handleRegisterSubmit) }>

                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            label="Email Address"
                            type="email"
                            fullWidth
                            variant="outlined"
                            {...register("email", {required: true})}
                        />
                        {errors.email && <span className='text-red-500'>Email is required</span>}

                        <TextField
                            margin="dense"
                            id="name"
                            label="Your name"
                            type="text"
                            fullWidth
                            variant="outlined"
                            {...register("name", {required: true, maxLength: 20})}
                        />
                        {errors.name?.type === 'required' && <span className='text-red-500'>Name is required</span>}
                        {errors.name?.type === 'maxLength' && <span className='text-red-500'>Must be at most 20 characters</span>}

                        <TextField
                            margin="dense"
                            id="password"
                            label="Password"
                            type="password"
                            fullWidth
                            variant="outlined"
                            {...register("password", {required: true, minLength: 6})}
                        />
                        {errors.password?.type === 'required' && <span className='text-red-500'>Password is required</span>}
                        {errors.password?.type === 'minLength' && <span className='text-red-500'>Password must be at least 6 chacters long</span>}
                    </DialogContent>
                    <DialogActions className='font-serif'>
                        <MyButton type='submit'>Submit</MyButton>
                    </DialogActions>
                </form>
            </Dialog>

        </>
    );
}
