import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='px-14'>
                <div className='p-3'>
                    <p className="font-bold text-3xl">1 How will you improve the performance of a React Application?</p>
                    <p className='text-2xl'>
                        <span className='font-bold text-xl'> 1. Using Immutable Data Structures</span>
                        <br />
                        Data immutability is not an architecture or design pattern, it’s an opinionated way of writing code. This forces you to think about how you structure your application data flow. In my opinion, data immutability is a practice that revolves around a strict unidirectional data flow.
                        <br />
                        <br />
                        <span className='font-bold text-xl'>2. Function/Stateless Components and React.PureComponent</span>
                        <br />


                        In React, function components and PureComponent provide two different ways of optimizing React apps at the component level. Function components prevent constructing class instances while reducing the overall bundle size as it minifies better than classes.
                        <br />
                        <br />
                        <span className='font-bold text-xl'>3.Using Production Mode Flag in Webpack</span>
                        <br />

                        If you are using webpack 4 as a module bundler for your app, you can consider setting the mode option to production. This basically tells webpack to use the built-in optimization


                    </p>
                </div>
            </div>





            <div className='px-14 py-10'>
                <div className=' p-3'>
                    <h1 className="font-bold text-3xl">2 What are the different ways to manage a state in a React application?</h1>
                    <ol className='text-2xl list-disc'>
                        <li>
                            <span className='font-bold text-xl'>Local (UI) state</span> – Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook. For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.
                        </li>

                        <li>
                            <span className='font-bold text-xl'>Global (UI) state</span> – Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application. Sometimes state we think should be local might become global.
                        </li>

                        <li>
                            <span className='font-bold text-xl'>Server state</span> – Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.
                        </li>

                        <li>
                            <span className='font-bold text-xl'>URL state</span> – Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one. In many cases, a lot of major parts of our application rely upon accessing URL state.
                        </li>
                    </ol>
                </div>
            </div>






            <div className='px-14 py-10 '>
                <div className='p-3'>
                    <h1 className="font-bold text-3xl">3 How does prototypical inheritance work</h1>
                    <p className=' text-2xl'>
                        JavaScript is a bit confusing for developers experienced in class-based languages (like Java or C++), as it is dynamic and does not provide a class implementation per se (the class keyword is introduced in ES2015, but is syntactical sugar, JavaScript remains prototype-based).
                        <br />
                        When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.
                        <br />
                        Nearly all objects in JavaScript are instances of Object, which has null as its prototype.

                    </p>
                </div>
            </div>





            <div className='px-14 py-10'>
                <div>
                    <p className="font-bold text-3xl" >
                        4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts

                    </p>
                    <div className=''>
                        
                            <p className='text-2xl py-5'>
                                One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. You will lose control of the state across all components.

                                You should know how to work with class-based components as well as functional components, including hooks.
                                Instead of directly learning functional components with React hooks, you should first understand class-based components so it's easy to clear the basics.
                                You can call useState hook as many times as you like to use as many variables as you need. In the example given below…we have a basic form with email and password input. We are going to manage the state for each one of them as individual state variables.


                            </p>
                        
                    </div>
                </div>

            </div>

            <div className='px-14 py-10 '>
                <div className=' p-3'>
                    <div>
                        <h1 className="font-bold text-3xl">5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                        <ul className=' text-2xl'>
                            <li>1. First of all I am creating a new products object and then stringify this object data .</li>
                            <li>2. Thern make a mongo db server and make a Api for post this data use POST method.</li>
                            <li>3. When this data are sore this mongo data base the we can use it.</li>
                            <li>4. Then make a '/product/:name' API using get Method .</li>
                            <li>5. we can also collected this data</li>
                            <li>6. Then this data we can use by useState and fetch this data and MAP data and also show UI</li>
                        </ul>
                    </div>
                </div>


            </div>

            <div className='px-14 py-10'>
                <div className=' p-3'>
                    <p className="font-bold text-3xl">6 What is a unit test? Why should write unit tests?</p>
                    <p className='font-bold text-xl'>What is unite testing-</p>
                    <p className=' text-2xl'>Unit testing, a testing technique using which individual modules are tested to determine if there are any issues by the developer himself. It is concerned with functional correctness of the standalone modules. The main aim is to isolate each unit of the system to identify, analyze and fix the defects.</p>

                    <div>


                        <ul className=' text-2xl py-5'>
                            <li>1.Reduces Defects in the Newly developed features or reduces bugs when changing the existing functionality.</li>
                            <li>2.Reduces Cost of Testing as defects are captured in very early phase.</li>
                            <li>3.Improves design and allows better refactoring of code.</li>
                            <li>4.Unit Tests, when integrated with build gives the quality of the build as well.</li>
                            <li>5.Finds Software Bugs Early</li>
                            <li>6.Facilitates Changes and Simplifies Integration</li>
                            <li>7.Debugging Process</li>
                        </ul>
                    </div>

                </div>



            </div>





        </div>
    );
};

export default Blog;