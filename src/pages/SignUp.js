// // src/pages/Signup.js
// import React, { useState } from 'react';
// import { signup } from '../api/api';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', phone: '', password: '' });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await signup(formData);
//       navigate('/login');
//     } catch (error) {
//       console.error('Signup error', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Signup</h2>
//       <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
//       <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
//       <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
//       <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
//       <button type="submit">Signup</button>
//     </form>
//   );
// };

// export default Signup;


import React from 'react';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { useNavigate, Link } from 'react-router-dom';
import { signup } from '../api/api';

const signupSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\d{10}$/, 'Phone number must be 10 digits'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

const Signup = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
    },
    validationSchema: toFormikValidationSchema(signupSchema),
    onSubmit: async (values) => {
      try {
        await signup(values);
        navigate('/login');
      } catch (error) {
        console.error('Signup error', error);
        // Handle error (e.g., show error message to user)
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-800 to-indigo-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${formik.touched.name && formik.errors.name ? 'border-red-300' : 'border-gray-300'
                  } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Name"
                {...formik.getFieldProps('name')}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="mt-2 text-sm text-red-600" id="name-error">{formik.errors.name}</p>
              )}
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${formik.touched.email && formik.errors.email ? 'border-red-300' : 'border-gray-300'
                  } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Email address"
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="mt-2 text-sm text-red-600" id="email-error">{formik.errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor="phone" className="sr-only">Phone number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${formik.touched.phone && formik.errors.phone ? 'border-red-300' : 'border-gray-300'
                  } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Phone number"
                {...formik.getFieldProps('phone')}
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="mt-2 text-sm text-red-600" id="phone-error">{formik.errors.phone}</p>
              )}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${formik.touched.password && formik.errors.password ? 'border-red-300' : 'border-gray-300'
                  } placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
                placeholder="Password"
                {...formik.getFieldProps('password')}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="mt-2 text-sm text-red-600" id="password-error">{formik.errors.password}</p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            >
              Sign up
            </button>
          </div>
        </form>
        <div className="text-sm text-center">
          <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out">
            Already have an account? Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;