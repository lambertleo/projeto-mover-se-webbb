
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const routes = [
    { path: '/', label: 'Início' },
    { path: '/sobre', label: 'Sobre o Programa' },
    { path: '/moverse', label: 'Projeto Mover-se' },
    { path: '/calendario', label: 'Calendário' },
    { path: '/depoimentos', label: 'Depoimentos' },
    { path: '/inscricao', label: 'Inscrição' },
    { path: '/contato', label: 'Contato' },
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:space-x-10">
          <div className="flex items-center">
            <Link to="/" className="flex">
              <span className="text-2xl font-bold text-ser-purple-dark">Programa <span className="text-ser-purple">SER</span></span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-ser-text-dark hover:text-ser-purple hover:bg-ser-gray"
              onClick={toggleMenu}
            >
              <span className="sr-only">Abrir menu</span>
              <svg 
                className="h-6 w-6" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                aria-hidden="true"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={`text-base font-medium ${
                  location.pathname === route.path
                    ? 'text-ser-purple border-b-2 border-ser-purple'
                    : 'text-ser-text hover:text-ser-purple'
                }`}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
          {routes.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === route.path
                  ? 'bg-ser-lilac text-ser-purple-dark'
                  : 'text-ser-text hover:bg-ser-gray hover:text-ser-purple'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {route.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
