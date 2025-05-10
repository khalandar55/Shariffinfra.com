// src/components/Navbar.tsx
export default function Navbar() {
    const navItems = ['Home', 'About', 'Projects', 'Certifications', 'Publications', 'Experience', 'Contact'];
  
    return (
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-blue-600">Welcome to Shariff's Infrastructure</a>
          <div className="hidden md:flex gap-6">
            {navItems.map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-blue-600">{item}</a>
            ))}
          </div>
        </div>
      </nav>
    );
  }
  