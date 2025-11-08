# 📋 PLANO DE GERENCIAMENTO DA QUALIDADE  
**Nome do Projeto:** Aplicativo de Gerenciamento de Tarefas  
**Equipe:** Thiago Anastácio da Silva Resende  

---

## 1. OBJETIVOS DE QUALIDADE  
**Definição:** Metas claras e mensuráveis que o projeto deve atingir.

- Garantir que todas as operações de CRUD (criar, listar, atualizar e excluir tarefas) funcionem corretamente.  
- Assegurar que o sistema seja estável e responda rapidamente às solicitações do usuário.  
- Oferecer uma interface simples e intuitiva, que facilite a organização das tarefas diárias.  

---

## 2. REQUISITOS DE QUALIDADE  
**Definição:** Especificações técnicas e funcionais que o software deve atender.

**Funcionalidade:**  
O sistema deve permitir que o usuário crie, edite, marque como concluída e exclua tarefas.  

**Desempenho:**  
O tempo de resposta das requisições ao servidor deve ser inferior a 2 segundos, mesmo com múltiplas tarefas cadastradas.  

**Segurança:**  
A aplicação deve proteger o acesso ao banco de dados e utilizar variáveis de ambiente (.env) para dados sensíveis.  

**Usabilidade:**  
A interface deve ser clara, responsiva e fácil de entender, permitindo que qualquer usuário utilize o sistema sem treinamento prévio.  

---

## 3. PAPÉIS E RESPONSABILIDADES  

**Gerente de Projeto:** Thiago Anastácio da Silva Resende  
**Desenvolvedores:** Thiago Anastácio da Silva Resende  
**Equipe de QA:** Responsável por testar todas as funcionalidades antes das entregas.  
**Designer:** Responsável por definir a aparência visual da interface e experiência do usuário.  

---

## 4. PROCESSOS DE QUALIDADE  

- Implementação de revisões de código antes da entrega.  
- Execução de testes automatizados após cada nova funcionalidade.  
- Verificação manual de interface e usabilidade a cada nova versão.  

---

## 5. MÉTRICAS DE QUALIDADE  

**Cobertura de testes:**  
Pelo menos 80% do código deve ser coberto por testes unitários e de integração.  

**Taxa de defeitos:**  
Menos de 5% de falhas críticas identificadas após a entrega.  

**Tempo de correção:**  
Correção de erros críticos em até 24 horas após identificação.  

---

## 6. PLANO DE TESTES  

**Testes unitários:**  
Verificar o funcionamento individual das funções (ex: criação e atualização de tarefas).  

**Testes de integração:**  
Testar a comunicação entre backend (Node.js/Prisma) e o banco de dados MySQL.  

**Testes funcionais:**  
Validar o fluxo completo — adicionar, editar, concluir e excluir tarefas — na interface.  

**Testes de desempenho:**  
Simular múltiplas requisições para avaliar o tempo médio de resposta do servidor.  

---

## 7. FERRAMENTAS DE QUALIDADE  

- **Prisma ORM** → gerenciamento e consistência do banco de dados.  
- **Postman / Insomnia** → testes de rotas e APIs REST.  
- **Jest** → execução de testes automatizados (unitários e integração).  
- **TypeScript** → garantia de tipagem e redução de erros em tempo de desenvolvimento.  

---

## 8. AUDITORIAS E REVISÕES  

- Revisões semanais de código e padronização de commits.  
- Revisão de usabilidade e feedback de interface antes de novas versões.  

---

## 9. TREINAMENTO E CAPACITAÇÃO  

- Capacitação em boas práticas de desenvolvimento com Node.js e TypeScript.  
- Treinamento em uso de ferramentas de versionamento (Git/GitHub).  

---

## 10. GERENCIAMENTO DE RISCOS  

**Risco 1:** Falha de conexão com o banco de dados MySQL.  
**Mitigação:** Implementar reconexão automática e mensagens de erro adequadas.  

**Risco 2:** Erros não tratados no backend.  
**Mitigação:** Implementar middleware global de tratamento de erros no Express.  

---

## 11. DOCUMENTAÇÃO  

- Documento README detalhando instalação, execução e tecnologias utilizadas.  
- Diagrama UML representando casos de uso e fluxos principais do sistema.  

---

## 12. FEEDBACK E MELHORIA CONTÍNUA  

- Coletar feedback de usuários após cada versão para identificar melhorias.  
- Reavaliar processos de desenvolvimento e testes a cada nova entrega.  

---

📌 **Conclusão:**  
Este plano garante que o Aplicativo de Gerenciamento de Tarefas seja desenvolvido com qualidade, estabilidade e foco na experiência do usuário, utilizando práticas modernas e ferramentas adequadas de controle e validação.
