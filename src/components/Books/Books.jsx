import React from 'react';
import { useLoaderData } from 'react-router';

const Books = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            fff
        </div>
    );
};

export default Books;