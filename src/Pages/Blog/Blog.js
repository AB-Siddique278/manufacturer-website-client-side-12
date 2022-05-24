import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='px-14'>
                <p className="font-bold text-3xl">1 How will you improve the performance of a React Application?</p>
                <p className='text-2xl'>
                   <span className='font-bold text-2xl'> 1. Using Immutable Data Structures</span> 
                   <br/>
                    Data immutability is not an architecture or design pattern, it’s an opinionated way of writing code. This forces you to think about how you structure your application data flow. In my opinion, data immutability is a practice that revolves around a strict unidirectional data flow.
                    <br/>
                    <br/>
                    <span className='font-bold text-2xl'>2. Function/Stateless Components and React.PureComponent</span>
                    <br/>
                    
                    
                    In React, function components and PureComponent provide two different ways of optimizing React apps at the component level. Function components prevent constructing class instances while reducing the overall bundle size as it minifies better than classes.
                    <br/>
                    <br/>
                    <span className='font-bold text-2xl'>3.Using Production Mode Flag in Webpack</span>
                    <br />
                    
                    If you are using webpack 4 as a module bundler for your app, you can consider setting the mode option to production. This basically tells webpack to use the built-in optimization


                </p>
            </div>
        </div>
    );
};

export default Blog;