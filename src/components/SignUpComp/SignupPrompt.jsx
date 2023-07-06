import React, { useState, useRef  } from 'react';
import { useTransition, animated } from 'react-spring';
import * as yup from "yup";
import Dropzone from "react-dropzone";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik } from "formik";
import { supabase } from '../../lib/helper/supabaseClient';

const registerSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    userEmail: yup.string().email("invalid email").required("required"),
    userPassword: yup.string().required("required"),
    userLocation: yup.string().optional("optional"),
    userBrokerage: yup.string().optional("optional"),
});
const initialValues = {
    firstName: "",
    lastName: "",
    userEmail: "",
    userPassword: "",
    userLocation: "",
    userBrokerage: "",
}


const SignupPrompt = ({ handleCardSwitch}) => {

    const handleFormSubmit = async(values, onSubmitProps) =>{
        //handleRegister(values, onSubmitProps);
        const { data, error } = await supabase.auth.signUp(
            {
                email: values.userEmail,
                password: values.userPassword,
                options: {
                    data: {
                        first_name: values.firstName ,
                        last_name: values.lastName ,
                        location: values.userLocation ,
                        brokerage: values.userBrokerage,
                    }
                }
            } 
        );
        const account = await supabase.from('account').insert(
        {
            first_name: values.firstName , 
            last_name: values.lastName ,
            user_brokerage: values.userBrokerage,
            user_location: values.location, 
        });
    };
    
    return (
        <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={registerSchema}>
        {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            setFieldValue,
            resetForm,
        }) => (
        <form onSubmit={handleSubmit}>
            {/* Signup form fields */}
            <div className="mb-4">
                <label htmlFor="firstName" className="block text-sm text-black font-bold mb-2">
                First Name
                </label>
                <input value={values.firstName} onChange={handleChange} type="text" id="firstName" className="w-full px-3 py-2 rounded bg-gray-100 border border-gray-300 focus:outline-none" required/>
            </div>
            <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm text-black font-bold mb-2">
                Last Name
                </label>
                <input value={values.lastName} onChange={handleChange} type="text" id="lastName" className="w-full px-3 py-2 rounded bg-gray-100 border border-gray-300 focus:outline-none" required/>
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm text-black font-bold mb-2">
                Email
                </label>
                <input value={values.userEmail} onChange={handleChange} type="email" id="userEmail" className="w-full px-3 py-2 rounded bg-gray-100 border border-gray-300 focus:outline-none" required/>
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-sm text-black font-bold mb-2">
                Password
                </label>
                <input value={values.userPassword} onChange={handleChange} type="password" id="userPassword" className="w-full px-3 py-2 rounded bg-gray-100 border border-gray-300 focus:outline-none" required/>
            </div>
            <h5 className='text-gray mb-3'>Optional:</h5>
            <div className="mb-4">
                <label htmlFor="location" className="block text-sm text-black font-bold mb-2">
                Location
                </label>
                <input value={values.userLocation} onChange={handleChange} type="location" id="userLocation" className="w-full px-3 py-2 rounded bg-gray-100 border border-gray-300 focus:outline-none"/>
            </div>
            <div className="mb-4">
                
                <label htmlFor="brokerage" className="block text-sm text-black font-bold mb-2">
                Brokerage
                </label>
                <input value={values.userBrokerage} onChange={handleChange} type="brokerage" id="userBrokerage" className="w-full px-3 py-2 rounded bg-gray-100 border border-gray-300 focus:outline-none"/>
            </div>
            <div className="flex justify-between">
                <button type="submit" className="border-2 text-white px-4 py-2 rounded-lg hover:scale-105 focus:outline-none">
                Signup
                </button>
            </div>
        </form>
        )}
        
        </Formik>
    );
};

export default SignupPrompt;