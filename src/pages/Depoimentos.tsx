
import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Depoimentos = () => {
  const testimonials = [
    {
      id: 1,
      content: "A yoga mudou completamente minha rotina acadêmica. Antes eu ficava extremamente estressado com as provas e trabalhos, mas agora consigo manter a calma e me concentrar melhor. Recomendo para todos os estudantes!",
      author: "João Silva",
      course: "Administração",
      semester: "5º semestre",
      activity: "Yoga",
      image: "/lovable-uploads/6fbfc630-32b9-46e7-a576-c98591ddc6a1.png",
      initial: "J"
    },
    {
      id: 2,
      content: "Participar das caminhadas em grupo me ajudou não só a melhorar minha saúde física, mas também a fazer novos amigos. É um momento de descontração que alivia a pressão da semana de estudos.",
      author: "Maria Santos",
      course: "Psicologia",
      semester: "3º semestre",
      activity: "Caminhada",
      image: "",
      initial: "M"
    },
    {
      id: 3,
      content: "As sessões de alongamento no intervalo do almoço são perfeitas para quem passa muito tempo sentado estudando. Sinto menos dores nas costas e tenho mais disposição para as aulas da tarde.",
      author: "Pedro Oliveira",
      course: "Engenharia",
      semester: "7º semestre",
      activity: "Alongamento",
      image: "",
      initial: "P"
    },
    {
      id: 4,
      content: "Os jogos cooperativos me ensinaram muito sobre trabalho em equipe, algo que tenho aplicado nos projetos acadêmicos. Além disso, é uma forma divertida de aliviar o estresse.",
      author: "Ana Luiza Costa",
      course: "Direito",
      semester: "4º semestre",
      activity: "Jogos",
      image: "",
      initial: "A"
    },
    {
      id: 5,
      content: "Nunca imaginei que a dança poderia ser tão terapêutica! Depois que comecei a participar das aulas, percebi uma melhora significativa na minha autoestima e no meu humor geral.",
      author: "Lucas Mendes",
      course: "Medicina",
      semester: "2º semestre",
      activity: "Dança",
      image: "",
      initial: "L"
    }
  ];

  return (
    <div className="page-container">
      <section className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-ser-text-dark mb-4">
            Depoimentos
          </h1>
          <p className="text-lg text-ser-text max-w-3xl mx-auto">
            Conheça as experiências de estudantes que participam do Projeto Mover-se
          </p>
        </div>
        
        <div className="mb-12 space-y-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Avatar className="h-12 w-12 bg-ser-lilac/50">
                    <AvatarImage src={testimonial.image} alt={testimonial.author} />
                    <AvatarFallback className="bg-ser-purple/30 text-ser-purple-dark font-bold">
                      {testimonial.initial}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-ser-text-dark">
                      {testimonial.author}
                    </h3>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-ser-lilac/50 text-ser-purple-dark">
                      {testimonial.activity}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-ser-text-dark">
                    {testimonial.course}, {testimonial.semester}
                  </p>
                  <p className="mt-4 text-ser-text">
                    "{testimonial.content}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-ser-text-dark mb-4">O que nossos participantes dizem</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-ser-purple mb-2">95%</div>
              <p className="text-sm text-ser-text">relatam redução no nível de estresse acadêmico</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-ser-purple mb-2">87%</div>
              <p className="text-sm text-ser-text">percebem melhora na concentração e foco nos estudos</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-ser-purple mb-2">92%</div>
              <p className="text-sm text-ser-text">recomendariam o Projeto Mover-se para colegas</p>
            </div>
          </div>
          
          <p className="text-center text-sm text-ser-text italic">
            Dados baseados em pesquisa de satisfação realizada com participantes do programa em 2025.
          </p>
        </div>
        
        <div className="bg-ser-lilac/30 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-semibold text-ser-text-dark mb-4">Compartilhe sua experiência</h2>
          <p className="text-ser-text mb-6">
            Você já participa das atividades do Projeto Mover-se? Conte-nos como tem sido sua experiência!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:contato@fae.br" className="btn-primary bg-white text-ser-purple border border-ser-purple hover:bg-ser-gray">
              Enviar Depoimento
            </a>
            <Link to="/inscricao" className="btn-primary">
              Quero Participar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Depoimentos;
