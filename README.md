# ✅ Gerenciador de Tarefas para Desenvolvedores

Este projeto é um aplicativo simples de gerenciamento de tarefas, criado para fins acadêmicos e para demonstrar o uso de Node.js com TypeScript, Prisma ORM e banco de dados MySQL.

O usuário pode:
- Criar tarefas ✅
- Listar tarefas 📋
- Editar tarefas ✏️
- Marcar como concluída ✔️
- Excluir tarefas ❌

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Funcionalidade |
|-----------|----------------|
| Node.js | Backend da aplicação |
| TypeScript | Tipagem estática e melhor organização |
| Express | Construção da API REST |
| Prisma ORM | Acesso ao MySQL e modelagem |
| MySQL | Banco de dados |
| HTML + CSS + JS | Interface simples para teste |

---

## 📂 Estrutura do Projeto

GerenciadorT/
├─ src/
│ ├─ controllers/
│ ├─ routes/
│ ├─ services/
│ ├─ server.ts
├─ prisma/
│ ├─ schema.prisma
├─ node_modules/
├─ .env
├─ package.json
├─ tsconfig.json
└─ Plano_Qualidade.md

yaml
Copiar código

---

## 🔧 Configuração do Banco de Dados

Crie um banco no MySQL:

```sql
CREATE DATABASE tarefasdb;
Edite o arquivo .env com suas credenciais:

ini
Copiar código
DATABASE_URL="mysql://root:SENHA@localhost:3306/tarefasdb"
PORT=3000
⚠️ Substitua SENHA pela sua senha real do MySQL.

▶️ Rodando o Projeto
Instale as dependências:

bash
Copiar código
npm install
Execute as migrações do banco:

bash
Copiar código
npx prisma migrate dev
Gere o cliente Prisma:

bash
Copiar código
npx prisma generate
Execute o servidor:

bash
Copiar código
npm run dev
Acesse no navegador:

👉 http://localhost:3000

✅ API Endpoints
Método	Rota	Descrição
GET	/tasks	Lista todas as tarefas
POST	/tasks	Cria uma tarefa
PUT	/tasks/:id	Atualiza uma tarefa
DELETE	/tasks/:id	Remove uma tarefa

📌 Funcionalidades Futuras
Autenticação de usuário

Categorias e prioridades

Deploy online

Testes automatizados

👨‍💻 Autor
Thiago Anastácio da Silva Resende
📌 Projeto acadêmico para disciplina de Qualidade de Software
