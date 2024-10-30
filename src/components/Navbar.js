// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';

// // const Navbar = () => {
// //   const navigate = useNavigate();
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// //   const handleLogout = () => {
// //     localStorage.removeItem('token');
// //     navigate('/login');
// //   };

// //   return (
// //     <nav className="bg-white shadow-lg">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex justify-between h-16">
// //           <div className="flex-shrink-0 flex items-center">
// //             <img className="h-8 w-auto" src="/logo.svg" alt="App Logo" />
// //           </div>
// //           <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
// //             <Link to="/dashboard" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
// //               Dashboard
// //             </Link>
// //             <Link to="/create-event" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
// //               Create Event
// //             </Link>
// //             <button onClick={handleLogout} className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
// //               Logout
// //             </button>
// //           </div>
// //           <div className="-mr-2 flex items-center sm:hidden">
// //             <button
// //               onClick={() => setIsMenuOpen(!isMenuOpen)}
// //               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
// //             >
// //               <span className="sr-only">Open main menu</span>
// //               {isMenuOpen ? (
// //                 <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
// //                 </svg>
// //               ) : (
// //                 <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
// //                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
// //                 </svg>
// //               )}
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {isMenuOpen && (
// //         <div className="sm:hidden">
// //           <div className="pt-2 pb-3 space-y-1">
// //             <Link to="/dashboard" className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
// //               Dashboard
// //             </Link>
// //             <Link to="/create-event" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
// //               Create Event
// //             </Link>
// //             <button onClick={handleLogout} className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium w-full text-left">
// //               Logout
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // };

// // export default Navbar;
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   return (
//     <nav className="bg-teal-600 shadow-lg">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex-shrink-0 flex items-center">
//             <img className="h-8 w-auto" src="/logo.svg" alt="App Logo" />
//           </div>
//           <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
//             <Link to="/dashboard" className="border-transparent text-teal-100 hover:border-teal-300 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200">
//               Dashboard
//             </Link>
//             <Link to="/create-event" className="border-transparent text-teal-100 hover:border-teal-300 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200">
//               Create Event
//             </Link>
//             <button onClick={handleLogout} className="border-transparent text-teal-100 hover:border-teal-300 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200">
//               Logout
//             </button>
//           </div>
//           <div className="-mr-2 flex items-center sm:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-teal-200 hover:text-white hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//             >
//               <span className="sr-only">Open main menu</span>
//               {isMenuOpen ? (
//                 <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               ) : (
//                 <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {isMenuOpen && (
//         <div className="sm:hidden">
//           <div className="pt-2 pb-3 space-y-1">
//             <Link to="/dashboard" className="bg-teal-700 border-teal-500 text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
//               Dashboard
//             </Link>
//             <Link to="/create-event" className="border-transparent text-teal-100 hover:bg-teal-500 hover:border-teal-300 hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
//               Create Event
//             </Link>
//             <button onClick={handleLogout} className="border-transparent text-teal-100 hover:bg-teal-500 hover:border-teal-300 hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium w-full text-left">
//               Logout
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    // <nav className="bg-blue-600 shadow-lg">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="flex justify-between h-16">
    //       <div className="flex-shrink-0 flex items-center">
    //         <Logo className="h-8 w-auto" />
    //         <span className="ml-2 text-white font-semibold text-lg">PhotoEvent</span>
    //       </div>
    //       <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
    //         <Link to="/dashboard" className="border-transparent text-blue-100 hover:border-blue-300 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200">
    //           Dashboard
    //         </Link>
    //         <Link to="/create-event" className="border-transparent text-blue-100 hover:border-blue-300 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200">
    //           Create Event
    //         </Link>
    //         <button onClick={handleLogout} className="border-transparent text-blue-100 hover:border-blue-300 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200">
    //           Logout
    //         </button>
    //       </div>
    //       <div className="-mr-2 flex items-center sm:hidden">
    //         <button
    //           onClick={() => setIsMenuOpen(!isMenuOpen)}
    //           className="inline-flex items-center justify-center p-2 rounded-md text-blue-200 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
    //         >
    //           <span className="sr-only">Open main menu</span>
    //           {isMenuOpen ? (
    //             <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    //             </svg>
    //           ) : (
    //             <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
    //             </svg>
    //           )}
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    //   {isMenuOpen && (
    //     <div className="sm:hidden">
    //       <div className="pt-2 pb-3 space-y-1">
    //         <Link to="/dashboard" className="bg-blue-700 border-blue-500 text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
    //           Dashboard
    //         </Link>
    //         <Link to="/create-event" className="border-transparent text-blue-100 hover:bg-blue-500 hover:border-blue-300 hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
    //           Create Event
    //         </Link>
    //         <button onClick={handleLogout} className="border-transparent text-blue-100 hover:bg-blue-500 hover:border-blue-300 hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium w-full text-left">
    //           Logout
    //         </button>
    //       </div>
    //     </div>
    //   )}
    // </nav>
    <nav className="bg-blue-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Logo />
            <span className="ml-2 text-xl font-bold text-yellow-500">PhotoEvent</span>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link to="/dashboard" className="border-transparent text-gray-100 hover:border-yellow-500 hover:text-yellow-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200">
              Dashboard
            </Link>
            <Link to="/create-event" className="border-transparent text-gray-100 hover:border-yellow-500 hover:text-yellow-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200">
              Create Event
            </Link>
            <button onClick={handleLogout} className="border-transparent text-gray-100 hover:border-yellow-500 hover:text-yellow-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200">
              Logout
            </button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/dashboard" className="bg-blue-800 border-yellow-500 text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Dashboard
            </Link>
            <Link to="/create-event" className="border-transparent text-gray-100 hover:bg-blue-800 hover:border-yellow-500 hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Create Event
            </Link>
            <button onClick={handleLogout} className="border-transparent text-gray-100 hover:bg-blue-800 hover:border-yellow-500 hover:text-white block pl-3 pr-4 py-2 border-l-4 text-base font-medium w-full text-left">
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;