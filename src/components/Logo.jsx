import React from 'react';

const Logo = ({ className = "h-8 w-auto" }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="20" fill="#3B82F6" />
        <circle cx="50" cy="50" r="30" fill="#FFFFFF" />
        <circle cx="50" cy="50" r="20" fill="#3B82F6" />
        <circle cx="65" cy="35" r="8" fill="#FFFFFF" />
    </svg>
);

export default Logo;