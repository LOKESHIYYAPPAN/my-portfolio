import { Component } from '@angular/core';
import { ProjectCardComponent } from "../project-card/project-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects = [
    {
      title: 'Portfolio Contact API',
      tech: ['Node.js', 'Express.js', 'JavaScript'],
      description: 'A backend API built with Express.js to handle contact form submissions from a portfolio site. It validates inputs and sends acknowledgment and notification emails using Nodemailer with Gmail SMTP. Includes CORS setup for secure frontend communication.',
      liveLink: 'https://mail-api-qntb.onrender.com/health',
      codeLink: 'https://github.com/LOKESHIYYAPPAN/mail-api'
    },
    {
      title: 'Expense Tracker Web App',
      tech: ['React.js', 'JavaScript', 'CSS', 'HTML'],
      description: 'A responsive application to track daily expenses with support for income and expense tracking, balance summary, history management, and local storage persistence. Includes dynamic UI rendering and transaction categorization.',
      liveLink: 'https://expense-tracker-nine-zeta.vercel.app/',
      codeLink: 'https://github.com/LOKESHIYYAPPAN/Expense-Tracker'
    },
    {
      title: "Notes App",
      tech: ["React", "JavaScript", "HTML", "CSS", "Bootstrap"],
      description: "A React-based notes application allowing users to create, edit, and delete notes with persistent storage using localStorage, featuring a responsive UI with navigation.",
      liveLink: "https://notes-app-pearl-ten.vercel.app/",
      codeLink: "https://github.com/LOKESHIYYAPPAN/Notes-App"
    },
    {
      title: "LeetCode Clone",
      tech: ["HTML", "CSS", "JavaScript"],
      description: "A clone of the LeetCode website, featuring a homepage with a mock coding playground, sign-in, and sign-up pages, designed to mimic the platform's layout and functionality.",
      liveLink: "https://lokeshiyyappan.github.io/LeetCode-clone/index.html",
      codeLink: "https://github.com/LOKESHIYYAPPAN/LeetCode-clone"
    },
    {
      title: "JSON-Placeholder",
      tech: ["React", "JavaScript", "HTML", "CSS"],
      description: "A React application that fetches and displays data from the JSONPlaceholder API, allowing users to switch between viewing users, posts, and comments in a table format.",
      liveLink: "https://json-placeholder-navy.vercel.app/",
      codeLink: "https://github.com/LOKESHIYYAPPAN/JSON-Placeholder"
    },
    {
      title: "To Do List",
      tech: ["React", "JavaScript", "HTML", "CSS"],
      description: "A React-based to-do list application that allows users to add, check, delete, and search tasks, with data persistence using a local API and local storage.",
      liveLink: null,
      codeLink: "https://github.com/LOKESHIYYAPPAN/ToDo-list"
    },
    {
      title: "Color Code Finder",
      tech: ["React", "JavaScript", "HTML", "CSS"],
      description: "A React application that allows users to input a color name and displays its hex code with a colored square, including a toggle for text color contrast.",
      liveLink: "https://color-name-finder.vercel.app/",
      codeLink: "https://github.com/LOKESHIYYAPPAN/Color-Name-Finder"
    },
    {
      title: "IP Address Tracker",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      description: "A web application that tracks IP addresses, displaying their location, timezone, and ISP, with an interactive map using the Leaflet library, built as a Frontend Mentor challenge.",
      liveLink: "https://lokeshiyyappan.github.io/IP-Address-Tracker/",
      codeLink: "https://github.com/LOKESHIYYAPPAN/IP-Address-Tracker"
    },
    {
      title: 'Newsletter Sign-Up Form',
      tech: ['HTML', 'CSS', 'JavaScript'],
      description: 'A responsive newsletter subscription form with real-time email validation, interactive success message, and adaptive layout for mobile and desktop. Built as a challenge from Frontend Mentor to practice UI precision and form validation.',
      liveLink: 'https://lokeshiyyappan.github.io/Newsletter-sign-up-form/',
      codeLink: 'https://github.com/LOKESHIYYAPPAN/Newsletter-sign-up-form'
    },
    {
      title: "QR Code Component",
      tech: ["HTML", "CSS", "Bootstrap"],
      description: "A simple static webpage displaying a QR code component with a card layout, built as a Frontend Mentor challenge to showcase front-end skills.",
      liveLink: "https://lokeshiyyappan.github.io/QR-code-component/",
      codeLink: "https://github.com/LOKESHIYYAPPAN/QR-code-component"
    },
    {
      title: "Static Job Listings Master",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      description: "A static job listing webpage built as a Frontend Mentor challenge, featuring filterable job cards based on role, level, languages, and tools, with dynamic DOM manipulation.",
      liveLink: "https://lokeshiyyappan.github.io/static-job-listings-master/",
      codeLink: "https://github.com/LOKESHIYYAPPAN/static-job-listings-master"
    },
    {
      title: "Calculator",
      tech: ["HTML", "CSS", "JavaScript"],
      description: "A web-based calculator application with multiple theme options, built as a Frontend Mentor challenge, featuring basic arithmetic operations and a responsive design.",
      liveLink: "https://lokeshiyyappan.github.io/Calculator/",
      codeLink: "https://github.com/LOKESHIYYAPPAN/Calculator"
    },
    {
      title: "Room Homepage Master",
      tech: ["HTML", "CSS", "JavaScript"],
      description: "A responsive homepage for a furniture store, built as a Frontend Mentor challenge, featuring a slideshow with navigation, mobile menu, and a clean layout showcasing furniture collections.",
      liveLink: "https://lokeshiyyappan.github.io/room-homepage-master/",
      codeLink: "https://github.com/LOKESHIYYAPPAN/room-homepage-master"
    },
    {
      title: "FAQ Accordion Main",
      tech: ["HTML", "CSS", "JavaScript"],
      description: "A responsive FAQ accordion webpage built as a Frontend Mentor challenge, featuring collapsible question-answer sections with dynamic SVG background adjustments for mobile and desktop views.",
      liveLink: "https://lokeshiyyappan.github.io/faq-accordion-main/",
      codeLink: "https://github.com/LOKESHIYYAPPAN/faq-accordion-main"
    },
    {
      title: "Age Calculator",
      tech: ["HTML", "CSS", "JavaScript"],
      description: "A web-based age calculator application built as a Frontend Mentor challenge, allowing users to input their birth date to calculate their age in years, months, and days with input validation.",
      liveLink: "https://lokeshiyyappan.github.io/AGE-CALCULATOR-APP-MAIN/",
      codeLink: "https://github.com/LOKESHIYYAPPAN/AGE-CALCULATOR-APP-MAIN"
    },
    {
      title: "Blog Preview Card",
      tech: ["HTML", "CSS"],
      description: "A static blog preview card webpage built as a Frontend Mentor challenge, showcasing a simple card layout with an image, title, description, and author profile.",
      liveLink: "https://lokeshiyyappan.github.io/BLOG-PREVIEW-CARD-MAIN/",
      codeLink: "https://github.com/LOKESHIYYAPPAN/BLOG-PREVIEW-CARD-MAIN"
    },
    {
      title: "Restaurant Landing Page",
      tech: ["HTML", "CSS"],
      description: "A static restaurant website showcasing a landing page with a menu, featured products, and navigation, designed with a responsive layout for food ordering.",
      liveLink: "https://lokeshiyyappan.github.io/Restaurant-Website/",
      codeLink: "https://github.com/LOKESHIYYAPPAN/Restaurant-Website"
    }
  ];
}
