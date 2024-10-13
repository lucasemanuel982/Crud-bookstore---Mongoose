<div class="section">
    <h1>API de Gerenciamento de Livros e Autores</h1>
    <p>Esta API permite o gerenciamento de livros e autores, oferecendo funcionalidades completas de CRUD (Criar, Ler,
        Atualizar, Deletar) para ambas as entidades. A aplicação é construída com Node.js, Express e MongoDB, garantindo
        desempenho e escalabilidade.</p>
</div>

<div class="section">
    <h2>Funcionalidades</h2>
    <ul>
        <li><strong>Gerenciamento de Livros:</strong> Criação, listagem (com paginação), filtragem, atualização e
            exclusão de livros.</li>
        <li><strong>Gerenciamento de Autores:</strong> Criação, listagem, atualização e exclusão de autores.</li>
        <li><strong>Tratamento de Erros:</strong> Mecanismos robustos para captura e resposta a diferentes tipos de
            erros, incluindo validação e erros de banco de dados.</li>
        <li><strong>Conexão com Banco de Dados:</strong> Integração com MongoDB através do Mongoose para operações de
            banco de dados eficientes.</li>
        <li><strong>Configuração de Ambiente:</strong> Utilização de variáveis de ambiente para configuração flexível da
            aplicação.</li>
    </ul>
</div>

<div class="section">
    <h2>Tecnologias Utilizadas</h2>
    <ul>
        <li><span class="badge">Node.js</span></li>
        <li><span class="badge">Express</span></li>
        <li><span class="badge">MongoDB</span></li>
        <li><span class="badge">Mongoose</span></li>
        <li><span class="badge">dotenv</span></li>
        <li><span class="badge">JavaScript (ES6)</span></li>
    </ul>
</div>

<div class="section">
    <h2>Instalação</h2>
    <p>Para configurar e executar esta API localmente, siga os passos abaixo:</p>
    <ol>
        <li><strong>Clone o repositório:</strong>
        </li>
        <li><strong>Navegue até o diretório do projeto:</strong>
        </li>
        <li><strong>Instale as dependências:</strong>
            <pre><code>npm install</code></pre>
        </li>
        <li><strong>Configure as variáveis de ambiente:</strong>
            <p>Crie um arquivo <code>.env</code> na raiz do projeto e adicione a variáel do mongodb:</p>
        </li>
        <li><strong>Inicie o servidor:</strong>
            <pre><code>npm run dev</code></pre>
            <p>O servidor estará disponível em <a href="http://localhost:300">http://localhost:300</a>.</p>
        </li>
    </ol>
</div>

<div class="section">
    <h2>Como Utilizar</h2>
    <p>Após iniciar o servidor, você pode interagir com a API através dos seguintes endpoints:</p>

    <h3>Livros</h3>
    <ul>
        <li><strong>Listar Livros:</strong> <code>GET /livros</code></li>
        <li><strong>Listar Livro por ID:</strong> <code>GET /livros/:id</code></li>
        <li><strong>Filtrar Livros:</strong> <code>GET /livrosFiltro/busca?query=termo</code></li>
        <li><strong>Cadastrar Livro:</strong> <code>POST /livros</code></li>
        <li><strong>Atualizar Livro:</strong> <code>PUT /livros/:id</code></li>
        <li><strong>Excluir Livro:</strong> <code>DELETE /livros/:id</code></li>
    </ul>

    <h3>Autores</h3>
    <ul>
        <li><strong>Listar Autores:</strong> <code>GET /autores</code></li>
        <li><strong>Listar Autor por ID:</strong> <code>GET /autores/:id</code></li>
        <li><strong>Cadastrar Autor:</strong> <code>POST /autores</code></li>
        <li><strong>Atualizar Autor:</strong> <code>PUT /autores/:id</code></li>
        <li><strong>Excluir Autor:</strong> <code>DELETE /autores/:id</code></li>
    </ul>
</div>

<div class="section">
    <h2>Estrutura do Projeto</h2>
    <pre><code>
├── server.js
├── scr
│   ├── app.js
│   ├── Routes
│   │   ├── index.js
│   │   ├── livrosRoutes.js
│   │   └── autoresRoutes.js
│   ├── controllers
│   │   ├── livrosController.js
│   │   └── autoresController.js
│   ├── config
│   │   └── dbConnect.js
│   ├── middlewares
│   │   ├── manipuladorDeError.js
│   │   ├── paginas.js
│   │   └── manipulador404.js
│   │── erros
│   │   ├── ErroBase.js
│   │   ├── ErroValidacao.js
│   │   ├── NaoEncontrado.js
│   │   └── RequisicaoIncorreta.js
│   │
│   └── models
│       ├── index.js
│       ├── Autor.js
│       ├── Livro.js
│       └── ValidadorGlobal.js
├── package.json
└── .env
        </code></pre>
</div>