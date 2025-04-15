
import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div>
      {/* Banner Section */}
      <section className="relative bg-ser-blue py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" 
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&q=80')" }}>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-ser-text-dark sm:text-5xl mb-6">
              Programa SER
            </h1>
            <p className="text-xl text-ser-text-dark mb-8">
              Promovendo o bem-estar integral e a saúde emocional dos estudantes universitários
            </p>
            <Link to="/inscricao" className="btn-primary">
              Quero Participar
            </Link>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-ser-text-dark mb-6">Bem-vindo ao Programa SER</h2>
            <p className="text-ser-text mb-4">
              O Programa SER é uma iniciativa universitária que visa promover o bem-estar integral dos estudantes, 
              combinando atividades físicas, práticas de saúde mental e desenvolvimento pessoal.
            </p>
            <p className="text-ser-text mb-4">
              Por meio do Projeto Mover-se, proporcionamos um espaço para que os alunos possam cuidar 
              de sua saúde física e emocional, promovendo equilíbrio e qualidade de vida durante sua 
              jornada acadêmica.
            </p>
            <p className="text-ser-text mb-6">
              Nossas atividades incluem yoga, alongamento, corridas em grupo, caminhadas, dança, jogos 
              cooperativos e muito mais!
            </p>
            <Link to="/sobre" className="text-ser-purple font-semibold hover:text-ser-purple-dark">
              Conheça mais sobre o programa →
            </Link>
          </div>
          <div className="bg-ser-gray rounded-lg p-8">
            <h3 className="text-2xl font-bold text-ser-purple-dark mb-4">Projeto Mover-se</h3>
            <p className="text-ser-text mb-4">
              O Projeto Mover-se é um dos pilares do Programa SER, focado em atividades físicas 
              e práticas corporais que promovem saúde, bem-estar e integração entre os estudantes.
            </p>
            <div className="bg-white p-4 rounded-md shadow-sm mb-4">
              <p className="font-medium text-ser-text-dark">Nossos objetivos:</p>
              <ul className="list-disc pl-5 mt-2 text-ser-text">
                <li>Promover a saúde física e mental</li>
                <li>Incentivar hábitos saudáveis</li>
                <li>Reduzir o estresse acadêmico</li>
                <li>Criar uma comunidade de apoio</li>
              </ul>
            </div>
            <Link to="/moverse" className="btn-primary inline-block">
              Conhecer atividades
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="bg-ser-lilac/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-ser-text-dark mb-4">Por que participar?</h2>
            <p className="text-lg text-ser-text max-w-3xl mx-auto">
              Participar do Programa SER traz inúmeros benefícios para sua vida acadêmica e pessoal
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-ser-purple/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ser-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-ser-text-dark mb-2">Saúde Mental</h3>
              <p className="text-ser-text">
                Reduza o estresse e a ansiedade através de práticas que promovem o equilíbrio emocional
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-ser-purple/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ser-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-ser-text-dark mb-2">Integração Social</h3>
              <p className="text-ser-text">
                Conecte-se com outros estudantes e crie uma rede de apoio durante sua jornada acadêmica
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-ser-purple/20 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ser-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-ser-text-dark mb-2">Desempenho Acadêmico</h3>
              <p className="text-ser-text">
                Melhore sua concentração e produtividade através de um estilo de vida mais equilibrado
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/calendario" className="text-ser-purple font-semibold hover:text-ser-purple-dark">
              Ver próximas atividades →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
