import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full bg-transparent border-t border-black/5 py-8 px-6 md:px-12 font-['Plus_Jakarta_Sans'] select-none">
      <div className="max-w-[840px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* TEXTE DROITS RÉSERVÉS */}
        <p className="text-[11px] font-bold tracking-wider text-black/40 uppercase text-center sm:text-left">
          © {new Date().getFullYear()} FabWeb. Tous droits réservés.
        </p>
        
        {/* LIENS RÉSEAUX SOCIAUX */}
        <div className="flex items-center gap-6">
          
          {/* LINK INSTAGRAM */}
          <motion.a 
            href="https://www.instagram.com/fab_web12/" 
            target="_blank" 
            rel="noopener noreferrer" 
            whileHover={{ scale: 1.15, y: -2 }}
            className="text-black/40 hover:text-[#FF5F25] transition-colors duration-300"
            aria-label="Instagram"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </motion.a>

          {/* LINK FACEBOOK */}
          <motion.a 
            href="https://www.facebook.com/share/1HKJdtUQ7a/?mibextid=wwXIfr" 
            target="_blank" 
            rel="noopener noreferrer" 
            whileHover={{ scale: 1.15, y: -2 }}
            className="text-black/40 hover:text-[#FF5F25] transition-colors duration-300"
            aria-label="Facebook"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </motion.a>

          {/* LINK WHATSAPP */}
          <motion.a 
            href="https://wa.me/213780334395" 
            target="_blank" 
            rel="noopener noreferrer" 
            whileHover={{ scale: 1.15, y: -2 }}
            className="text-black/40 hover:text-[#FF5F25] transition-colors duration-300"
            aria-label="WhatsApp"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.503 4.933 1.504 5.392 0 9.778-4.381 9.781-9.774.001-2.613-1.015-5.07-2.861-6.918C16.6 2.12 14.14 1.104 11.534 1.104c-5.398 0-9.786 4.384-9.79 9.781-.001 1.764.469 3.488 1.36 5.023l-.993 3.626 3.71-.973zm11.365-6.848c-.33-.165-1.951-.963-2.251-1.073-.3-.109-.518-.165-.736.165-.218.329-.846 1.073-1.037 1.292-.19.218-.381.245-.71.081-1.211-.606-2.002-1.08-2.793-2.438-.208-.358.208-.333.596-1.109.066-.131.033-.245-.017-.344-.049-.098-.419-1.008-.574-1.381-.152-.365-.307-.315-.418-.315-.108-.002-.232-.003-.356-.003-.124 0-.326.046-.496.231-.171.185-.651.636-.651 1.55 0 .915.666 1.799.759 1.921.093.123 1.31 2.001 3.172 2.804.443.19.789.304 1.059.39.446.142.851.122 1.171.074.357-.053 1.073-.438 1.223-.86.15-.422.15-.783.105-.859-.045-.077-.165-.12-.495-.285z"/>
            </svg>
          </motion.a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;