// pages/index.tsx
"use client"
import type { NextPage } from 'next';
import Image from "next/image";
import Head from 'next/head';
import { useState } from 'react';
import { FaBroom, FaSprayCan, FaHome, FaBuilding, FaCheckCircle, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Navbar from "./components/navbar";
import ContactSection from './Contact';
import cln from '../app/Assets/clean.jpg'
const Landing: NextPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend or a service
        console.log({ name, email, phone, message });
        setIsSubmitted(true);
        // Reset form
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        // Show success message temporarily
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            {/* Header/Navigation */}
            <header className="bg-white shadow-md sticky top-0 z-10">
                <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center mb-4 md:mb-0">
                        <span className="font-bold text-2xl text-blue-600">SparkleClean</span>
                    </div>

                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section id="home" style={{ backgroundColor: "rgb(10, 74, 78)" }}
                    className="   text-white py-16 md:py-24">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Cleaning Services</h1>
                            <p className="text-xl mb-6">We make your space shine with our premium cleaning services. Residential and commercial solutions tailored to your needs.</p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#contact" className="bg-white text-blue-600 hover:bg-blue-100 font-bold py-3 px-6 rounded-md text-center transition duration-300">Get a Quote</a>
                                <a href="#services" className="bg-transparent hover:bg-blue-600 border-2 border-white font-bold py-3 px-6 rounded-md text-center transition duration-300">Our Services</a>
                            </div>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                        <Image 
  src={cln} 
  className="rounded-xl shadow-2xl w-full max-w-[500px] h-auto transition-transform duration-300 hover:scale-105" 
  width={500} 
  height={500} 
  alt="Logo" 
/>

                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="text-blue-600 text-4xl mb-4 flex justify-center">
                                    <FaHome />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-center">Residential Cleaning</h3>
                                <p className="text-gray-600 text-center">Complete home cleaning services including kitchens, bathrooms, bedrooms, and living areas.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="text-blue-600 text-4xl mb-4 flex justify-center">
                                    <FaBuilding />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-center">Commercial Cleaning</h3>
                                <p className="text-gray-600 text-center">Office, retail, and industrial cleaning solutions to maintain a professional environment.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="text-blue-600 text-4xl mb-4 flex justify-center">
                                    <FaSprayCan />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-center">Deep Cleaning</h3>
                                <p className="text-gray-600 text-center">Thorough cleaning of hard-to-reach areas, appliances, and furniture for a completely fresh space.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                                <div className="text-blue-600 text-4xl mb-4 flex justify-center">
                                    <FaBroom />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-center">Move In/Out Cleaning</h3>
                                <p className="text-gray-600 text-center">Comprehensive cleaning services for moving into a new home or leaving your current one.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-16">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
                            <img src="/api/placeholder/450/300" alt="About Our Company" className="rounded-lg shadow-lg max-w-full h-auto" />
                        </div>
                        <div className="md:w-1/2 md:pl-12">
                            <h2 className="text-3xl font-bold mb-6">About SparkleClean</h2>
                            <p className="text-gray-700 mb-4">Founded in 2010, SparkleClean has been providing top-quality cleaning services to homes and businesses alike. Our dedication to excellence and attention to detail sets us apart from the competition.</p>
                            <p className="text-gray-700 mb-6">Our team of professional cleaners is trained, vetted, and insured to ensure the highest standards of service and security for our clients.</p>
                            <div className="space-y-3">
                                <div className="flex items-center">
                                    <FaCheckCircle className="text-green-500 mr-2" />
                                    <span className="text-gray-700">100% Satisfaction Guaranteed</span>
                                </div>
                                <div className="flex items-center">
                                    <FaCheckCircle className="text-green-500 mr-2" />
                                    <span className="text-gray-700">Eco-Friendly Cleaning Products</span>
                                </div>
                                <div className="flex items-center">
                                    <FaCheckCircle className="text-green-500 mr-2" />
                                    <span className="text-gray-700">Fully Insured and Bonded</span>
                                </div>
                                <div className="flex items-center">
                                    <FaCheckCircle className="text-green-500 mr-2" />
                                    <span className="text-gray-700">Flexible Scheduling Options</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section id="testimonials" className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-center mb-4">
                                    <div className="h-12 w-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-600 font-bold text-xl mr-4">
                                        JD
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">John Doe</h4>
                                        <p className="text-gray-500 text-sm">Residential Client</p>
                                    </div>
                                </div>
                                <p className="text-gray-700">"SparkleClean transformed my home! Their attention to detail is remarkable and their team is always friendly and professional. I've been a regular client for over three years now."</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-center mb-4">
                                    <div className="h-12 w-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-600 font-bold text-xl mr-4">
                                        MS
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Mary Smith</h4>
                                        <p className="text-gray-500 text-sm">Office Manager</p>
                                    </div>
                                </div>
                                <p className="text-gray-700">"We've hired SparkleClean for our office space and the results are consistently excellent. Our workplace is always spotless and our employees appreciate the clean environment."</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-center mb-4">
                                    <div className="h-12 w-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-600 font-bold text-xl mr-4">
                                        RJ
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Robert Johnson</h4>
                                        <p className="text-gray-500 text-sm">Property Manager</p>
                                    </div>
                                </div>
                                <p className="text-gray-700">"As a property manager, I rely on SparkleClean for move-in/move-out cleanings. They're reliable, thorough, and make my properties look brand new. Highly recommended!"</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-16">
                    <ContactSection />
                </section>
            </main>


        </div>
    );
};

export default Landing;