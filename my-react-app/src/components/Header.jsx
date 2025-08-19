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
};