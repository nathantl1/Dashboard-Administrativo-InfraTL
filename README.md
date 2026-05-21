# InfraTL — Dashboard Administrativo

Interface web responsiva para gerenciamento de ocorrências de infraestrutura urbana, desenvolvida como projeto acadêmico.

---

## Sobre o Projeto

O **InfraTL** é um sistema integrado de zeladoria urbana que permite a cidadãos e funcionários da prefeitura registrar, acompanhar e gerenciar ocorrências urbanas como buracos em vias, problemas de iluminação pública, coleta de lixo, entre outros.

### Funcionalidades implementadas

- Autenticação com login (email, CPF ou matrícula) e JWT
- Cadastro de usuário com endereço em formulário de 2 etapas
- Registro de ocorrências com localização e nível de urgência
- Dashboard com listagem e filtros de ocorrências
- Perfis diferenciados: Cidadão e Funcionário

---

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Front-end | React + TypeScript |
| Estilização | Tailwind CSS |
| Requisições HTTP | Axios |
| Roteamento | React Router |
| Ícones | Lucide React |
| Build | Vite |
| Back-end | FastAPI (Python) — repositório separado |
| Banco de dados | PostgreSQL (Neon) |

---

## Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- npm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/nathantl1/Dashboard-Administrativo-InfraTL.git

# Entre na pasta
cd Dashboard-Administrativo-InfraTL

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O front-end estará disponível em `http://localhost:5173`.

---

## Integração com o Back-end

O front-end consome a API FastAPI.

Para rodar o back-end localmente, consulte o repositório da API e siga as instruções de configuração. A comunicação é feita via Axios, configurada em `src/api.ts`, com injeção automática do token JWT em todas as requisições autenticadas.

### Endpoints utilizados

| Método | Rota | Descrição |
|--------|------|-----------|
| `POST` | `/auth/signup` | Cadastro de usuário |
| `POST` | `/auth/login` | Login e geração de token |
| `GET` | `/auth/perfil` | Dados do usuário logado |
| `POST` | `/ocorrencia/cadastrar` | Registro de nova ocorrência |


---

## Equipe

Projeto (frontend) desenvolvido em grupo pelos alunos:
- Gabriel Marques
- Nathan
- Ryan Hadas
- Lucas Volpato


