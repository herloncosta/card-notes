# 📓 **Anotaê** - Anotações de Texto e Voz

**Anotaê** é uma aplicação web prática e intuitiva que permite aos usuários fazer anotações de forma ágil, utilizando tanto texto digitado quanto comandos de voz. Ideal para quem está estudando, trabalhando ou planejando atividades e precisa registrar informações rapidamente. A aplicação oferece recursos de filtragem, armazenamento local e exclusão de notas a qualquer momento, para uma experiência flexível e organizada.

Acesse a versão online do **Anotaê**: [anotae.netlify.app](https://anotae.netlify.app)

## 🚀 **Tecnologias Utilizadas**

- **React**: Biblioteca JavaScript para construção da interface do usuário.
- **TypeScript**: Superset do JavaScript para garantir maior robustez e tipagem estática.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e eficiente.
- **LocalStorage**: Armazenamento local para salvar as notas, garantindo persistência entre recarregamentos da página.
- **Sonner**: Biblioteca de notificações para informar o usuário sobre ações (como sucesso ou erro).

## 📝 **Funcionalidades**

- **Anotações por Texto**: O usuário pode digitar suas notas manualmente.
- **Anotações por Voz**: O usuário pode gravar suas notas por voz, e o texto será transcrito automaticamente.
- **Filtragem de Notas**: As notas podem ser filtradas por palavras-chave, tornando mais fácil encontrar o conteúdo desejado.
- **Exclusão de Notas**: O usuário pode excluir notas que não são mais necessárias.
- **Notificações**: Notificações de sucesso ou erro, informando o usuário sobre o status das ações realizadas.

## 📦 **Instalação**

1. Clone o repositório para sua máquina local:
   ```bash
   git clone https://github.com/seu-usuario/anotae.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd anotae
   ```

3. Instale as dependências do projeto:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

5. Abra o navegador e acesse [http://localhost:3000](http://localhost:3000).

## 💻 **Como Usar**

### 1. **Criar Notas**
- Para criar uma nota, você pode digitar diretamente no campo de texto ou utilizar a funcionalidade de gravação de voz.
  
### 2. **Gravação de Voz**
- Clique no ícone de microfone para começar a gravar sua voz. O sistema transcreve automaticamente o que você fala para texto.

### 3. **Filtragem de Notas**
- Utilize a barra de pesquisa para filtrar suas notas com base em palavras-chave.

### 4. **Excluir Notas**
- Para excluir uma nota, basta clicar no ícone de lixeira ao lado da nota.

### 5. **Notificações**
- A cada ação importante, como o início ou fim da gravação, ou quando uma nota é excluída, o usuário recebe uma notificação visual.

## 🔧 **Tecnologias e Bibliotecas**

- **React**: Para a construção da interface do usuário.
- **TypeScript**: Para fornecer tipagem estática e maior segurança no código.
- **Tailwind CSS**: Para uma estilização eficiente e responsiva da interface.
- **LocalStorage**: Para salvar as notas localmente no navegador, sem necessidade de back-end.
- **Sonner**: Para fornecer notificações de sucesso ou erro em tempo real.

## 🌱 **Como Contribuir**

1. Faça o **fork** deste repositório.
2. Crie uma nova branch (`git checkout -b feature/nome-da-feature`).
3. Faça as alterações necessárias e **commit** (`git commit -am 'Adicionando nova feature'`).
4. Envie para o seu repositório (`git push origin feature/nome-da-feature`).
5. Crie um **Pull Request**.

## 📄 **Licença**

Este projeto está licenciado sob a [MIT License](LICENSE).