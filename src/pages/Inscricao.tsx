
import React, { useState } from 'react';

const Inscricao = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    curso: '',
    semestre: '',
    atividade: '',
    horario: '',
    motivacao: '',
    concordo: false
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setSubmitted(true);
  };
  
  return (
    <div className="page-container">
      <section className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-ser-text-dark mb-4">
            Formulário de Inscrição
          </h1>
          <p className="text-lg text-ser-text max-w-3xl mx-auto">
            Preencha o formulário abaixo para participar das atividades do Projeto Mover-se
          </p>
        </div>
        
        {submitted ? (
          <div className="bg-ser-lilac/30 p-8 rounded-lg text-center">
            <svg className="h-16 w-16 text-ser-purple mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-2xl font-bold text-ser-text-dark mb-4">Inscrição Recebida!</h2>
            <p className="text-ser-text mb-6">
              Agradecemos pelo seu interesse em participar do Projeto Mover-se. 
              Em breve, você receberá um e-mail com a confirmação da sua inscrição e mais informações sobre as atividades.
            </p>
            <button 
              onClick={() => setSubmitted(false)} 
              className="btn-primary"
            >
              Fazer Nova Inscrição
            </button>
          </div>
        ) : (
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-ser-text-dark mb-4 pb-2 border-b border-ser-gray">
                  Informações Pessoais
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-ser-text-dark mb-1">
                      Nome Completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Digite seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ser-text-dark mb-1">
                      E-mail <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="seu.email@exemplo.com"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="curso" className="block text-sm font-medium text-ser-text-dark mb-1">
                        Curso <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="curso"
                        name="curso"
                        required
                        value={formData.curso}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Ex: Administração"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="semestre" className="block text-sm font-medium text-ser-text-dark mb-1">
                        Semestre <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="semestre"
                        name="semestre"
                        required
                        value={formData.semestre}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="">Selecione</option>
                        <option value="1">1º Semestre</option>
                        <option value="2">2º Semestre</option>
                        <option value="3">3º Semestre</option>
                        <option value="4">4º Semestre</option>
                        <option value="5">5º Semestre</option>
                        <option value="6">6º Semestre</option>
                        <option value="7">7º Semestre</option>
                        <option value="8">8º Semestre</option>
                        <option value="9">9º Semestre</option>
                        <option value="10">10º Semestre</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-ser-text-dark mb-4 pb-2 border-b border-ser-gray">
                  Atividade de Interesse
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="atividade" className="block text-sm font-medium text-ser-text-dark mb-1">
                      Escolha uma Atividade <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="atividade"
                      name="atividade"
                      required
                      value={formData.atividade}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Selecione uma atividade</option>
                      <option value="yoga">Yoga</option>
                      <option value="alongamento">Alongamento</option>
                      <option value="corrida">Corrida</option>
                      <option value="caminhada">Caminhada</option>
                      <option value="danca">Dança</option>
                      <option value="jogos">Jogos Cooperativos</option>
                      <option value="tabuleiro">Jogos de Tabuleiro</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="horario" className="block text-sm font-medium text-ser-text-dark mb-1">
                      Horário Preferencial <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="horario"
                      name="horario"
                      required
                      value={formData.horario}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Selecione um horário</option>
                      <option value="manha">Período da Manhã</option>
                      <option value="almoco">Horário de Almoço (12h-14h)</option>
                      <option value="tarde">Período da Tarde</option>
                      <option value="noite">Período Noturno</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="motivacao" className="block text-sm font-medium text-ser-text-dark mb-1">
                      O que te motiva a participar desta atividade?
                    </label>
                    <textarea
                      id="motivacao"
                      name="motivacao"
                      rows={4}
                      value={formData.motivacao}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Conte-nos um pouco sobre sua motivação..."
                    ></textarea>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="concordo"
                      name="concordo"
                      type="checkbox"
                      required
                      checked={formData.concordo}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 rounded border-ser-gray text-ser-purple focus:ring-ser-purple"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="concordo" className="text-ser-text">
                      Declaro que estou ciente das regras de participação e me comprometo a seguir
                      as orientações dos instrutores durante as atividades.
                      <span className="text-red-500"> *</span>
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary w-full sm:w-auto"
                >
                  Enviar Inscrição
                </button>
                <p className="mt-4 text-xs text-ser-text">
                  Campos marcados com <span className="text-red-500">*</span> são obrigatórios.
                </p>
              </div>
            </form>
          </div>
        )}
        
        <div className="mt-8 bg-ser-gray p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-ser-text-dark mb-4">Informações Importantes</h2>
          
          <div className="space-y-3 text-sm text-ser-text">
            <p>
              <span className="font-medium">Vagas Limitadas:</span> As inscrições serão confirmadas por ordem de chegada, 
              sujeitas à disponibilidade de vagas.
            </p>
            <p>
              <span className="font-medium">Participação:</span> É necessário ter frequência mínima de 75% para receber o 
              certificado de participação ao final do semestre.
            </p>
            <p>
              <span className="font-medium">Cancelamento:</span> Em caso de desistência, solicitamos que informe com 
              antecedência para que outra pessoa possa ocupar a vaga.
            </p>
            <p>
              <span className="font-medium">Dúvidas:</span> Para mais informações, entre em contato pelo e-mail 
              <a href="mailto:contato@fae.br" className="text-ser-purple ml-1">contato@fae.br</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inscricao;
