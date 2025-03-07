"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section style={{ backgroundColor: "rgb(10, 74, 78)" }} className=" py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold dark:text-white">
          Better yet, see us in person!
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          We stay in close communication to ensure every detail meets your satisfaction. 
          Whether you need a custom plan, have questions, or special requests, we &apos re here to help.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mt-8  p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Contact Us</h3>
        <p className="text-gray-600 dark:text-gray-300">Get a complimentary quote today!</p>

        <div className="mt-6 space-y-4">
          <div className="flex items-center space-x-3">
            <MapPin className="text-blue-600 dark:text-blue-400" />
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Illawarra Cleaning Crew</strong><br />
              Level 1, 1 Burelli Street, Wollongong, NSW 2500
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <Phone className="text-green-600" />
            <Link href="tel:+61416592879" className="text-gray-700 dark:text-gray-300 hover:text-green-500">
              +61 416 592 879
            </Link>
          </div>

          <div className="flex items-center space-x-3">
            <Mail className="text-red-600" />
            <Link href="mailto:info@illawaracrew.com" className="text-gray-700 dark:text-gray-300 hover:text-red-500">
              info@illawaracrew.com
            </Link>
          </div>

          <div className="flex items-center space-x-3">
            <Clock className="text-yellow-600" />
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Hours:</strong> 09:00 AM – 05:00 PM
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link 
            href="https://wa.me/61416592879"
            className="inline-block bg-green-600 text-white px-5 py-2 rounded-md shadow hover:bg-green-700 transition"
          >
            Message Us on WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
