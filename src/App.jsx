import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import photoLamp from './assets/photo-lamp.webp';
import photoFire from './assets/photo-fire.webp';
import photoDurga from './assets/photo-durga.webp';
import photoTree from './assets/photo-tree.webp';
import photoBeach from './assets/photo-beach.jpg';
import photoFireworks from './assets/photo-fireworks.jpg';
import photoMoon from './assets/photo-moon.jpg';
export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [flippedCards, setFlippedCards] = useState({});
  const [visibleSections, setVisibleSections] = useState({});
  const [stars] = useState(() => [...Array(100)].map((_, i) => ({
    id: i,
    width: Math.random() * 1.5 + 'px',
    height: Math.random() * 1.5 + 'px',
    left: Math.random() * 100 + '%',
    top: Math.random() * 100 + '%',
    opacity: Math.random() * 0.6 + 0.2,
    animation: `twinkle ${Math.random() * 3 + 2}s infinite`,
  })));

  const achievements = [
    { id: 1, front: 'School Vice-Captain', back: 'Appointed Vice-Captain for 2025-2026. Chosen for responsibility, honesty, integrity.', year: '2025' },
    { id: 2, front: 'SMSD MUN 2025', back: 'Media Committee Chairperson.', year: '2025' },
    { id: 3, front: 'SMSD MUN 2024', back: 'Student Photographer of Media Committee.', year: '2024' },
    { id: 4, front: 'IRC 2024 - Semi Finalist', back: 'Semi Finalist at CISCE Inter-school Robotics Championship. Built & tested robot system.', year: '2024' },
    { id: 5, front: 'IRC Bootcamp Certified', back: '14-hour Basic & Advanced Bootcamp. Completed CISCE robotics training with I-Hub Foundation.', year: '2024' },
    { id: 6, front: '11th 35Awards Photography', back: 'Participated in 11th International Photography Contest. 112,600 participants, 175 countries.', year: '2025' },
    { id: 7, front: 'Interact Club Treasurer', back: 'Treasurer for the 2025-2026 Interact Club tenure.', year: '2025-26' },
  ];

  const projects = [
    {
      title: 'MUN Website',
      description: "The SMSD MUN website is the official online platform for St. Michael's School, Durgapur Model United Nations conference. It helps visitors explore the event, committees, delegates, chairpersons, awards, gallery, and conference updates in one place, while showcasing the school's MUN journey, leadership team, and key milestones for students, parents, and the wider community.",
      tech: 'HTML, CSS, Static',
      learned: 'Designed by me, made with Claude and Codex',
    },
    {
      title: 'Interact Club Management System',
      description: "Interact Club Management is a desktop app for managing a school Interact Club's members, fees, capital, expenses, attendance, receipts, and reports in one place. It helps track student records, subscription and badge payments, yearly finances, project spending, unpaid dues, session closing, and exportable reports for club administration.",
      tech: 'Python, PyQt6, JSON',
      learned: 'Designed by me, made with Claude and Codex',
    },
    {
      title: 'Robotics — IRC 2024',
      description: 'Built robot for CISCE Inter-school Championship. Designed arm mechanism, programmed control system.',
      tech: 'Arduino, Mechanics, C++',
      learned: 'Robotics design, problem-solving under constraints, teamwork',
    },
  ];

  const photos = [
    { id: 1, url: photoLamp, title: 'Street lamp silhouette' },
    { id: 2, url: photoFire, title: 'Bonfire at night' },
    { id: 3, url: photoDurga, title: 'Durga Puja composition' },
    { id: 4, url: photoTree, title: 'Tree study' },
    { id: 5, url: photoBeach, title: 'Beach sunset' },
    { id: 6, url: photoFireworks, title: 'Fireworks' },
    { id: 7, url: photoMoon, title: 'Lunar eclipse' },
  ];

  const cleanText = (value) => value
    .replace(/\u00e2\u20ac\u201d/g, '-')
    .replace(/\u00c2\u00a9/g, '(c)');

  const toggleFlip = (id) => {
    setFlippedCards(prev => ({
      [id]: !prev[id]
    }));
  };

  useEffect(() => {
    const root = document.getElementById('root');
    root?.classList.add('portfolio-full-root');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('[data-animate]').forEach(el => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      root?.classList.remove('portfolio-full-root');
    };
  }, []);

  return (
    <div className="portfolio-shell bg-black text-white min-h-screen font-sans relative">
      {/* Stars Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full"
            style={star}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="portfolio-nav fixed top-0 w-full z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="ml-auto text-purple-400 hover:text-purple-300 transition"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>

        {/* Sliding Menu */}
        {menuOpen && (
          <div className="portfolio-nav-menu absolute bg-black/95 backdrop-blur-md border-2 border-purple-500/50 rounded-3xl px-8 py-4 z-50">
            <div className="portfolio-nav-links flex flex-row gap-6 text-sm text-gray-300 whitespace-nowrap">
              <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-purple-400 transition">About</a>
              <a href="#achievements" onClick={() => setMenuOpen(false)} className="hover:text-purple-400 transition">Achievements</a>
              <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-purple-400 transition">Projects</a>
              <a href="#gallery" onClick={() => setMenuOpen(false)} className="hover:text-purple-400 transition">Gallery</a>
              <a href="#skills" onClick={() => setMenuOpen(false)} className="hover:text-purple-400 transition">Skills</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-purple-400 transition">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="portfolio-hero h-screen flex items-center justify-center bg-gradient-to-b from-black via-purple-900/20 via-50% to-purple-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent"></div>
        <div className="text-center max-w-2xl px-6 animate-fade-in relative z-10">
          <h1 className="portfolio-hero-title text-6xl bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent font-semibold mb-6 leading-tight">
            Design, Build, Lead.
          </h1>
          <p className="portfolio-hero-name text-3xl text-white font-semibold mb-12">
            Devansh
          </p>
          <div className="flex justify-center gap-4 mb-16">
            <a href="#about" className="px-8 py-3 border border-purple-500/50 rounded-lg text-purple-300 hover:bg-purple-900/20 transition">
              Explore
            </a>
          </div>
          <div className="animate-bounce text-purple-400 flex justify-center">
            <ChevronDown size={24} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-20 border-t border-purple-900/20 relative z-10">
        <div id="about-content" data-animate className={`transition-all duration-1000 ${visibleSections['about-content'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-semibold mb-6 text-white">About</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm Devansh, an 18-year-old builder and visual storyteller based in West Bengal, India, focused on product, leadership, robotics, hardware, and media. I care about structure, precise planning, and strategic thinking.
              </p>
              <p className="text-gray-400 text-sm">
                I'm highly interested in hardware and emerging technology, from semiconductor processing to how actual products are made. I enjoy PC builds, modded Raspberry Pi console devices, IoT projects, robotics, and audio engineering. I am looking forward to pursuing BBA (Hons.) to develop business, entrepreneurship, and analytics skills as a mainstream focus.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="portfolio-about-card bg-purple-900/20 border border-purple-900/40 rounded-lg p-4">
                <p className="text-gray-400">Creative</p>
                <p className="text-purple-300 font-semibold">Photography, Cinematography, Visual Direction</p>
              </div>
              <div className="portfolio-about-card bg-purple-900/20 border border-purple-900/40 rounded-lg p-4">
                <p className="text-gray-400">Technical</p>
                <p className="text-purple-300 font-semibold">Robotics, Data Analysis, Product Systems</p>
              </div>
              <div className="portfolio-about-card bg-purple-900/20 border border-purple-900/40 rounded-lg p-4">
                <p className="text-gray-400">Leadership</p>
                <p className="text-purple-300 font-semibold">MUN Media, Teams, Event Operations</p>
              </div>
              <div className="portfolio-about-card bg-purple-900/20 border border-purple-900/40 rounded-lg p-4">
                <p className="text-gray-400">Direction</p>
                <p className="text-purple-300 font-semibold">Design, Build, Lead</p>
              </div>
              <div className="portfolio-about-card bg-purple-900/20 border border-purple-900/40 rounded-lg p-4">
                <p className="text-gray-400">Goal</p>
                <p className="text-purple-300 font-semibold">Product Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="max-w-4xl mx-auto px-6 py-20 border-t border-purple-900/20">
        <h2 className="text-3xl font-semibold mb-12 text-white">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              id={`achievement-${achievement.id}`}
              data-animate
              className={`transition-all duration-1000 ${visibleSections[`achievement-${achievement.id}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              onClick={() => toggleFlip(achievement.id)}
              style={{ perspective: '1000px' }}
            >
              <div
                className="relative w-full h-48 cursor-pointer transition-transform duration-500 transform hover:scale-105"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: flippedCards[achievement.id] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* Front */}
                <div
                  className="absolute w-full h-full bg-gradient-to-br from-purple-900/40 to-purple-900/20 border border-purple-500/50 rounded-xl p-6 flex flex-col items-center justify-center"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <p className="text-sm text-gray-400 mb-2">{achievement.year}</p>
                  <p className="text-lg font-semibold text-center text-purple-300">
                    {cleanText(achievement.front)}
                  </p>
                  <p className="text-xs text-gray-500 mt-3">click to flip</p>
                </div>

                {/* Back */}
                <div
                  className="absolute w-full h-full bg-gradient-to-br from-purple-800/60 to-purple-900/40 border border-purple-400/50 rounded-xl p-6 flex items-center justify-center"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <p className="text-sm text-gray-200 text-center">
                    {cleanText(achievement.back)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-4xl mx-auto px-6 py-20 border-t border-purple-900/20">
        <h2 className="text-3xl font-semibold mb-12 text-white">Projects</h2>
        <div className="space-y-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              id={`project-${idx}`}
              data-animate
              className={`transition-all duration-1000 ${visibleSections[`project-${idx}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="bg-purple-900/20 border border-purple-900/40 rounded-lg p-8 hover:border-purple-500/50 transition">
                <h3 className="text-xl font-semibold text-purple-300 mb-2">
                  {cleanText(project.title)}
                </h3>
                <p className="text-gray-400 mb-4">
                  {cleanText(project.description)}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-purple-900/50 border border-purple-700/50 rounded px-3 py-1 text-purple-200">
                    {cleanText(project.tech)}
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  <span className="text-gray-400">Learned:</span> {cleanText(project.learned)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="max-w-4xl mx-auto px-6 py-20 border-t border-purple-900/20">
        <h2 className="text-3xl font-semibold mb-12 text-white">Photography</h2>
        <div id="gallery-content" data-animate className={`transition-all duration-1000 ${visibleSections['gallery-content'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="portfolio-photo-grid">
            {photos.map((photo) => (
              <figure key={photo.id} className="portfolio-photo-item">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="portfolio-photo-image"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-4xl mx-auto px-6 py-20 border-t border-purple-900/20 relative z-10">
        <h2 className="text-3xl font-semibold mb-12 text-white">Skills</h2>
        <div id="skills-content" data-animate className={`transition-all duration-1000 ${visibleSections['skills-content'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="portfolio-coming-soon text-purple-300 font-semibold">
            Coming soon<span></span>
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20 border-t border-purple-900/20 relative z-10">
        <h2 className="text-3xl font-semibold mb-8 text-white">Get in touch</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="mailto:devanshdey54@gmail.com"
            className="portfolio-contact-card bg-purple-900/20 border border-purple-900/40 rounded-lg p-6 hover:border-purple-500/50 transition group"
          >
            <p className="text-gray-400 mb-2">Email</p>
            <p className="text-purple-300 group-hover:text-purple-200 transition">devanshdey54@gmail.com</p>
          </a>
          <a
            href="https://github.com/devusfr"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-contact-card bg-purple-900/20 border border-purple-900/40 rounded-lg p-6 hover:border-purple-500/50 transition group"
          >
            <p className="text-gray-400 mb-2">GitHub</p>
            <p className="text-purple-300 group-hover:text-purple-200 transition">github.com/devvy69</p>
          </a>
          <a
            href="https://www.linkedin.com/in/devansh-dey-b482143b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-contact-card bg-purple-900/20 border border-purple-900/40 rounded-lg p-6 hover:border-purple-500/50 transition group"
          >
            <p className="text-gray-400 mb-2">LinkedIn</p>
            <p className="text-purple-300 group-hover:text-purple-200 transition">linkedin.com/in/devansh-dey-b482143b9</p>
          </a>
          <a
            href="https://www.instagram.com/devusfr/"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-contact-card bg-purple-900/20 border border-purple-900/40 rounded-lg p-6 hover:border-purple-500/50 transition group"
          >
            <p className="text-gray-400 mb-2">Instagram</p>
            <p className="text-purple-300 group-hover:text-purple-200 transition">instagram.com/devusfr</p>
          </a>
          <a
            href="https://www.instagram.com/devuscaptures/"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-contact-card bg-purple-900/20 border border-purple-900/40 rounded-lg p-6 hover:border-purple-500/50 transition group"
          >
            <p className="text-gray-400 mb-2">Photography</p>
            <p className="text-purple-300 group-hover:text-purple-200 transition">instagram.com/devuscaptures</p>
          </a>
        </div>
      </section>

      {/* Footer */}
      <section className="border-t border-purple-900/20 py-8 text-center text-gray-500 text-sm">
        <p>© 2024 Devansh Dey. Built with React, Tailwind & Codex.</p>
      </section>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </div>
  );
}
