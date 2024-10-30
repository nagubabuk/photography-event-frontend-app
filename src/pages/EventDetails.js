// // src/pages/EventDetails.js
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getEventById } from '../api/api';

// const EventDetails = () => {
//     const { id } = useParams(); // Get the event ID from the URL
//     const [event, setEvent] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchEventDetails = async () => {
//             try {
//                 const response = await getEventById(id);
//                 setEvent(response.data);
//                 setLoading(false);
//             } catch (err) {
//                 setError('Failed to load event details');
//                 setLoading(false);
//             }
//         };
//         fetchEventDetails();
//     }, [id]);

//     if (loading) return <div className="loading">Loading...</div>;
//     if (error) return <div className="error">{error}</div>;

//     return (
//         <div className="event-details-container">
//             <h2 className="title">Event Details</h2>
//             {event && (
//                 <div className="event-card">
//                     <p><strong>Event ID:</strong> {event.eventId}</p>
//                     <div className="media-section">
//                         <h3>Images:</h3>
//                         {event.images && event.images.length > 0 ? (
//                             <div className="image-gallery">
//                                 {event.images.map((image, index) => (
//                                     <img
//                                         key={index}
//                                         src={image}
//                                         alt={`Event Image ${index + 1}`}
//                                         className="event-image"
//                                     />
//                                 ))}
//                             </div>
//                         ) : (
//                             <p>No images available</p>
//                         )}
//                     </div>
//                     <div className="media-section">
//                         <h3>Videos:</h3>
//                         {event.videos && event.videos.length > 0 ? (
//                             <div className="video-gallery">
//                                 {event.videos.map((video, index) => (
//                                     <video
//                                         key={index}
//                                         src={video}
//                                         controls
//                                         className="event-video"
//                                     />
//                                 ))}
//                             </div>
//                         ) : (
//                             <p>No videos available</p>
//                         )}
//                     </div>

//                 </div>
//             )}
//         </div>
//     );
// };

// export default EventDetails;


// import React, { useEffect, useState } from 'react'
// import { useParams, useNavigate } from 'react-router-dom'
// import { getEventById } from '../api/api'
// import { ArrowLeft } from 'lucide-react'

// export default function EventDetails() {
//     const { id } = useParams()
//     const navigate = useNavigate()
//     const [event, setEvent] = useState(null)
//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState(null)

//     useEffect(() => {
//         const fetchEventDetails = async () => {
//             try {
//                 const response = await getEventById(id)
//                 setEvent(response.data)
//                 setLoading(false)
//             } catch (err) {
//                 setError('Failed to load event details')
//                 setLoading(false)
//             }
//         }
//         fetchEventDetails()
//     }, [id])

//     if (loading) return <div className="flex items-center justify-center h-screen text-2xl font-semibold text-white bg-blue-900">Loading...</div>
//     if (error) return <div className="flex items-center justify-center h-screen text-2xl font-semibold text-red-400 bg-blue-900">{error}</div>

//     return (
//         <div className="min-h-screen bg-blue-900 text-white">
//             <div className="container mx-auto px-4 py-8 max-w-6xl">
//                 <button
//                     onClick={() => navigate(-1)}
//                     className="mb-6 flex items-center text-white hover:text-blue-300 transition-colors duration-300"
//                 >
//                     <ArrowLeft className="mr-2" />
//                     Back to Events
//                 </button>

//                 <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white animate-fade-in-down">Event Gallery</h2>

//                 {event && (
//                     <div className="space-y-12">
//                         <div className="bg-blue-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-xl animate-fade-in">
//                             <p className="text-2xl font-semibold mb-4 text-blue-200">Event ID: {event.eventId}</p>

//                             <div className="mb-8">
//                                 <h3 className="text-3xl font-semibold mb-6 text-white">Images</h3>
//                                 {event.images && event.images.length > 0 ? (
//                                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                                         {event.images.slice(0, 5).map((image, index) => (
//                                             <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
//                                                 <img
//                                                     src={image}
//                                                     alt={`Event Image ${index + 1}`}
//                                                     className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
//                                                 />
//                                                 <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
//                                                 <p className="absolute bottom-4 left-4 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Image {index + 1}</p>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 ) : (
//                                     <p className="text-blue-300 italic">No images available</p>
//                                 )}
//                             </div>

