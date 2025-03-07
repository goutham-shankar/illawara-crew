// pages/index.tsx
"use client"
import type { NextPage } from 'next';
import Image from "next/image";
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { FaBroom, FaSprayCan, FaHome, FaBuilding, FaCheckCircle,   FaStar } from 'react-icons/fa';
import Navbar from "./components/navbar";
import ContactSection from './Contact';
import cln from '../app/Assets/clean.jpg';

const Landing: NextPage = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effects
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Head>
                <title>SparkleClean - Professional Cleaning Services</title>
                <meta name="description" content="Professional cleaning services for residential and commercial spaces" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Header/Navigation */}
            <header className={`bg-white transition-all duration-300 ${isScrolled ? 'shadow-lg py-2' : 'shadow-md py-4'} sticky top-0 z-10`}>
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <span className="font-bold text-2xl text-blue-600">SparkleClean</span>
                    </div>
                    <Navbar />
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section id="home" 
                    className="bg-gradient-to-r from-teal-800 to-blue-900 text-white py-24 md:py-32">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-12 md:mb-0 space-y-6">
                            <div className="inline-block bg-blue-500 text-white text-sm px-3 py-1 rounded-full mb-4">
                                #1 Rated Cleaning Service
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
                                Professional <span className="text-blue-300">Cleaning</span> Services
                            </h1>
                            <p className="text-xl opacity-90 mb-8 leading-relaxed">
                                We make your space shine with our premium cleaning services. 
                                Residential and commercial solutions tailored to your needs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#contact" 
                                   className="bg-white text-blue-600 hover:bg-blue-100 font-bold py-3 px-8 rounded-md text-center transition duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1">
                                   Get a Free Quote
                                </a>
                                <a href="#services" 
                                   className="bg-transparent hover:bg-blue-700 border-2 border-white font-bold py-3 px-8 rounded-md text-center transition duration-300 hover:shadow-lg">
                                   Explore Services
                                </a>
                            </div>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <div className="relative">
                                <div className="absolute -inset-1 rounded-xl bg-blue-400 opacity-50 blur-xl"></div>
                                <Image 
                                    src={cln} 
                                    className="relative rounded-xl shadow-2xl w-full max-w-[500px] h-auto transition-all duration-500 hover:scale-105" 
                                    width={500} 
                                    height={500} 
                                    alt="Professional Cleaning" 
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-12 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div className="p-6">
                                <div className="text-blue-600 font-bold text-3xl mb-2">10+</div>
                                <div className="text-gray-600">Years Experience</div>
                            </div>
                            <div className="p-6">
                                <div className="text-blue-600 font-bold text-3xl mb-2">5,000+</div>
                                <div className="text-gray-600">Happy Clients</div>
                            </div>
                            <div className="p-6">
                                <div className="text-blue-600 font-bold text-3xl mb-2">50+</div>
                                <div className="text-gray-600">Team Members</div>
                            </div>
                            <div className="p-6">
                                <div className="text-blue-600 font-bold text-3xl mb-2">100%</div>
                                <div className="text-gray-600">Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <div className="inline-block bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full mb-4">
                                Our Services
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Offer</h2>
                            <p className="text-gray-600 text-lg">Comprehensive cleaning solutions customized to meet your specific needs and requirements.</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border-t-4 border-blue-500">
                                <div className="text-blue-600 text-4xl mb-6 flex justify-center">
                                    <FaHome />
                                </div>
                                <h3 className="text-xl font-semibold mb-4 text-center">Residential Cleaning</h3>
                                <p className="text-gray-600 text-center">Complete home cleaning services including kitchens, bathrooms, bedrooms, and living areas.</p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border-t-4 border-blue-500">
                                <div className="text-blue-600 text-4xl mb-6 flex justify-center">
                                    <FaBuilding />
                                </div>
                                <h3 className="text-xl font-semibold mb-4 text-center">Commercial Cleaning</h3>
                                <p className="text-gray-600 text-center">Office, retail, and industrial cleaning solutions to maintain a professional environment.</p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border-t-4 border-blue-500">
                                <div className="text-blue-600 text-4xl mb-6 flex justify-center">
                                    <FaSprayCan />
                                </div>
                                <h3 className="text-xl font-semibold mb-4 text-center">Deep Cleaning</h3>
                                <p className="text-gray-600 text-center">Thorough cleaning of hard-to-reach areas, appliances, and furniture for a completely fresh space.</p>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border-t-4 border-blue-500">
                                <div className="text-blue-600 text-4xl mb-6 flex justify-center">
                                    <FaBroom />
                                </div>
                                <h3 className="text-xl font-semibold mb-4 text-center">Move In/Out Cleaning</h3>
                                <p className="text-gray-600 text-center">Comprehensive cleaning services for moving into a new home or leaving your current one.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 mb-12 md:mb-0">
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-blue-100 rounded-xl -rotate-3"></div>
                                    <img 
                                        src="/api/placeholder/450/300" 
                                        alt="About Our Company" 
                                        className="relative rounded-xl shadow-lg max-w-full h-auto z-10" 
                                    />
                                </div>
                            </div>
                            <div className="md:w-1/2 md:pl-16">
                                <div className="inline-block bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full mb-4">
                                    About Us
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">About SparkleClean</h2>
                                <p className="text-gray-700 mb-6 text-lg">Founded in 2010, SparkleClean has been providing top-quality cleaning services to homes and businesses alike. Our dedication to excellence and attention to detail sets us apart from the competition.</p>
                                <p className="text-gray-700 mb-8 text-lg">Our team of professional cleaners is trained, vetted, and insured to ensure the highest standards of service and security for our clients.</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                                        <FaCheckCircle className="text-green-500 text-xl mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">100% Satisfaction Guaranteed</span>
                                    </div>
                                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                                        <FaCheckCircle className="text-green-500 text-xl mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">Eco-Friendly Products</span>
                                    </div>
                                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                                        <FaCheckCircle className="text-green-500 text-xl mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">Fully Insured and Bonded</span>
                                    </div>
                                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                                        <FaCheckCircle className="text-green-500 text-xl mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">Flexible Scheduling</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call To Action */}
                <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-700 text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a Spotless Space?</h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                            Join thousands of satisfied customers who trust SparkleClean with their cleaning needs.
                        </p>
                        <a href="#contact" 
                           className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-md text-center transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
                           Schedule Your Cleaning
                        </a>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section id="testimonials" className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <div className="inline-block bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full mb-4">
                                Testimonials
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
                            <p className="text-gray-600 text-lg">Don &apos t just take our word for it - hear from our satisfied customers.</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                                <div className="flex text-yellow-400 mb-4">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <p className="text-gray-700 mb-6 italic">SparkleClean transformed my home! Their attention to detail is remarkable and their team is always friendly and professional. I &apos ve been a regular client for over three years now.</p>
                                <div className="flex items-center">
                                    <div className="h-12 w-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-600 font-bold text-xl mr-4">
                                        JD
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">John Doe</h4>
                                        <p className="text-gray-500 text-sm">Residential Client</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                                <div className="flex text-yellow-400 mb-4">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <p className="text-gray-700 mb-6 italic">We &apos ve hired SparkleClean for our office space and the results are consistently excellent. Our workplace is always spotless and our employees appreciate the clean environment.</p>
                                <div className="flex items-center">
                                    <div className="h-12 w-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-600 font-bold text-xl mr-4">
                                        MS
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Mary Smith</h4>
                                        <p className="text-gray-500 text-sm">Office Manager</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                                <div className="flex text-yellow-400 mb-4">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                                <p className="text-gray-700 mb-6 italic">As a property manager, I rely on SparkleClean for move-in/move-out cleanings. They &apos re reliable, thorough, and make my properties look brand new. Highly recommended!</p>
                                <div className="flex items-center">
                                    <div className="h-12 w-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-600 font-bold text-xl mr-4">
                                        RJ
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Robert Johnson</h4>
                                        <p className="text-gray-500 text-sm">Property Manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className=" bg-white">
                    <ContactSection />
                </section>
            </main>

            
        </div>
    );
};

export default Landing;