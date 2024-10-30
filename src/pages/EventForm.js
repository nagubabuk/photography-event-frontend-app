// import React, { useState, useRef } from 'react';
// import { createEvent } from '../api/api';
// import { useNavigate } from 'react-router-dom';
// import { FaTrash, FaImage, FaVideo } from 'react-icons/fa';
// import toast, { Toaster } from 'react-hot-toast';

// export default function EventForm() {
//     const fileInputImgRef = useRef(null);
//     const fileInputVideoRef = useRef(null);
//     const [loading, setLoading] = useState(false);
//     const [formData, setFormData] = useState({
//         customerName: '',
//         phoneNumber: '',
//         eventName: '',
//         images: [],
//         videos: []
//     });
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleFileChange = (e) => {
//         const { name, files } = e.target;
//         if (files) {
//             const newFiles = Array.from(files);
//             const totalImages = name === 'images' ? formData.images.length + newFiles.length : formData.images.length;
//             const totalVideos = name === 'videos' ? formData.videos.length + newFiles.length : formData.videos.length;

//             if (totalImages + totalVideos > 5) {
//                 toast.error('You can upload a maximum of 5 files in total.');
//                 return;
//             }

//             if (name === 'images' && totalImages > 5) {
//                 toast.error('You can upload a maximum of 5 images.');
//                 return;
//             }

//             if (name === 'videos' && totalVideos > 3) {
//                 toast.error('You can upload a maximum of 3 videos.');
//                 return;
//             }

//             if (totalImages === 5 && name === 'videos') {
//                 toast.error('You have already uploaded 5 images. No videos allowed.');
//                 return;
//             }

//             if (totalVideos === 3 && name === 'images') {
//                 toast.error('You have already uploaded 3 videos. No images allowed.');
//                 return;
//             }

//             setFormData(prevData => ({
//                 ...prevData,
//                 [name]: [...prevData[name], ...newFiles],
//             }));
//         }
//     };

//     const handleDeleteFile = (name, index) => {
//         setFormData(prevData => ({
//             ...prevData,
//             [name]: prevData[name].filter((_, i) => i !== index),
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         const form = new FormData();
//         form.append('customerName', formData.customerName);
//         form.append('phoneNumber', formData.phoneNumber);
//         form.append('eventName', formData.eventName);
//         formData.images.forEach(image => form.append('images', image));
//         formData.videos.forEach(video => form.append('videos', video));

//         try {
//             await createEvent(form);
//             toast.success('Event created successfully!');
//             navigate('/dashboard');
//         } catch (error) {
//             console.error('Error creating event', error);
//             toast.error('Failed to create event. Please try again.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleUploadClick = (ref) => {
//         ref.current?.click();
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
//             <div className="relative py-3 sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto w-full px-4 sm:px-0">
//                 <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
//                 <div className="relative bg-white shadow-lg sm:rounded-3xl sm:p-10 md:p-16 lg:p-20">
//                     <div className="max-w-full mx-auto">
//                         <div>
//                             <h1 className="text-2xl font-semibold mb-6 text-center">Create Event</h1>
//                         </div>
//                         <form onSubmit={handleSubmit} className="space-y-6">
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                 <div className="relative">
//                                     <input
//                                         id="customerName"
//                                         name="customerName"
//                                         type="text"
//                                         className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
//                                         placeholder="Customer Name"
//                                         onChange={handleChange}
//                                         required
//                                     />
//                                     <label htmlFor="customerName" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Customer Name</label>
//                                 </div>
//                                 <div className="relative">
//                                     <input
//                                         id="phoneNumber"
//                                         name="phoneNumber"
//                                         type="tel"
//                                         className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
//                                         placeholder="Phone Number"
//                                         onChange={handleChange}
//                                         required
//                                     />
//                                     <label htmlFor="phoneNumber" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Phone Number</label>
//                                 </div>
//                             </div>
//                             <div className="relative">
//                                 <input
//                                     id="eventName"
//                                     name="eventName"
//                                     type="text"
//                                     className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
//                                     placeholder="Event Name"
//                                     onChange={handleChange}
//                                     required
//                                 />
//                                 <label htmlFor="eventName" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Event Name</label>
//                             </div>
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                 <div className="relative">
//                                     <div className="flex items-center justify-between mb-2">
//                                         <span className="text-sm font-medium text-gray-900">Images ({formData.images.length}/5)</span>
//                                         <button
//                                             type="button"
//                                             onClick={() => handleUploadClick(fileInputImgRef)}
//                                             className="px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                                         >
//                                             <FaImage className="inline mr-1" /> Upload Images
//                                         </button>
//                                     </div>
//                                     <input
//                                         ref={fileInputImgRef}
//                                         type="file"
//                                         name="images"
//                                         onChange={handleFileChange}
//                                         accept="image/*"
//                                         multiple
//                                         className="hidden"
//                                     />
//                                     <ul className="space-y-2 max-h-40 overflow-y-auto">
//                                         {formData.images.map((file, index) => (
//                                             <li key={index} className="flex items-center justify-between p-2 bg-gray-100 rounded-md">
//                                                 <span className="text-sm truncate">{file.name}</span>
//                                                 <button
//                                                     type="button"
//                                                     onClick={() => handleDeleteFile('images', index)}
//                                                     className="text-red-600 hover:text-red-800"
//                                                 >
//                                                     <FaTrash />
//                                                 </button>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                                 <div className="relative">
//                                     <div className="flex items-center justify-between mb-2">
//                                         <span className="text-sm font-medium text-gray-900">Videos ({formData.videos.length}/3)</span>
//                                         <button
//                                             type="button"
//                                             onClick={() => handleUploadClick(fileInputVideoRef)}
//                                             className="px-3 py-1 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//                                         >
//                                             <FaVideo className="inline mr-1" /> Upload Videos
//                                         </button>
//                                     </div>
//                                     <input
//                                         ref={fileInputVideoRef}
//                                         type="file"
//                                         name="videos"
//                                         onChange={handleFileChange}
//                                         accept="video/*"
//                                         multiple
//                                         className="hidden"
//                                     />
//                                     <ul className="space-y-2 max-h-40 overflow-y-auto">
//                                         {formData.videos.map((file, index) => (
//                                             <li key={index} className="flex items-center justify-between p-2 bg-gray-100 rounded-md">
//                                                 <span className="text-sm truncate">{file.name}</span>
//                                                 <button
//                                                     type="button"
//                                                     onClick={() => handleDeleteFile('videos', index)}
//                                                     className="text-red-600 hover:text-red-800"
//                                                 >
//                                                     <FaTrash />
//                                                 </button>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             </div>
//                             <div>
//                                 <button
//                                     type="submit"
//                                     disabled={loading}
//                                     className="w-full px-4 py-2 text-white font-medium bg-rose-600 hover:bg-rose-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 disabled:opacity-50 disabled:cursor-not-allowed"
//                                 >
//                                     {loading ? 'Creating Event...' : 'Create Event'}
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//             <Toaster position="top-right" />
//         </div>
//     );
// }

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Logo = () => (
//     <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <rect width="32" height="32" rx="4" fill="#1e3a8a" />
//         <circle cx="16" cy="16" r="8" fill="#f59e0b" />
//         <circle cx="16" cy="16" r="4" fill="#1e3a8a" />
//     </svg>
// );

// const Navbar = () => {
//     const navigate = useNavigate();
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const handleLogout = () => {
//         localStorage.removeItem('token');
//         navigate('/login');
//     };

//     return (
//         <nav className="bg-blue-900 shadow-lg">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex justify-between h-16">
//                     <div className="flex-shrink-0 flex items-center">
//                         <Logo />
//                         <span className="ml-2 text-xl font-bold text-yellow-500">PhotoEvent</span>
//                     </div>
//                     <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
//                         <Link to="/dashboard" className="border-transparent text-gray-100 hover:border-yellow-500 hover:text-yellow-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200">
//                             Dashboard
//                         </Link>
//                         <Link to="/create-event" className="border-transparent text-gray-100 hover:border-yellow-500 hover:text-yellow-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200">
//                             Create Event
//                         </Link>
//                         <button onClick={handleLogout} className="border-transparent text-gray-100 hover:border-yellow-500 hover:text-yellow-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200">
//                             Logout
//                         </button>
//                     </div>
//                     <div className="-mr-2 flex items-center sm:hidden">
//                         <button
//                             onClick={() => setIsMenuOpen(!isMenuOpen)}
//                             className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//                         >
//                             <span className="sr-only">Open main menu</span>
//                             {isMenuOpen ? (
//                                 <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                                 </svg>
//                             ) : (
//                                 <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                                 </svg>
//                             )}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {isMenuOpen && (
//                 <div className="sm:hidden">
//                     <div className="pt-2 pb-3 space-y-1">
//                         <Link to="/dashboard" className="bg-blue-800 border-yellow-500 text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
//                             Dashboard
//                         </Link>
//                         <Link to="/create-event" className="border-transparent text-gray-100 hover:bg-blue-800 hover:border-yellow-500 hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
//                             Create Event
//                         </Link>
//                         <button onClick={handleLogout} className="border-transparent text-gray-100 hover:bg-blue-800 hover:border-yellow-500 hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium w-full text-left">
//                             Logout
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;



// import React, { useRef } from 'react';
// import { createEvent } from '../api/api';
// import { useNavigate } from 'react-router-dom';
// import { FaTrash, FaImage, FaVideo } from 'react-icons/fa';
// import toast, { Toaster } from 'react-hot-toast';
// import { useFormik } from 'formik';
// import { z } from 'zod';
// import { toFormikValidationSchema } from 'zod-formik-adapter';
// import { ArrowLeft } from 'lucide-react';
// // Zod schema for form validation
// const eventSchema = z.object({
//     customerName: z.string().min(1, 'Customer Name is required'),
//     phoneNumber: z.string().min(1, 'Phone Number is required'),
//     eventName: z.string().min(1, 'Event Name is required'),
//     images: z.array(z.any()).min(1, 'At least one image is required').max(5, 'Maximum 5 images allowed'),
//     videos: z.array(z.any()).max(3, 'Maximum 3 videos allowed'),
// });

// export default function EventForm() {
//     const fileInputImgRef = useRef(null);
//     const fileInputVideoRef = useRef(null);
//     const navigate = useNavigate();

//     const formik = useFormik({
//         initialValues: {
//             customerName: '',
//             phoneNumber: '',
//             eventName: '',
//             images: [],
//             videos: [],
//         },
//         validationSchema: toFormikValidationSchema(eventSchema),
//         onSubmit: async (values, { setSubmitting }) => {
//             const form = new FormData();
//             form.append('customerName', values.customerName);
//             form.append('phoneNumber', values.phoneNumber);
//             form.append('eventName', values.eventName);
//             values.images.forEach(image => form.append('images', image));
//             values.videos.forEach(video => form.append('videos', video));

//             try {
//                 await createEvent(form);
//                 toast.success('Event created successfully!');
//                 navigate('/dashboard');
//             } catch (error) {
//                 console.error('Error creating event', error);
//                 toast.error('Failed to create event. Please try again.');
//             } finally {
//                 setSubmitting(false);
//             }
//         },
//     });

//     const handleFileChange = (e) => {
//         const { name, files } = e.target;
//         if (files) {
//             const newFiles = Array.from(files);
//             const totalImages = name === 'images' ? formik.values.images.length + newFiles.length : formik.values.images.length;
//             const totalVideos = name === 'videos' ? formik.values.videos.length + newFiles.length : formik.values.videos.length;

//             if (totalImages + totalVideos > 5) {
//                 toast.error('You can upload a maximum of 5 files in total.');
//                 return;
//             }

//             if (name === 'images' && totalImages > 5) {
//                 toast.error('You can upload a maximum of 5 images.');
//                 return;
//             }

//             if (name === 'videos' && totalVideos > 2) {
//                 toast.error('You can upload a maximum of 2 videos.');
//                 return;
//             }

//             if (totalImages === 5 && name === 'videos') {
//                 toast.error('You have already uploaded 5 images. No videos allowed.');
//                 return;
//             }

//             if (totalVideos === 2 && name === 'images') {
//                 toast.error('You have already uploaded 2 videos. No images allowed.');
//                 return;
//             }

//             formik.setFieldValue(name, [...formik.values[name], ...newFiles]);
//         }
//     };

//     const handleDeleteFile = (name, index) => {
//         const updatedFiles = formik.values[name].filter((_, i) => i !== index);
//         formik.setFieldValue(name, updatedFiles);
//     };

//     const handleUploadClick = (ref) => {
//         ref.current?.click();
//     };

//     return (
//         <div className="min-h-screen bg-gray-200 py-6 flex flex-col justify-center sm:py-12">
//             <div className="relative py-3 sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto w-full px-4 sm:px-0">
//                 <div className="absolute inset-0 bg-blue-900 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
//                 <div className="relative bg-white shadow-lg sm:rounded-3xl sm:p-10 md:p-16 lg:p-20">
//                     <button
//                         onClick={() => navigate(-1)}
//                         className="absolute top-4 left-4 text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
//                     >
//                         <ArrowLeft className="w-6 h-6" />
//                     </button>
//                     <div className="max-w-full mx-auto">
//                         <div>
//                             <h1 className="text-2xl font-semibold mb-6 text-center text-blue-900">Create Event</h1>
//                         </div>
//                         <form onSubmit={formik.handleSubmit} className="space-y-6">
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                 <div className="relative">
//                                     <input
//                                         id="customerName"
//                                         name="customerName"
//                                         type="text"
//                                         className={`peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-900 ${formik.touched.customerName && formik.errors.customerName ? 'border-red-500' : ''
//                                             }`}
//                                         placeholder="Customer Name"
//                                         {...formik.getFieldProps('customerName')}
//                                     />
//                                     <label htmlFor="customerName" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
//                                         Customer Name
//                                     </label>
//                                     {formik.touched.customerName && formik.errors.customerName && (
//                                         <div className="text-red-500 text-xs mt-1">{formik.errors.customerName}</div>
//                                     )}
//                                 </div>
//                                 <div className="relative">
//                                     <input
//                                         id="phoneNumber"
//                                         name="phoneNumber"
//                                         type="tel"
//                                         className={`peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-900 ${formik.touched.phoneNumber && formik.errors.phoneNumber ? 'border-red-500' : ''
//                                             }`}
//                                         placeholder="Phone Number"
//                                         {...formik.getFieldProps('phoneNumber')}
//                                     />
//                                     <label htmlFor="phoneNumber" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
//                                         Phone Number
//                                     </label>
//                                     {formik.touched.phoneNumber && formik.errors.phoneNumber && (
//                                         <div className="text-red-500 text-xs mt-1">{formik.errors.phoneNumber}</div>
//                                     )}
//                                 </div>
//                             </div>
//                             <div className="relative">
//                                 <input
//                                     id="eventName"
//                                     name="eventName"
//                                     type="text"
//                                     className={`peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-900 ${formik.touched.eventName && formik.errors.eventName ? 'border-red-500' : ''
//                                         }`}
//                                     placeholder="Event Name"
//                                     {...formik.getFieldProps('eventName')}
//                                 />
//                                 <label htmlFor="eventName" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
//                                     Event Name
//                                 </label>
//                                 {formik.touched.eventName && formik.errors.eventName && (
//                                     <div className="text-red-500 text-xs mt-1">{formik.errors.eventName}</div>
//                                 )}
//                             </div>
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                 <div className="relative">
//                                     <div className="flex items-center justify-between mb-2">
//                                         <span className="text-sm font-medium text-gray-900">Images ({formik.values.images.length}/5)</span>
//                                         <button
//                                             type="button"
//                                             onClick={() => handleUploadClick(fileInputImgRef)}
//                                             className="px-3 py-1 text-sm font-medium text-white bg-blue-900 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
//                                         >
//                                             <FaImage className="inline mr-1" /> Upload Images
//                                         </button>
//                                     </div>
//                                     <input
//                                         ref={fileInputImgRef}
//                                         type="file"
//                                         name="images"
//                                         onChange={handleFileChange}
//                                         accept="image/*"
//                                         multiple
//                                         className="hidden"
//                                     />
//                                     <ul className="space-y-2 max-h-40 overflow-y-auto">
//                                         {formik.values.images.map((file, index) => (
//                                             <li key={index} className="flex items-center justify-between p-2 bg-gray-100 rounded-md">
//                                                 <span className="text-sm truncate">{file.name}</span>
//                                                 <button
//                                                     type="button"
//                                                     onClick={() => handleDeleteFile('images', index)}
//                                                     className="text-red-600 hover:text-red-800"
//                                                 >
//                                                     <FaTrash />
//                                                 </button>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                     {formik.touched.images && formik.errors.images && (
//                                         <div className="text-red-500 text-xs mt-1">{formik.errors.images}</div>
//                                     )}
//                                 </div>
//                                 <div className="relative">
//                                     <div className="flex items-center justify-between mb-2">
//                                         <span className="text-sm font-medium text-gray-900">Videos ({formik.values.videos.length}/3)</span>
//                                         <button
//                                             type="button"
//                                             onClick={() => handleUploadClick(fileInputVideoRef)}
//                                             className="px-3 py-1 text-sm font-medium text-white bg-yellow-500 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
//                                         >
//                                             <FaVideo className="inline mr-1" /> Upload Videos
//                                         </button>
//                                     </div>
//                                     <input
//                                         ref={fileInputVideoRef}
//                                         type="file"
//                                         name="videos"
//                                         onChange={handleFileChange}
//                                         accept="video/*"
//                                         multiple
//                                         className="hidden"
//                                     />
//                                     <ul className="space-y-2 max-h-40 overflow-y-auto">
//                                         {formik.values.videos.map((file, index) => (
//                                             <li key={index} className="flex items-center justify-between p-2 bg-gray-100 rounded-md">
//                                                 <span className="text-sm truncate">{file.name}</span>
//                                                 <button
//                                                     type="button"
//                                                     onClick={() => handleDeleteFile('videos', index)}
//                                                     className="text-red-600 hover:text-red-800"
//                                                 >
//                                                     <FaTrash />
//                                                 </button>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                     {formik.touched.videos && formik.errors.videos && (
//                                         <div className="text-red-500 text-xs mt-1">{formik.errors.videos}</div>
//                                     )}
//                                 </div>
//                             </div>
//                             <div>
//                                 <button
//                                     type="submit"
//                                     disabled={formik.isSubmitting}
//                                     className="w-full px-4 py-2 text-white font-medium bg-blue-900 hover:bg-blue-800 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
//                                 >
//                                     {formik.isSubmitting ? 'Creating Event...' : 'Create Event'}
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//             <Toaster position="top-right" />
//         </div>
//     );
// }



// import React, { useRef } from 'react';
// import { createEvent } from '../api/api';
// import { useNavigate } from 'react-router-dom';
// import { FaTrash, FaImage, FaVideo } from 'react-icons/fa';
// import { ArrowLeft } from 'lucide-react';
// import toast, { Toaster } from 'react-hot-toast';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

// const validationSchema = Yup.object().shape({
//     customerName: Yup.string().required('Customer Name is required'),
//     phoneNumber: Yup.string().required('Phone Number is required'),
//     eventName: Yup.string().required('Event Name is required'),
//     images: Yup.array().min(1, 'At least one image is required').max(5, 'Maximum 5 images allowed'),
//     videos: Yup.array().max(2, 'Maximum 2 videos allowed'),
// });

// export default function EventForm() {
//     const fileInputImgRef = useRef(null);
//     const fileInputVideoRef = useRef(null);
//     const navigate = useNavigate();

//     const formik = useFormik({
//         initialValues: {
//             customerName: '',
//             phoneNumber: '',
//             eventName: '',
//             images: [],
//             videos: [],
//         },
//         validationSchema,
//         onSubmit: async (values, { setSubmitting }) => {
//             const form = new FormData();
//             form.append('customerName', values.customerName);
//             form.append('phoneNumber', values.phoneNumber);
//             form.append('eventName', values.eventName);
//             values.images.forEach(image => form.append('images', image));
//             values.videos.forEach(video => form.append('videos', video));

//             try {
//                 await createEvent(form);
//                 toast.success('Event created successfully!');
//                 navigate('/dashboard');
//             } catch (error) {
//                 console.error('Error creating event', error);
//                 toast.error('Failed to create event. Please try again.');
//             } finally {
//                 setSubmitting(false);
//             }
//         },
//     });

//     const handleFileChange = (e) => {
//         const { name, files } = e.target;
//         if (files) {
//             const newFiles = Array.from(files);
//             const totalImages = formik.values.images.length;
//             const totalVideos = formik.values.videos.length;

//             if (totalImages === 5) {
//                 toast.error('You have already uploaded 5 images. No more files can be added.');
//                 return;
//             }

//             if (name === 'images') {
//                 const availableSlots = 5 - totalImages;
//                 const filesToAdd = newFiles.slice(0, availableSlots);
//                 formik.setFieldValue('images', [...formik.values.images, ...filesToAdd]);
//                 if (filesToAdd.length < newFiles.length) {
//                     toast.error(`Only ${filesToAdd.length} image(s) added. Maximum limit reached.`);
//                 }
//             } else if (name === 'videos') {
//                 if (totalImages === 4 && totalVideos < 2) {
//                     const filesToAdd = newFiles.slice(0, 2 - totalVideos);
//                     formik.setFieldValue('videos', [...formik.values.videos, ...filesToAdd]);
//                     if (filesToAdd.length < newFiles.length) {
//                         toast.error(`Only ${filesToAdd.length} video(s) added. Maximum limit reached.`);
//                     }
//                 } else if (totalImages === 3 && totalVideos === 0) {
//                     formik.setFieldValue('videos', [newFiles[0]]);
//                     if (newFiles.length > 1) {
//                         toast.error('Only 1 video added. Maximum limit reached.');
//                     }
//                 } else {
//                     toast.error('Cannot add more videos based on the current number of images.');
//                 }
//             }
//         }
//     };

//     const handleDeleteFile = (name, index) => {
//         const updatedFiles = formik.values[name].filter((_, i) => i !== index);
//         formik.setFieldValue(name, updatedFiles);
//     };

//     const handleUploadClick = (ref) => {
//         ref.current?.click();
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
//                 <div className="p-8">
//                     <div className="flex justify-between items-center mb-6">
//                         <button
//                             onClick={() => navigate(-1)}
//                             className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300 flex items-center"
//                         >
//                             <ArrowLeft className="w-5 h-5 mr-2" />
//                             Back
//                         </button>
//                         <h2 className="text-3xl font-extrabold text-gray-900">Create Event</h2>
//                     </div>

//                     <form onSubmit={formik.handleSubmit} className="space-y-6">
//                         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
//                             <div>
//                                 <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">
//                                     Customer Name
//                                 </label>
//                                 <input
//                                     id="customerName"
//                                     name="customerName"
//                                     type="text"
//                                     required
//                                     className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                                     {...formik.getFieldProps('customerName')}
//                                 />
//                                 {formik.touched.customerName && formik.errors.customerName && (
//                                     <p className="mt-2 text-sm text-red-600">{formik.errors.customerName}</p>
//                                 )}
//                             </div>

//                             <div>
//                                 <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
//                                     Phone Number
//                                 </label>
//                                 <input
//                                     id="phoneNumber"
//                                     name="phoneNumber"
//                                     type="tel"
//                                     required
//                                     className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                                     {...formik.getFieldProps('phoneNumber')}
//                                 />
//                                 {formik.touched.phoneNumber && formik.errors.phoneNumber && (
//                                     <p className="mt-2 text-sm text-red-600">{formik.errors.phoneNumber}</p>
//                                 )}
//                             </div>
//                         </div>

//                         <div>
//                             <label htmlFor="eventName" className="block text-sm font-medium text-gray-700">
//                                 Event Name
//                             </label>
//                             <input
//                                 id="eventName"
//                                 name="eventName"
//                                 type="text"
//                                 required
//                                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                                 {...formik.getFieldProps('eventName')}
//                             />
//                             {formik.touched.eventName && formik.errors.eventName && (
//                                 <p className="mt-2 text-sm text-red-600">{formik.errors.eventName}</p>
//                             )}
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                 Images ({formik.values.images.length}/5)
//                             </label>
//                             <div className="flex items-center justify-between mb-2">
//                                 <button
//                                     type="button"
//                                     onClick={() => handleUploadClick(fileInputImgRef)}
//                                     className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                                     disabled={formik.values.images.length >= 5}
//                                 >
//                                     <FaImage className="inline mr-2" /> Upload Images
//                                 </button>
//                             </div>
//                             <input
//                                 ref={fileInputImgRef}
//                                 type="file"
//                                 name="images"
//                                 onChange={handleFileChange}
//                                 accept="image/*"
//                                 multiple
//                                 className="hidden"
//                             />
//                             <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//                                 {formik.values.images.map((file, index) => (
//                                     <li key={index} className="relative">
//                                         <img
//                                             src={URL.createObjectURL(file)}
//                                             alt={`Uploaded ${index + 1}`}
//                                             className="h-24 w-full object-cover rounded-md"
//                                         />
//                                         <button
//                                             type="button"
//                                             onClick={() => handleDeleteFile('images', index)}
//                                             className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 m-1 hover:bg-red-600 focus:outline-none"
//                                         >
//                                             <FaTrash className="w-3 h-3" />
//                                         </button>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-2">
//                                 Videos ({formik.values.videos.length}/{formik.values.images.length === 4 ? '2' : '1'})
//                             </label>
//                             <div className="flex items-center justify-between mb-2">
//                                 <button
//                                     type="button"
//                                     onClick={() => handleUploadClick(fileInputVideoRef)}
//                                     className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//                                     disabled={formik.values.images.length < 3 || formik.values.images.length === 5 ||
//                                         (formik.values.images.length === 3 && formik.values.videos.length === 1) ||
//                                         (formik.values.images.length === 4 && formik.values.videos.length === 2)}
//                                 >
//                                     <FaVideo className="inline mr-2" /> Upload Videos
//                                 </button>
//                             </div>
//                             <input
//                                 ref={fileInputVideoRef}
//                                 type="file"
//                                 name="videos"
//                                 onChange={handleFileChange}
//                                 accept="video/*"
//                                 multiple
//                                 className="hidden"
//                             />
//                             <ul className="space-y-2">
//                                 {formik.values.videos.map((file, index) => (
//                                     <li key={index} className="flex items-center justify-between p-2 bg-gray-100 rounded-md">
//                                         <span className="text-sm truncate">{file.name}</span>
//                                         <button
//                                             type="button"
//                                             onClick={() => handleDeleteFile('videos', index)}
//                                             className="text-red-600 hover:text-red-800"
//                                         >
//                                             <FaTrash />
//                                         </button>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>

//                         <div>
//                             <button
//                                 type="submit"
//                                 disabled={formik.isSubmitting}
//                                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
//                             >
//                                 {formik.isSubmitting ? 'Creating Event...' : 'Create Event'}
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//             <Toaster position="top-right" />
//         </div>
//     );
// }

import React, { useRef } from 'react';
import { createEvent } from '../api/api';
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaImage, FaVideo } from 'react-icons/fa';
import { ArrowLeft } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
    customerName: z.string().min(1, 'Customer Name is required'),
    phoneNumber: z.string().min(1, 'Phone Number is required'),
    eventName: z.string().min(1, 'Event Name is required'),
    images: z.array(z.any()).min(1, 'At least one image is required').max(5, 'Maximum 5 images allowed'),
    videos: z.array(z.any()).max(2, 'Maximum 2 videos allowed'),
});

