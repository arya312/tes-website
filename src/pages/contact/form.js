import { Alert, Button, FormControl as MuiFormControl, FormHelperText, Input, InputLabel, TextField } from "@mui/material";
import Head from "next/head";
import { useForm } from "react-hook-form";
import axios from 'axios';

export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {
        console.log(data);

        const response = await axios.post('/api/contactform', data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(response);
    };

    return (
        <div className="min-h-[80vh] p-4 md:px-[20%]">
            <Head>
                <title>Contact Form - The Everything Server</title>
            </Head>

            <h1 className="text-2xl md:text-3xl">Contact Form</h1>
            <br />
            <p>Please fill out the form below:</p>
            <br />

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <TextField fullWidth={true} {...register("name", { required: true })} variant="outlined" aria-describedby="name-helper-text" label="Your Name" />
                        <FormHelperText id="name-helper-text">What's your name?</FormHelperText>
                        {errors.name && <FormHelperText style={{ color: '#f14a60' }}>Name is required!</FormHelperText>}
                    </div>
                    
                    {/* <MuiFormControl>
                        <InputLabel htmlFor="name">Your name</InputLabel>
                        <Input type="text" id="name" />
                    </MuiFormControl> */}

                    <div>
                        <TextField fullWidth={true} {...register("email", { 
                            required: false, 
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            } 
                        })} variant="outlined" aria-describedby="email-helper-text" label="Email Address" />
                        <FormHelperText id="email-helper-text">We'll never share your email with anyone else.</FormHelperText>
                        {errors.email && <FormHelperText style={{ color: '#f14a60' }}>Invalid email given!</FormHelperText>}
                    </div>

                    {/* <MuiFormControl variant="outlined">
                        <InputLabel htmlFor="email">Email address</InputLabel>
                        <Input type="email" id="email" aria-describedby="email-helper-text" />
                        <FormHelperText id="email-helper-text">We'll never share your email with anyone else.</FormHelperText>
                    </MuiFormControl> */}
                </div>

                <div className="pt-5">
                    <TextField type="number" fullWidth={true} {...register("discord", { required: true })} variant="outlined" label="Discord ID" />
                    {errors.discord && <FormHelperText style={{ color: '#f14a60' }}>Invalid Discord ID given! Make sure you've entered your ID, not tag!</FormHelperText>}
                </div>

                <div className="pt-5">
                    <TextField fullWidth={true} {...register("message", { required: true, maxLength: 1000 })} minRows={2} multiline={true} variant="outlined" label="Your Message" />
                    {errors.message && <FormHelperText style={{ color: '#f14a60' }}>You must enter a message that is not empty and contains less than 1000 characters!</FormHelperText>}
                </div>

                <div className="pt-5">
                    <Alert severity="info">Only submit 3 messages in one day. If you exceed this limit and/or spam this contact form then we might remove this privilege from you.</Alert>
                </div>

                <div className="pt-5 flex justify-end">
                    <Button type="submit" size="medium" variant="outlined">Send</Button>
                </div>
            </form>
        </div>
    );
}