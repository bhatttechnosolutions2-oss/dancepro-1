import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black border-t border-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <a href="#" className="inline-block group">
              <div className="flex flex-col items-start relative">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 flex items-center justify-center mb-1">
                    <div className="absolute inset-0 rounded-full border-2 border-yellow-400"></div>
                    <svg viewBox="0 0 100 100" className="w-8 h-8 fill-white">
                      <path d="M55,20 C58,20 60,23 60,26 C60,29 58,32 55,32 C52,32 50,29 50,26 C50,23 52,20 55,20 M45,35 C42,35 40,32 40,29 C40,26 42,23 45,23 C48,23 50,26 50,29 C50,32 48,35 45,35 M58,34 L62,55 L75,45 L78,48 L65,60 L62,90 L55,90 L56,60 L52,60 L50,90 L43,90 L46,60 L40,50 C30,60 25,50 35,40 L45,35 Z" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="font-script text-3xl text-red-500 leading-none">Dance Pro</span>
                    <span className="text-[0.6rem] text-white font-bold tracking-[0.35em] uppercase leading-none mt-1">Studio</span>
                  </div>
                </div>
              </div>
            </a>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Guwahati's premier dance institute. We don't just teach steps, we create performers. Join the family today.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/dance_pro_studio/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white hover:bg-[#E1306C] hover:text-white transition-all border border-zinc-800 hover:border-[#E1306C]">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white hover:bg-[#1877F2] hover:text-white transition-all border border-zinc-800 hover:border-[#1877F2]">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white hover:bg-[#FF0000] hover:text-white transition-all border border-zinc-800 hover:border-[#FF0000]">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold uppercase mb-6 text-sm tracking-wider">Explore</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li><a href="#programs" className="hover:text-yellow-500 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-yellow-500 rounded-full"></span> Programs</a></li>
              <li><a href="#why-us" className="hover:text-yellow-500 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-yellow-500 rounded-full"></span> Instructors</a></li>
              <li><a href="#reviews" className="hover:text-yellow-500 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-yellow-500 rounded-full"></span> Success Stories</a></li>
              <li><a href="#contact" className="hover:text-yellow-500 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-yellow-500 rounded-full"></span> Locations</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase mb-6 text-sm tracking-wider">Contact Us</h4>
            <ul className="space-y-4 text-zinc-400 text-sm">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-yellow-500 shrink-0 mt-1 group-hover:animate-bounce" />
                <span className="group-hover:text-white transition-colors">Das Brother 1st floor, Kala pahar, AK Azad Rd, Sankarpur, Birubari, Guwahati, Assam 781001</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="w-5 h-5 text-yellow-500 shrink-0 group-hover:rotate-12 transition-transform" />
                <div className="flex flex-col">
                    <a href="tel:+917035419267" className="hover:text-white font-semibold">+91 70354 19267</a>
                    <a href="tel:+918472067584" className="hover:text-white text-xs text-zinc-500">+91 84720 67584 (Alt)</a>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="w-5 h-5 text-yellow-500 shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:rajmarten10@gmail.com" className="hover:text-white break-all">rajmarten10@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="h-48 bg-zinc-900 rounded-xl overflow-hidden relative border border-zinc-800 shadow-xl group">
             <iframe 
               src="https://maps.google.com/maps?q=Das+Brother+1st+floor,+Kala+pahar,+AK+Azad+Rd,+Sankarpur,+Birubari,+Guwahati,+Assam+781001&t=&z=15&ie=UTF8&iwloc=&output=embed" 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               allowFullScreen 
               loading="lazy"
               className="grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100"
               title="Dance Pro Studio Location"
             ></iframe>
             <a 
                href="https://maps.app.goo.gl/2nL258Kkutjg92SU9?g_st=iwb" 
                target="_blank" 
                rel="noreferrer"
                className="absolute bottom-2 right-2 bg-yellow-500 text-black text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg hover:bg-white transition-colors uppercase tracking-wide"
             >
                Open in Google Maps
             </a>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
          <p>&copy; {new Date().getFullYear()} Dance Pro Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-400">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};