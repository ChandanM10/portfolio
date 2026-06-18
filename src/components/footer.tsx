import Link from "next/link"
import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "https://github.com/ChandanM10", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/chandan-mahato-6a484b279", label: "LinkedIn" },
    { icon: Mail, href: "mailto:chandanmahato7975@gmail.com", label: "Email" },
  ]

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link href="/" className="font-bold text-2xl mb-4 block hover:text-primary transition-colors">
              My Portfolio
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              A passionate Software Engineer, Python Developer, and AI Enthusiast with hands-on experience in full-stack development, 
              machine learning, and intelligent applications. Skilled in building scalable web applications, REST APIs, and AI-powered solutions that solve real-world problems and create meaningful impact.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button key={social.label} variant="ghost" size="icon" asChild className="hover-lift">
                  <Link href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.label}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm focus-ring rounded-sm px-1 py-1"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Kathmandu, Nepal</p>
              <p>chandanmahato7975@gmail.com</p>
              <p>+977-9761156281</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 sm:mb-0">
            <p className="flex items-center">
              © {currentYear} Chandan Mahato. Made with <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
              using Next.js & Tailwind CSS
            </p>
          </div>
          <div className="flex space-x-4 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
