
import React from 'react';

const Sobre = () => {
  return (
    <div className="page-container">
      <section className="max-w-4xl mx-auto mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-ser-text-dark mb-6 text-center">
          Sobre o Programa SER
        </h1>
        
        <div className="bg-ser-blue/30 p-6 md:p-8 rounded-lg mb-12">
          <p className="text-ser-text mb-4">
            O <strong>Programa SER</strong> é uma iniciativa institucional da FAE Centro Universitário
            que visa promover o desenvolvimento integral dos estudantes, abordando aspectos físicos,
            emocionais, intelectuais e sociais.
          </p>
          <p className="text-ser-text mb-4">
            Compreendemos que o sucesso acadêmico está diretamente relacionado ao bem-estar do estudante
            e às condições que favorecem seu desenvolvimento humano pleno. Por isso, nosso programa
            integra diferentes dimensões da formação universitária.
          </p>
          <p className="text-ser-text">
            Através de atividades diversas, buscamos criar um ambiente acolhedor que apoia os estudantes
            em sua jornada de autoconhecimento e desenvolvimento, preparando-os não apenas para desafios
            profissionais, mas para uma vida equilibrada e plena.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-ser-purple-dark mb-4">Nossa Missão</h2>
            <p className="text-ser-text">
              Promover o desenvolvimento integral dos estudantes universitários, oferecendo 
              oportunidades para o equilíbrio entre saúde física, emocional e desempenho acadêmico,
              contribuindo para a formação de profissionais e cidadãos mais conscientes e realizados.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-ser-purple-dark mb-4">Nossa Visão</h2>
            <p className="text-ser-text">
              Ser reconhecido como um programa de referência em bem-estar universitário, transformando
              a experiência acadêmica através de práticas inovadoras que integram saúde, desenvolvimento
              pessoal e excelência educacional.
            </p>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-ser-text-dark mb-6">Pilares do Programa</h2>
        
        <div className="space-y-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-ser-purple">
            <h3 className="text-xl font-semibold text-ser-text-dark mb-2">Bem-estar Emocional</h3>
            <p className="text-ser-text">
              Promovemos práticas que auxiliam no gerenciamento do estresse, ansiedade e outras questões
              emocionais comuns no ambiente universitário, oferecendo suporte para que os estudantes
              desenvolvam resiliência e equilíbrio.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-ser-purple">
            <h3 className="text-xl font-semibold text-ser-text-dark mb-2">Saúde Física</h3>
            <p className="text-ser-text">
              Através do <strong>Projeto Mover-se</strong>, incentivamos a prática regular de atividades
              físicas, a adoção de hábitos saudáveis e a conscientização sobre a importância do cuidado
              com o corpo para o bem-estar geral.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-ser-purple">
            <h3 className="text-xl font-semibold text-ser-text-dark mb-2">Virtudes Humanas</h3>
            <p className="text-ser-text">
              Valorizamos o desenvolvimento de virtudes como empatia, respeito, solidariedade e ética,
              fundamentais para a formação de profissionais humanizados e conscientes de seu papel na sociedade.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-ser-purple">
            <h3 className="text-xl font-semibold text-ser-text-dark mb-2">Excelência Acadêmica</h3>
            <p className="text-ser-text">
              Entendemos que o equilíbrio emocional e físico contribui diretamente para o desempenho
              acadêmico, por isso, todas as nossas atividades visam também apoiar o estudante em sua
              jornada de aprendizado e desenvolvimento intelectual.
            </p>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-ser-text-dark mb-6">Objetivos do Programa</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <ul className="space-y-4 list-disc pl-5 text-ser-text">
            <li>Promover o bem-estar integral dos estudantes universitários;</li>
            <li>Oferecer atividades que auxiliem no gerenciamento do estresse e ansiedade;</li>
            <li>Incentivar a prática regular de atividades físicas e hábitos saudáveis;</li>
            <li>Criar espaços de acolhimento, integração e apoio mútuo entre os estudantes;</li>
            <li>Desenvolver habilidades socioemocionais importantes para a vida acadêmica e profissional;</li>
            <li>Contribuir para a redução da evasão escolar relacionada a questões de saúde mental;</li>
            <li>Promover o autoconhecimento e o desenvolvimento pessoal;</li>
            <li>Fortalecer o senso de pertencimento à comunidade universitária;</li>
            <li>Preparar os estudantes para os desafios do mercado de trabalho, não apenas em termos técnicos, mas também emocionais e relacionais.</li>
          </ul>
        </div>
        
        <div className="bg-ser-lilac/30 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-semibold text-ser-text-dark mb-4">Faça parte do Programa SER</h2>
          <p className="text-ser-text mb-6">
            Convidamos todos os estudantes a participarem das nossas atividades e descobrirem
            como o Programa SER pode transformar sua experiência universitária.
          </p>
          <a href="/inscricao" className="btn-primary">
            Quero Participar
          </a>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
