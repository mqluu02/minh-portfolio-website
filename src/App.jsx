import { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import Particles from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import { FaGithub, FaLinkedin, FaEnvelope, FaRocket, FaBrain, FaChartLine, FaTools, FaPhone, FaComments, FaVideo, FaMicrochip, FaCode, FaMapMarkerAlt, FaFire, FaHeart, FaCoffee, FaLightbulb, FaTimes, FaCog, FaWrench, FaPlus, FaMinus } from 'react-icons/fa'
import ArcadeBackground from './components/ArcadeBackground'
import FloatingNav from './components/FloatingNav'
import ProjectCard from './components/ProjectCard'
import VideoModal from './components/VideoModal'
import { softwareProjects } from './data/projectsData'
import './App.css'

function App() {

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine)
  }, [])

  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedHardwareProject, setSelectedHardwareProject] = useState(null)
  const [selectedVideoProject, setSelectedVideoProject] = useState(null)
  const [expandedDesign, setExpandedDesign] = useState(null)

  const projects = softwareProjects;

  // Note: Hardware and video projects kept inline for now due to complex nested structures
  // TODO: Extract to separate files in future refactoring
  const _unusedProjectsBackup = {
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
    kuweCallingAgent: {
      id: 'kuweCallingAgent',
      title: 'Kuwe Platform: The Shopify for AI Agents & Automations (Calling Agent Builder)',
      tagline: 'Shopify democratized e-commerce for millions of merchants. We\'re doing the same for AI automation - enabling anyone to build, deploy, and monetize AI calling agents without code.',
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
    },
    kuweAutomation: {
      id: 'kuweAutomation',
      title: 'Kuwe Platform: The Shopify for AI Agents & Automations (Automation Builder)',
      tagline: 'Shopify democratized e-commerce for millions of merchants. We\'re doing the same for AI automation - enabling anyone to build, deploy, and monetize workflow automations without code.',
      website: 'https://kuwe.ai/',
      videoId: 'frkcBzP6LIc',
      embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/frkcBzP6LIc?si=rIfl_58Iryu8P--c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      tech: ['Next.js', 'React Flow', 'Supabase', 'nango.dev', 'TypeScript', 'Tailwind CSS'],
      isMultiVideo: true,
      videos: [
        {
          title: 'Demo 1: Automation Builder & Buyer Flow',
          embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/frkcBzP6LIc?si=rIfl_58Iryu8P--c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
          description: 'This demo shows the full workflow: builders create automation templates with drag-and-drop, publish to marketplace, and buyers purchase, configure, and deploy them instantly.'
        },
        {
          title: 'Demo 2: Additional Automation Builder & Buyer Examples',
          embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/c46WAcVzsNQ?si=l5xuEX5-VZDJUbkA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
          description: 'This demo showcases additional automation workflows demonstrating how builders create templates and buyers deploy them for different use cases and integrations.'
        }
      ],
      problem: 'While n8n is a powerful automation tool, it\'s difficult to scale commercially. Each new client typically requires a separate n8n instance, which makes it hard for builders to monetize their workflows at scale. There\'s no easy way for customers to self-serve by purchasing and deploying pre-built workflow templates without technical setup.',
      solution: 'Kuwe solves this by providing a multitenant automation builder where:\n\n**For Builders:**\n• Use drag-and-drop interface to create custom workflows\n• Turn workflows into reusable templates with configurable inputs\n• Specify required integrations using Nango.dev\n• Deploy to marketplace for buyers to purchase and launch\n• Earn passive income from scalable, self-serve automations\n\n**For Buyers:**\n• Browse and purchase automation templates\n• Fill out simple forms with their input values\n• Connect integrations (Google Sheets, Slack, Gmail, etc.)\n• Launch workflows instantly — no n8n setup or technical knowledge needed\n\nThis makes automation accessible to non-technical users and enables builders to monetize their work at scale.'
    }
  }

  const hardwareProjects = {
    assistiveCuttingMachine: {
      id: 'assistiveCuttingMachine',
      title: 'Assistive Cutting Machine',
      tagline: 'Affordable kitchen tool that makes cutting through whole chicken easier',
      thumbnail: '/hardware/chicken-cutting/design4-proto1.jpg',
      problem: 'Cutting food can be hard and tiring on your hands. Many types of dishes in Asia require a lot of cutting effort like cutting through chicken bones, frozen fish, and pork spareribs.\n\nThere are already assistive cutting machines on the market, but they are oftentimes very expensive and for industrial use only.',
      constraints: 'The tool needs to deliver at minimum 10 lbf of force since that is the force required to break chicken bones. The machine should be small and easy to move around. Lastly, it must be safe to use it.',
      designs: [
        {
          id: 'design1',
          title: 'First Design',
          image: '/hardware/chicken-cutting/design1.jpg',
          howItWorks: 'The user would rotate the handlebar, and it would accelerate the slider. The knife would be clamped onto the sliding block using 4 set screws.',
          idea: 'The idea behind this design was to maximize the sliding block velocity as velocity related to impact force. And the higher the impact force, the easier it would be to cut through the food.',
          designSteps: [
            'Sketch out all possible linkage mechanisms that convert rotary motion into linear motion.',
            'The input rotation angle must be less than 90 degrees or else it would hurt the user\'s wrist when using. The slider stroke should be at a minimum distance of 8 inches to account for food spaces and acceleration distances. Based on these geometry constraints, an appropriate linkage mechanism was chosen.',
            'The gearbox with gear ratio of 3:1 was added to minimize the cranking movement while maximizing the sliding stroke.',
            'Calculations using kinematic analysis theory showed that the impact force delivered was 10 lbf while SolidWorks Dynamic Simulation calculated at 15 lbf which satisfied our design criteria.',
            'The prototype would be made of wood and 3D printed plastic',
            'This design was abandoned because it took a lot of time to manufacture, and the supporting base was small which led to it easily tipping over because of the weight of the sliding block'
          ]
        },
        {
          id: 'design2',
          title: 'Second Design',
          images: ['/hardware/chicken-cutting/design2-cad.jpg', '/hardware/chicken-cutting/design2-prototype.jpg'],
          howItWorks: 'There was a compound gear train coupled with the rack and pinion gear to transfer rotation to linear motion. The compound gear train was used because the design needed to be compact. The gear train was 4:1 ratio which resulted in a small cranking motion input and a large stroke distance output, making it faster to cut. The cutting force was calculated to be at 16.5 lbf. This was calculated by finding the cutting block velocity due to both weight and the gear ratio.',
          prototype: 'The prototype was made using wood and 3D printed material. The knife was clamped tightly using a 4" drill press which was mounted onto the mounting board. Therefore, it was much more reliable compared to using 4 set screws since the clamping surface area was greater. Through this prototype I learned 3 things:',
          learnings: [
            'This design took a lot of time and money to manufacture. This prototype cost me 120 CAD.',
            'The input shaft broke by torsion because the torque due to the gear train was too high. I increased the shaft diameter from 0.5" to 1" but it would not help.',
            'Superglue, wood glue, 3D printed shafts and gears were not suitable if this machine was commercialized.',
            'The output shaft was too long causing the shaft to bend. Therefore, the transmission was not smooth. I later added a bearing, and it was much better.',
            'While testing this machine and cutting some chicken, I realized that the sheer weight of the drill press would create more than enough force to cut through chicken bones. Additionally, it was much easier and faster to just move the cutting block up and down instead of having to crank. Therefore, this was not a feasible design.'
          ]
        },
        {
          id: 'design3',
          title: 'Third Design',
          image: '/hardware/chicken-cutting/design3.jpg',
          howItWorks: 'The user simply held the handle on top and slides up and down to cut. The cutting force relied simply on the weight of the drill press vise and the cutting knife. The bearings and spacers would be dropped through the threaded rods (not modeled here) and the nuts would be used to fix the positions of the bearings. The bearings would help slide the handle up and down.',
          prototypePlan: 'The mounting table was made by welding 1.25"x1.25" IDx 14-gauge square aluminum tubing to the 14-gauge aluminum sheet metal. The sliding mechanism was made by bending 14-gauge aluminum sheet metal. Aluminum was chosen because it was corrosion-resistant, light, and cheap. Corrosion-resistance was important, especially for food-related applications. All sheet metals were cut to size by laser cutting.',
          flaws: 'The design needs to use at least 14-gauge sheet metal because it must not deform under constant cutting load. However, most bending machine specs were around 22 gauge. Additionally, welding aluminum was not an easy task. Therefore, I decided to outsource my prototype. When outsourcing, it dawned on me that this design was very expensive to manufacture, and it would be impossible to sell a cutting machine at $300 CAD. Both material and welding labor costs were expensive. As a result, this design was abandoned.'
        },
        {
          id: 'design4v1',
          title: 'Fourth Design First Prototype',
          image: '/hardware/chicken-cutting/design4-proto1.jpg',
          howItWorks: 'Like the third design, the user would use the handle to slide up and down the cutting block. The frames would be made from 2020 aluminum extrusion. The sliding motion would be transferred using a V-Wheel Sliding Tray. Suction cups were screwed at the end to firmly fix the machine to the table.',
          details: 'The anodized aluminum extrusion was cut to size using a cold cut saw. The 4" mini drill press vise was mounted onto the 3D printed mounting plate. This design was much better compared to all previous designs because it was portable, customizable, easy to machine and assembled. The use of aluminum extrusion prevented the need for welding. The V-Wheel Sliding Tray ensured the smooth sliding motion of the handle while preventing the handle from wobbling. The total manufacturing cost was only $80 CAD.',
          problems: 'The PETG printed drill press mounting plate broke when I tried cutting a chicken. I might have underestimated the impact force and did not do the static FEA analysis.'
        },
        {
          id: 'design4v2',
          title: 'Fourth Design Second Prototype (outsourced on Alibaba)',
          image: '/hardware/chicken-cutting/design4-final.jpg',
          details: 'The issue of the 3D printed mounting plate breaking called for welding. Welding strength analysis (Shigley Mechanical Design) together with FEA analysis showed that the stress in the weld was around 25 ksi while the aluminum T6 yield strength was 35 ksi. Therefore, the safety factor of 1.4 was good enough in this application. The machine was tested extensively for one week: from cutting chicken bones, to frozen meat and fish and it was able to perform without any issues. With that, production was outsourced in China and the manufacturing cost was now only $55 CAD.'
        }
      ]
    },
    formulaSAE: {
      id: 'formulaSAE',
      title: 'Formula SAE Suspension Rocker',
      tagline: 'CNC machined front and rear rocker with 3D geometry and fairly tight tolerances for FSAE Club',
      thumbnail: '/hardware/cnc-formula/figure3-rockers.jpg',
      problem: 'Machined a front and rear rocker for the suspension systems. The geometry was 3D which posed many challenges. A CAM program in Fusion 360 was set up with steps such as: Facing, 2D and 3D adaptive clearing, parallel and contour passes, and boring.',
      figureDescriptions: [
        'Figure 1: Workpiece Clamped In The Custom machine Soft Jaw',
        'Figure 2: Machined Soft Jaw To Secure The Workpiece',
        'Figure 3: Front and Rear Rockers After Machining'
      ],
      images: [
        '/hardware/cnc-formula/figure1-clamped-workpiece.jpg',
        '/hardware/cnc-formula/figure2-soft-jaw.jpg',
        '/hardware/cnc-formula/figure3-rockers.jpg'
      ],
      challenges: [
        'The geometry had many round corners and was not symmetrical which required some soft jaws to be machined.',
        'Some bits were not already in the machine so new bits needed to be installed and calibrated into the machine.',
        'Roughing passes were first run and then the finishing passes for a nice surface finish',
        'The contour was waterjet which significantly reduced the machining time.',
        'The bore required an undersize of 0.002-0.005". Therefore, an iterative in-control machining technique was used where the machine took out a little bit of material, the machinist measured the bore, and the process repeated until the tolerance was met. The bore needed to be precise for the needle bearings to be press fitted.'
      ]
    },
    studCuttingMachine: {
      id: 'studCuttingMachine',
      title: 'Automatic Stud Cutting Machine',
      tagline: 'System design of the automated stud cutting machine',
      thumbnail: '/hardware/stud-cutting/figure1-3d-model.jpg',
      problem: 'Ngen Squared asked me to design a full-scale automatic stud cutting machine that was easy to use and with a budget of $5000 CAD.',
      figureDescriptions: [
        'Figure 1: 3D Model Of The Machine',
        'Figure 2: 3D Model Of The Controls Hardware',
        'Figure 3: Schematics Of The Controls System',
        'Figure 4: Detailed Model Of The Control Hardwares'
      ],
      images: [
        '/hardware/stud-cutting/figure1-3d-model.jpg',
        '/hardware/stud-cutting/figure2-controls-hardware.jpg',
        '/hardware/stud-cutting/figure3-schematics.jpg',
        '/hardware/stud-cutting/figure4-controls-detail.jpg'
      ],
      workingMechanism: 'The stud slides purely by gravity utilizing the ball transfer bearings for smooth motion. The stud would induce the proximity sensor which would actuate the pneumatic cylinder to clamp the stud. Depending on the desired cutting length, the actuation time would vary. Finally, the linear ball screw with the cutting saw assembly would move to cut the stud at the precise length.\n\nSince the design relies on gravity as the primary driving force, the table angle was optimized to reduce stud sliding time and minimize clamping delay after actuation, which affects cutting length accuracy.',
      controlsSystem: 'The control panel ensured safe operations and protected expensive devices from being damaged due to overcurrent. Fuses, relays, MCBs were implemented in the circuit. The pneumatic cylinder would be controlled by the solenoid valve and the pneumatic system which included (air compressor with pressure regulator, airlines, and fittings). PLC Siemens S7-1200 and HMI KTP400 were chosen because of their popularity and compatibility.',
      feedback: 'Ngen Squared desired to replace the cutting saw with a plasma cutter which was much faster and smoother.'
    },
    dronePayload: {
      id: 'dronePayload',
      title: 'Drone Payload Research Lab Co-op Project',
      tagline: 'Drone-mounted camera system for remote pine tree inspection with deployable payload mechanism',
      thumbnail: '/hardware/drone-payload/figure3-prototype.jpg',
      problem: 'The purpose of this project was to design a drone payload that could be controlled hundreds of meters away. The camera system needed to be deployed reliably to be able to take pictures of the pine trees at different heights.\n\nThe original design by the Capstone Students used a bevel gear train system to transfer rotation into linear motion. Solenoid systems were implemented to release the camera payload in case the drone got stuck in the branches.',
      figureDescriptions: [
        'Figure 1: Original 3D design of the drone payload',
        'Figure 2: Revised 3D design of the drone payload',
        'Figure 3: 3D printed prototype of the drone payload'
      ],
      images: [
        '/hardware/drone-payload/figure1-original-design.jpg',
        '/hardware/drone-payload/figure2-revised-design.jpg',
        '/hardware/drone-payload/figure3-prototype.jpg'
      ],
      designChanges: [
        'The original design had many unnecessary complex geometries which made it hard to 3D print. There were many overhangs which required a lot of support leading to wasteful material and long printing time. Therefore, I simplified a lot of components into much simpler shapes that could be easily 3D printed.',
        'There was no way to mount the design onto the drones, so I designed a top coupler for mounting.',
        'The mounting extrusions for the ropes to go through were too thin and would break under heavy wind. I increased it to be twice as thick.',
        'Redesigned the whole electronics tray to easily mount the electronics as there was no way to mount the electronics in the original design.',
        'Outsourced the electronics (the original design did not spec out the required electronics) which included: Arduino nano board, a receiver, transmitter, motor controller, magnetic encoder, LCD display, RF module.'
      ],
      prototypingChallenges: 'As can be seen in the prototype image, the camera load was too light and swung back and forth while being pulled up. Additionally, because the strings were too long, they started to intertwine. A dead weight as well as the string spacers were added but they did not fix the issues.\n\nTherefore, I concluded that this concept design was not feasible because when the strings were deployed hundreds of meters down, the issue of string tangling was inevitable. I proposed that instead of mounting the camera payload onto an existing drone, we could use a separate high-speed drone with integrated camera solutions.'
    },
     lateralWheelTruing: {
       id: 'lateralWheelTruing',
       title: 'Lateral Wheel Truing Device Design Sketches',
       tagline: 'Portable bike wheel truing device with proximity sensors and real-time mobile app visualization',
       thumbnail: '/hardware/wheel-truing/Wheel-Truing-Image.jpg',
       problem: 'When I volunteered at the bike shop, I noticed that it takes a lot of time for me and the mechanic to true a wheel. Additionally, truing a wheel requires a stand which is expensive and takes up lots of space. Therefore, I wanted to make a device that could tell the users how out of true the bike wheel was and how much to turn',
       constraints: 'The device needed to be portable so the users could true the bike if their bike was out of true while biking. The device would be mounted onto a bike phone mount and then mounted onto the frame of the bike close to the wheel.',
       solution: 'Proximity sensors, Bluetooth modules, batteries, and wheel encoders were used for this application. The wheel would be spun, and the proximity sensors would send live data of the position of different points on the wheel to an app. The app would then plot this data and the users could see in real time which points had the greatest displacement allowing them to tune the wheels to reduce the displacement values. The LED would also blink if the displacement was greater than the number set by the user. The encoder with the plastic measurement wheel was there to tell the orientation of the wheel and how much it had spun. Regarding the industrial design aspect, I wanted it to be bright red and have a smooth shape to represent the feeling of futuristic and adventurous (since it is used for biking application).',
       image: '/hardware/wheel-truing/Wheel-Truing-Image.jpg',
       tech: ['Mechanical Design', 'Electronics', 'Rapid Sketches']
      },
      filamentJoining: {
        id: 'filamentJoining',
        title: '3D Filament Welding/Joining Device',
        tagline: 'Sustainable solution to recycle 3D printing waste by joining filament scraps together',
        thumbnail: '/hardware/filament-joining/figure2-hardware-components.jpg',
        problem: 'I noticed that in my university engineering garage, there is a lot of 3D filament waste. Therefore, I planned to make this 3D filament joiner for the engineering garage and apply for the university sustainability grant.',
        solution: 'The filament would first be inserted through the first gear extruder. Then, the second filament would be inserted, and the joined section would be heated by the copper coil wrapped around the copper tube in the middle. The copper tube would be held by the two clamps in the middle. After that, the fan would cool down the joined section and the joined filament would be extruded to the other side.',
        components: 'The electronic components included: 3D print gear extruder, stepper motor driver, Arduino Nano, Fan, K-type thermocouple, LCD screen, MOSFET, switch, buck boost converter and aluminum heating block.',
        status: 'This project was paused due to school commitments, but the core design and component selection were completed.',
        figureDescriptions: [
          'Figure 1: Rapid Sketch Of The Device',
          'Figure 2: Hardware Components Of The Device'
        ],
        images: [
          '/hardware/filament-joining/figure1-sketch.jpg',
          '/hardware/filament-joining/figure2-hardware-components.jpg'
        ],
        tech: ['Arduino', 'Rapid Prototyping', 'Electronics', 'Motor Controls']
      }
    }

  const videoProjects = {
    businessCardOCR: {
      id: 'businessCardOCR',
      title: 'Business Card Lead Capture Automation',
      videoId: '9KI3pE7HxJY',
      embedCode: '<iframe width="315" height="560" src="https://www.youtube.com/embed/9KI3pE7HxJY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      description: [
        'An automation workflow designed to solve the common problem of manually logging contact information from business cards collected at networking events.',
        'The system uses ChatGPT image analysis to scan business card images, automatically extract key details such as names, emails, and company information, then organize everything into a Google Sheet for easy tracking and follow-up.',
        'This solution helps founders, sales teams, and professionals save time while maintaining organized contact databases without manual data entry.'
      ],
      tech: ['n8n', 'CapCut']
    },
    aiCallingAgent: {
      id: 'aiCallingAgent',
      title: 'AI Calling Agent - The Reality of Selling in 2025',
      videoId: '5FLuRN2L1Y0',
      embedCode: '<iframe width="315" height="560" src="https://www.youtube.com/embed/5FLuRN2L1Y0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      description: [
        'A video exploring the realities and challenges of selling AI calling agents to small businesses in 2025, contrasting the hype around AI receptionist solutions with real-world customer concerns.',
        'The content addresses common small business objections around AI reliability, accuracy, and customer interaction quality. It examines why many SMBs remain skeptical about implementing AI voice solutions.',
        'The video presents a strategic positioning approach: marketing AI receptionists as backup assistants rather than full replacements. This framing emphasizes 24/7 availability and after-hours coverage while reducing concerns about replacing human staff.',
        'Includes real-world examples illustrating the value proposition of having AI-enabled call handling for urgent customer needs outside business hours.'
      ],
      tech: ['Bland AI', 'CapCut']
    },
    macroFuryAI: {
      id: 'macroFuryAI',
      title: 'Macro Fury AI System - Advanced AI Nutrition Coach',
      videoId: '3WfGV4_iPZI',
      embedCode: '<iframe width="315" height="560" src="https://www.youtube.com/embed/3WfGV4_iPZI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
      description: [
        'A comprehensive AI-powered nutrition tracking and accountability system that automates food logging, macro calculation, and personalized coaching through multiple input methods.',
        'The system accepts food intake data through text, voice messages, or photos, then uses AI to recognize foods and calculate macronutrient breakdowns (protein, carbs, fats, and calories). All data is automatically logged to Google Sheets for tracking.',
        'Features automated accountability through phone call notifications when eating off-plan, adding a behavioral reinforcement layer to the tracking system.',
        'Includes scheduled email reports with full nutrition breakdowns and personalized recommendations based on eating patterns. The entire workflow runs autonomously without requiring manual tracking or dedicated mobile apps.'
      ],
      tech: ['n8n', 'CapCut']
    }
  }

  return (
    <div className="app">
      {/* Arcade Background */}
      <ArcadeBackground />
      
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
      <FloatingNav />

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
              I love making things
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
              <Tilt tiltMaxAngleX={0.5} tiltMaxAngleY={0.5}>
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
                    I love building products across software, hardware, and AI. I work hands-on through the full stack 
                    and learn through real-world feedback from customer interactions.
                  </p>
                  <p className="card-content-large">
                    Through my startup <strong>Kuwe Technologies Inc</strong>, work experience, and personal projects, 
                    I've explored the full product cycle from coding and prototyping to sales and marketing.
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
              <Tilt tiltMaxAngleX={0.5} tiltMaxAngleY={0.5}>
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
              <Tilt tiltMaxAngleX={0.5} tiltMaxAngleY={0.5}>
                <div className="creative-card social-card-creative">
                  <h3 className="card-title-small">Connect</h3>
                  <div className="social-icons-creative">
                    <motion.a 
                      href="mailto:luuquangminh1006@gmail.com"
                      className="social-icon-item"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaEnvelope />
                    </motion.a>
                    <motion.a 
                      href="https://www.linkedin.com/in/minh-luu-a6636a292/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon-item"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaLinkedin />
                    </motion.a>
                    <motion.a 
                      href="https://github.com/mqluu02"
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
                    <strong> consulting, SaaS, AI tools, and physical products</strong>.
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
                    <span>🤝 Going to meetups</span>
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
              Software Projects
            </h2>
            <p className="section-subtitle-creative">Proudly sponsored by way too many cups of coffee ☕</p>

            <div className="projects-grid">
              
              {/* Kuwe Platform - AI Calling Agent Builder */}
              <motion.div 
                className="project-showcase-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedProject(projects.kuweCallingAgent)}
              >
                <div className="project-link">
                  <div className="project-thumbnail">
                    <img 
                      src="https://img.youtube.com/vi/dN1fJF4Ue0c/maxresdefault.jpg" 
                      alt="Kuwe AI Calling Agent Builder Demo"
                    />
                    <div className="project-overlay">
                      <div className="play-button">▶ View Details</div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3>Kuwe Platform: The Shopify for AI Agents & Automations (Calling Agent Builder)</h3>
                    <p className="project-tagline">
                      Shopify democratized e-commerce for millions of merchants. We\'re doing the same for AI automation - enabling anyone to build, deploy, and monetize AI calling agents without code.
                    </p>
                    <div className="project-tech-tags">
                      {projects.kuweCallingAgent.tech.map((tech, index) => (
                        <span key={index}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Kuwe Platform - No-Code Automation Builder */}
              <motion.div 
                className="project-showcase-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                onClick={() => setSelectedProject(projects.kuweAutomation)}
              >
                <div className="project-link">
                  <div className="project-thumbnail">
                    <img 
                      src="https://img.youtube.com/vi/frkcBzP6LIc/maxresdefault.jpg" 
                      alt="Kuwe Automation Builder Demo"
                    />
                    <div className="project-overlay">
                      <div className="play-button">▶ View Details</div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3>Kuwe Platform: The Shopify for AI Agents & Automations (Automation Builder)</h3>
                    <p className="project-tagline">
                      Shopify democratized e-commerce for millions of merchants. We\'re doing the same for AI automation - enabling anyone to build, deploy, and monetize workflow automations without code.
                    </p>
                    <div className="project-tech-tags">
                      {projects.kuweAutomation.tech.map((tech, index) => (
                        <span key={index}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* AI Receptionist - Square */}
              <motion.div 
                className="project-showcase-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
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
                transition={{ duration: 0.5, delay: 0.3 }}
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
                transition={{ duration: 0.5, delay: 0.4 }}
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
                transition={{ duration: 0.5, delay: 0.5 }}
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

      {/* Hardware Projects Showcase */}
      <section className="projects-showcase hardware-projects" id="hardware">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title-creative">
              <span className="title-emoji">⚙️</span>
              Hardware Projects
            </h2>
            <p className="section-subtitle-creative">From sketches to prototypes to... even more prototypes.</p>

            <div className="projects-grid">
              {/* Assistive Cutting Machine */}
              <motion.div
                className="project-showcase-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedHardwareProject(hardwareProjects.assistiveCuttingMachine)}
              >
                <div className="project-link">
                  <div className="project-thumbnail">
                    <img
                      src={hardwareProjects.assistiveCuttingMachine.thumbnail}
                      alt="Assistive Cutting Machine"
                    />
                    <div className="project-overlay">
                      <div className="play-button">▶ View Details</div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3>{hardwareProjects.assistiveCuttingMachine.title}</h3>
                    <p className="project-tagline">
                      {hardwareProjects.assistiveCuttingMachine.tagline}
                    </p>
                    <div className="project-tech-tags">
                      <span>Mechanical Design</span>
                      <span>Rapid Prototyping</span>
                      <span>Kinematics & Dynamics</span>
                      <span>Inventor</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Formula SAE Suspension Rocker */}
              <motion.div
                className="project-showcase-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                onClick={() => setSelectedHardwareProject(hardwareProjects.formulaSAE)}
              >
                <div className="project-link">
                  <div className="project-thumbnail">
                    <img
                      src={hardwareProjects.formulaSAE.thumbnail}
                      alt="Formula SAE Suspension Rocker"
                    />
                    <div className="project-overlay">
                      <div className="play-button">▶ View Details</div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3>{hardwareProjects.formulaSAE.title}</h3>
                    <p className="project-tagline">
                      {hardwareProjects.formulaSAE.tagline}
                    </p>
                    <div className="project-tech-tags">
                      <span>CNC Mill</span>
                      <span>Fusion 360 CAM</span>
                      <span>Waterjet</span>
                      <span>GD&T</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Automatic Stud Cutting Machine */}
              <motion.div
                className="project-showcase-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onClick={() => setSelectedHardwareProject(hardwareProjects.studCuttingMachine)}
              >
                <div className="project-link">
                  <div className="project-thumbnail">
                    <img
                      src={hardwareProjects.studCuttingMachine.thumbnail}
                      alt="Automatic Stud Cutting Machine"
                    />
                    <div className="project-overlay">
                      <div className="play-button">▶ View Details</div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3>{hardwareProjects.studCuttingMachine.title}</h3>
                    <p className="project-tagline">
                      {hardwareProjects.studCuttingMachine.tagline}
                    </p>
                    <div className="project-tech-tags">
                      <span>Industrial Automation</span>
                      <span>Mechanical Design</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Drone Payload Research Lab Co-op */}
              <motion.div
                className="project-showcase-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                onClick={() => setSelectedHardwareProject(hardwareProjects.dronePayload)}
              >
                <div className="project-link">
                  <div className="project-thumbnail">
                    <img
                      src={hardwareProjects.dronePayload.thumbnail}
                      alt="Drone Payload Research Lab Co-op Project"
                    />
                    <div className="project-overlay">
                      <div className="play-button">▶ View Details</div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3>{hardwareProjects.dronePayload.title}</h3>
                    <p className="project-tagline">
                      {hardwareProjects.dronePayload.tagline}
                    </p>
                    <div className="project-tech-tags">
                      <span>Mechanical Design</span>
                      <span>Rapid Prototyping</span>
                      <span>Arduino</span>
                      <span>Electronics</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Lateral Wheel Truing Device */}
              <motion.div
                className="project-showcase-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                onClick={() => setSelectedHardwareProject(hardwareProjects.lateralWheelTruing)}
              >
                <div className="project-link">
                  <div className="project-thumbnail">
                    <img
                      src={hardwareProjects.lateralWheelTruing.thumbnail}
                      alt="Lateral Wheel Truing Device"
                    />
                    <div className="project-overlay">
                      <div className="play-button">▶ View Details</div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3>{hardwareProjects.lateralWheelTruing.title}</h3>
                    <p className="project-tagline">
                      {hardwareProjects.lateralWheelTruing.tagline}
                    </p>
                    <div className="project-tech-tags">
                      {hardwareProjects.lateralWheelTruing.tech.map((tech, index) => (
                        <span key={index}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 3D Filament Welding/Joining Device */}
              <motion.div
                className="project-showcase-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                onClick={() => setSelectedHardwareProject(hardwareProjects.filamentJoining)}
              >
                <div className="project-link">
                  <div className="project-thumbnail">
                    <img
                      src={hardwareProjects.filamentJoining.thumbnail}
                      alt="3D Filament Welding/Joining Device"
                    />
                    <div className="project-overlay">
                      <div className="play-button">▶ View Details</div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3>{hardwareProjects.filamentJoining.title}</h3>
                    <p className="project-tagline">
                      {hardwareProjects.filamentJoining.tagline}
                    </p>
                    <div className="project-tech-tags">
                      {hardwareProjects.filamentJoining.tech.map((tech, index) => (
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

      {/* Hardware Project Modal */}
      {selectedHardwareProject && (
        <div className="project-modal-overlay" onClick={() => {
          setSelectedHardwareProject(null)
          setExpandedDesign(null)
        }}>
          <motion.div
            className="project-modal hardware-modal"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => {
              setSelectedHardwareProject(null)
              setExpandedDesign(null)
            }}>
              <FaTimes />
            </button>

            <div className="modal-content">
              <div className="modal-info">
                <h2>{selectedHardwareProject.title}</h2>
                <p className="modal-tagline">{selectedHardwareProject.tagline}</p>
              </div>

              {/* Problem Section */}
              <div className="modal-section">
                <h3>🎯 Problem Statement</h3>
                <p>{selectedHardwareProject.problem}</p>
              </div>

              {/* Design Constraints */}
              {selectedHardwareProject.constraints && (
                <div className="modal-section">
                  <h3>📐 Design Constraints</h3>
                  {typeof selectedHardwareProject.constraints === 'string' ? (
                    <p>{selectedHardwareProject.constraints}</p>
                  ) : (
                    <ul className="constraints-list">
                      {selectedHardwareProject.constraints.map((constraint, index) => (
                        <li key={index}>{constraint}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {/* Images Section with Figure Descriptions (for Formula SAE) */}
              {selectedHardwareProject.images && selectedHardwareProject.figureDescriptions && (
                <div className="modal-section">
                  <h3>📸 Project Media</h3>
                  <div className="design-images-grid">
                    {selectedHardwareProject.images.map((img, idx) => (
                      <div key={idx} className="design-image-with-caption">
                        <div className="design-image">
                          <img src={img} alt={selectedHardwareProject.figureDescriptions[idx]} />
                        </div>
                        <p className="image-caption">{selectedHardwareProject.figureDescriptions[idx]}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Manufacturing Challenges (for Formula SAE) */}
              {selectedHardwareProject.challenges && (
                <div className="modal-section">
                  <h3>⚙️ Manufacturing Challenges</h3>
                  <ul className="challenges-list">
                    {selectedHardwareProject.challenges.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Working Mechanism (for Stud Cutting Machine) */}
              {selectedHardwareProject.workingMechanism && (
                <div className="modal-section">
                  <h3>⚙️ Working Mechanism</h3>
                  <p>{selectedHardwareProject.workingMechanism}</p>
                </div>
              )}

              {/* Controls System (for Stud Cutting Machine) */}
              {selectedHardwareProject.controlsSystem && (
                <div className="modal-section">
                  <h3>🎛️ Controls System</h3>
                  <p>{selectedHardwareProject.controlsSystem}</p>
                </div>
              )}

              {/* Feedback (for Stud Cutting Machine) */}
              {selectedHardwareProject.feedback && (
                <div className="modal-section">
                  <h3>💬 Feedback from Ngen Squared</h3>
                  <p>{selectedHardwareProject.feedback}</p>
                </div>
              )}

              {/* Design Changes (for Drone Payload) */}
              {selectedHardwareProject.designChanges && (
                <div className="modal-section">
                  <h3>🔧 Design Changes</h3>
                  <ul className="challenges-list">
                    {selectedHardwareProject.designChanges.map((change, index) => (
                      <li key={index}>{change}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Prototyping Challenges (for Drone Payload) */}
              {selectedHardwareProject.prototypingChallenges && (
                <div className="modal-section">
                  <h3>🔬 Prototyping and Design Challenges</h3>
                  <p>{selectedHardwareProject.prototypingChallenges}</p>
                </div>
              )}

              {/* Solution Section (for Lateral Wheel Truing) */}
              {selectedHardwareProject.solution && (
                <div className="modal-section">
                  <h3>💡 Design Solution</h3>
                  {selectedHardwareProject.image && (
                    <div className="design-image">
                      <img src={selectedHardwareProject.image} alt={selectedHardwareProject.title} />
                    </div>
                  )}
                  <p>{selectedHardwareProject.solution}</p>
                </div>
              )}

              {/* Components (for Filament Joining) */}
              {selectedHardwareProject.components && (
                <div className="modal-section">
                  <h3>🔌 Electronic Components</h3>
                  <p>{selectedHardwareProject.components}</p>
                </div>
              )}

              {/* Status (for Filament Joining) */}
              {selectedHardwareProject.status && (
                <div className="modal-section">
                  <h3>📊 Project Status</h3>
                  <p>{selectedHardwareProject.status}</p>
                </div>
              )}

              {/* Tech Stack (for projects with tech array) */}
              {selectedHardwareProject.tech && (
                <div className="modal-section">
                  <h3>🛠️ Technologies Used</h3>
                  <div className="modal-tech-tags">
                    {selectedHardwareProject.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* Design Solutions - Collapsible (for chicken cutting) */}
              {selectedHardwareProject.designs && (
                <div className="modal-section">
                  <h3>💡 Design Solutions</h3>
                  <div className="designs-accordion">
                    {selectedHardwareProject.designs.map((design, index) => (
                    <div key={design.id} className="design-item">
                      <button
                        className={`design-header ${expandedDesign === design.id ? 'expanded' : ''}`}
                        onClick={() => setExpandedDesign(expandedDesign === design.id ? null : design.id)}
                      >
                        <div className="design-title">
                          <span className="design-number">Design {index + 1}</span>
                          <span className="design-name">{design.title}</span>
                        </div>
                        {expandedDesign === design.id ? <FaMinus /> : <FaPlus />}
                      </button>
                      
                      {expandedDesign === design.id && (
                        <motion.div
                          className="design-content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {design.image && (
                            <div className="design-image">
                              <img src={design.image} alt={design.title} />
                            </div>
                          )}

                          {design.images && design.images.length > 0 && (
                            <div className="design-images-grid">
                              {design.images.map((img, idx) => (
                                <div key={idx} className="design-image">
                                  <img src={img} alt={`${design.title} - Image ${idx + 1}`} />
                                </div>
                              ))}
                            </div>
                          )}

                          
                          {design.howItWorks && (
                            <div className="design-section">
                              <h4>How it works</h4>
                              <p>{design.howItWorks}</p>
                            </div>
                          )}

                          {design.idea && (
                            <div className="design-section">
                              <h4>Design Idea</h4>
                              <p>{design.idea}</p>
                            </div>
                          )}

                          {design.designSteps && (
                            <div className="design-section">
                              <h4>Design Steps</h4>
                              <ul>
                                {design.designSteps.map((step, i) => (
                                  <li key={i}>{step}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {design.prototype && (
                            <div className="design-section">
                              <h4>Prototype</h4>
                              <p>{design.prototype}</p>
                            </div>
                          )}

                          {design.learnings && (
                            <div className="design-section">
                              <h4>Key Learnings</h4>
                              <ul>
                                {design.learnings.map((learning, i) => (
                                  <li key={i}>{learning}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {design.prototypePlan && (
                            <div className="design-section">
                              <h4>Prototype Plan</h4>
                              <p>{design.prototypePlan}</p>
                            </div>
                          )}

                          {design.flaws && (
                            <div className="design-section">
                              <h4>Design Flaws and Obstacles</h4>
                              <p>{design.flaws}</p>
                            </div>
                          )}

                          {design.details && (
                            <div className="design-section">
                              <h4>Details</h4>
                              <p>{design.details}</p>
                            </div>
                          )}

                          {design.problems && (
                            <div className="design-section">
                              <h4>Problems while testing</h4>
                              <p>{design.problems}</p>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}

      {/* Video Editing Projects */}
      <section className="projects-showcase video-editing-section" id="video-editing">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title-creative">
              <span className="title-emoji">🎬</span>
              Video Editing Projects
            </h2>
            <p className="section-subtitle-creative">Short-form content creation with CapCut</p>

            <div className="projects-grid">
              {/* Business Card Lead Capture Automation Video */}
              <motion.div
                className="project-showcase-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedVideoProject(videoProjects.businessCardOCR)}
              >
                <div className="project-link">
                  <div className="project-thumbnail">
                    <img
                      src="https://img.youtube.com/vi/9KI3pE7HxJY/maxresdefault.jpg"
                      alt="Business Card Lead Capture Automation"
                    />
                    <div className="project-overlay">
                      <div className="play-button">▶ View Details</div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3>{videoProjects.businessCardOCR.title}</h3>
                    <p className="project-tagline">
                      {videoProjects.businessCardOCR.description[0]}
                    </p>
                    <div className="project-tech-tags">
                      {videoProjects.businessCardOCR.tech.map((tech, index) => (
                        <span key={index}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* AI Calling Agent Video */}
              <motion.div
                className="project-showcase-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                onClick={() => setSelectedVideoProject(videoProjects.aiCallingAgent)}
              >
                <div className="project-link">
                  <div className="project-thumbnail">
                    <img
                      src="https://img.youtube.com/vi/5FLuRN2L1Y0/maxresdefault.jpg"
                      alt="AI Calling Agent - The Reality of Selling in 2025"
                    />
                    <div className="project-overlay">
                      <div className="play-button">▶ View Details</div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3>{videoProjects.aiCallingAgent.title}</h3>
                    <p className="project-tagline">
                      {videoProjects.aiCallingAgent.description[0]}
                    </p>
                    <div className="project-tech-tags">
                      {videoProjects.aiCallingAgent.tech.map((tech, index) => (
                        <span key={index}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Macro Fury AI System Video */}
              <motion.div
                className="project-showcase-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onClick={() => setSelectedVideoProject(videoProjects.macroFuryAI)}
              >
                <div className="project-link">
                  <div className="project-thumbnail">
                    <img
                      src="https://img.youtube.com/vi/3WfGV4_iPZI/maxresdefault.jpg"
                      alt="Macro Fury AI System - Advanced AI Nutrition Coach"
                    />
                    <div className="project-overlay">
                      <div className="play-button">▶ View Details</div>
                    </div>
                  </div>
                  <div className="project-content">
                    <h3>{videoProjects.macroFuryAI.title}</h3>
                    <p className="project-tagline">
                      {videoProjects.macroFuryAI.description[0]}
                    </p>
                    <div className="project-tech-tags">
                      {videoProjects.macroFuryAI.tech.map((tech, index) => (
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

      {/* Video Project Modal */}
      {selectedVideoProject && (
        <div className="project-modal-overlay" onClick={() => setSelectedVideoProject(null)}>
          <motion.div
            className="project-modal video-modal"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setSelectedVideoProject(null)}>
              <FaTimes />
            </button>

            <div className="modal-content">
              <div className="modal-info">
                <h2>{selectedVideoProject.title}</h2>
              </div>

              <div className="modal-video-vertical">
                <div
                  className="video-wrapper-vertical"
                  dangerouslySetInnerHTML={{ __html: selectedVideoProject.embedCode }}
                />
              </div>

              <div className="modal-info">
                <div className="modal-tech-tags">
                  {selectedVideoProject.tech.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>

                <div className="modal-section">
                  <h3>📝 About This Project</h3>
                  {selectedVideoProject.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
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
            Skills
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
                  <span>Cold Emailing</span>
                  <span>Reddit Seeding</span>
                  <span>Discord Seeding</span>
                  <span>Video Editing (CapCut)</span>
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
                  <span>Next.js</span>
                  <span>Express.js</span>
                  <span>Node.js</span>
                  <span>TypeScript</span>
                  <span>Python</span>
                  <span>PostgreSQL</span>
                  <span>Supabase</span>
                  <span>Cloudflare Workers</span>
                  <span>REST APIs</span>
                  <span>Chatbot (Voiceflow)</span>
                  <span>AI Receptionist (Bland AI)</span>
                  <span>AI Agent & Automations (n8n)</span>
                  <span>GitHub Actions</span>
                  <span>Docker</span>
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
                <h3>Hardware & Mechanical Engineering</h3>
                <div className="skill-bubbles-creative">
                  <span>SolidWorks</span>
                  <span>Inventor</span>
                  <span>Creo</span>
                  <span>Fusion 360 CAM</span>
                  <span>CNC Milling</span>
                  <span>FEA (ANSYS)</span>
                  <span>Inventor Nastran</span>
                  <span>CFD</span>
                  <span>DFMA</span>
                  <span>GD&T</span>
                  <span>Tolerance Stack-up</span>
                  <span>Motor Design</span>
                  <span>Electronics</span>
                  <span>MCU</span>
                  <span>Computer Vision</span>
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
            <h2>Contact</h2>

            <div className="contact-grid">
              <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3}>
                <motion.a 
                  href="mailto:luuquangminh1006@gmail.com"
                  className="contact-card-creative"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaEnvelope className="contact-icon" />
                  <h3>Email</h3>
                  <p>luuquangminh1006@gmail.com</p>
                </motion.a>
              </Tilt>

              <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3}>
                <motion.a 
                  href="https://www.linkedin.com/in/minh-luu-a6636a292/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card-creative"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaLinkedin className="contact-icon" />
                  <h3>LinkedIn</h3>
                  <p>@minh-luu-a6636a292</p>
                </motion.a>
              </Tilt>

              <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3}>
                <motion.a 
                  href="https://github.com/mqluu02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card-creative"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaGithub className="contact-icon" />
                  <h3>GitHub</h3>
                  <p>@mqluu02</p>
                </motion.a>
              </Tilt>
            </div>
          </motion.div>
      </div>
      </section>

      {/* Footer */}
      <footer className="footer-creative">
        <p>
          Built with React and Framer Motion
        </p>
        <p className="footer-emoji">Made with <FaHeart /> by Minh • 2025</p>
      </footer>
      </div>
  )
}

export default App
