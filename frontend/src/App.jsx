import React, { useState } from 'react';
import { Sprout, LayoutDashboard, ShoppingCart, CloudSun, ChevronLeft } from 'lucide-react';
import PlantDoctor from './pages/PlantDoctor';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center font-sans selection:bg-green-100">
      <div className="w-full max-w-md bg-white min-h-screen shadow-2xl flex flex-col relative overflow-hidden">
        
        {/* Header */}
        <header className="bg-ethio-green text-white p-6 pt-10 rounded-b-[40px] shadow-2xl z-10">
          <div className="flex items-center justify-between">
            {currentPage !== 'home' && (
              <button onClick={() => setCurrentPage('home')} className="p-2 hover:bg-white/20 rounded-full transition-colors">
                <ChevronLeft size={24} />
              </button>
            )}
            <div className="flex-grow text-center">
               <h1 className="text-2xl font-black tracking-tight">LeGeberew AI</h1>
               <p className="text-[10px] uppercase tracking-[0.2em] opacity-70">Empowering Ethiopian Farmers</p>
            </div>
            <div className="w-10"></div> {/* Spacer for symmetry */}
          </div>
        </header>

        {/* Content */}
        <main className="flex-grow p-6 pb-24 overflow-y-auto">
          {currentPage === 'home' ? (
            <div className="space-y-8 animate-in fade-in duration-500">
              <div className="bg-gradient-to-br from-green-600 to-ethio-green rounded-[32px] p-6 text-white shadow-lg relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold">እንኳን ደህና መጡ!</h2>
                  <p className="text-sm opacity-90 mt-1 italic">Welcome, Farmer</p>
                </div>
                <Sprout className="absolute -right-4 -bottom-4 opacity-20 w-32 h-32 rotate-12" />
              </div>

              <div className="grid gap-4">
                <MenuButton 
                  onClick={() => setCurrentPage('doctor')}
                  icon={<Sprout size={32} />} 
                  title="Plant Doctor" 
                  subtitle="ተክልዎን ፎቶ ያንሱና ይለዩ"
                  color="bg-green-500"
                />
                <MenuButton 
                  icon={<ShoppingCart size={32} />} 
                  title="Market Prices" 
                  subtitle="የገበያ ዋጋዎችን ይከታተሉ"
                  color="bg-blue-500"
                />
              </div>
            </div>
          ) : (
            <div className="animate-in slide-in-from-right-8 duration-300">
              {currentPage === 'doctor' && <PlantDoctor />}
            </div>
          )}
        </main>

        {/* Bottom Nav */}
        <nav className="bg-white/80 backdrop-blur-md border-t border-gray-100 flex justify-around p-4 fixed bottom-0 max-w-md w-full z-20">
          <button onClick={() => setCurrentPage('home')} className={`flex flex-col items-center ${currentPage === 'home' ? 'text-ethio-green' : 'text-gray-300'}`}>
            <LayoutDashboard size={24} />
            <span className="text-[10px] mt-1 font-bold uppercase">Home</span>
          </button>
          <button onClick={() => setCurrentPage('doctor')} className={`flex flex-col items-center ${currentPage === 'doctor' ? 'text-ethio-green' : 'text-gray-300'}`}>
            <Sprout size={24} />
            <span className="text-[10px] mt-1 font-bold uppercase">Doctor</span>
          </button>
        </nav>
      </div>
    </div>
  );
}

function MenuButton({ icon, title, subtitle, color, onClick }) {
  return (
    <button onClick={onClick} className="w-full flex items-center p-5 bg-white border border-gray-100 rounded-[32px] shadow-sm active:scale-95 transition-all text-left">
      <div className={`${color} text-white p-4 rounded-2xl mr-5 shadow-lg`}>
        {icon}
      </div>
      <div>
        <h3 className="font-black text-gray-800 text-lg">{title}</h3>
        <p className="text-xs text-gray-400 font-medium">{subtitle}</p>
      </div>
    </button>
  );
}

export default App;