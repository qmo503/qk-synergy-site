import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Menu, 
  X, 
  ArrowRight, 
  Globe, 
  TrendingUp, 
  Users, 
  Target, 
  Eye, 
  Heart, 
  Award,
  CheckCircle,
  Mail,
  MessageSquare,
  ChevronDown
} from 'lucide-react'
import qkLogo from './assets/qk-synergy-logo.png'
import crossBorderTrade from './assets/cross-border-trade.jpg'
import tradeBenefits from './assets/trade-benefits.jpg'
import globalGrowth from './assets/global-growth.png'
import marketingStrategy from './assets/marketing-strategy.jpg'
import businessConsulting from './assets/business-consulting.webp'
import consultingServices from './assets/consulting-services.png'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  // Navigation component
  const Navigation = () => (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img src={qkLogo} alt="QK Synergy" className="h-10 w-auto" />
            <span className="text-xl font-bold text-gray-900">QK Synergy</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'services', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize font-medium transition-colors ${
                  activeSection === section 
                    ? 'text-blue-600' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {['home', 'about', 'services', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left py-2 capitalize font-medium text-gray-700 hover:text-blue-600"
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )

  // Hero Section
  const HeroSection = () => (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Cross-Border Trade,<br />
              <span className="text-blue-600">Made Simple and Secure</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              At QK Synergy, we combine expertise in e-commerce, trade, and brand marketing to deliver 
              tailored market entry solutions. We're more than consultants—we're your trusted partner in global growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('services')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              >
                Explore Our Services
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
              >
                Let's Connect
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src={globalGrowth} 
              alt="Global E-commerce Growth" 
              className="rounded-lg shadow-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-blue-600/10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )

  // About Section
  const AboutSection = () => (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center mb-4">
                <Target className="text-blue-600 mr-3" size={32} />
                <CardTitle className="text-2xl">Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to make cross-border trade less complex and more impactful. QK Synergy is 
                dedicated to providing businesses with complete market entry solutions, helping brands expand 
                with confidence and achieve long-term global success.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center mb-4">
                <Eye className="text-blue-600 mr-3" size={32} />
                <CardTitle className="text-2xl">Vision</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                To be the trusted bridge between brands and global markets.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Cross-Border Trade Benefits Image */}
        <div className="mb-16">
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <img 
              src={tradeBenefits} 
              alt="Cross-Border Trade Benefits" 
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent flex items-center">
              <div className="text-white p-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Unlock Global Opportunities
                </h3>
                <p className="text-lg opacity-90">
                  Experience the benefits of seamless cross-border trade
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Award className="text-blue-600" size={32} />,
                title: "Professional Excellence",
                description: "Every solution is rooted in expertise and reliability"
              },
              {
                icon: <Heart className="text-blue-600" size={32} />,
                title: "Client First",
                description: "Your goals guide our every decision"
              },
              {
                icon: <Globe className="text-blue-600" size={32} />,
                title: "Global Perspective",
                description: "Insights from both North American and Asian markets"
              },
              {
                icon: <TrendingUp className="text-blue-600" size={32} />,
                title: "Continuous Innovation",
                description: "Always adapting to keep you ahead"
              }
            ].map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Curious how we can support your growth?</p>
          <Button 
            onClick={() => scrollToSection('services')}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            View Our Services
          </Button>
        </div>
      </div>
    </section>
  )

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={crossBorderTrade} 
                  alt="Cross-Border Trade Solutions" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Globe className="text-blue-600 mr-3" size={32} />
                  <CardTitle className="text-xl">Cross-Border Trade Solutions</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Looking to bring your products into Asia or North America? With over 10,000+ retail channels 
                  and 50+ online platforms, QK Synergy builds a complete ecosystem to ensure your brand lands 
                  smoothly and scales quickly.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  From compliance checks to logistics optimization, we deliver more than services—we deliver confidence.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={marketingStrategy} 
                  alt="Marketing & Brand Promotion" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center mb-4">
                  <TrendingUp className="text-blue-600 mr-3" size={32} />
                  <CardTitle className="text-xl">Marketing & Brand Promotion</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  We help your brand build a strong voice through social media, e-commerce strategy, SEO/SEM, 
                  and creative design. The goal isn't just visibility—it's memorability.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={businessConsulting} 
                  alt="Corporate Partnership & Consulting" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Users className="text-blue-600 mr-3" size={32} />
                  <CardTitle className="text-xl">Corporate Partnership & Consulting</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  We offer strategic consulting for brands, distributors, and retailers. Think of us not as 
                  a one-time advisor, but as your long-term strategic ally.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Service Process</h3>
            <div className="flex flex-col md:flex-row items-center justify-between">
              {[
                "Needs Assessment",
                "Strategy Design", 
                "Implementation",
                "Ongoing Optimization"
              ].map((step, index) => (
                <div key={index} className="flex items-center mb-4 md:mb-0">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">
                    {index + 1}
                  </div>
                  <span className="font-medium text-gray-900">{step}</span>
                  {index < 3 && (
                    <ArrowRight className="text-gray-400 ml-4 hidden md:block" size={20} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                Start a Conversation
              </Button>
              <Button 
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
              >
                Download Our Service Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's Talk About Your Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're just exploring cross-border trade or ready to enter new markets, 
              we're here to listen and provide expert guidance.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MessageSquare className="text-blue-600 mr-3" size={28} />
                  Get In Touch
                </CardTitle>
                <CardDescription>
                  Send us a message and we'll get back to you within 24 hours with tailored advice.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="text-green-600 mx-auto mb-4" size={48} />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Message sent successfully!</h3>
                    <p className="text-gray-600">
                      Thank you for reaching out—we'll reply within 24 hours with tailored advice.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Name *
                        </label>
                        <Input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <Input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us about your cross-border trade goals and challenges..."
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                    >
                      Send Message
                      <Mail className="ml-2" size={18} />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h3>
              <div className="space-y-6">
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      How does QK Synergy help brands enter new markets?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      We provide more than just a market entry plan—we create a full landing path. 
                      From regulatory compliance and logistics to channel expansion and strategy, 
                      we make sure your brand enters smoothly and grows sustainably.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      What markets do you specialize in?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      We specialize in cross-border trade between Asia and North America, 
                      leveraging our deep understanding of both markets to provide comprehensive solutions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      How long does the market entry process typically take?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      The timeline varies depending on your specific needs and target market. 
                      After our initial assessment, we'll provide you with a detailed timeline 
                      and milestone plan tailored to your business goals.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={qkLogo} alt="QK Synergy" className="h-8 w-auto filter invert" />
                <span className="text-xl font-bold">QK Synergy</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your trusted partner in cross-border trade and global market expansion.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['Home', 'About', 'Services', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>Email: info@qksynergy.com</p>
                <p>Business Hours: Mon-Fri 9AM-6PM</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 QK Synergy Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

