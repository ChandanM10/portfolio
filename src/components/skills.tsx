import { Code, Database, Globe, Layout, Palette, Server, Smartphone, Cloud } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    id: 1,
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "SQL", "C++", "HTML/CSS", "JavaScript"],
    color: "text-blue-500",
  },
  {
    id: 2,
    title: "Data Science & AI/ML",
    icon: Server,
    skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "XGBoost", "NLP", "EDA", "Statistical Analysis"],
    color: "text-green-500",
  },
  {
    id: 3,
    title: "Data Engineering",
    icon: Database,
    skills: ["ETL Pipelines", "PySpark", "Hadoop", "SQL Optimization", "Data Cleaning"],
    color: "text-purple-500",
  },
  {
    id: 4,
    title: "Databases",
    icon: Layout,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    color: "text-pink-500",
  },
  {
    id: 5,
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS", "Docker", "Git/GitHub", "CI/CD"],
    color: "text-cyan-500",
  },
  {
    id: 6,
    title: "Data Visualization & Tools",
    icon: Palette,
    skills: ["Power BI", "Tableau", "Matplotlib", "Seaborn", "Jupyter Notebook", "VS Code"],
    color: "text-orange-500",
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container">
        <AnimatedSection>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">My Skills</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={category.id} delay={150 * (index + 1)}>
              <Card className="h-full hover-lift group">
                <CardHeader className="text-center pb-4">
                  <category.icon
                    className={`h-12 w-12 mx-auto mb-4 ${category.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap justify-center gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm hover:bg-primary/20 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}