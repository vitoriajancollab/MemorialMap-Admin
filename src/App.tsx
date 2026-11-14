
import { useState } from 'react'
import './App.css'

function App() {
  const [logado, setLogado] = useState(false)
  const [pagina, setPagina] = useState('inicio')

  if (!logado) {
    return (
      <div className="tela-login">
        <div className="cartao-login">

          <div className="login-logo">🕊️</div>

          <h1>MEMORIAL MAP</h1>
          <p>Painel administrativo</p>

          <h2>Bem-vindo!</h2>
          <p>Entre com suas credenciais para continuar.</p>

          <form>
            <label>Usuário</label>
            <input
              type="text"
              placeholder="Digite seu usuário"
            />

            <label>Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
            />

            <button
              type="button"
              onClick={() => setLogado(true)}
            >
              Entrar
            </button>
          </form>

        </div>
      </div>
    )
  }

  return (
    <div className="painel">
      <aside className="menu-lateral">
        <div className="logo">
          <span className="logo-simbolo">🕊️</span>
          <div>
            <h2>MEMORIAL</h2>
            <h2>MAP</h2>
            <p>Painel administrativo</p>
          </div>
        </div>

        <nav>
          <p className="menu-titulo">MENU PRINCIPAL</p>

          <a href="#" className="menu-item ativo">
            <span>⌂</span> Início
          </a>

          <a
  href="#"
  className={`menu-item ${pagina === 'cemiterios' ? 'ativo' : ''}`}
  onClick={() => setPagina('cemiterios')}
>
  <span>⚰</span> Cemitérios
 </a>

          <a href="#" className="menu-item">
            <span>♙</span> Responsáveis
          </a>

          <a href="#" className="menu-item">
            <span>✓</span> Aprovações
            <span className="quantidade">0</span>
          </a>

           <a
            href="#"
            className={`menu-item ${pagina === 'usuarios' ? 'ativo' : ''}`}
            onClick={() => setPagina('usuarios')}
            >
          <span>♙</span> Gerenciar usuários
          </a>

        </nav>

        <div className="menu-rodape">
          <div className="avatar">A</div>
          <div>
            <strong>Administrador</strong>
            <p>Gestão do sistema</p>
          </div>
        </div>
      </aside>

  
<main className="conteudo">

  {pagina === 'usuarios' ? (

    // TELA DE GERENCIAR USUÁRIOS
    <section className="usuarios">

      <header className="cabecalho">
        <div>
          <p className="subtitulo">GESTÃO DE ACESSOS</p>
          <h1>Gerenciar usuários</h1>
          <p className="descricao">
            Crie e organize os acessos dos responsáveis pelos cemitérios.
          </p>
        </div>
      </header>

      <div className="cartao">
        <h2>Novo usuário</h2>
        <p>Preencha os dados para criar um novo acesso.</p>

        <form className="formulario-usuario">

          <div className="campo-formulario">
            <label>Nome completo</label>
            <input
              type="text"
              placeholder="Digite o nome completo"
              required
            />
          </div>

          <div className="campo-formulario">
            <label>Nome de usuário</label>
            <input
              type="text"
              placeholder="Crie um nome de usuário"
              required
            />
          </div>

          <div className="campo-formulario">
            <label>Senha</label>
            <input
              type="password"
              placeholder="Crie uma senha"
              required
            />
          </div>

          <div className="campo-formulario">
            <label>Cemitério autorizado</label>
            <select required defaultValue="">
              <option value="" disabled>
                Selecione um cemitério
              </option>
            </select>
          </div>

          <div className="campo-formulario">
            <label>Tipo de acesso</label>
            <select required defaultValue="">
              <option value="" disabled>
                Selecione o tipo de acesso
              </option>
              <option value="responsavel">
                Responsável pelo cemitério
              </option>
              <option value="funcionario">
                Funcionário autorizado
              </option>
            </select>
          </div>

          <button type="button">
            Criar usuário
          </button>

        </form>
      </div>

    </section>

  ) : pagina === 'cemiterios' ? (

    // TELA DE GERENCIAR CEMITÉRIOS
    <section className="cemiterios">

      <header className="cabecalho">
        <div>
          <p className="subtitulo">GESTÃO DE UNIDADES</p>
          <h1>Gerenciar cemitérios</h1>
          <p className="descricao">
            Cadastre e organize os cemitérios de cada cidade.
          </p>
        </div>
      </header>

      <div className="cartao">
        <h2>Novo cemitério</h2>
        <p>Preencha os dados para cadastrar um cemitério.</p>

        <form className="formulario-usuario">

          <div className="campo-formulario">
            <label>Nome do cemitério</label>
            <input
              type="text"
              placeholder="Digite o nome do cemitério"
              required
            />
          </div>

          <div className="campo-formulario">
            <label>Cidade</label>
            <input
              type="text"
              placeholder="Digite a cidade"
              required
            />
          </div>

          <div className="campo-formulario">
            <label>Estado</label>
            <input
              type="text"
              placeholder="Digite o estado"
              required
            />
          </div>

          <div className="campo-formulario">
            <label>Situação do sistema</label>
            <select defaultValue="inativo">
              <option value="inativo">Inativo</option>
              <option value="ativo">Ativo</option>
            </select>
          </div>

          <button type="button">
            Cadastrar cemitério
          </button>

        </form>
      </div>

    </section>

  ) : (

  <>
        
        <header className="cabecalho">
          <div>
            <p className="subtitulo">GESTÃO DO SISTEMA</p>
            <h1>Painel administrativo</h1>
            <p className="descricao">
              Bem-vindo! Acompanhe a gestão do Memorial Map.
            </p>
          </div>

          <div className="status">
            <span className="status-bolinha"></span>
            Sistema em desenvolvimento
          </div>
        </header>

        <section className="boas-vindas">
          <div>
            <p className="boas-vindas-label">MEMORIAL MAP</p>
            <h2>Organizando memórias,<br />conectando histórias.</h2>
            <p>
              Gerencie os cemitérios cadastrados e acompanhe as solicitações
              de acesso dos responsáveis.
            </p>
          </div>
          <div className="boas-vindas-icone">🕊️</div>
        </section>

        <section className="resumo">
          <div className="secao-cabecalho">
            <div>
              <h2>Visão geral</h2>
              <p>Resumo administrativo do sistema</p>
            </div>
          </div>

          <div className="cartoes">
            <article className="cartao">
              <div className="cartao-topo">
                <span className="cartao-icone azul">⚰</span>
                <span className="cartao-legenda">CADASTRO</span>
              </div>
              <p className="cartao-numero">0</p>
              <h3>Cemitérios</h3>
              <p className="cartao-descricao">Cemitérios registrados</p>
            </article>

            <article className="cartao">
              <div className="cartao-topo">
                <span className="cartao-icone dourado">♙</span>
                <span className="cartao-legenda">ACESSOS</span>
              </div>
              <p className="cartao-numero">0</p>
              <h3>Responsáveis</h3>
              <p className="cartao-descricao">Responsáveis cadastrados</p>
            </article>

            <article className="cartao">
              <div className="cartao-topo">
                <span className="cartao-icone laranja">◷</span>
                <span className="cartao-legenda">PENDENTES</span>
              </div>
              <p className="cartao-numero">0</p>
              <h3>Aprovações</h3>
              <p className="cartao-descricao">Solicitações aguardando análise</p>
            </article>
          </div>
        </section>

        <section className="atividade">
          <div>
            <h2>Próximas etapas</h2>
            <p>O que vamos preparar no painel</p>
          </div>

          <div className="etapa">
            <span>1</span>
            <div>
              <strong>Gestão de cemitérios</strong>
              <p>Consultar e organizar os cemitérios cadastrados.</p>
            </div>
            <span className="etapa-status">A preparar</span>
          </div>

          <div className="etapa">
            <span>2</span>
            <div>
              <strong>Cadastro de responsáveis</strong>
              <p>Identificar quem solicita acesso administrativo.</p>
            </div>
            <span className="etapa-status">A preparar</span>
          </div>

          <div className="etapa">
            <span>3</span>
            <div>
              <strong>Aprovação manual</strong>
              <p>Permitir que o administrador analise cada solicitação.</p>
            </div>
            <span className="etapa-status">A preparar</span>
          </div>
        </section>

        <footer className="rodape">
          Memorial Map © 2026 · Painel administrativo
        </footer>
         </>
        )}
      </main>
    </div>

    
  )
}

export default App
