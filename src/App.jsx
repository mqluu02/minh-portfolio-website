import { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import Particles from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import { FaGithub, FaLinkedin, FaEnvelope, FaRocket, FaBrain, FaChartLine, FaTools, FaPhone, FaComments, FaVideo, FaMicrochip, FaCode, FaMapMarkerAlt, FaFire, FaHeart, FaCoffee, FaLightbulb, FaTimes } from 'react-icons/fa'
import './App.css'

function App() {

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  const [selectedProject, setSelectedProject] = useState(null)

  const projects = {
    square: {
      id: 'square',
      title: 'AI Phone Receptionist - Square',
      tagline: '24/7 AI Receptionist that answers calls, understands "next Friday at 5", and books into Square Appointments',
      videoId: '3gKAFtXAQ4Q',
      embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/3gKAFtXAQ4Q?si=lpXtoJCX-DPnEfNd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      tech: ['Bland AI', 'Cloudflare Workers', 'Square API', 'TypeScript', 'Zod', 'JWT Auth'],
      problem: 'Small service businesses such as salons, clinics, and auto repair shops routinely miss out on revenue by failing to answer customer calls, especially during peak hours or outside of business hours. In urgent cases like a car breaking down or a last-minute service need, customers expect immediate help. If their call goes unanswered, they often move on to a competitor.\n\nVoice AI platforms like Bland AI, powered by GPT-based models, aim to automate phone conversations. However, these models lack critical context-awareness. For example, they struggle to understand and resolve natural language references like "tomorrow at 3 p.m." or "next Friday after 5" without additional date logic. Since GPT has no real-time clock or built-in calendar awareness, such expressions often lead to errors or confusion if not handled by a custom backend.\n\nAdditionally, out-of-the-box Bland AI templates fall short in real-world booking scenarios. They lack conflict checking, live availability queries, smooth error handling with smart escalation, and automatic appointment booking.',
      solution: 'I built both a custom backend service and a robust Bland AI call agent template tailored for real-world business scenarios.\n\n**Custom Backend (Cloudflare Workers):**\n• Lightweight, serverless backend for low latency and scalability\n• Exposes secure API endpoints for Bland AI to fetch real-time staff and availability data\n• Interprets natural language time expressions (e.g., "tomorrow at noon")\n• Enforces smart booking logic (prevent double bookings, buffer times, business hours, holidays)\n• Integrates with Square Appointments for real-time booking sync\n\n**Advanced Bland AI Call Agent:**\n• Custom call flow template supporting dynamic appointment collection\n• Smart branching for edge cases (allergies, group bookings, unclear requests)\n• Escalation to human staff for inappropriate behavior\n• Confirmation and recap before finalizing\n\nTogether, they create a production-ready voice assistant that handles real conversations, books reliably, and ensures smooth 24/7 customer experience without manual intervention.'
    },
    resos: {
      id: 'resos',
      title: 'AI Phone Receptionist - ResOS',
      tagline: '24/7 AI Receptionist that answers calls, understands "tomorrow at 7", and books into ResOS (restaurant reservation software)',
      videoId: 'Gip6iQEK8uk',
      embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Gip6iQEK8uk?si=FxyrLY928ndt1vNO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      tech: ['Bland AI', 'Cloudflare Workers', 'ResOS API', 'TypeScript', 'Zod', 'JWT Auth'],
      problem: 'Small service businesses such as salons, clinics, and auto repair shops routinely miss out on revenue by failing to answer customer calls, especially during peak hours or outside of business hours. In urgent cases like a car breaking down or a last-minute service need, customers expect immediate help. If their call goes unanswered, they often move on to a competitor.\n\nVoice AI platforms like Bland AI, powered by GPT-based models, aim to automate phone conversations. However, these models lack critical context-awareness. For example, they struggle to understand and resolve natural language references like "tomorrow at 3 p.m." or "next Friday after 5" without additional date logic. Since GPT has no real-time clock or built-in calendar awareness, such expressions often lead to errors or confusion if not handled by a custom backend.\n\nAdditionally, out-of-the-box Bland AI templates fall short in real-world booking scenarios. They lack conflict checking, live availability queries, smooth error handling with smart escalation, and automatic appointment booking.',
      solution: 'I built both a custom backend service and a robust Bland AI call agent template tailored for real-world restaurant reservation scenarios.\n\n**Custom Backend (Cloudflare Workers):**\n• Lightweight, serverless backend for low latency and scalability\n• Exposes secure API endpoints for Bland AI to fetch real-time table availability\n• Interprets natural language time expressions (e.g., "tomorrow at noon")\n• Enforces smart booking logic (prevent double bookings, buffer times, business hours, holidays)\n• Integrates with ResOS for real-time reservation sync\n\n**Advanced Bland AI Call Agent:**\n• Custom call flow template supporting dynamic reservation collection\n• Smart branching for edge cases (allergies, group bookings, trolling, inappropriate language)\n• Escalation to human staff when needed\n• Confirmation and recap before finalizing\n\nTogether, they create a production-ready voice assistant that handles real conversations, books reliably, and ensures smooth 24/7 customer experience without manual intervention.'
    },
    chatbot: {
      id: 'chatbot',
      title: 'Smart Booking Chatbot',
      tagline: 'Voiceflow chatbot with live availability checking and real-time Square booking integration',
      videoId: '3wIskqnjIq8',
      embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/3wIskqnjIq8?si=rarMItTlMv1v12xX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      tech: ['Voiceflow', 'Square API', 'Cloudflare Workers', 'Express.js', 'TypeScript', 'Zod'],
      problem: 'While many businesses add chat widgets to their websites, these bots often fall short when it comes to handling real-time bookings. Default chatbot flows are usually static, unable to:\n\n• Query live availability of staff or services\n• Prevent double bookings or enforce scheduling rules\n• Interpret natural language like "next Monday evening"\n• Handle real-world edge cases like allergy notes or large group requests\n• Sync bookings across phone and chat channels\n\nAs a result, businesses still need to manually monitor chat messages, follow up with customers, and manage appointment logistics, defeating the purpose of having an automated chatbot in the first place.',
      solution: 'I designed and built a custom Voiceflow chatbot integrated with a shared backend (with the AI calling agent) enabling it to function as a fully capable booking assistant for web platforms.\n\n**Voiceflow Chat Agent with Dynamic Flows:**\n• Guides users through booking conversations naturally\n• Collects key information: name, phone, service, time, special requests\n• Handles branching logic for edge cases (group size, allergies, confusing input)\n• Gracefully escalates to human if needed\n\n**Shared Backend Logic (Cloudflare Workers):**\n• Same custom backend as voice agent for consistent logic across channels\n• Interprets natural language dates into exact timestamps\n• Checks live staff/service availability\n• Applies business-specific booking rules (buffers, no overlaps, closed hours)\n\n**Live Booking Integration:**\n• Syncs directly with Square Appointments\n• Books appointments automatically via API once validated\n• No staff intervention needed\n\nThis solution turns a basic website chatbot into a real-time, automated receptionist able to handle bookings intelligently and ensure smooth customer experience.'
    },
    cnc: {
      id: 'cnc',
      title: 'AI CNC Monitoring System',
      tagline: 'Remote machine monitoring with real-time alerts, video feeds, and incident logging for shop owners',
      videoId: 'KCIsbTH4HuA',
      embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/KCIsbTH4HuA?si=idmHFjqPXIW-MJp-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      tech: ['React', 'Tailwind CSS', 'shadcn/ui', 'TypeScript'],
      problem: 'In busy CNC machine shops, even a small mistake like tool breakage, part misalignment, or material feed issues can lead to costly downtime, damaged equipment, or safety hazards. However, shop owners and operators often juggle multiple responsibilities beyond the shop floor, from managing logistics to picking up their kids. Constantly supervising machines isn\'t always practical.',
      solution: 'This project focuses on building a mockup front end for an AI-powered CNC monitoring system. The goal is to demonstrate the intended user experience, interface design, and system workflow laying the foundation for a future production-ready implementation.\n\nThe proposed system is designed to help CNC shop owners and operators monitor machines remotely using a combination of computer vision and audio analysis. It detects anomalies such as tool breakage, unusual machine noise, or part ejection, and sends real-time alerts to the user.\n\n**In a full implementation, the system would include:**\n• Live video streaming from Raspberry Pi-based camera modules using WebRTC for low-latency transmission\n• Audio anomaly detection using lightweight models running on edge devices\n• Backend service to process incoming data, classify anomalies, and send alerts\n• Centralized dashboard for viewing live feeds, reviewing incident logs, and tracking machine status\n• Remote machine control integration for emergency stops\n• Not limited to CNC machines - works with 3D printers, robotic arms, and other industrial equipment'
    },
    kuwe: {
      id: 'kuwe',
      title: 'Kuwe Platform: The Shopify for AI Agents & Automations',
      tagline: 'Shopify democratized e-commerce for millions of merchants. We\'re doing the same for AI automation - enabling anyone to build, deploy, and monetize AI without code.',
      website: 'https://kuwe.ai/',
      videoId: 'dN1fJF4Ue0c',
      embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/dN1fJF4Ue0c?si=s3-BuHjiD65Oek86" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      tech: ['Next.js', 'Supabase', 'Bland AI', 'nango.dev', 'TypeScript', 'Tailwind CSS'],
      isMultiVideo: true,
      videos: [
        {
          title: 'Part 1: Builder Side - No-Code Calling Agent Builder',
          embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/dN1fJF4Ue0c?si=s3-BuHjiD65Oek86" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
          description: 'Builders (template creators or AI engineers) can use a visual no-code interface to design AI voice agents, configure integrations (Google Sheets, Zapier, Square), and publish to the marketplace.'
        },
        {
          title: 'Part 2: Buyer Side - Self-Serve Agent Deployment',
          embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Qm66Xs7NlUI?si=bBfK2qbN11uCcmx6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
          description: 'Small business owners can browse agent templates, fill out prompts (business name, phone, scheduling), connect integrations, and launch their AI agent in minutes — no code needed.'
        }
      ],
      problem: 'When we started as an AI Agency using Bland AI, we realized it wasn\'t multitenant — we had to create each client a separate Bland AI account. This made it hard to sell in a scalable way. Customers couldn\'t easily self-serve by filling out a form to configure their calling agents. There was no way for AI agencies or AI builders to create solutions and sell them passively without manual setup for each client.',
      solution: 'We built Kuwe Platform to solve this. It\'s a marketplace and no-code builder that allows:\n\n**For Builders/Agencies:**\n• Create AI calling agent templates using a visual no-code interface\n• Configure workflows, integrations, and required buyer inputs\n• Publish templates to the marketplace for passive income\n• Multi-tenant architecture - one platform, many clients\n\n**For Buyers/Small Businesses:**\n• Browse ready-made AI agent templates\n• Fill out simple forms (prompts, business details, integrations)\n• Self-serve deployment in minutes\n• No technical skills or setup required\n\nThis enables AI agencies to build once, sell many times, and allows customers to get AI solutions without waiting for custom development.'
    }
  }

  return (
    <div className="app">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: ["#00ffff", "#ff00ff", "#ccff00"],
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.5,
            },
            number: {
              value: 40,
            },
            opacity: {
              value: 0.2,
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Floating Nav Dots */}
      <nav className="floating-nav">
        <motion.a 
          href="#hero"
          whileHover={{ scale: 1.5 }}
          className="nav-dot"
        >
          <span>Home</span>
        </motion.a>
        <motion.a 
          href="#about"
          whileHover={{ scale: 1.5 }}
          className="nav-dot"
        >
          <span>About</span>
        </motion.a>
        <motion.a 
          href="#projects"
          whileHover={{ scale: 1.5 }}
          className="nav-dot"
        >
          <span>Projects</span>
        </motion.a>
        <motion.a 
          href="#skills"
          whileHover={{ scale: 1.5 }}
          className="nav-dot"
        >
          <span>Skills</span>
        </motion.a>
        <motion.a 
          href="#contact"
          whileHover={{ scale: 1.5 }}
          className="nav-dot"
        >
          <span>Contact</span>
        </motion.a>
      </nav>

      {/* Hero Section - Ultra Creative */}
      <section className="hero-ultimate" id="hero">
        <div className="hero-container-ultimate">
          
          {/* Main Name Display - Center Top */}
          <motion.div 
            className="hero-name-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="name-wrapper">
              <h1 className="ultimate-name">
                Minh Luu
              </h1>
              <motion.div 
                className="name-decoration"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              />
            </div>
            
            <motion.p 
              className="tagline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Product Builder • Engineer • Problem Solver
            </motion.p>

            <motion.div 
              className="location-badge"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <FaMapMarkerAlt />
              <span>Toronto, Canada</span>
            </motion.div>
          </motion.div>

          {/* Creative Grid Layout */}
          <div className="hero-creative-grid">
            
            {/* Intro Card - Large */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="grid-item intro-item"
            >
              <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3}>
                <div className="creative-card intro-card-creative">
                  <motion.div 
                    className="card-icon-large"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    💻
                  </motion.div>
                  <h2 className="card-title-large">Hi There!</h2>
                  <p className="card-content-large">
                    I build products and make them work. From software to hardware, AI to sales, I've worked 
                    hands-on across the full stack.
                  </p>
                  <p className="card-content-large">
                    Through my startup <strong>Kuwe Technologies Inc</strong>, work experience, and personal projects, 
                    I've explored the full product cycle from coding and prototyping to marketing and customer feedback.
                  </p>
                  <p className="card-content-large">
                    I love building real-world solutions, learning through shipping, and figuring out how to make 
                    things people actually want.
                  </p>
                </div>
              </Tilt>
            </motion.div>

            {/* Job Hunt Card - Prominent */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="grid-item opportunities-item"
            >
              <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3}>
                <div className="creative-card opportunities-card-creative">
                  <div className="opportunity-header">
                    <motion.div 
                      className="pulse-ring"
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="opportunity-badge">Open to Opportunities</span>
                  </div>
                  
                  <h2 className="card-title-large">What I'm Looking For</h2>
                  
                  <div className="opportunities-list">
                    <motion.div 
                      className="opportunity-item"
                      whileHover={{ x: 10, backgroundColor: "rgba(99, 102, 241, 0.2)" }}
                    >
                      <span className="opportunity-icon">🚀</span>
                      <span>Product Manager Associate</span>
                    </motion.div>
                    <motion.div 
                      className="opportunity-item"
                      whileHover={{ x: 10, backgroundColor: "rgba(99, 102, 241, 0.2)" }}
                    >
                      <span className="opportunity-icon">💻</span>
                      <span>Application EIT</span>
                    </motion.div>
                    <motion.div 
                      className="opportunity-item"
                      whileHover={{ x: 10, backgroundColor: "rgba(99, 102, 241, 0.2)" }}
                    >
                      <span className="opportunity-icon">🤖</span>
                      <span>Software Engineer Intern</span>
                    </motion.div>
                    <motion.div 
                      className="opportunity-item"
                      whileHover={{ x: 10, backgroundColor: "rgba(99, 102, 241, 0.2)" }}
                    >
                      <span className="opportunity-icon">💼</span>
                      <span>Sales Engineer Associate</span>
                    </motion.div>
                    <motion.div 
                      className="opportunity-item"
                      whileHover={{ x: 10, backgroundColor: "rgba(99, 102, 241, 0.2)" }}
                    >
                      <span className="opportunity-icon">⚙️</span>
                      <span>Mechanical EIT</span>
                    </motion.div>
                  </div>
                </div>
              </Tilt>
            </motion.div>

            {/* Social Card - Compact */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="grid-item social-item"
            >
              <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3}>
                <div className="creative-card social-card-creative">
                  <h3 className="card-title-small">Connect</h3>
                  <div className="social-icons-creative">
                    <motion.a 
                      href="mailto:your.email@example.com"
                      className="social-icon-item"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaEnvelope />
                    </motion.a>
                    <motion.a 
                      href="https://linkedin.com/in/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon-item"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaLinkedin />
                    </motion.a>
                    <motion.a 
                      href="https://github.com/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon-item"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub />
                    </motion.a>
                  </div>
                </div>
              </Tilt>
            </motion.div>

          </div>

          {/* Scroll Indicator */}
          <motion.div 
            className="scroll-indicator-ultimate"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ 
              opacity: { delay: 1.5, duration: 0.5 },
              y: { duration: 1.5, repeat: Infinity }
            }}
          >
            <span>Scroll to explore</span>
            <motion.div className="scroll-arrow">↓</motion.div>
          </motion.div>

        </div>
      </section>

      {/* About Me Section */}
      <section className="about-creative" id="about">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="section-title-creative">
              <span className="title-emoji">👋</span>
              About Me
            </h2>

            {/* Story Flow */}
            <div className="story-flow">
              
              {/* Intro */}
              <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2}>
                <motion.div 
                  className="story-card story-card-intro"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3>Hi, I'm Minh 👋</h3>
                  <p>
                    A <strong>builder</strong> with a mechanical engineering background and a deep curiosity for 
                    software, AI, and making things people actually want. Running a startup with my cofounder 
                    was one of the most challenging and valuable experiences I've had.
                  </p>
                </motion.div>
              </Tilt>

              {/* Full Width - Building Everything */}
              <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2}>
                <motion.div 
                  className="story-card story-card-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <FaRocket className="story-icon" />
                  <h3>Building Everything We Could Think Of</h3>
                  <p>
                    We tried every kind of AI and software product we could think of: an automation builder platform, 
                    RAG systems, tools using n8n, AI receptionists, chatbots, and more. Most nights ended late, 
                    with the two of us tinkering on prototypes and debugging into the void.
                  </p>
                  <p className="story-highlight">
                    We even branched out into hardware, building a <strong>CNC monitoring IoT device</strong> and a 
                    <strong> chicken-cutting machine</strong> (yes, seriously) to solve some oddly specific problems.
                  </p>
                </motion.div>
              </Tilt>

              {/* Full Width - Business Lessons */}
              <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2}>
                <motion.div 
                  className="story-card story-card-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <FaLightbulb className="story-icon" />
                  <h3>The Business Reality Check</h3>
                  <p>
                    Trying to build and monetize each type of solution taught me just how different the challenges are across 
                    <strong> consulting, SaaS, AI tools, and physical products</strong>. It also made it painfully clear why 
                    investors love SaaS and selling templates.
                  </p>
                  <p className="story-joke">
                    💡 Lower overhead, higher margins, fewer chicken bones 🐔💻
                  </p>
                </motion.div>
              </Tilt>

              {/* Full Width - Sales & Marketing */}
              <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2}>
                <motion.div 
                  className="story-card story-card-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <FaChartLine className="story-icon" />
                  <h3>The Sales & Marketing Journey</h3>
                  <p>
                    To be brutally honest, <strong>we didn't land paying customers</strong>. A few came close, but it never closed. 
                    Still, the process taught me more than any class ever could. We tried nearly every sales and marketing method 
                    we could think of:
                  </p>
                  <div className="methods-grid">
                    <span>📱 Building a personal brand on social media</span>
                    <span>📧 Cold emailing</span>
                    <span>💬 Seeding online communities</span>
                    <span>🚪 Knocking on doors</span>
                    <span>☎️ Soul-sucking cold calling that builds character 😵‍💫</span>
                    <span>🤝 Meetup hustling</span>
                  </div>
                </motion.div>
              </Tilt>

              {/* Two Column Section */}
              <div className="story-row">
                <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3}>
                  <motion.div 
                    className="story-card"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <FaComments className="story-icon" />
                    <h3>Learning From Conversations</h3>
                    <p>
                      I talked to people across many industries (lawyers, restaurants, nail salons, car detailing, 
                      barbershops, mechanics, AI agencies) trying to understand what they actually cared about.
                    </p>
                    <p>
                      Those conversations taught me what features buyers ask for, how pricing feels in different markets, 
                      what product-market fit really means, which outreach channels actually work, and of course.. how to talk to people.
                    </p>
                  </motion.div>
                </Tilt>

                <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3}>
                  <motion.div 
                    className="story-card story-card-highlight"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <FaBrain className="story-icon" />
                    <h3>What I Gained</h3>
                    <p>
                      The startup didn't make money, but it gave me something better.
                    </p>
                    <p>
                      It gave me <strong>real-world experience, sharper instincts</strong>, and a clearer sense of 
                      how to build something people will actually pay for.
                    </p>
                  </motion.div>
                </Tilt>
              </div>

              {/* Bottom Personal Card */}
              <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2}>
                <motion.div 
                  className="story-card story-card-personal"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <FaHeart className="story-icon" />
                  <h3>Outside of Work</h3>
                  <p>
                    I love playing all kinds of sports and jamming on the guitar. I'm always up for meeting new people, 
                    learning something unexpected, or jumping into a good conversation.
                  </p>
                </motion.div>
              </Tilt>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="projects-showcase" id="projects">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title-creative">
              <span className="title-emoji">🚀</span>
              Projects
            </h2>
            <p className="section-subtitle-creative">Built between coffee runs and late-night debugging sessions.</p>

            <div className="projects-grid">
              
              {/* AI Receptionist - Square */}
              <motion.div 
                className="project-showcase-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedProject(projects.square)}
              >
                <div className="project-link">
                  <div className="project-thumbnail">
                    <img 
                      src="https://img.youtube.com/vi/3gKAFtXAQ4Q/maxresdefault.jpg" 
                      alt="AI Receptionist Square Demo"
                    />
                    <div className="project-overlay">
                      <div className="play-button">▶ View Details</div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3>AI Phone Receptionist - Square</h3>
                    <p className="project-tagline">
                      24/7 AI Receptionist that answers calls, understands "next Friday at 5", and books into Square Appointments
                    </p>
                    <div className="project-tech-tags">
                      {projects.square.tech.map((tech, index) => (
                        <span key={index}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* AI Receptionist - ResOS */}
              <motion.div 
                className="project-showcase-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                onClick={() => setSelectedProject(projects.resos)}
              >
                <div className="project-link">
                  <div className="project-thumbnail">
                    <img 
                      src="https://img.youtube.com/vi/Gip6iQEK8uk/maxresdefault.jpg" 
                      alt="AI Receptionist ResOS Demo"
                    />
                    <div className="project-overlay">
                      <div className="play-button">▶ View Details</div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3>AI Phone Receptionist - ResOS</h3>
                    <p className="project-tagline">
                      24/7 AI Receptionist that answers calls, understands "tomorrow at 7", and books into ResOS (restaurant reservation software)
                    </p>
                    <div className="project-tech-tags">
                      {projects.resos.tech.map((tech, index) => (
                        <span key={index}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Chatbot - Nail Salon */}
              <motion.div 
                className="project-showcase-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onClick={() => setSelectedProject(projects.chatbot)}
              >
                <div className="project-link">
                  <div className="project-thumbnail">
                    <img 
                      src="https://img.youtube.com/vi/3wIskqnjIq8/maxresdefault.jpg" 
                      alt="Chatbot Nail Salon Demo"
                    />
                    <div className="project-overlay">
                      <div className="play-button">▶ View Details</div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3>Smart Booking Chatbot</h3>
                    <p className="project-tagline">
                      Voiceflow chatbot with live availability checking and real-time Square booking integration
                    </p>
                    <div className="project-tech-tags">
                      {projects.chatbot.tech.map((tech, index) => (
                        <span key={index}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CNC Monitoring */}
              <motion.div 
                className="project-showcase-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                onClick={() => setSelectedProject(projects.cnc)}
              >
                <div className="project-link">
                  <div className="project-thumbnail">
                    <img 
                      src="https://img.youtube.com/vi/KCIsbTH4HuA/maxresdefault.jpg" 
                      alt="CNC Monitoring System Demo"
                    />
                    <div className="project-overlay">
                      <div className="play-button">▶ View Details</div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3>AI CNC Monitoring System</h3>
                    <p className="project-tagline">
                      Remote machine monitoring with real-time alerts, video feeds, and incident logging for shop owners
                    </p>
                    <div className="project-tech-tags">
                      {projects.cnc.tech.map((tech, index) => (
                        <span key={index}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Kuwe Platform */}
              <motion.div 
                className="project-showcase-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                onClick={() => setSelectedProject(projects.kuwe)}
              >
                <div className="project-link">
                  <div className="project-thumbnail">
                    <img 
                      src="https://img.youtube.com/vi/dN1fJF4Ue0c/maxresdefault.jpg" 
                      alt="Kuwe Platform Demo"
                    />
                    <div className="project-overlay">
                      <div className="play-button">▶ View Details</div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3>Kuwe Platform: The Shopify for AI Agents & Automations</h3>
                    <p className="project-tagline">
                      Shopify democratized e-commerce for millions of merchants. We\'re doing the same for AI automation - enabling anyone to build, deploy, and monetize AI without code.
                    </p>
                    <div className="project-tech-tags">
                      {projects.kuwe.tech.map((tech, index) => (
                        <span key={index}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
          <motion.div 
            className="project-modal"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <FaTimes />
            </button>

            <div className="modal-content">
              {/* Project Info Header */}
              <div className="modal-info">
                <h2>{selectedProject.title}</h2>
                <p className="modal-tagline">{selectedProject.tagline}</p>

                {selectedProject.website && (
                  <a 
                    href={selectedProject.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-website-link"
                  >
                    🌐 Visit Website: {selectedProject.website}
                  </a>
                )}

                <div className="modal-tech-tags">
                  {selectedProject.tech.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
              </div>

              {/* Video Embed(s) */}
              {selectedProject.isMultiVideo ? (
                <div className="modal-multi-videos">
                  {selectedProject.videos.map((video, index) => (
                    <div key={index} className="modal-video-section">
                      <h3 className="video-section-title">{video.title}</h3>
                      <p className="video-section-description">{video.description}</p>
                      <div className="modal-video">
                        <div 
                          className="video-wrapper"
                          dangerouslySetInnerHTML={{ __html: video.embedCode }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="modal-video">
                  <div 
                    className="video-wrapper"
                    dangerouslySetInnerHTML={{ __html: selectedProject.embedCode }}
                  />
                </div>
              )}

              {/* Problem & Solution */}
              <div className="modal-info">
                <div className="modal-section">
                  <h3>🎯 Problem</h3>
                  <p>{selectedProject.problem}</p>
                </div>

                <div className="modal-section">
                  <h3>💡 Solution</h3>
                  <div dangerouslySetInnerHTML={{ 
                    __html: selectedProject.solution.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
                  }} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Skills - Interactive Bubbles */}
      <section className="skills-creative" id="skills">
        <div className="container">
          <h2 className="section-title-creative">
            <span className="title-emoji">🛠️</span>
            What I Bring to the Table
          </h2>

          <div className="skills-bento">
            <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3}>
              <motion.div 
                className="skill-card-creative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <FaChartLine className="skill-icon-creative" />
                <h3>Sales & Marketing</h3>
                <div className="skill-bubbles-creative">
                  <span>D2D Sales</span>
                  <span>Cold Calling</span>
                  <span>Email Campaigns</span>
                  <span>Reddit</span>
                  <span>Discord</span>
                  <span>Instagram</span>
                  <span>Objection Handling</span>
                  <span>Customer Discovery</span>
                </div>
              </motion.div>
            </Tilt>

            <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3}>
              <motion.div 
                className="skill-card-creative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <FaCode className="skill-icon-creative" />
                <h3>AI & Software</h3>
                <div className="skill-bubbles-creative">
                  <span>React</span>
                  <span>GPT/LLMs</span>
                  <span>Bland AI</span>
                  <span>Voiceflow</span>
                  <span>Python</span>
                  <span>APIs</span>
                  <span>Cloudflare</span>
                  <span>RAG Systems</span>
                </div>
              </motion.div>
            </Tilt>

            <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3}>
              <motion.div 
                className="skill-card-creative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <FaTools className="skill-icon-creative" />
                <h3>Mechanical Engineering</h3>
                <div className="skill-bubbles-creative">
                  <span>SolidWorks</span>
                  <span>FEA</span>
                  <span>CNC</span>
                  <span>CAM</span>
                  <span>3D Printing</span>
                  <span>PLC</span>
                  <span>Arduino</span>
                  <span>Prototyping</span>
                </div>
              </motion.div>
            </Tilt>

            <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3}>
              <motion.div 
                className="skill-card-creative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <FaLightbulb className="skill-icon-creative" />
                <h3>Product & Business</h3>
                <div className="skill-bubbles-creative">
                  <span>Product Strategy</span>
                  <span>Customer Discovery</span>
                  <span>Market Research</span>
                  <span>Cost Optimization</span>
                  <span>Video Editing</span>
                  <span>Technical Docs</span>
                </div>
              </motion.div>
            </Tilt>
          </div>
        </div>
      </section>

      {/* Contact - Creative CTA */}
      <section className="contact-creative" id="contact">
        <div className="container">
          <motion.div 
            className="contact-hero"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="contact-emoji"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              📬
            </motion.div>
            <h2>Let's Build Something Cool</h2>
            <p className="contact-subtitle">
              Looking for PM/AE/SE roles where I can hustle, build, and sell.
            </p>

            <div className="contact-grid">
              <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3}>
                <motion.a 
                  href="mailto:your.email@example.com"
                  className="contact-card-creative"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaEnvelope className="contact-icon" />
                  <h3>Email Me</h3>
                  <p>your.email@example.com</p>
                </motion.a>
              </Tilt>

              <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3}>
                <motion.a 
                  href="https://linkedin.com"
                  className="contact-card-creative"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaLinkedin className="contact-icon" />
                  <h3>LinkedIn</h3>
                  <p>Connect with me</p>
                </motion.a>
              </Tilt>

              <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3}>
                <motion.a 
                  href="https://github.com"
                  className="contact-card-creative"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaGithub className="contact-icon" />
                  <h3>GitHub</h3>
                  <p>Check my code</p>
                </motion.a>
              </Tilt>
            </div>

            <motion.div 
              className="final-quote"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <FaHeart className="quote-icon" />
              <p>
                "Not your typical engineer. I actually enjoy talking to customers and selling stuff. 
                Let's chat about how I can help your team win."
              </p>
            </motion.div>
          </motion.div>
      </div>
      </section>

      {/* Footer */}
      <footer className="footer-creative">
        <p>
          <FaCoffee /> Built with React, Framer Motion, and way too much coffee
        </p>
        <p className="footer-emoji">Made with <FaHeart /> by Minh • 2025</p>
      </footer>
      </div>
  )
}

export default App
