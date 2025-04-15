
import React from 'react';
import { Link } from 'react-router-dom';

const Moverse = () => {
  const activities = [
    {
      title: "Yoga",
      description: "Práticas de yoga para equilíbrio físico e mental, com foco em respiração, postura e meditação.",
      color: "bg-ser-purple/20",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-ser-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "Alongamento",
      description: "Sessões de alongamento para melhorar a flexibilidade, prevenir lesões e aliviar tensões musculares.",
      color: "bg-ser-blue/40",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-ser-purple-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Corrida",
      description: "Grupos de corrida com diferentes níveis de intensidade para melhorar o condicionamento físico e a saúde cardiovascular.",
      color: "bg-ser-lilac/50",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-ser-purple-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Caminhada",
      description: "Caminhadas em grupo pelo campus e arredores, uma atividade acessível e eficaz para melhorar a saúde física e mental.",
      color: "bg-[#E2F0CB]/70",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#76A665]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
      )
    },
    {
      title: "Dança",
      description: "Aulas de dança de diferentes estilos, promovendo a expressão corporal, coordenação e integração social.",
      color: "bg-[#FCD5CE]/70",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#F27059]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Jogos",
      description: "Atividades lúdicas e jogos cooperativos que estimulam o trabalho em equipe, a comunicação e a criatividade.",
      color: "bg-[#C9E4DE]/70",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#52796F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      )
    },
    {
      title: "Tabuleiro",
      description: "Encontros para jogos de tabuleiro que estimulam o raciocínio lógico, a estratégia e a socialização.",
      color: "bg-[#F8EDEB]/80",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#9D8189]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
  ];

  return (
    <div className="page-container">
      <section className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-ser-text-dark mb-4">
            Projeto Mover-se
          </h1>
          <p className="text-lg text-ser-text max-w-3xl mx-auto">
            Conheça as atividades físicas e práticas corporais que promovem o seu bem-estar e saúde
          </p>
        </div>
        
        <div className="bg-ser-blue/30 p-6 md:p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold text-ser-text-dark mb-4">Sobre o Projeto</h2>
          <p className="text-ser-text mb-4">
            O <strong>Projeto Mover-se</strong> é um dos pilares do Programa SER, focado em promover
            o bem-estar físico e emocional dos estudantes através de atividades corporais diversas.
          </p>
          <p className="text-ser-text mb-4">
            Acreditamos que o movimento é fundamental para o equilíbrio do corpo e da mente, contribuindo
            para a redução do estresse, melhoria da concentração e aumento da disposição para as
            atividades acadêmicas.
          </p>
          <p className="text-ser-text">
            Nossas atividades são conduzidas por profissionais qualificados e são adaptadas para todos
            os níveis de condicionamento físico, garantindo que todos possam participar e se beneficiar.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-ser-text-dark mb-6">Nossas Atividades</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {activities.map((activity, index) => (
            <div key={index} className={`activity-card ${activity.color}`}>
              <div className="flex flex-col items-center">
                <div className="mb-4">{activity.icon}</div>
                <h3 className="text-xl font-bold text-ser-text-dark mb-2">
                  {activity.title}
                </h3>
                <p className="text-ser-text text-center">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-ser-text-dark mb-4">Benefícios das Atividades</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-ser-purple flex items-center justify-center">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-ser-text">Redução dos níveis de estresse e ansiedade</p>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-ser-purple flex items-center justify-center">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-ser-text">Melhoria da qualidade do sono</p>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-ser-purple flex items-center justify-center">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-ser-text">Aumento da concentração e produtividade</p>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-ser-purple flex items-center justify-center">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-ser-text">Desenvolvimento de habilidades sociais</p>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-ser-purple flex items-center justify-center">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-ser-text">Fortalecimento do sistema imunológico</p>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-ser-purple flex items-center justify-center">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-ser-text">Melhoria da postura e redução de dores</p>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-ser-purple flex items-center justify-center">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-ser-text">Aumento da autoestima e confiança</p>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-ser-purple flex items-center justify-center">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-ser-text">Promoção do equilíbrio entre corpo e mente</p>
            </div>
          </div>
        </div>
        
        <div className="bg-ser-lilac/30 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-semibold text-ser-text-dark mb-4">Quer participar das nossas atividades?</h2>
          <p className="text-ser-text mb-6">
            Confira nosso calendário de atividades e inscreva-se para participar
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/calendario" className="btn-primary bg-white text-ser-purple border border-ser-purple hover:bg-ser-gray">
              Ver Calendário
            </Link>
            <Link to="/inscricao" className="btn-primary">
              Fazer Inscrição
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Moverse;
