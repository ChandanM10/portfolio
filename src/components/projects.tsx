import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Github, Calendar, User } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"

const projects = [
  {
    id: 1,
    title: "Nepal Gov Connect",
    description: "A full-stack web application connecting citizens with government services in Nepal. Featuring complaint registration, department routing, and real-time communication via WebSockets to enhance public transparency and efficiency.",
    image: "/nepal-gov-connect.png",
    tags: ["Django", "Django REST Framework", "Channels", "WebSockets", "PostgreSQL", "JavaScript"],
    githubUrl: "https://github.com/ChandanM10/Nepal_gov_connect",
    liveUrl: "https://nepal-gov-connect.onrender.com",
    slug: "nepal-gov-connect",
    featured: true,
    date: "2026",
    client: "Civic Tech Project"
  },
  {
    id: 2,
    title: "JARVIS Voice Assistant",
    description: "An AI-powered voice assistant operating system capable of voice interaction, intelligent query resolution, task automation, memory management, and execution of OS-level commands.",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2070&auto=format&fit=crop",
    tags: ["Python", "Speech Recognition", "NLP", "AI Agents", "Automation"],
    githubUrl: "https://github.com/ChandanM10/JARVIS_IS_LISTENING",
    liveUrl: "https://github.com/ChandanM10/JARVIS_IS_LISTENING",
    slug: "jarvis-voice-assistant",
    featured: true,
    date: "2025",
    client: "AI Research Project"
  },
  {
    id: 3,
    title: "Fraud Detection System",
    description: "An intelligent financial security system that leverages machine learning to identify suspicious financial transactions in real-time. Employs advanced techniques to handle highly imbalanced datasets.",
    image: "/fraud-detection.jpeg",
    tags: ["Machine Learning", "Python", "Flask", "Scikit-learn", "XGBoost", "SMOTE"],
    githubUrl: "https://github.com/ChandanM10/Fraud-Detection-Project",
    liveUrl: "https://github.com/ChandanM10/Fraud-Detection-Project",
    slug: "fraud-detection-system",
    featured: true,
    date: "2025",
    client: "Fintech Analytics"
  },
  {
    id: 4,
    title: "Employee Churn Prediction",
    description: "A predictive analytics project utilizing machine learning models to identify employee turnover risk, helping HR teams implement proactive retention strategies through data-driven insight visualization.",
    image: "/employee-churn.png",
    tags: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Seaborn", "Plotly"],
    githubUrl: "https://github.com/ChandanM10/Employee-churn-prediction-",
    liveUrl: "https://github.com/ChandanM10/Employee-churn-prediction-",
    slug: "employee-churn-prediction",
    featured: true,
    date: "2024",
    client: "HR Analytics"
  },
  {
    id: 5,
    title: "Predicting Solar Energy Production",
    description: "A regression modeling project predicting annual solar energy production. Utilizes geographical variables, weather attributes, and installation parameters to optimize clean energy forecasting.",
    image: "/solar.jpg.webp",
    tags: ["Python", "XGBoost", "Pandas", "Scikit-learn", "Matplotlib"],
    githubUrl: "https://github.com/ChandanM10/Predicting-Solar-Energy-Production",
    liveUrl: "https://github.com/ChandanM10/Predicting-Solar-Energy-Production",
    slug: "solar-energy-prediction",
    featured: true,
    date: "2025",
    client: "Clean Energy Analytics"
  },
  {
    id: 6,
    title: "Clustering Solar Energy Production",
    description: "An unsupervised machine learning project segmenting geographical areas based on solar energy patterns using K-Means and data visualization to optimize location routing for clean energy grids.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2070&auto=format&fit=crop",
    tags: ["Unsupervised Learning", "K-Means", "PCA", "Python", "Seaborn"],
    githubUrl: "https://github.com/ChandanM10/Clustering-Solar-Energy-Production",
    liveUrl: "https://github.com/ChandanM10/Clustering-Solar-Energy-Production",
    slug: "clustering-solar-energy",
    featured: false,
    date: "2025",
    client: "Clean Energy Research"
  },
  {
    id: 7,
    title: "Media Downloader",
    description: "A responsive web application enabling users to download media content from various social media networks seamlessly with proper backend parsing.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2036&auto=format&fit=crop",
    tags: ["JavaScript", "HTML", "CSS", "Node.js", "API Integrations"],
    githubUrl: "https://github.com/ChandanM10/MediaDownloader",
    liveUrl: "https://github.com/ChandanM10/MediaDownloader",
    slug: "media-downloader",
    featured: false,
    date: "2025",
    client: "Web Utilities"
  }
]

export function Projects() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <AnimatedSection>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">My Projects</h2>
        </AnimatedSection>

        {/* Featured Projects */}
        <AnimatedSection delay={200}>
          <h3 className="text-2xl font-bold mb-8">Featured Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={300 + index * 200}>
                <Card className="overflow-hidden hover-lift group">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-4">
                        <Button size="sm" asChild>
                          <Link href={project.githubUrl} target="_blank">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </Link>
                        </Button>
                        <Button size="sm" variant="secondary" asChild>
                          <Link href={project.liveUrl} target="_blank">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                      <span className="text-xs text-muted-foreground flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {project.date}
                      </span>
                    </div>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 mb-3 text-xs text-muted-foreground">
                      <User className="h-3 w-3" />
                      {project.client}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-muted text-xs rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href={`/projects/${project.slug}`}>
                        View Details
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Other Projects */}
        <AnimatedSection delay={600}>
          <h3 className="text-2xl font-bold mb-8">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {otherProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={700 + index * 150}>
                <Card className="hover-lift group">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <span className="text-xs text-muted-foreground">{project.date}</span>
                    </div>
                    <CardDescription className="text-sm">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-muted text-xs rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.githubUrl} target="_blank">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={`/projects/${project.slug}`}>
                        Details
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={1000}>
          <div className="text-center">
            <Button size="lg" variant="outline" className="hover-lift bg-transparent">
              <Github className="mr-2 h-4 w-4" />
              View All Projects on GitHub
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

// Export the projects data for use in other components
export { projects }
