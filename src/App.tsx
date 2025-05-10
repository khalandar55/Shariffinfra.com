import Navbar from './components/Navbar';
import { useNavigate } from 'react-router-dom';
import ProjectCard from './components/ProjectCard';
import ZoomModal from './components/ZoomModal';
import { useState } from 'react';

function App() {
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [modalAlt, setModalAlt] = useState('');

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-fixed scroll-smooth"
      style={{ backgroundImage: "url('')" }}
    >
      <div className="bg-white/80 backdrop-blur-sm">
        <Navbar />

        {/* Hero Section */}
        <section id="home" className="py-24 flex flex-col justify-start items-center text-center px-4">

          <div className="flex justify-center">
            <img
              src="/Profile Pic.png"
              alt="Profile"
              className="w-44 h-44 md:w-52 md:h-52 rounded-full border-4 border-blue-600 shadow-lg mb-6 object-top object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Cloud & Full Stack Engineer</h1>
          <p className="text-xl text-gray-600 mb-6">MSc in Cloud Computing | Building scalable solutions</p>
          <div className="flex gap-4 flex-wrap justify-center mb-10">
            <a href="#projects" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">View Projects</a>
            <a href="public/Certs/Khalandar_Shariff.pdf" className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50">Download Resume</a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 text-lg">
              Hi, I'm Shariff — a passionate Cloud & Full Stack Engineer with an MSc in Cloud Computing. I specialize in building scalable web applications and cloud infrastructure solutions.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ProjectCard
                title="Sustainable Cloud Resource Deployment"
                image="/Projects/Sustainable_Cloud.png"
                onClick={() => navigate('/project1')}
              />
              <ProjectCard
                title="Multi-Cloud Disaster Recovery Tool"
                image="/Projects/MultiCloud_DR.png"
                onClick={() => navigate('/project2')}
              />
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20 px-4 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Certifications / Achievements</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "Certs/AWS_Graduate.png",
                "Certs/Azure.png",
                "Certs/KHALANDER SHARIFF.png",
                "Certs/APPONIX 24.png",
                "Certs/Matlab Khalander Shariff.png",
                "Certs/APX-CCF200511417.png",
                "Certs/APX-PPF200512806.png",
                "Certs/Certificate_DC.png",
                "Certs/Certificate_OS.png"
              ].map((img, i) => (
                <div className="w-40 h-40 cursor-pointer" key={i}>
                  <img
                    src={`/${img}`}
                    alt={`Certificate ${i + 1}`}
                    className="object-contain w-full h-full rounded shadow"
                    onClick={() => {
                      setModalImage(`/${img}`);
                      setModalAlt(`Certificate ${i + 1}`);
                      setModalOpen(true);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Publications / Events</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* IEEE Presentation */}
              <div className="bg-white rounded-lg shadow-md p-4">
                <img
                  src="/Certs/IEEE_Presenter (002).png"
                  alt="IEEE Presentation Certificate"
                  className="object-contain w-full h-64 rounded cursor-pointer"
                  onClick={() => {
                    setModalImage("/Certs/IEEE_Presenter (002).png");
                    setModalAlt("IEEE Presentation Certificate");
                    setModalOpen(true);
                  }}
                />
                <h3 className="text-xl font-semibold mt-4">IEEE UCC 2024 – Presenter</h3>
                <p className="text-sm text-gray-500">University of Sharjah, UAE</p>
              </div>

              {/* IEEE Participation */}
              <div className="bg-white rounded-lg shadow-md p-4">
                <img
                  src="/Certs/IEEE_Recognition.png"
                  alt="IEEE Participant Certificate"
                  className="object-contain w-full h-64 rounded cursor-pointer"
                  onClick={() => {
                    setModalImage("/Certs/IEEE_Recognition.png");
                    setModalAlt("IEEE Participant Certificate");
                    setModalOpen(true);
                  }}
                />
                <h3 className="text-xl font-semibold mt-4">IEEE UCC 2024 – Participant</h3>
                <p className="text-sm text-gray-500">17th IEEE/ACM UCC & BDCAT</p>
              </div>

              {/* Published Paper */}
              <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center">
                <h3 className="text-xl font-semibold mb-2">Published Research Paper</h3>
                <p className="text-sm text-gray-500 mb-4">IEEE Xplore Digital Library</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href="/Certs/conference_latex_template_10_17_19 2.pdf"
                    target="_blank"
                    className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                  >
                    Read PDF
                  </a>
                  <a
                    href="https://ieeexplore.ieee.org/document/10971841"
                    target="_blank"
                    className="px-4 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50"
                  >
                    View Published Paper
                  </a>
                </div>
              </div>

              {/* On-site Presentation */}
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  {["IMG_1.jpg", "IMG_2.jpg", "IMG_3.jpg"].map((img, i) => (
                    <img
                      key={i}
                      src={`/Certs/${img}`}
                      alt={`On-site Presentation ${i + 1}`}
                      className="object-cover w-full h-48 rounded cursor-pointer"
                      onClick={() => {
                        setModalImage(`/Certs/${img}`);
                        setModalAlt(`On-site Presentation ${i + 1}`);
                        setModalOpen(true);
                      }}
                    />
                  ))}
                </div>
                <h3 className="text-xl font-semibold mt-4">On-site Presentation</h3>
                <p className="text-sm text-gray-500">UCC 2024, University of Sharjah (UAE) 🇦🇪</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-4">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold text-center mb-8">Get In Touch</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full p-3 border rounded-md" />
              <input type="email" placeholder="Email" className="w-full p-3 border rounded-md" />
              <textarea rows={4} placeholder="Message" className="w-full p-3 border rounded-md"></textarea>
              <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">Send Message</button>
            </form>
          </div>
        </section>

        <footer className="bg-gray-900 text-white text-center py-6">
          <p>© 2024 Shariff. All rights reserved.</p>
        </footer>
      </div>

      {/* Zoom Modal for images */}
      <ZoomModal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        imageSrc={modalImage}
        altText={modalAlt}
      />
    </div>
  );
}

export default App;
