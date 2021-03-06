import React from 'react';

const Loading = () => {
    return (
       
        <div class="h-screen flex justify-center items-center space-x-2 animate-bounce">
            <div class="w-8 h-8 bg-blue-400 rounded-full"></div>
            <div class="w-8 h-8 bg-green-400 rounded-full"></div>
            <div class="w-8 h-8 bg-orange-400 rounded-full"></div>
        </div>
    );
};

export default Loading;