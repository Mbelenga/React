import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette, Database, Globe, ArrowRight, User, FolderOpen, Award, MessageCircle } from 'lucide-react';

const Header = {{ darkMode, toggleDarkMode, currentPage, setCurrentPage }} => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigateToPage = (page) => {
        setCurrentPage(page);
        setIsMenuOpen(false);
    };

    const pages = [
        { id: 'home', name: 'Home', icon: User },
        { id: 'about', name: 'About', icon: User },
        { id: 'projects', name: 'Projects', icon: FolderOpen },
        { id: 'skills', name: 'Skills', icon: Award },
        { id: 'contact', name: 'Contact', icon: MessageCircle }
    ];

    return (
        <nav className={'fixed top-0 w-full z-50 backdrop-blur-md ${
            darkMode ? 'bg-gray-900/80 border-gray-700' : 'bg-white/80 border-gray-200'
        } border-b transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
                <button
                onClick={() => navigateToPage('home')}
                className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
                >
                 TerrenceMbelenga
                </button>

    )
};