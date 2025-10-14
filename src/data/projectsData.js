export const softwareProjects = {
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
        title: 'Demo 2: Real-Time Trigger & Action Execution',
        embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/9GWKzI0A2TY?si=LGzTKqAW5C7wWvMv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        description: 'Shows live execution: automation listens for webhooks, triggers actions in real time, and logs every step - demonstrating how the system works end-to-end in production.'
      }
    ],
    problem: 'Most no-code automation platforms like Zapier and Make.com are powerful but complex. Small business owners struggle with:\n\n• Steep learning curves to build workflows\n• No pre-built solutions for their specific use cases\n• Subscription fees that pile up with each integration\n• No ability to customize or white-label for their brand\n\nMeanwhile, agencies and automation consultants can\'t easily package their expertise into products they can sell repeatedly. They\'re stuck doing custom work for every client, trading time for money.',
    solution: 'We built an automation marketplace where:\n\n**For Builders/Agencies:**\n• Drag-and-drop visual builder with React Flow\n• Connect triggers (webhooks, scheduled events) to actions (API calls, AI processing)\n• Define what buyers need to customize (API keys, settings)\n• Publish to marketplace with pricing and descriptions\n• Earn passive revenue from automation templates\n\n**For Buyers:**\n• Browse pre-built automation templates\n• One-click deploy with simple configuration\n• No technical knowledge needed\n• Pay once, use forever (or subscription)\n\n**Technical Implementation:**\n• Multi-tenant SaaS architecture with Supabase\n• Real-time webhook listeners and action executors\n• Unified authentication via nango.dev for 100+ integrations\n• Execution logging and monitoring dashboard'
  }
};

