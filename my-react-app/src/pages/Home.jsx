const Home = ({ darkMode, setCurrentPage }) => {
    const quickLinks = [
        {
            title: "About Me",
            description: "A reflection of my journey and motivations that define me as a developer.",
            icon: User,
            color: "from-blue-500 to-blue-600",
            page: "about"
        },
        {
            title: "My Projects",
            description: "Here are some of the projects i have built",
            icon: FolderOpen,
            color: "from-purple-500 to-purple-600",
            page: "projects"
        },
        {
            title: "Technical Skills",
            description: "The programming languages, frameworks,and tools I specialize in.",
            icon: Award,
            color: "from-purple-500 to-purple-600",
            page: "skills"
        },
        {
            title: "Get In Touch",
            description: "Open to collaborations,opportunities,and meaningful conversations - always ready to learn and grow",
            icon: MessageCircle,
            color: "from-pink-500 to-pink-600",
            page: "contact"
        }
    ];
}