//                             <div>
//                                 <h3 className="text-3xl font-semibold mb-6 text-white">Videos</h3>
//                                 {event.videos && event.videos.length > 0 ? (
//                                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                                         {event.videos.slice(0, 3).map((video, index) => (
//                                             <div key={index} className="relative overflow-hidden rounded-lg shadow-lg animate-fade-in-up" style={{ animationDelay: `${(index + 5) * 150}ms` }}>
//                                                 <video
//                                                     src={video}
//                                                     controls
//                                                     className="w-full h-48 object-cover"
//                                                 />
//                                             </div>
//                                         ))}
//                                     </div>
//                                 ) : (
//                                     <p className="text-blue-300 italic">No videos available</p>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }
// import React, { useEffect, useState } from 'react'
// import { useParams, useNavigate } from 'react-router-dom'
// import { getEventById } from '../api/api'
// import { ArrowLeft } from 'lucide-react'

// export default function EventDetails() {
//     const { id } = useParams()
//     const navigate = useNavigate()
//     const [event, setEvent] = useState(null)
//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState(null)

//     useEffect(() => {
//         const fetchEventDetails = async () => {
//             try {
//                 const response = await getEventById(id)
//                 setEvent(response.data)
//                 setLoading(false)
//             } catch (err) {
//                 setError('Failed to load event details')
//                 setLoading(false)
//             }
//         }
//         fetchEventDetails()
//     }, [id])

//     if (loading) return <div className="flex items-center justify-center h-screen text-2xl font-semibold text-gray-600">Loading...</div>
//     if (error) return <div className="flex items-center justify-center h-screen text-2xl font-semibold text-red-600">{error}</div>

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-indigo-400">
//             <div className="container mx-auto px-4 py-8 max-w-6xl">
//                 <button
//                     onClick={() => navigate(-1)}
//                     className="mb-6 flex items-center text-indigo-700 hover:text-indigo-900 transition-colors duration-300"
//                 >
//                     <ArrowLeft className="mr-2" />
//                     Back to Events
//                 </button>

//                 <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-indigo-900 animate-fade-in-down">Event Gallery</h2>

//                 {event && (
//                     <div className="space-y-12">
//                         <div className="bg-gray-200 bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-xl animate-fade-in">
//                             <p className="text-2xl font-semibold mb-4 text-indigo-800">Event ID: {event.eventId}</p>

//                             <div className="mb-8">
//                                 <h3 className="text-3xl font-semibold mb-6 text-indigo-900">Images</h3>
//                                 {event.images && event.images.length > 0 ? (
//                                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                                         {event.images.slice(0, 5).map((image, index) => (
//                                             <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
//                                                 <img
//                                                     src={image}
//                                                     alt={`Event Image ${index + 1}`}
//                                                     className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
//                                                 />
//                                                 <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
//                                                 <p className="absolute bottom-4 left-4 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Image {index + 1}</p>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 ) : (
//                                     <p className="text-indigo-600 italic">No images available</p>
//                                 )}
//                             </div>

//                             <div>
//                                 <h3 className="text-3xl font-semibold mb-6 text-indigo-900">Videos</h3>
//                                 {event.videos && event.videos.length > 0 ? (
//                                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                                         {event.videos.slice(0, 3).map((video, index) => (
//                                             <div key={index} className="relative overflow-hidden rounded-lg shadow-lg animate-fade-in-up" style={{ animationDelay: `${(index + 5) * 150}ms` }}>
//                                                 <video
//                                                     src={video}
//                                                     controls
//                                                     className="w-full h-48 object-cover"
//                                                 />
//                                             </div>
//                                         ))}
//                                     </div>
//                                 ) : (
//                                     <p className="text-indigo-600 italic">No videos available</p>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }

// import React, { useEffect, useState } from 'react'
// import { useParams, useNavigate } from 'react-router-dom'
// import { getEventById } from '../api/api'
// import { ArrowLeft, Image as ImageIcon, Video } from 'lucide-react'

// export default function EventDetails() {
//     const { id } = useParams()
//     const navigate = useNavigate()
//     const [event, setEvent] = useState(null)
//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState(null)

//     useEffect(() => {
//         const fetchEventDetails = async () => {
//             try {
//                 const response = await getEventById(id)
//                 setEvent(response.data)
//                 setLoading(false)
//             } catch (err) {
//                 setError('Failed to load event details')
//                 setLoading(false)
//             }
//         }
//         fetchEventDetails()
//     }, [id])

//     if (loading) return <div className="flex items-center justify-center h-screen text-2xl font-semibold text-gray-600">Loading...</div>
//     if (error) return <div className="flex items-center justify-center h-screen text-2xl font-semibold text-red-600">{error}</div>

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-pink-100 to-indigo-200">
//             <div className="container mx-auto px-4 py-8 max-w-7xl">
//                 <button
//                     onClick={() => navigate(-1)}
//                     className="mb-6 flex items-center text-indigo-700 hover:text-indigo-900 transition-colors duration-300"
//                 >
//                     <ArrowLeft className="mr-2" />
//                     Back to Events
//                 </button>

