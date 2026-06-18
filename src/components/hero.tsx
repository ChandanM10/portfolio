"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { ResumePDFViewer } from "@/components/resume-pdf-viewer"
import { motion } from "framer-motion"

export function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "I'm a Python Developer, Software Engineer, and Machine Learning Enthusiast with experience in building scalable applications, AI-powered systems, and data-driven solutions."
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const [showResumeViewer, setShowResumeViewer] = useState(false)

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 50)
      return () => clearTimeout(timeout)
    } else {
      setIsTypingComplete(true)
    }
  }, [typedText, fullText])

  return (
    <section className="relative min-h-screen">
      <Navbar onResumeClick={() => setShowResumeViewer(true)} />
      <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.h1
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm{" "}
            <span className="text-gradient bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Chandan Mahato
            </span>
          </motion.h1>

          <motion.div
            className="max-w-[700px] mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg text-muted-foreground md:text-xl min-h-[60px] sm:min-h-auto">
              {typedText}
              {!isTypingComplete && <span className="animate-blink text-primary">|</span>}
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button asChild size="lg" className="hover-lift bg-transparent" variant="outline">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button size="lg" className="hover-lift" onClick={() => setShowResumeViewer(true)}>
              View Resume
            </Button>
          </motion.div>

          <motion.div
            className="flex justify-center gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button variant="ghost" size="icon" asChild className="hover-lift">
              <Link href="https://github.com/ChandanM10" target="_blank" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover-lift">
              <Link href="https://linkedin.com/in/chandan-mahato-6a484b279" target="_blank" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover-lift">
              <Link href="mailto:chandanmahato7975@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          <Link
            href="#about"
            className="flex items-center justify-center w-10 h-10 rounded-full border transition-colors hover:bg-muted focus-ring"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>

      <ResumePDFViewer isOpen={showResumeViewer} onClose={() => setShowResumeViewer(false)} />
    </section>
  )
}
