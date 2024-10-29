import React, { useEffect, useState } from 'react';
import { getEvents } from '../api/api';
import Navbar from '../components/Navbar';
import { useNavigate, Link } from 'react-router-dom';

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await getEvents();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events', error);
      }
    };
    fetchEvents();
  }, []);

  const handleRowClick = (eventId) => {
    navigate(`/events/${eventId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Your Events</h1>
          <Link
            to="/create-event"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
          >
            Create Event
          </Link>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left">Event Name</th>
                  <th className="px-4 py-3 text-left">Customer Name</th>
                  <th className="px-4 py-3 text-left">Phone Number</th>
                  <th className="px-4 py-3 text-left">Date Created</th>
                  <th className="px-4 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {events.map((event) => (
                  <tr
                    key={event.id}
                    onClick={() => handleRowClick(event._id)}
                    className="hover:bg-gray-50 cursor-pointer transition duration-150 ease-in-out"
                  >
                    <td className="px-4 py-3">{event.eventName}</td>
                    <td className="px-4 py-3">{event.customerName}</td>
                    <td className="px-4 py-3">{event.phoneNumber}</td>
                    <td className="px-4 py-3">{new Date(event.createdAt).toLocaleString()}</td>
                    <td className="px-4 py-3">
                      <Link
                        to={`/events/${event._id}`}
                        className="text-blue-500 hover:text-blue-600 font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;