import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero  bg-base-200 my-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-10 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 p-4'>
                    <h3 className='text-xl font-bold text-red-500'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified <br/> & of experience <br/> in this field.</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, <br/> but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className=''>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn  btn-primary bg-red-500 mt-4 border-none">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;