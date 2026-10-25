
import './App.css'

function App() {
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

          <a href="#" className="menu-item">
            <span>⚰</span> Cemitérios
          </a>

          <a href="#" className="menu-item">
            <span>♙</span> Responsáveis
          </a>

          <a href="#" className="menu-item">
            <span>✓</span> Aprovações
            <span className="quantidade">0</span>
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
      </main>
    </div>
  )
}

export default App
