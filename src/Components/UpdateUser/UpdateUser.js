import { useGlobalContext } from '../../Contexts/Auth';
import { useState } from 'react';
import { Button, Avatar, Box } from '@material-ui/core';
import Input from "../Signup/Input";

const UpdateUser = () => {

    const { user, setIsUpdating, isUpdating } = useGlobalContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isUpdating) {
            return setIsUpdating(true);
        }
        else {
            try {
                setIsUpdating(false);
            } catch (error) {
                console.log(error);
            }
        }
    }
        
    // useEffect(() => {
    //     if (isSignup) {
    //         if (formData.password !== formData.confirmPassword) {
    //             setPasswordsMatch(true);
    //         } else {
    //             setPasswordsMatch(false);
    //         }
    //     }
    // }, [formData, isSignup])

    return (
                <form onSubmit={handleSubmit}>
                    <Box component='div' align='center'>
                        <Avatar style={{ marginTop: 20 }}></Avatar>
                    </Box>
                    <Input name='email' label='Registered Email' value={user && user.email} disabled={isUpdating ? false : true}/>
                    <Input name='currentPassword' type='password' label='Leave blank to keep your current password' disabled={isUpdating ? false : true}/>
                    <Button type='submit' variant='contained' fullWidth size='large' color={!isUpdating ? 'primary' : 'secondary'} style={{ marginBottom: 10}}>{isUpdating ? 'Save Information' : 'Update Information'}</Button>
                </form>
    )
}

export default UpdateUser;