//                 {event && (
//                     <>
//                         <h1 className="text-4xl md:text-6xl font-cursive text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 animate-gradient-x">
//                             {event.eventName}
//                         </h1>

//                         <div className="space-y-16">
//                             <section className="space-y-8">
//                                 <h2 className="text-3xl font-bold text-indigo-800 flex items-center">
//                                     <ImageIcon className="mr-2" /> Images
//                                 </h2>
//                                 {event.images && event.images.length > 0 ? (
//                                     <div className="space-y-8">
//                                         <div className="overflow-hidden rounded-2xl shadow-2xl">
//                                             <img
//                                                 src={event.images[0]}
//                                                 alt="Main Event Image"
//                                                 className="w-full h-[50vh] md:h-[70vh] object-cover object-center transform hover:scale-105 transition-transform duration-500"
//                                             />
//                                         </div>
//                                         {event.images.length > 1 && (
//                                             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                                                 {event.images.slice(1).map((image, index) => (
//                                                     <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
//                                                         <img
//                                                             src={image}
//                                                             alt={`Event Image ${index + 2}`}
//                                                             className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
//                                                         />
//                                                         <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
//                                                         <p className="absolute bottom-4 left-4 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">Image {index + 2}</p>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         )}
//                                     </div>
//                                 ) : (
//                                     <p className="text-indigo-600 italic">No images available</p>
//                                 )}
//                             </section>

//                             <section className="space-y-8">
//                                 <h2 className="text-3xl font-bold text-indigo-800 flex items-center">
//                                     <Video className="mr-2" /> Videos
//                                 </h2>
//                                 {event.videos && event.videos.length > 0 ? (
//                                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                                         {event.videos.map((video, index) => (
//                                             <div key={index} className="relative overflow-hidden rounded-lg shadow-lg animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
//                                                 <video
//                                                     src={video}
//                                                     controls
//                                                     className="w-full h-48 object-cover"
//                                                 />
//                                                 <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-70 transition-opacity duration-300"></div>
//                                                 <p className="absolute bottom-4 left-4 text-white font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">Video {index + 1}</p>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 ) : (
//                                     <p className="text-indigo-600 italic">No videos available</p>
//                                 )}
//                             </section>
//                         </div>
//                     </>
//                 )}
//             </div>
//         </div>
//     )
// }

import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getEventById } from '../api/api'
import { ArrowLeft, Image as ImageIcon, Video } from 'lucide-react'

export default function EventDetails() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [event, setEvent] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchEventDetails = async () => {
            try {
                const response = await getEventById(id)
                setEvent(response.data)
                setLoading(false)
            } catch (err) {
                setError('Failed to load event details')
                setLoading(false)
            }
        }
        fetchEventDetails()
    }, [id])

    if (loading) return <div className="flex items-center justify-center h-screen text-2xl font-semibold text-gray-600">Loading...</div>
    if (error) return <div className="flex items-center justify-center h-screen text-2xl font-semibold text-red-600">{error}</div>

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 to-indigo-200">
            <div className="container mx-auto px-4 py-2 max-w-7xl">
                <button
                    onClick={() => navigate(-1)}
                    className="mb-2 flex items-center text-indigo-700 hover:text-indigo-900 transition-colors duration-300"
                >
                    <ArrowLeft className="mr-2" />
                    Back to Events
                </button>
                <h1 className="text-4xl md:text-6xl font-cursive text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 animate-gradient-x">
                    {event.eventName}
                </h1>
                {event && (
                    <>
                        <div className="space-y-12">
                            <section className="space-y-8">
                                <h2 className="text-3xl font-bold text-indigo-800 flex items-center">
                                    <ImageIcon className="mr-2" /> Images
                                </h2>
                                {event.images && event.images.length > 0 ? (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                        {event.images.map((image, index) => (
                                            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                                                <img
                                                    src={image}
                                                    alt={`Event Image ${index + 1}`}
                                                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                                    <p className="font-semibold text-lg">Image {index + 1}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-indigo-600 italic">No images available</p>
                                )}
                            </section>

                            <section className="space-y-8">
                                <h2 className="text-3xl font-bold text-indigo-800 flex items-center">
                                    <Video className="mr-2" /> Videos
                                </h2>
                                {event.videos && event.videos.length > 0 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {event.videos.map((video, index) => (
                                            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                                                <video
                                                    src={video}
                                                    controls
                                                    className="w-full h-48 object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-70 transition-opacity duration-300"></div>
                                                <p className="absolute bottom-4 left-4 text-white font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">Video {index + 1}</p>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-indigo-600 italic">No videos available</p>
                                )}
                            </section>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}