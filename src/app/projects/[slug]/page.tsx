import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Github, Globe, Calendar, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { projects } from "@/components/projects"

// Enhanced project data with more details
const projectDetails = {
  "nepal-gov-connect": {
    overview:
      "Nepal Gov Connect is a centralized platform connecting citizens with government authorities in Nepal. It offers public issue reporting, citizen-to-authority routing, and real-time status updates to bridge the communication gap, fostering civic participation and enhancing public accountability.",
    process:
      "Constructed using Django for a robust backend and Django REST Framework for API endpoints. Configured Django Channels and WebSockets to establish real-time, bi-directional communication channels for instant issue updates and chat routing. Integrated secure token-based user authentication and PostgreSQL databases for structured transaction storage.",
    features: [
      "Dynamic issue reporting and category-based automatic department routing",
      "Real-time communication and notification system powered by Django Channels & WebSockets",
      "Comprehensive citizen and administrative dashboard with verification workflows",
      "Secure user authentication, authorization, and audit logs for sensitive operations",
      "Fully responsive design optimized for mobile and desktop screens",
    ],
    challenges:
      "Implementing a real-time messaging system that scales reliably. This was solved by configuring Redis as the backing channel layer for Django Channels, allowing asynchronous routing of WebSocket packets while maintaining state consistency.",
    technologies: ["Django", "Django REST Framework", "Channels", "WebSockets", "PostgreSQL", "Redis", "JavaScript"],
    timeline: "3 months",
    role: "Full Stack Developer",
    client: "Civic Tech Project",
  },
  "jarvis-voice-assistant": {
    overview:
      "An AI-powered voice assistant capable of natural voice interaction, query resolution, and local/cloud automation. It operates directly at the OS level to automate tasks, run files, check emails, control browsers, and execute system commands.",
    process:
      "Developed in Python using Google Speech Recognition APIs and Pyttsx3 text-to-speech engine. Built a modular command parsing architecture utilizing regular expressions and basic NLP. Connected local llama-based LLM APIs to handle contextual memory, maintaining conversational state between turns.",
    features: [
      "Real-time voice query recognition and text-to-speech synthesized replies",
      "System automation including app launching, file system editing, and media controls",
      "Web automation using Selenium and Web scraping for automated search and retrieval",
      "Intelligent memory module to store preferences and contextual user history",
      "Custom trigger word detection and background microphone loop execution",
    ],
    challenges:
      "Synthesizing text-to-speech asynchronously without blocking the microphone loop. Resolved by implementing Python's threading library to decouple command execution and speech processing, keeping the microphone listener active.",
    technologies: ["Python", "SpeechRecognition", "Pyttsx3", "Selenium", "API Integrations", "Threading"],
    timeline: "2 months",
    role: "AI Systems Developer",
    client: "AI Research Project",
  },
  "fraud-detection-system": {
    overview:
      "A machine learning system engineered to detect fraudulent transactions in real-time, helping financial systems prevent fraud, minimize monetary loss, and enhance user trust.",
    process:
      "Preprocessed millions of transactions, handling massive class imbalance using Synthetic Minority Over-sampling Technique (SMOTE). Built and trained several models including Logistic Regression, Random Forests, and XGBoost, selecting the best model based on F1-score and Precision-Recall Area Under Curve. Wrapped the model in a Flask REST API for live inference scoring.",
    features: [
      "Advanced class-imbalance resolution utilizing SMOTE and undersampling techniques",
      "Feature engineering optimization including transaction-velocity tracking and geographic mapping",
      "Model benchmarking of RandomForest, XGBoost, and Logistic Regression models",
      "RESTful API integration via Flask for low-latency live transaction evaluation",
      "Detailed exploratory data analysis (EDA) highlighting fraud pattern clusters",
    ],
    challenges:
      "Handling the severe class imbalance (less than 0.1% fraud cases) without overfitting the model. Solved by tuning probability thresholds, applying cross-validation on the SMOTE-augmented dataset, and prioritizing Precision-Recall curves over simple ROC-AUC.",
    technologies: ["Python", "TensorFlow", "Flask", "Scikit-learn", "Pandas", "SMOTE", "XGBoost"],
    timeline: "3 months",
    role: "Data Scientist",
    client: "Fintech Analytics",
  },
  "employee-churn-prediction": {
    overview:
      "A predictive analytics application that determines the likelihood of employee attrition. It helps HR leaders take proactive retention measures to retain high-performing team members before they resign.",
    process:
      "Analyzed core employee metrics (performance reviews, tenure, compensation, work-life balance) using Pandas and NumPy. Formulated churn prediction classification models utilizing Random Forests and gradient boosting. Designed interactive dashboard widgets to represent risk segments.",
    features: [
      "Attrition prediction classification modeling achieving over 85% accuracy",
      "Interactive data visualizations demonstrating key turnover drivers",
      "HR risk segment classification to identify departments with highest flight risks",
      "Feature importance evaluation showcasing salary disparities and management friction as top indicators",
      "Predictive analytics report output for C-suite decision alignment",
    ],
    challenges:
      "Determining high-dimensional interactions between qualitative features like 'job satisfaction' and quantitative variables like 'years since last promotion'. Solved by utilizing tree-based feature importance algorithms and applying SHAP (SHapley Additive exPlanations) values.",
    technologies: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Seaborn", "Plotly"],
    timeline: "2 months",
    role: "ML Engineer",
    client: "HR Analytics",
  },
  "solar-energy-prediction": {
    overview:
      "A regression forecasting project designed to predict annual solar energy output. Helps developers select optimal geolocations, select equipment types, and forecast future power yields.",
    process:
      "Processed physical parameters, weather datasets, panel technology classes, and sun exposure ratios. Trained regression estimators including XGBoost, Ridge, and Random Forest Regressors, tuning hyperparameters using GridSearch to minimize Root Mean Squared Error (RMSE).",
    features: [
      "Regression model forecasting annual solar energy production with high accuracy",
      "Exploratory analysis of weather patterns, tracking solar irradiance parameters",
      "Hyperparameter optimization using GridSearchCV to tune regression algorithms",
      "Geographic correlation mapping of energy yield based on latitudinal datasets",
      "Automated pipeline ingestion of solar telemetry logs",
    ],
    challenges:
      "Dealing with highly correlated meteorological variables (like temperature, humidity, and direct solar irradiance) causing multicollinearity. Resolved this by using Ridge Regression regularization and tree-based modeling (XGBoost) which are robust to multicollinearity.",
    technologies: ["Python", "XGBoost", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
    timeline: "2 months",
    role: "Data Analyst",
    client: "Clean Energy Analytics",
  },
  "clustering-solar-energy": {
    overview:
      "An unsupervised clustering application designed to identify clean energy grid zones. Segmenting geographical locations into cohesive solar production regions based on longitudinal yields.",
    process:
      "Applied Principal Component Analysis (PCA) to reduce solar yield dimensionality. Used K-Means clustering algorithm, optimizing the number of clusters using Elbow Method and Silhouette Coefficient. Visualized spatial cluster segments on map charts.",
    features: [
      "Unsupervised learning grouping geographical areas by solar output patterns",
      "K-Means clustering algorithm optimized using Silhouette Analysis and Elbow graphs",
      "Dimensionality reduction via PCA for multi-spectral meteorological attributes",
      "Seaborn data visualization layers mapping regional solar clusters",
      "Comparative profiling of each cluster's average yield potential",
    ],
    challenges:
      "Determining the optimal number of clusters without prior labeling. Solved by calculating Silhouette Coefficients alongside Inertia scores across various cluster parameters to identify the best elbow point.",
    technologies: ["Python", "K-Means", "PCA", "Scikit-learn", "Seaborn", "Matplotlib"],
    timeline: "2 months",
    role: "ML Engineer",
    client: "Clean Energy Research",
  },
  "media-downloader": {
    overview:
      "A utility platform created to help users quickly and safely parse and download public media links from various social web services.",
    process:
      "Designed a minimalist frontend using HTML, CSS, and modern JavaScript. Implemented a backend routing system using Node.js to receive link requests, scrape target page links, extract direct media URLs, and stream them securely to the user.",
    features: [
      "Dynamic URL validation and platform routing engine",
      "Streamed downloads directly to browser buffer for high speed",
      "Responsive frontend UI working across all mobile viewports",
      "Clean API parsing system to communicate with scraper services",
      "Anti-throttling link resolution headers",
    ],
    challenges:
      "Handling rapid API changes from social media platforms breaking the scrapers. Implemented fallback algorithms and error-response triggers that notify administrators to update parser classes when formats mismatch.",
    technologies: ["JavaScript", "HTML", "CSS", "Node.js", "Express", "API Integration"],
    timeline: "1 month",
    role: "Software Engineer",
    client: "Web Utilities",
  },
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  const details = projectDetails[params.slug as keyof typeof projectDetails]

  if (!project || !details) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        <Link
          href="/#projects"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 focus-ring rounded-sm px-2 py-1"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>

        <div className="grid gap-8">
          {/* Project Header */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Project Image */}
          <div className="aspect-video w-full rounded-lg overflow-hidden relative shadow-lg">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              priority
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-muted-foreground leading-relaxed">{details.overview}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Development Process</h2>
                <p className="text-muted-foreground leading-relaxed">{details.process}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {details.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
                <p className="text-muted-foreground leading-relaxed">{details.challenges}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {details.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-muted text-sm rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Timeline</p>
                      <p className="text-sm text-muted-foreground">{details.timeline}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Role</p>
                      <p className="text-sm text-muted-foreground">{details.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Client</p>
                      <p className="text-sm text-muted-foreground">{details.client}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-3">
                <Button asChild className="w-full hover-lift">
                  <Link href={project.liveUrl} target="_blank">
                    <Globe className="mr-2 h-4 w-4" />
                    View Live Site
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full hover-lift bg-transparent">
                  <Link href={project.githubUrl} target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    View Source Code
                  </Link>
                </Button>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Interested in Similar Work?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    I'd love to help you build something amazing. Let's discuss your project!
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/#contact">Get In Touch</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
