import React from 'react';
import { FaPhone, FaMapPin, FaCheckCircle } from "react-icons/fa";
import { 
    HiMail, 
    HiBriefcase, 
    HiUser, 
    HiDocumentText, 
    HiRefresh, 
    HiChartBar,
    HiSparkles,
    HiLightningBolt,
    HiDeviceMobile,
    HiSearch,
    HiChat,
    HiCurrencyDollar,
    HiSupport
} from "react-icons/hi";

export const NAV_ITEMS = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
];

export const config = {
    developer: {
        name: "Haries Hussain",
    },
    social: {
    },
    NAV_ITEMS: NAV_ITEMS,
    servicesHeading: "Website Solutions for Small Businesses",
    servicesSubheading: "Everything your local business needs to get online and attract customers",
    services: [
        {
            title: "Business Websites",
            description: "Professional, fast, and optimized websites that build trust and convert visitors into clients.",
            icon: <HiBriefcase className="w-8 h-8 text-blue-600" />
        },
        {
            title: "Portfolio Websites",
            description: "Stand out with a modern, premium online portfolio that highlights your best work and expertise.",
            icon: <HiUser className="w-8 h-8 text-blue-600" />
        },
        {
            title: "Landing Pages",
            description: "High-converting landing pages specifically crafted for your marketing campaigns and targeted leads.",
            icon: <HiDocumentText className="w-8 h-8 text-blue-600" />
        },
        {
            title: "Website Redesign",
            description: "Upgrade your outdated website with a modern aesthetic, better performance, and improved UX.",
            icon: <HiRefresh className="w-8 h-8 text-blue-600" />
        },
        {
            title: "SEO Optimization",
            description: "Drive organic traffic by improving your search rankings through proven on-page SEO strategies.",
            icon: <HiChartBar className="w-8 h-8 text-blue-600" />
        }
    ],
    aboutMe: {
        bio: "I am a web developer from Nandyal, Andhra Pradesh who builds fast, modern, and conversion-focused websites for businesses. I focus on clean UI, responsive layouts, and reliable performance so every website looks premium and works smoothly on every device.",
        stats: [
            { label: "Projects Completed", value: "50+" },
            { label: "Happy Clients", value: "35+" },
            { label: "Technologies Used", value: "20+" },
            { label: "Response Time", value: "< 24 hrs" }
        ]
    },
    pricing: [
        {
            name: "Basic",
            price: "₹2,999",
            subtitle: "Simple landing page",
            deliveryTime: "Delivered in 3 days",
            revisions: "1 revision round",
            support: "7 days post-launch support",
            isPopular: false,
            includedFeatures: [
                "Single high-converting page",
                "Mobile responsive layout",
                "Contact form integration",
                "Basic on-page SEO",
                "Fast loading optimization"
            ],
            notIncluded: [
                "Multi-page website setup",
                "Custom admin/dashboard panel"
            ],
            addOns: [
                "+ WhatsApp Chat Integration ₹499",
                "+ Google Maps Setup ₹299",
                "+ Extra Revision Round ₹499"
            ]
        },
        {
            name: "Standard",
            price: "₹6,999",
            subtitle: "Business website",
            deliveryTime: "Delivered in 5 days",
            revisions: "2 revision rounds",
            support: "15 days post-launch support",
            isPopular: true,
            includedFeatures: [
                "Up to 5 custom pages",
                "Premium UI design",
                "Speed optimization",
                "SEO-ready structure",
                "Lead-focused contact flow"
            ],
            notIncluded: [
                "Advanced third-party commerce integrations",
                "Custom CRM integrations"
            ],
            addOns: [
                "+ WhatsApp Chat Integration ₹499",
                "+ Google Maps Setup ₹299",
                "+ Extra Revision Round ₹499"
            ]
        },
        {
            name: "Premium",
            price: "₹12,999",
            subtitle: "Full Business Website",
            deliveryTime: "Delivered in 8 days",
            revisions: "3 revision rounds",
            support: "30 days post-launch support",
            isPopular: false,
            includedFeatures: [
                "Advanced multi-page build",
                "Advanced business website flow",
                "Performance + SEO optimization",
                "Payment/checkout setup",
                "Priority deployment support"
            ],
            notIncluded: [
                "Custom mobile app development",
                "Third-party paid plugin licenses"
            ],
            addOns: [
                "+ WhatsApp Chat Integration ₹499",
                "+ Google Maps Setup ₹299",
                "+ Extra Revision Round ₹499"
            ]
        }
    ],
    testimonials: [
        {
            clientName: "Rahul Verma",
            businessName: "Dr. Sudhakar Dental Hospital",
            rating: 5,
            review: "The website was delivered fast and looked premium from day one. We started getting more patient inquiries within the first week.",
            initials: "RV"
        },
        {
            clientName: "Ayesha Khan",
            businessName: "Khan Interiors",
            rating: 5,
            review: "Clean design, mobile-friendly layout, and smooth communication throughout the project. Exactly what my brand needed.",
            initials: "AK"
        },
        {
            clientName: "Sandeep Reddy",
            businessName: "Reddy Fitness Hub",
            rating: 4,
            review: "Great attention to detail and strong performance optimization. The new site feels modern and converts better than our old one.",
            initials: "SR"
        },
        {
            clientName: "Neha Sharma",
            businessName: "Sharma Legal Associates",
            rating: 5,
            review: "Professional process end-to-end. The structure and clarity of the website helped clients understand our services immediately.",
            initials: "NS"
        },
        {
            clientName: "Imran Ali",
            businessName: "Ali Auto Care",
            rating: 5,
            review: "Super smooth experience and quick revisions. The final website looks trustworthy and performs very well on mobile.",
            initials: "IA"
        },
        {
            clientName: "Priya Nair",
            businessName: "Nair Boutique",
            rating: 4,
            review: "Very polished outcome with excellent visual balance. Customers now find our products and contact details much faster.",
            initials: "PN"
        }
    ],
    whyChooseMe: [
        { title: "Premium Modern Design", icon: <HiSparkles className="w-6 h-6 text-blue-600" /> },
        { title: "Fast Delivery", icon: <HiLightningBolt className="w-6 h-6 text-blue-600" /> },
        { title: "Mobile Responsive", icon: <HiDeviceMobile className="w-6 h-6 text-blue-600" /> },
        { title: "SEO Optimized", icon: <HiSearch className="w-6 h-6 text-blue-600" /> },
        { title: "Clear Communication", icon: <HiChat className="w-6 h-6 text-blue-600" /> },
        { title: "Affordable Solutions", icon: <HiCurrencyDollar className="w-6 h-6 text-blue-600" /> },
        { title: "Support After Delivery", icon: <HiSupport className="w-6 h-6 text-blue-600" /> }
    ],
    demoProjects: [
        {
            title: "Dr. Sudhakar Dental Hospital",
            problemSolution: "Needed: Patient booking system | Built: Clinic website with schedule flow",
            results: ["50%+ booking inquiries", "Delivered in 5 days", "Google Maps integrated"],
            technologies: ["React", "Vite", "Tailwind CSS", "EmailJS"],
            description: "A professional clinic website for Dr. Sudhakar Dental Hospital showcasing doctor profiles, treatment details, and patient booking inquiries.",
            image: "/projects/dental-studio.webp",
            demoLink: "https://samee-dental-clinic.vercel.app/"
        },
        {
            title: "Osmania School",
            problemSolution: "Needed: Online brand visibility | Built: Responsive school website",
            results: ["Improved admission inquiries", "Delivered in 8 days", "Interactive campus details"],
            technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
            description: "A professional modern website for Osmania School showcasing academic programs, campus facilities, and admission queries for parents.",
            image: "/projects/school-website.webp",
            demoLink: "https://osmania-school.vercel.app/"
        },
        {
            title: "Nandyal Cafe",
            problemSolution: "Needed: Online menu visibility | Built: Full restaurant website",
            results: ["PageSpeed 94/100", "Delivered in 4 days", "WhatsApp integrated"],
            technologies: ["React", "Vite", "Tailwind CSS", "Google Maps", "Vercel"],
            description: "An authentic vintage Irani Cafe website showcasing traditional flavors, menu exploration, and rich historic aesthetics.",
            image: "/projects/nandyal-cafe.webp",
            demoLink: "https://nandyal-cafe.vercel.app/"
        },
        {
            title: "FitGenie",
            problemSolution: "Needed: Guided fitness UX | Built: Complete workout and tracking platform",
            results: ["Core Web Vitals passed", "Delivered in 7 days", "AI coach integrated"],
            technologies: ["React", "Vite", "Tailwind CSS", "OpenAI API", "Chart.js"],
            description: "A comprehensive gym fitness platform helping users with guided workouts, exercise technique demonstrations, calorie tracking, automated fitness planning, and an integrated AI fitness coach.",
            image: "/projects/fitgenie.webp",
            demoLink: "https://fitgenie-x.vercel.app/"
        },
        {
            title: "Portfolio Website",
            problemSolution: "Needed: Premium personal branding | Built: High-converting animated portfolio",
            results: ["PageSpeed 96/100", "Delivered in 5 days", "SEO-ready structure"],
            technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Vercel"],
            description: "A premium, fully responsive personal portfolio designed to showcase projects, skills, and professional experience with high-end animations.",
            image: "/projects/portfolio.webp",
            demoLink: "https://haries-portfolio.vercel.app/"
        },
        {
            title: "HabitTracker",
            problemSolution: "Needed: Habit progress clarity | Built: Fast dashboard with clean UX",
            results: ["Fast mobile performance", "Delivered in 6 days", "Analytics-ready layout"],
            technologies: ["React", "Vite", "Tailwind CSS", "LocalStorage", "Vercel"],
            description: "A premium dashboard designed for personal tracking. Built for speed, flawless user experience, and modern aesthetics.",
            image: "/projects/habittracker.webp",
            demoLink: "https://habitflowx.vercel.app"
        }
    ],
    contactInfo: [
        {
            icon: <HiMail className="w-5 h-5 text-blue-600" />,
            label: "Email",
            value: "shaikharieshussain09@gmail.com",
            link: "mailto:shaikharieshussain09@gmail.com"
        },
        {
            icon: <FaPhone className="w-5 h-5 text-blue-600" />,
            label: "Mobile",
            value: "9391175096",
            link: "tel:9391175096"
        },
         {
            icon: <FaMapPin className="w-5 h-5 text-blue-600" />,
            label: "Location",
            value: "India",
            link: null
        }
    ]
};



