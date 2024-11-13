import React from 'react';
import { Github, Youtube, Gamepad2, Mail, ExternalLink } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import VideoCard from './components/VideoCard';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-20 text-center">
        <div className="animate-float">
          <Gamepad2 className="w-20 h-20 mx-auto mb-6 text-indigo-400" />
        </div>
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
          Game Developer
        </h1>
        <p className="text-xl text-gray-300 mb-8">Crafting Immersive Gaming Experiences</p>
        <div className="flex justify-center gap-6">
          <a href="https://github.com/Leks2000" 
             className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full transition-all">
            <Github className="w-5 h-5" />
            GitHub
          </a>
          <a href="https://www.youtube.com/@XINTERDEV" 
             className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full transition-all">
            <Youtube className="w-5 h-5" />
            YouTube
          </a>
        </div>
      </header>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            title="Platformer2D"
            description="A 2D platformer game built with Unity"
            imageUrl="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800"
            repoUrl="https://github.com/Leks2000/Platformer2D"
          />
          <ProjectCard 
            title="TowerDefense"
            description="Strategic tower defense game"
            imageUrl="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800"
            repoUrl="https://github.com/Leks2000/TowerDefense"
          />
          <ProjectCard 
            title="2DPlatformer"
            description="Another take on 2D platformer mechanics"
            imageUrl="https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?auto=format&fit=crop&q=80&w=800"
            repoUrl="https://github.com/Leks2000/2DPlatformer"
          />
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section className="container mx-auto px-4 py-16 bg-black/20">
        <h2 className="text-3xl font-bold mb-12 text-center">Latest Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <VideoCard 
            title="Game Development Tips"
            thumbnail="https://images.unsplash.com/photo-1556438064-2d7646166914?auto=format&fit=crop&q=80&w=800"
            url="https://www.youtube.com/@XINTERDEV"
          />
          <VideoCard 
            title="Unity Tutorials"
            thumbnail="https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&q=80&w=800"
            url="https://www.youtube.com/@XINTERDEV"
          />
        </div>
      </section>

      {/* Contact Section */}
      <footer className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
        <div className="flex justify-center gap-6">
          <a href="mailto:contact@example.com" 
             className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
            <Mail className="w-5 h-5" />
            Email
          </a>
          <a href="https://github.com/Leks2000" 
             className="flex items-center gap-2 hover:text-indigo-400 transition-colors">
            <ExternalLink className="w-5 h-5" />
            More Projects
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;