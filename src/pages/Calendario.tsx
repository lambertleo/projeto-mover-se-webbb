
import React from 'react';
import { Link } from 'react-router-dom';

const Calendario = () => {
  // Example events (in a real app, these would come from an API or database)
  const nextEvents = [
    {
      id: 1,
      title: "Yoga para Iniciantes",
      date: "18/04/2025",
      time: "17:00 - 18:30",
      location: "Sala de Práticas Corporais - Bloco A",
      instructor: "Profa. Ana Silva"
    },
    {
      id: 2,
      title: "Caminhada em Grupo",
      date: "20/04/2025",
      time: "09:00 - 10:30",
      location: "Encontro na Entrada Principal",
      instructor: "Prof. Carlos Souza"
    },
    {
      id: 3,
      title: "Alongamento e Relaxamento",
      date: "22/04/2025",
      time: "12:30 - 13:30",
      location: "Sala de Práticas Corporais - Bloco A",
      instructor: "Profa. Mariana Costa"
    },
    {
      id: 4,
      title: "Dança Livre",
      date: "24/04/2025",
      time: "18:00 - 19:30",
      location: "Auditório - Bloco B",
      instructor: "Prof. Paulo Martins"
    },
    {
      id: 5,
      title: "Jogos Cooperativos",
      date: "27/04/2025",
      time: "15:00 - 17:00",
      location: "Quadra Poliesportiva",
      instructor: "Prof. Ricardo Lima"
    }
  ];

  return (
    <div className="page-container">
      <section className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-ser-text-dark mb-4">
            Calendário de Atividades
          </h1>
          <p className="text-lg text-ser-text max-w-3xl mx-auto">
            Confira as próximas atividades do Projeto Mover-se e participe
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-ser-text-dark mb-6">Próximas Atividades</h2>
          
          <div className="overflow-hidden bg-white shadow sm:rounded-md mb-8">
            <ul className="divide-y divide-ser-gray">
              {nextEvents.map((event) => (
                <li key={event.id}>
                  <div className="px-4 py-5 sm:px-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium leading-6 text-ser-text-dark">{event.title}</h3>
                      <p className="mt-1 max-w-2xl text-sm text-ser-purple-dark font-semibold">
                        {event.date}
                      </p>
                    </div>
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-ser-text-dark">
                          <span className="font-medium">Horário:</span> {event.time}
                        </p>
                        <p className="mt-1 text-sm text-ser-text-dark">
                          <span className="font-medium">Local:</span> {event.location}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-ser-text-dark">
                          <span className="font-medium">Facilitador(a):</span> {event.instructor}
                        </p>
                        <div className="mt-2">
                          <Link
                            to="/inscricao"
                            className="inline-flex items-center text-sm font-medium text-ser-purple hover:text-ser-purple-dark"
                          >
                            Inscrever-se
                            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-ser-gray p-4 rounded-md">
            <p className="text-sm text-ser-text text-center">
              As atividades podem sofrer alterações. Consulte sempre o calendário atualizado.
            </p>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-ser-text-dark mb-6">Calendário Completo</h2>
          
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="relative h-0 overflow-hidden pb-[75%] md:pb-[56.25%]">
              <iframe 
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FSao_Paulo&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&src=cHQtYnIuYnJhemlsaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%230B8043"
                title="Calendário do Projeto Mover-se"
                className="absolute top-0 left-0 w-full h-full border-0"
                frameBorder="0"
                scrolling="no"
                allowFullScreen
              />
            </div>
          </div>
          
          <p className="text-sm text-ser-text text-center mt-4">
            O calendário acima mostra todas as atividades do Projeto Mover-se.
            Clique em um evento para ver mais detalhes.
          </p>
        </div>
        
        <div className="bg-ser-blue/30 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-ser-text-dark mb-4">Informações Importantes</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-md">
              <h3 className="font-semibold text-ser-text-dark mb-2">Participação</h3>
              <p className="text-sm text-ser-text">
                Todas as atividades são gratuitas e abertas para estudantes regularmente matriculados.
                É necessário fazer inscrição prévia para garantir sua vaga.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-md">
              <h3 className="font-semibold text-ser-text-dark mb-2">O que levar</h3>
              <p className="text-sm text-ser-text">
                Recomendamos o uso de roupas confortáveis e adequadas para a prática de atividades físicas.
                Para as aulas de yoga e alongamento, sugerimos trazer seu próprio tapete, se possível.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-md">
              <h3 className="font-semibold text-ser-text-dark mb-2">Certificação</h3>
              <p className="text-sm text-ser-text">
                Os estudantes que participarem regularmente das atividades poderão solicitar
                certificado para horas complementares ao final do semestre.
              </p>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Link to="/inscricao" className="btn-primary">
              Fazer Inscrição
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calendario;
