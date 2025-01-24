import React, { useState, useEffect } from 'react';

const ReadMoreLess = ({ text }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [charLimit, setCharLimit] = useState(800); // Default limit for large screens

    // Ensure the text is a string
    const content = typeof text === 'string' ? text : '';

    const toggleText = () => {
        setIsExpanded(!isExpanded);
    };

    // Update charLimit based on screen size
    const updateCharLimit = () => {
        if (window.innerWidth >= 1200) {
            setCharLimit(800); // Large screen
        } else {
            setCharLimit(400); // Small screen
        }
    };

    useEffect(() => {
        // Set initial charLimit based on screen size
        updateCharLimit();

        // Listen for screen resize
        window.addEventListener('resize', updateCharLimit);

        // Cleanup event listener
        return () => {
            window.removeEventListener('resize', updateCharLimit);
        };
    }, []);

    return (
        <div>
            <p className='text-justify'>
                {isExpanded ? content : `${content.substring(0, charLimit)}${content.length > charLimit ? '...' : ''}`}
                {content.length > charLimit && (
                    <span className='font-semibold ml-3 hover:underline cursor-pointer ' onClick={toggleText}>
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </span>
                )}
            </p>
        </div>
    );
};

export default ReadMoreLess;
