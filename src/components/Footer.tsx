
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-ser-gray py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-xl font-bold text-ser-purple-dark">
              Programa <span className="text-ser-purple">SER</span>
            </Link>
            <p className="mt-2 text-sm text-ser-text">
              Promovendo o bem-estar e saúde emocional
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-ser-text-dark uppercase mb-4">Programa</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/sobre" className="text-ser-text hover:text-ser-purple text-sm">
                    Sobre o Programa
                  </Link>
                </li>
                <li>
                  <Link to="/moverse" className="text-ser-text hover:text-ser-purple text-sm">
                    Projeto Mover-se
                  </Link>
                </li>
                <li>
                  <Link to="/calendario" className="text-ser-text hover:text-ser-purple text-sm">
                    Calendário
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-ser-text-dark uppercase mb-4">Participe</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/depoimentos" className="text-ser-text hover:text-ser-purple text-sm">
                    Depoimentos
                  </Link>
                </li>
                <li>
                  <Link to="/inscricao" className="text-ser-text hover:text-ser-purple text-sm">
                    Inscrição
                  </Link>
                </li>
                <li>
                  <Link to="/contato" className="text-ser-text hover:text-ser-purple text-sm">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-ser-purple/20 text-center">
          <p className="text-sm text-ser-text">
            &copy; {currentYear} Programa SER - FAE. Todos os direitos reservados.
          </p>
          <p className="text-xs text-ser-text mt-2">
            Criadores do site: Leonardo Lambert e Isabela Pozza
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

