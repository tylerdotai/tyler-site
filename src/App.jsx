import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Twitter, 
  Github, 
  Linkedin, 
  Mail, 
  Send,
  Zap,
  Users,
  Laptop,
  Bot,
  ExternalLink,
  MessageCircle
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Navbar
function Navbar() {
  const navRef = useRef(null);
  
  useEffect(() => {
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-surface">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold">
          <span className="text-accent">tyler</span>
          <span className="text-white">.delano</span>
        </a>
        <div className="hidden md:flex gap-8 text-sm text-gray-400">
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#services" className="hover:text-accent transition-colors">Services</a>
          <a href="#clawplex" className="hover:text-accent transition-colors">Clawplex</a>
          <a href="#connect" className="hover:text-accent transition-colors">Connect</a>
        </div>
      </div>
    </nav>
  );
}

// Hero Section
function Hero() {
  const heroRef = useRef(null);
  
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from('.hero-name', { y: 60, opacity: 0, duration: 0.8, ease: 'power3.out' })
      .from('.hero-headline', { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
      .from('.hero-sub', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
      .from('.hero-cta', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3');
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <p className="hero-name text-accent font-mono text-sm tracking-widest mb-4">TYLER DELANO</p>
        <h1 className="hero-headline text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
          I help local businesses<br />
          <span className="gradient-text">harness AI</span> to save time,<br />
          cut costs, and grow.
        </h1>
        <p className="hero-sub text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          IT professional by day. AI practitioner by night. Teaching trade shops and local 
          businesses how to work smarter with AI — no coding required.
        </p>
        <a 
          href="https://calendly.com/tylerdelano" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hero-cta inline-flex items-center gap-3 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 glow-orange"
        >
          <Zap size={20} />
          Book a free strategy call
        </a>
      </div>
    </section>
  );
}

// About Section
function About() {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    gsap.from('.about-content', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 px-6 bg-surface/50">
      <div className="max-w-6xl mx-auto">
        <div className="about-content grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent font-mono text-sm tracking-widest mb-4">ABOUT</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Who I Am</h2>
            <div className="space-y-4 text-gray-400">
              <p>
                IT Support L3 at Amazon by day, AI practitioner by night. I live on a 1-acre 
                homestead in Springtown, TX with my wife Justine, our dogs, and a small flock 
                of chickens.
              </p>
              <p>
                I build AI-powered SaaS products, teach local businesses how to leverage AI 
                tools, and run Clawplex — the DFW OpenClaw meetup group for AI enthusiasts.
              </p>
              <p>
                When I'm not geeking out over LLMs, you'll find me working on the homestead, 
                reading, or probably thinking about how to automate something else.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Day Job', value: 'IT L3 @ Amazon' },
              { label: 'Location', value: 'Springtown, TX' },
              { label: 'Focus', value: 'AI + Local Biz' },
              { label: 'Faith', value: 'Catholic' },
            ].map((item) => (
              <div key={item.label} className="bg-bg p-4 rounded-xl border border-surface card-hover">
                <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                <p className="font-semibold text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Section
function Services() {
  const cardsRef = useRef([]);
  
  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.1,
        ease: 'power3.out'
      });
    });
  }, []);

  const services = [
    {
      icon: Zap,
      title: 'AI Consulting',
      description: 'I help businesses understand and implement AI tools that actually move the needle.',
    },
    {
      icon: Users,
      title: 'Workshop Hosting',
      description: '2-hour AI bootcamps for trades and local businesses. Hands-on, no fluff.',
    },
    {
      icon: Laptop,
      title: 'IT Support',
      description: 'Remote IT support for small businesses. Keeping your tech running smoothly.',
    },
    {
      icon: Bot,
      title: 'ServicePro AI Agent',
      description: 'AI receptionist for HVAC, plumbing, and trade shops. Never miss a lead again.',
      comingSoon: true,
    },
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent font-mono text-sm tracking-widest mb-4">SERVICES</p>
          <h2 className="text-3xl md:text-4xl font-bold">What I Do</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div 
              key={service.title}
              ref={el => cardsRef.current[i] = el}
              className="bg-surface p-6 rounded-2xl border border-surface card-hover relative overflow-hidden"
            >
              {service.comingSoon && (
                <span className="absolute top-4 right-4 text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
                  Coming Soon
                </span>
              )}
              <service.icon className="text-accent mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Clawplex Section
function Clawplex() {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    gsap.from('.clawplex-content', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
  }, []);

  return (
    <section ref={sectionRef} id="clawplex" className="py-24 px-6 bg-surface/50">
      <div className="max-w-4xl mx-auto">
        <div className="clawplex-content text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users size={16} />
            Community
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            Clawplex
          </h2>
          <p className="text-xl text-accent font-semibold mb-6">DFW OpenClaw Meetup Group</p>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
            Monthly meetups for AI enthusiasts in Dallas-Fort Worth. Learn, build, and connect 
            with fellow AI practitioners. Whether you're just starting out or deep in the weeds, 
            there's a place for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://discord.gg/clawplex" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105"
            >
              <MessageCircle size={20} />
              Join the community
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Connect Section
function Connect() {
  const linksRef = useRef([]);
  
  useEffect(() => {
    linksRef.current.forEach((link, i) => {
      gsap.from(link, {
        scrollTrigger: {
          trigger: link,
          start: 'top 90%',
        },
        x: i % 2 === 0 ? -40 : 40,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out'
      });
    });
  }, []);

  const socials = [
    { icon: Twitter, label: 'Twitter', handle: '@tylerdotai', href: 'https://twitter.com/tylerdotai' },
    { icon: Github, label: 'GitHub', handle: '@tylerdotai', href: 'https://github.com/tylerdotai' },
    { icon: Linkedin, label: 'LinkedIn', handle: 'tylerpdelano', href: 'https://linkedin.com/in/tylerpdelano' },
    { icon: Mail, label: 'Email', handle: 'tyler.delano@icloud.com', href: 'mailto:tyler.delano@icloud.com' },
    { icon: Send, label: 'Telegram', handle: '@tylerdotai', href: 'https://t.me/tylerdotai' },
  ];

  return (
    <section id="connect" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-accent font-mono text-sm tracking-widest mb-4">CONNECT</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Build Together</h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          Reach out on any platform. I'm always open to chatting about AI, local business, 
          or grabbing virtual coffee.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {socials.map((social, i) => (
            <a 
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              ref={el => linksRef.current[i] = el}
              className="bg-surface hover:bg-surface/80 p-5 rounded-xl border border-surface card-hover flex items-center gap-4 text-left transition-all"
            >
              <social.icon className="text-accent flex-shrink-0" size={24} />
              <div>
                <p className="text-xs text-gray-500">{social.label}</p>
                <p className="font-medium text-sm">{social.handle}</p>
              </div>
              <ExternalLink size={14} className="ml-auto text-gray-600" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-surface">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Tyler Delano. Built with AI. Deployed on Vercel.
        </p>
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#services" className="hover:text-accent transition-colors">Services</a>
          <a href="#clawplex" className="hover:text-accent transition-colors">Clawplex</a>
          <a href="#connect" className="hover:text-accent transition-colors">Connect</a>
        </div>
      </div>
    </footer>
  );
}

// Main App
function App() {
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="bg-bg min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Clawplex />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
