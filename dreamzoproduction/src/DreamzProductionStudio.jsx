import React, { useState } from 'react';
import { Calendar, Camera, Mail, Phone, MapPin, Instagram, Clock, Check, ArrowLeft } from 'lucide-react';

export default function DreamzProductionStudio() {
  const [currentSection, setCurrentSection] = useState('accueil');
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    date: '',
    service: 'portrait',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const services = [
    {
      titre: 'Portrait Artistique',
      prix: '180€',
      duree: '1h30',
      description: 'Séance photo intime et créative'
    },
    {
      titre: 'Couple & Fiançailles',
      prix: '280€',
      duree: '2h',
      description: 'Moments complices immortalisés'
    },
    {
      titre: 'Corporate',
      prix: '220€',
      duree: '1h',
      description: 'Portraits professionnels élégants'
    },
    {
      titre: 'Shooting Mode',
      prix: '350€',
      duree: '3h',
      description: 'Création éditoriale sur-mesure'
    }
  ];

  const portfolio = [
    { id: 1, category: 'Portrait', color: 'from-slate-900 to-slate-700' },
    { id: 2, category: 'Mode', color: 'from-amber-900 to-amber-700' },
    { id: 3, category: 'Couple', color: 'from-rose-900 to-rose-700' },
    { id: 4, category: 'Corporate', color: 'from-indigo-900 to-indigo-700' },
    { id: 5, category: 'Édito', color: 'from-emerald-900 to-emerald-700' },
    { id: 6, category: 'Portrait', color: 'from-purple-900 to-purple-700' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    setFormData({
      nom: '',
      email: '',
      telephone: '',
      date: '',
      service: 'portrait',
      message: ''
    });
  };

  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="grid grid-cols-3 items-center">
          <div>
          </div>
          <div className="flex items-center space-x-2 justify-center">
            <Camera className="w-6 h-6" />
            <span className="text-xl font-light tracking-wider">DREAMZPRODUCTION</span>
          </div>
          <div className="hidden md:flex space-x-8 justify-end">
            {['accueil', 'portfolio', 'services', 'réserver'].map((section) => (
              <button
                key={section}
                onClick={() => setCurrentSection(section)}
                className={`text-sm tracking-wide uppercase transition-colors ${
                  currentSection === section ? 'text-black' : 'text-gray-500 hover:text-black'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );

  const Hero = () => (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-black text-white text-xs tracking-widest mb-6">
            {/* 地址更新 1/3: 顶部标签 */}
            DREAMZPRODUCTION — PARIS 10ÈME
          </div>
          </div>
        <h1 className="text-7xl md:text-9xl font-light tracking-tight mb-6">
          Capturer l'essence
        </h1>
        <p className="text-2xl md:text-3xl text-gray-600 font-light mb-12 max-w-2xl mx-auto">
          Studio de photographie contemporaine au cœur de Paris
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={() => setCurrentSection('réserver')}
            className="px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors"
          >
            Réserver une séance
          </button>
          <button
            onClick={() => setCurrentSection('portfolio')}
            className="px-8 py-4 border-2 border-black hover:bg-black hover:text-white transition-colors"
          >
            Voir le portfolio
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
          {[
            // 地址更新 2/3: 首页地址图标
            { icon: MapPin, text: 'Rue Gabriel Laumain, Paris 10e' },
            { icon: Clock, text: 'Lun - Sam, 10h - 19h' },
            { icon: Instagram, text: '@dreamz.production' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center space-y-2">
              <item.icon className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-600">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const Portfolio = () => (
    <section className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-light tracking-tight mb-4">Portfolio</h2>
          <p className="text-gray-600 font-light">Une sélection de nos créations récentes</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {portfolio.map((item) => (
            <div
              key={item.id}
              className={`aspect-[3/4] bg-gradient-to-br ${item.color} rounded-sm overflow-hidden group cursor-pointer relative`}
            >
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end p-6">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm tracking-wider">
                  {item.category.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const Services = () => (
    <section className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-light tracking-tight mb-4">Nos Services</h2>
          <p className="text-gray-600 font-light">Des prestations sur-mesure pour chaque projet</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <div key={i} className="bg-white p-8 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-light">{service.titre}</h3>
                <span className="text-2xl font-light">{service.prix}</span>
              </div>
              <p className="text-gray-600 font-light mb-4">{service.description}</p>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>Durée estimée: {service.duree}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // 确保 Booking 组件接收 setCurrentSection prop
  const Booking = ({ setCurrentSection }) => (
    <section className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-2xl mx-auto">
        {/* 返回主页按钮 */}
        <div className="text-left mb-10">
          <button
            onClick={() => setCurrentSection('accueil')}
            className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm uppercase tracking-wider">RETOUR À L'ACCUEIL</span>
          </button>
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-5xl font-light tracking-tight mb-4">Réserver</h2>
          <p className="text-gray-600 font-light">Contactez-nous pour planifier votre séance</p>
        </div>

        {showSuccess && (
          <div className="mb-8 p-4 bg-green-50 border border-green-200 text-green-800 text-center">
            <Check className="w-5 h-5 inline mr-2" />
            Merci ! Nous vous répondrons sous 24h.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm tracking-wide uppercase text-gray-600 mb-2">
                Nom complet *
              </label>
              <input
                type="text"
                required
                value={formData.nom}
                onChange={(e) => setFormData({...formData, nom: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 focus:border-black outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm tracking-wide uppercase text-gray-600 mb-2">
                Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 focus:border-black outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm tracking-wide uppercase text-gray-600 mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                value={formData.telephone}
                onChange={(e) => setFormData({...formData, telephone: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 focus:border-black outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm tracking-wide uppercase text-gray-600 mb-2">
                Date souhaitée
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 focus:border-black outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm tracking-wide uppercase text-gray-600 mb-2">
              Type de prestation *
            </label>
            <select
              required
              value={formData.service}
              onChange={(e) => setFormData({...formData, service: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 focus:border-black outline-none transition-colors"
            >
              <option value="portrait">Portrait Artistique</option>
              <option value="couple">Couple & Fiançailles</option>
              <option value="corporate">Corporate</option>
              <option value="mode">Shooting Mode</option>
            </select>
          </div>

          <div>
            <label className="block text-sm tracking-wide uppercase text-gray-600 mb-2">
              Message
            </label>
            <textarea
              rows="5"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              placeholder="Décrivez votre projet..."
              className="w-full px-4 py-3 border border-gray-300 focus:border-black outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 bg-black text-white hover:bg-gray-800 transition-colors tracking-wider"
          >
            ENVOYER LA DEMANDE
          </button>
        </form>

        <div className="mt-12 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <Mail className="w-6 h-6 mx-auto mb-2 text-gray-400" />
              <p className="text-sm text-gray-600">contact@dreamzproduction.fr</p>
            </div>
            <div>
              <Phone className="w-6 h-6 mx-auto mb-2 text-gray-400" />
              <p className="text-sm text-gray-600">+33 1 42 00 00 00</p>
            </div>
            <div>
              <MapPin className="w-6 h-6 mx-auto mb-2 text-gray-400" />
              {/* 地址更新 3/3: 联系方式地址 */}
              <p className="text-sm text-gray-600">8 rue Gabriel Laumain<br />75010 Paris</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Camera className="w-5 h-5" />
          <span className="text-lg font-light tracking-wider">DREAMZPRODUCTION</span>
        </div>
        <p className="text-gray-400 text-sm font-light mb-4">
          Studio de photographie contemporaine — Paris
        </p>
        <div className="flex justify-center space-x-6 text-sm">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Mentions Légales</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">CGV</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Confidentialité</a>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="font-sans antialiased text-gray-900">
      <Navigation />
      {currentSection === 'accueil' && <Hero />}
      {currentSection === 'portfolio' && <Portfolio />}
      {currentSection === 'services' && <Services />}
      {/* 正确传递 setCurrentSection 给 Booking */}
      {currentSection === 'réserver' && <Booking setCurrentSection={setCurrentSection} />} 
      <Footer />
    </div>
  );
}