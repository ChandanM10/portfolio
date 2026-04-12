import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Github, Calendar, User } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"

const projects = [
  {
      id: 1,
      title: "Fraud Detection System",
      description: "An intelligent system that leverages machine learning algorithms to detect suspicious transactions and prevent fraud in real-time, improving financial security.",
      image: "/fraud-detection.jpeg",  //
      tags: ["Machine Learning", "Python", "Flask", "Scikit-learn"],
      githubUrl: "https://github.com/Cngh10/Fraud-Detection-Project",
      liveUrl: "https://your-live-site.com",
      slug: "fraud-detection-system",
      featured: true,
      date: "2024",
      client: "Fintech Company"
  },
  {
    id: 2,
    title: "Employee Churn Prediction",
    description: "A machine learning project that predicts whether an employee is likely to leave the company, helping HR make proactive retention decisions.",
    image: "/employee-churn.png",  //
    tags: ["Python", "Pandas", "Scikit-learn", "XGBoost"],
    githubUrl: "https://github.com/Cngh10/Employee-churn-prediction-",
    liveUrl: "https://your-live-site.com",
    slug: "employee-churn-prediction",
    featured: true,
    date: "2025",
    client: "HR Analytics Team"
  },
  {
    id: 3,
    title: "Nepal Gov Connect",
    description: "A full-stack web application that connects citizens with government services in Nepal. It allows users to register, submit complaint, and interact with different government departments through a centralized platform. The system includes authentication, API integration, and real-time communication features to improve accessibility and transparency.",
    image: "/nepal-gov-connect.png",
    tags: ["Django", "Django REST Framework", "Channels", "JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/Cngh10/Nepal_gov_connect",
    liveUrl: "https://nepal-gov-connect.onrender.com",
    slug: "nepal-gov-connect",
    featured: true,
    date: "2026",
    client: "Personal Project"
},
  {
    id: 4,
    title: "Analytics Dashboard",
    description: "A comprehensive analytics dashboard with interactive charts and reports",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "D3.js", "Python", "FastAPI"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    slug: "analytics-dashboard",
    featured: false,
    date: "2023",
    client: "Data Company",
  },

  {
    id: 5,
    title: "Library Database Management System",
    description: "A web-based application designed to manage library resources, user registration, and book checkouts efficiently with a user-friendly interface.",
    image: "/library-system.jpg",  // 
    tags: ["HTML", "CSS", "JavaScript", "MySQL", "PHP"],
    githubUrl: "https://github.com/Cngh10/Library-Database-Management-System",
    liveUrl: "https://your-live-site.com",
    slug: "library-management-system",
    featured: false,
    date: "2023",
    client: "Academic Institution"
  },
 {
    id: 6,
    title: "Predicting Solar Energy Production",
    description: "A data science project that uses machine learning to predict annual solar energy output based on geographical and technical factors.",
    image: "/solar.jpg.webp",  // 
    tags: ["Python", "Machine Learning", "XGBoost", "Pandas", "Matplotlib"],
    githubUrl: "https://github.com/Cngh10/Predicting-Solar-Energy-Production",
    liveUrl: "https://your-live-site.com",
    slug: "solar-energy-prediction",
    featured: true,
    date: "2025",
    client: "Academic Institution"
  },
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