export default function EventForm() {
    const fileInputImgRef = useRef(null);
    const fileInputVideoRef = useRef(null);
    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors, isSubmitting }, setValue, watch } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            customerName: '',
            phoneNumber: '',
            eventName: '',
            images: [],
            videos: [],
        },
    });

    const images = watch('images');
    const videos = watch('videos');

    const onSubmit = async (data) => {
        const form = new FormData();
        form.append('customerName', data.customerName);
        form.append('phoneNumber', data.phoneNumber);
        form.append('eventName', data.eventName);
        data.images.forEach(image => form.append('images', image));
        data.videos.forEach(video => form.append('videos', video));

        try {
            await createEvent(form);
            toast.success('Event created successfully!');
            navigate('/dashboard');
        } catch (error) {
            console.error('Error creating event', error);
            toast.error('Failed to create event. Please try again.');
        }
    };

    // const handleFileChange = (e, fieldName) => {
    //     const files = Array.from(e.target.files);
    //     const currentImages = watch('images');
    //     const currentVideos = watch('videos');

    //     if (fieldName === 'images') {
    //         const availableSlots = 5 - currentImages.length;
    //         const filesToAdd = files.slice(0, availableSlots);
    //         setValue('images', [...currentImages, ...filesToAdd]);
    //         if (filesToAdd.length < files.length) {
    //             toast.error(`Only ${filesToAdd.length} image(s) added. Maximum limit reached.`);
    //         }
    //     } else if (fieldName === 'videos') {
    //         if (currentImages.length === 5) {
    //             toast.error('You have already uploaded 5 images. No videos can be added.');
    //             return;
    //         }
    //         if (currentImages.length === 4 && currentVideos.length < 2) {
    //             const filesToAdd = files.slice(0, 2 - currentVideos.length);
    //             setValue('videos', [...currentVideos, ...filesToAdd]);
    //             if (filesToAdd.length < files.length) {
    //                 toast.error(`Only ${filesToAdd.length} video(s) added. Maximum limit reached.`);
    //             }
    //         } else if (currentImages.length === 3 && currentVideos.length === 0) {
    //             setValue('videos', [files[0]]);
    //             if (files.length > 1) {
    //                 toast.error('Only 1 video added. Maximum limit reached.');
    //             }
    //         } else {
    //             toast.error('Cannot add more videos based on the current number of images.');
    //         }
    //     }
    // };

    // const handleDeleteFile = (fieldName, index) => {
    //     const currentFiles = watch(fieldName);
    //     setValue(fieldName, currentFiles.filter((_, i) => i !== index));
    // };

    const handleFileChange = (e, fieldName) => {
        const files = Array.from(e.target.files);
        const currentImages = watch('images') || [];
        const currentVideos = watch('videos') || [];

        if (fieldName === 'images') {
            const availableSlots = 5 - currentImages.length;

            if (currentImages.length >= 5) {
                toast.error('Maximum of 5 images allowed.');
                return;
            }

            const filesToAdd = files.slice(0, availableSlots);
            setValue('images', [...currentImages, ...filesToAdd]);

            if (filesToAdd.length < files.length) {
                toast.error(`Only ${filesToAdd.length} image(s) added. Maximum limit reached.`);
            }
        } else if (fieldName === 'videos') {
            if (currentImages.length === 5) {
                // Condition 1: No videos allowed if 5 images are uploaded
                toast.error('You have already uploaded 5 images. No videos can be added.');
                return;
            }

            if (currentImages.length === 4) {
                // Condition 2: Allow only one video if 4 images are uploaded
                const availableVideoSlots = 1 - currentVideos.length;
                if (availableVideoSlots <= 0) {
                    toast.error('Only 1 video allowed when 4 images are uploaded.');
                    return;
                }
                const filesToAdd = files.slice(0, availableVideoSlots);
                setValue('videos', [...currentVideos, ...filesToAdd]);
                if (filesToAdd.length < files.length) {
                    toast.error(`Only ${filesToAdd.length} video(s) added. Maximum limit reached.`);
                }
            } else if (currentImages.length === 3) {
                // Condition 3: Allow up to 2 videos if 3 images are uploaded
                const availableVideoSlots = 2 - currentVideos.length;
                if (availableVideoSlots <= 0) {
                    toast.error('Only 2 videos allowed when 3 images are uploaded.');
                    return;
                }
                const filesToAdd = files.slice(0, availableVideoSlots);
                setValue('videos', [...currentVideos, ...filesToAdd]);
                if (filesToAdd.length < files.length) {
                    toast.error(`Only ${filesToAdd.length} video(s) added. Maximum limit reached.`);
                }
            } else {
                // If conditions don't match any of the above, show an error
                toast.error('Cannot add more videos based on the current number of images.');
            }
        }
    };

    // Handle file deletion and minimum image check
    const handleDeleteFile = (fieldName, index) => {
        const currentFiles = watch(fieldName);
        const updatedFiles = currentFiles.filter((_, i) => i !== index);
        setValue(fieldName, updatedFiles);

        // Ensure minimum one image requirement on image deletion
        if (fieldName === 'images' && updatedFiles.length === 0) {
            toast.error('At least one image is required to create an event.');
        }
    };


    const handleUploadClick = (ref) => {
        ref.current?.click();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-indigo-300 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-gray-200 rounded-xl shadow-md overflow-hidden">
                <div className="p-8">
                    <div className="flex justify-between items-center mb-6">
                        <button
                            onClick={() => navigate(-1)}
                            className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300 flex items-center"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Back
                        </button>
                        <h2 className="text-3xl font-extrabold text-gray-900">Create Event</h2>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">
                                    Customer Name
                                </label>
                                <Controller
                                    name="customerName"
                                    control={control}
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            type="text"
                                            id="customerName"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    )}
                                />
                                {errors.customerName && (
                                    <p className="mt-2 text-sm text-red-600">{errors.customerName.message}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                                    Phone Number
                                </label>
                                <Controller
                                    name="phoneNumber"
                                    control={control}
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            type="tel"
                                            id="phoneNumber"
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    )}
                                />
                                {errors.phoneNumber && (
                                    <p className="mt-2 text-sm text-red-600">{errors.phoneNumber.message}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="eventName" className="block text-sm font-medium text-gray-700">
                                Event Name
                            </label>
                            <Controller
                                name="eventName"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="text"
                                        id="eventName"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                )}
                            />
                            {errors.eventName && (
                                <p className="mt-2 text-sm text-red-600">{errors.eventName.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Images ({images.length}/5)
                            </label>
                            <div className="flex items-center justify-between mb-2">
                                <button
                                    type="button"
                                    onClick={() => handleUploadClick(fileInputImgRef)}
                                    className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    disabled={images.length === 5 ||
                                        (images.length === 3 && videos.length === 2) ||
                                        (images.length === 4 && videos.length === 1)}
                                >
                                    <FaImage className="inline mr-2" /> Upload Images
                                </button>
                            </div>
                            <input
                                ref={fileInputImgRef}
                                type="file"
                                onChange={(e) => handleFileChange(e, 'images')}
                                accept="image/*"
                                multiple
                                className="hidden"
                            />
                            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {images.map((file, index) => (
                                    <li key={index} className="relative">
                                        <img
                                            src={URL.createObjectURL(file)}
                                            alt={`Uploaded ${index + 1}`}
                                            className="h-24 w-full object-cover rounded-md"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => handleDeleteFile('images', index)}
                                            className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 m-1 hover:bg-red-600 focus:outline-none"
                                        >
                                            <FaTrash className="w-3 h-3" />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            {errors.images && (
                                <p className="mt-2 text-sm text-red-600">{errors.images.message}</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Videos ({videos.length}/{images.length === 4 ? '2' : '1'})
                            </label>
                            <div className="flex items-center justify-between mb-2">
                                <button
                                    type="button"
                                    onClick={() => handleUploadClick(fileInputVideoRef)}
                                    className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                    disabled={images.length === 5 ||
                                        (images.length === 3 && videos.length === 2) ||
                                        (images.length === 4 && videos.length === 1)}
                                >
                                    <FaVideo className="inline mr-2" /> Upload Videos
                                </button>
                            </div>
                            <input
                                ref={fileInputVideoRef}
                                type="file"
                                onChange={(e) => handleFileChange(e, 'videos')}
                                accept="video/*"
                                multiple
                                className="hidden"
                            />
                            <ul className="space-y-2">
                                {videos.map((file, index) => (
                                    <li key={index} className="flex items-center justify-between p-2 bg-gray-100 rounded-md">
                                        <span className="text-sm truncate">{file.name}</span>
                                        <button
                                            type="button"
                                            onClick={() => handleDeleteFile('videos', index)}
                                            className="text-red-600 hover:text-red-800"
                                        >
                                            <FaTrash />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            {errors.videos && (
                                <p className="mt-2 text-sm text-red-600">{errors.videos.message}</p>
                            )}
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Creating Event...' : 'Create Event'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Toaster position="top-right" />
        </div>
    );
}