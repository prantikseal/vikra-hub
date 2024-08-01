import React from 'react';
import { Twitter, Mail, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#FFCDB2] p-6 md:p-10">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                            Dope.Content
                            <span className="ml-2 w-6 h-6 bg-[#B5E48C] rounded-full"></span>
                        </h2>
                        <div className="flex space-x-4 mt-4">
                            <Twitter className="w-5 h-5 text-gray-800" />
                            <Mail className="w-5 h-5 text-gray-800" />
                            <Linkedin className="w-5 h-5 text-gray-800" />
                            <Instagram className="w-5 h-5 text-gray-800" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="font-bold text-gray-800 mb-2">Pages</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className=" hover:text-gray-800">Home</a></li>
                                <li><a href="#" className=" hover:text-gray-800">About Page</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-gray-800 mb-2">Products</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className=" hover:text-gray-800">Cognition</a></li>
                                <li><a href="#" className=" hover:text-gray-800">Vikra&apos;s Cafe</a></li>
                                <li><a href="#" className=" hover:text-gray-800">Newsletter Cohort</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-gray-800 mb-2">Others</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className=" hover:text-gray-800">Privacy Policy</a></li>
                                <li><a href="#" className=" hover:text-gray-800">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;