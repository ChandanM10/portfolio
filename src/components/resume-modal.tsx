"use client"
import { X, Download, Printer, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null

  const downloadPDF = () => {
    // Create a proper PDF download using the image
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    const img = new Image()

    img.crossOrigin = "anonymous"
    img.onload = () => {
      // Set canvas dimensions to match image
      canvas.width = img.width
      canvas.height = img.height

      // Draw image on canvas
      ctx?.drawImage(img, 0, 0)

      // Convert to PDF using jsPDF
      import("jspdf")
        .then(({ jsPDF }) => {
          const pdf = new jsPDF({
            orientation: "portrait",
            unit: "px",
            format: [img.width, img.height],
          })

          // Add image to PDF
          const imgData = canvas.toDataURL("image/PNG")
          pdf.addImage(imgData, "PNG", 0, 0, img.width, img.height)

          // Download the PDF
          pdf.save("Chandan_Mahato_Resume.pdf")
        })
        .catch(() => {
          // Fallback: download the image directly
          const link = document.createElement("a")
          link.href = "/resume-image.png"
          link.download = "Chandan_Mahato_Resume.png"
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        })
    }

    img.onerror = () => {
      // Fallback: download the image directly
      const link = document.createElement("a")
      link.href = "/resume-image.png"
      link.download = "Chandan_Mahato_Resume.png"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }

    img.src = "/resume-image.png"
  }

  const printResume = () => {
    window.print()
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-5xl w-full max-h-[95vh] overflow-hidden">
        {/* Header Controls */}
        <div className="bg-gray-50 border-b p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              onClick={onClose}
              size="sm"
              variant="outline"
              className="flex items-center gap-2 bg-transparent text-blue-600 border-blue-600 hover:bg-blue-50 hover:text-blue-700"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Button>
            <h2 className="text-xl font-semibold text-gray-800">Resume - Chandan Mahato</h2>
          </div>
          <div className="flex gap-2">
            <Button onClick={downloadPDF} size="sm" className="bg-blue-600 hover:bg-blue-700">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
            <Button onClick={printResume} size="sm" variant="outline">
              <Printer className="h-4 w-4 mr-2" />
              Print
            </Button>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="overflow-y-auto max-h-[calc(95vh-80px)]">
          <div className="bg-white p-8 max-w-4xl mx-auto" style={{ fontFamily: "Times, serif" }}>
            {/* Header */}
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold tracking-wide mb-2">CHANDAN MAHATO</h1>
              <p className="text-lg mb-3">Data Enthusiast | AI & Machine Learning</p>
              <p className="text-base mb-4">Kathmandu, Nepal- 44600</p>

              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span>📞+977-9818503936</span>
                <span>✉️itssinghchandan10@gmail.com</span>
                <span>🔗linkedin.com/in/chandan-mahato-6a484b279</span>
                <span>🔗github.com/cngh10</span>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-6">
              <h2 className="text-lg font-bold border-b-2 border-black mb-3">PROFESSIONAL SUMMARY</h2>
              <p className="text-sm leading-relaxed">
                Information Science graduate skilled in Python, SQL, and AI/ML, with expertise in AI-driven solutions,
                microservices, and data pipeline optimization, building scalable systems for impactful business
                outcomes. Passionate about leveraging emerging technologies to solve real-world problems and contribute
                to high-performance engineering teams.
              </p>
            </div>

            {/* Education */}
            <div className="mb-6">
              <h2 className="text-lg font-bold border-b-2 border-black mb-3">EDUCATION</h2>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold">Visvesvaraya Technological University</p>
                  <p className="text-sm">B.E - Information Science and Engineering.</p>
                </div>
                <div className="text-right text-sm">
                  <p>2021 – 2025</p>
                  <p>Bangalore, Karnataka</p>
                </div>
              </div>
            </div>

            {/* Core Competencies */}
            <div className="mb-6">
              <h2 className="text-lg font-bold border-b-2 border-black mb-3">CORE COMPETENCIES</h2>
              <div className="grid grid-cols-3 gap-x-8 text-sm">
                <div>
                  <p>•Data Science & AI-ML</p>
                  <p>•DSA</p>
                  <p>•Data Science</p>
                </div>
                <div>
                  <p>•EDA</p>
                  <p>•Database Management</p>
                  <p>•Statistical Analysis</p>
                </div>
                <div>
                  <p>•Problem-Solving</p>
                  <p>•AI Frameworks</p>
                  <p>•Data Visualization</p>
                  <p>•Data Analysis</p>
                  <p>•Python Advanced</p>
                  <p>•Model Optimization</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="mb-6">
              <h2 className="text-lg font-bold border-b-2 border-black mb-3">EXPERIENCE</h2>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-semibold">Intern at Spinnaker Analytics</p>
                  <p className="text-sm font-medium">Data Science & AI</p>
                </div>
                <div className="text-right text-sm">
                  <p>Nov 2024 - Mar 2025</p>
                  <p>Bangalore, Karnataka</p>
                </div>
              </div>
              <ul className="text-sm space-y-1 ml-4">
                <li>
                  • Developed and evaluated supervised and unsupervised ML models using Python, scikit-learn, and
                  pandas, improving prediction accuracy by 18% on real-world datasets.
                </li>
                <li>
                  • Built end-to-end ML pipelines for data preprocessing, feature engineering, model training, and
                  evaluation to streamline repetitive experimentation tasks.
                </li>
                <li>
                  • Applied classification and regression algorithms (Logistic Regression, Decision Trees, Random
                  Forest) to derive actionable insights for business decision-making.
                </li>
              </ul>
            </div>

            {/* Projects */}
            <div className="mb-6">
              <h2 className="text-lg font-bold border-b-2 border-black mb-3">PROJECTS</h2>

              {/* Nepal Gov Connect */}
              <div className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <p className="font-semibold">Nepal Gov Connect (Full-Stack Civic Platform) 🔗</p>
                  <p className="text-sm">2026</p>
                </div>
                <p className="text-sm italic mb-2">Django, Django REST Framework, Channels, WebSockets, PostgreSQL</p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>
                    • Designed and built a centralized web application allowing citizens to submit complaints and report civic issues directly to administrative bodies.
                  </li>
                  <li>
                    • Configured Django Channels and WebSockets to establish real-time bi-directional notification and communication channels.
                  </li>
                  <li>
                    • Created a dynamic routing system utilizing PostgreSQL database relationships to dispatch issues automatically to corresponding local administrative divisions.
                  </li>
                </ul>
              </div>

              {/* JARVIS Voice Assistant */}
              <div className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <p className="font-semibold">JARVIS Voice Assistant (Voice Operating Assistant) 🔗</p>
                  <p className="text-sm">2025</p>
                </div>
                <p className="text-sm italic mb-2">Python, SpeechRecognition, Pyttsx3, Selenium, Web Scraping, Threading</p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>
                    • Developed an OS-level voice assistant in Python utilizing Google Speech Recognition and text-to-speech engines for hands-free query execution.
                  </li>
                  <li>
                    • Integrated local LLM endpoints to facilitate conversational query resolution and context-aware session memory persistence.
                  </li>
                  <li>
                    • Implemented multi-threaded task management loops to execute OS commands, browse directories, check emails, and search the web concurrently without blocking active microphone inputs.
                  </li>
                </ul>
              </div>

              {/* Fraud Detection System */}
              <div className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <p className="font-semibold">Fraud Detection System 🔗</p>
                  <p className="text-sm">2025</p>
                </div>
                <p className="text-sm italic mb-2">Machine learning, TensorFlow, Python, Flask, SMOTE</p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>
                    • Collected and preprocessed transactional data, handling imbalanced classes using techniques like
                    SMOTE to improve fraud detection accuracy.
                  </li>
                  <li>
                    • Integrated the trained model with a Python-based REST API for real-time fraud scoring in
                    production environments.
                  </li>
                  <li>
                    • Built and deployed machine learning models (Logistic Regression, Random Forest, XGBoost) achieving
                    over 90% precision in detecting fraudulent transactions.
                  </li>
                </ul>
              </div>

              {/* Employee Churn Prediction */}
              <div className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <p className="font-semibold">Employee Churn Prediction using Machine Learning 🔗</p>
                  <p className="text-sm">2024</p>
                </div>
                <p className="text-sm italic mb-2">Python ML, Data Libraries, Scikit-learn, XGBoost, Seaborn, Plotly</p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>
                    • Analyzed employee datasets to uncover key factors influencing attrition, such as job role,
                    satisfaction level, and work-life balance.
                  </li>
                  <li>
                    • Developed and fine-tuned predictive models (Logistic Regression, Random Forest, XGBoost) to
                    classify potential employee churn with an accuracy of over 85%.
                  </li>
                  <li>
                    • Visualized churn trends through interactive dashboards using tools like Matplotlib, Seaborn, and
                    Plotly to support strategic HR decisions.
                  </li>
                </ul>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="mb-6">
              <h2 className="text-lg font-bold border-b-2 border-black mb-3">TECHNICAL SKILLS</h2>
              <div className="text-sm space-y-2">
                <p>
                  <span className="font-semibold">Programming Languages:</span> Python, HTML, SQL, C++, JavaScript
                </p>
                <p>
                  <span className="font-semibold">Data Science & AIML:</span> Pandas, NumPy, Matplotlib, Scikit-learn,
                  TensorFlow, NLP, Power BI, Tableau
                </p>
                <p>
                  <span className="font-semibold">Cloud DevOps & IDEs:</span> GitHub, Docker, Jupyter Notebook, AWS
                </p>
                <p>
                  <span className="font-semibold">Data Engineering:</span> Data Cleaning, SQL Optimization, Hadoop, ETL
                  Pipelines, PySpark
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-6">
              <h2 className="text-lg font-bold border-b-2 border-black mb-3">CERTIFICATIONS</h2>
              <div className="flex justify-between items-center">
                <p className="text-sm">• Data Science & AI (2025)- Boston Institute of Analytics(BIA)</p>
                <p className="text-sm">Nov -Mar(2025)</p>
              </div>
            </div>

            {/* Technical Professional Engagements */}
            <div className="mb-6">
              <h2 className="text-lg font-bold border-b-2 border-black mb-3">TECHNICAL PROFESSIONAL ENGAGEMENTS</h2>
              <p className="text-sm">
                •AI Enthusiast, Continuous Learning Open Source, Hackathons Innovation. •Teamwork, Strategic Thinking,
                Engaged in tech communities for knowledge sharing and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
