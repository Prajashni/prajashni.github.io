import React from 'react';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Portfolio() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1tdz9hnQNDg_4AU0W9GvDKRTeWiuf0tXN';
    link.setAttribute('download', 'Prajashni_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-[#1E1A17] text-white font-sans">
      <nav className="w-full fixed top-0 bg-[#1E1A17] z-50 shadow-md flex justify-between px-6 md:px-20 py-4">
        <h1 className="text-[#F6EBD9] font-bold text-xl">Prajashni</h1>
        <div className="flex gap-6 text-[#D9C5AD] text-sm items-center">
          <button onClick={() => scrollToSection('about')} className="hover:text-[#F6EBD9]">About</button>
          <button onClick={() => scrollToSection('skills')} className="hover:text-[#F6EBD9]">Skills</button>
          <button onClick={() => scrollToSection('experience')} className="hover:text-[#F6EBD9]">Experience</button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-[#F6EBD9]">Projects</button>
          <button onClick={() => scrollToSection('contact')} className="bg-[#FF9080] text-black px-4 py-1 rounded-full ml-4">Let’s Talk</button>
        </div>
      </nav>

      <section className="min-h-screen flex flex-col justify-center items-center bg-[#1E1A17] px-6 md:px-20 text-center pt-28">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#D9C5AD] mb-6">
          <Image src="/profile_pic.jpg" alt="Prajashni" width={160} height={160} />
        </div>
        <h1 className="text-6xl md:text-7xl font-bold text-[#F6EBD9] tracking-tight">Hi, I'm Prajashni</h1>
        <p className="text-xl md:text-2xl text-[#D9C5AD] mt-4 max-w-2xl">
          Data whisperer turning chaos into clarity. <br />
          Analyst, Builder, Impact-Maker.
        </p>
        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <button onClick={handleResumeDownload} className="bg-[#B99470] text-black px-6 py-2 rounded-2xl hover:bg-[#D9C5AD]">Download Resume</button>
          <button className="border border-[#B99470] text-[#B99470] px-6 py-2 rounded-2xl hover:bg-[#B99470] hover:text-black" onClick={() => window.open('https://drive.google.com/file/d/1tdz9hnQNDg_4AU0W9GvDKRTeWiuf0tXN/view', '_blank')}>View Resume</button>
        </div>
      </section>
    </div>
  );
}
