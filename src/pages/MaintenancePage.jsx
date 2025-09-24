import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Wrench, Flag, Clock, Heart } from 'lucide-react';
// import PrimaryButton from './PrimaryButton.jsx';
import {useNavigate} from "react-router-dom";


const SectionTitle = ({ children, className = "" }) => (
    <h1 className={`text-3xl md:text-4xl font-bold text-gray-900 text-center ${className}`}>
        {children}
    </h1>
);

// Maintenance Illustration Component
const MaintenanceIllustration = () => (
    <div className="relative flex items-center justify-center">
        {/* Main container with floating animation */}
        <motion.div
            className="relative"
            animate={{
                y: [0, -8, 0],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            {/* Central gear/settings icon */}
            <div className="relative bg-amber-50 rounded-full p-8 border-4 border-amber-100">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <Settings className="h-16 w-16 md:h-20 md:w-20 text-amber-400" />
                </motion.div>
            </div>

            {/* Orbiting tools */}
            <motion.div
                className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg border border-amber-100"
                animate={{
                    rotate: -360,
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                <Wrench className="h-4 w-4 text-amber-500" />
            </motion.div>

            <motion.div
                className="absolute -bottom-2 -left-2 bg-white rounded-full p-2 shadow-lg border border-amber-100"
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1
                }}
            >
                <Clock className="h-4 w-4 text-amber-500" />
            </motion.div>
        </motion.div>

        {/* Floating particles */}
        <motion.div
            className="absolute -top-8 left-12 w-2 h-2 bg-amber-300 rounded-full opacity-60"
            animate={{
                y: [0, -15, 0],
                opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        />
        <motion.div
            className="absolute -bottom-6 right-8 w-1.5 h-1.5 bg-amber-400 rounded-full opacity-50"
            animate={{
                y: [0, -12, 0],
                opacity: [0.4, 0.9, 0.4]
            }}
            transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8
            }}
        />
        <motion.div
            className="absolute top-16 -left-8 w-1 h-1 bg-amber-500 rounded-full opacity-40"
            animate={{
                y: [0, -10, 0],
                opacity: [0.2, 0.7, 0.2]
            }}
            transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
            }}
        />
    </div>
);

export default function MaintenancePage() {
   
    const navigate = useNavigate();

    const handleSupport= ()=>{
          navigate("/contact-us")
    }

   

    // Animation variants
    const pageVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 }
    };

    const containerVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        initial: { opacity: 0, y: 30 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            className="min-h-screen bg-amber-50 flex flex-col"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, ease: "easeOut" }}
        >

            <main className="flex-1 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                <motion.div
                    className="max-w-2xl mx-auto text-center"
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                >
                    {/* Page Title */}
                    <motion.div variants={itemVariants} className="mb-8">
                        <SectionTitle>We're Making Improvements</SectionTitle>
                    </motion.div>

                    {/* Maintenance Illustration */}
                    <motion.div variants={itemVariants} className="mb-12">
                        <MaintenanceIllustration />
                    </motion.div>

                    {/* Informative Text */}
                    <motion.div variants={itemVariants} className="mb-8">
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto mb-4">
                            We're making some improvements to serve you better. Our platform will be back online shortly.
                        </p>
                        <div className="flex items-center justify-center space-x-2 text-amber-500">
                            <Heart className="h-4 w-4" />
                            <p className="text-sm font-medium">
                                Thank you for your patience as we enhance your building experience
                            </p>
                        </div>
                    </motion.div>

                    {/* Status Message */}
                    <motion.div variants={itemVariants} className="mb-12">
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 max-w-md mx-auto">
                            <div className="flex items-center justify-center space-x-2 text-amber-500">
                                <motion.div
                                    className="w-2 h-2 bg-amber-500 rounded-full"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.7, 1, 0.7]
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                                <span className="text-sm font-medium">
                  Maintenance in progress...
                </span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <p className="text-sm text-gray-600">
                            For urgent inquiries, please contact our support team
                        </p>
                        <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
                            <button className="text-amber-600 hover:text-amber-700 font-medium transition-colors cursor-pointer"
                            onClick={handleSupport}>
                                Contact Support
                            </button>
                            <span className="text-gray-300">•</span>
                            <button className="text-amber-600 hover:text-amber-700 font-medium transition-colors">
                                Follow Updates
                            </button>
                            <span className="text-gray-300">•</span>
                            <button className="text-amber-600 hover:text-amber-700 font-medium transition-colors">
                                System Status
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            </main>

            
        </motion.div>
    );
}