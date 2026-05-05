import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects = [
    {
      title: "Google Sheet API Integration",
      tech: ["Angular", "TypeScript", "Google Sheets API"],
      description: "An interactive dashboard that fetches and displays real-time data from Google Sheets. Solves the problem of manual data entry by automating the sync between spreadsheets and the UI.",
      liveLink: "https://google-sheet-integration-beta.vercel.app/",
      codeLink: "https://github.com/LOKESHIYYAPPAN/Google-Sheet-Integration"
    },
    {
      title: 'Portfolio Contact API',
      tech: ['Node.js', 'Express.js', 'Nodemailer'],
      description: 'A robust backend service for handling contact submissions. Implements secure validation and automated email notifications, solving the need for a serverless-like contact handler.',
      liveLink: 'https://mail-api-qntb.onrender.com/health',
      codeLink: 'https://github.com/LOKESHIYYAPPAN/mail-api'
    },
    {
      title: 'Expense Tracker Web App',
      tech: ['React.js', 'Local Storage', 'CSS3'],
      description: 'A personal finance tool to manage income and expenses. Provides clear visual summaries and transaction history, helping users track their spending habits effectively.',
      liveLink: 'https://expense-tracker-nine-zeta.vercel.app/',
      codeLink: 'https://github.com/LOKESHIYYAPPAN/Expense-Tracker'
    },
    {
      title: "LeetCode Clone",
      tech: ["HTML5", "CSS3", "JavaScript"],
      description: "A comprehensive clone of the popular coding platform. Focuses on UI precision and responsiveness, mimicking the core problem-solving interface of LeetCode.",
      liveLink: "https://lokeshiyyappan.github.io/LeetCode-clone/index.html",
      codeLink: "https://github.com/LOKESHIYYAPPAN/LeetCode-clone"
    },
    {
      title: "IP Address Tracker",
      tech: ["Leaflet.js", "IP Geolocation API", "Bootstrap"],
      description: "A real-time tracking tool that maps IP locations globally. Solves the challenge of visualizing network data through an interactive and responsive map interface.",
      liveLink: "https://lokeshiyyappan.github.io/IP-Address-Tracker/",
      codeLink: "https://github.com/LOKESHIYYAPPAN/IP-Address-Tracker"
    },
    {
      title: "Static Job Listings",
      tech: ["HTML5", "CSS3", "JavaScript"],
      description: "A filterable job board application. Implements dynamic DOM manipulation to allow users to filter jobs by role, level, and tech stack efficiently.",
      liveLink: "https://lokeshiyyappan.github.io/static-job-listings-master/",
      codeLink: "https://github.com/LOKESHIYYAPPAN/static-job-listings-master"
    }
  ];
}
