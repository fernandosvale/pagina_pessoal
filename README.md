# 🚀 Página Pessoal - Fernando Silva Vale

Uma página pessoal moderna e responsiva, construída seguindo as melhores práticas de desenvolvimento web.

## ✨ Características

- **Design Responsivo**: Mobile-first com breakpoints otimizados
- **Tema Escuro/Claro**: Alternância automática com persistência local
- **Acessibilidade**: Implementação completa de WCAG 2.1
- **Performance**: Otimizações de carregamento e renderização
- **Validação Robusta**: Formulário com validação em tempo real
- **Animações Suaves**: Transições e efeitos visuais modernos
- **SEO Otimizado**: Meta tags e estrutura semântica

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Variáveis CSS, Grid, Flexbox e animações
- **JavaScript ES6+**: Classes, módulos e APIs modernas
- **Metodologia BEM**: Organização clara do CSS
- **Google Fonts**: Tipografia Inter para melhor legibilidade

## 📱 Responsividade

O site é totalmente responsivo com os seguintes breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🎨 Sistema de Temas

- **Tema Claro**: Cores suaves e legíveis para uso diurno
- **Tema Escuro**: Cores escuras para uso noturno
- **Detecção Automática**: Respeita preferências do sistema
- **Persistência**: Lembra da escolha do usuário

## ♿ Acessibilidade

- **Navegação por Teclado**: Suporte completo para navegação sem mouse
- **Screen Readers**: Estrutura semântica e ARIA labels
- **Contraste Alto**: Suporte para preferências de alto contraste
- **Redução de Movimento**: Respeita preferências de acessibilidade
- **Skip Links**: Navegação rápida para o conteúdo principal

## 📝 Formulário de Contato

- **Validação em Tempo Real**: Feedback imediato para o usuário
- **Validações Robustas**: Nome, email e mensagem com regras específicas
- **Contador de Caracteres**: Visualização do limite de mensagem
- **Sistema de Notificações**: Feedback visual para ações do usuário
- **Prevenção de Spam**: Validações client-side e server-side

## 🚀 Performance

- **Lazy Loading**: Imagens carregadas sob demanda
- **Preload de Recursos**: Carregamento otimizado de arquivos críticos
- **Debounce/Throttle**: Otimização de eventos de scroll e resize
- **Intersection Observer**: Animações baseadas em visibilidade
- **CSS Variables**: Redução de reflows e repaints

## 📁 Estrutura do Projeto

```
pagina_pessoal/
├── index.html          # Estrutura HTML semântica
├── style.css           # Estilos CSS organizados com BEM
├── script.js           # JavaScript modular e organizado
├── images/             # Imagens e recursos visuais
│   └── fotoperfil.jpg  # Foto de perfil
├── README.md           # Documentação do projeto
└── LICENSE             # Licença do projeto
```

## 🎯 Funcionalidades Principais

### 1. **Gerenciamento de Tema**
- Alternância automática entre temas claro/escuro
- Persistência da escolha do usuário
- Detecção de preferências do sistema

### 2. **Validação de Formulário**
- Validação em tempo real para todos os campos
- Mensagens de erro específicas e acessíveis
- Contador de caracteres com feedback visual

### 3. **Navegação Suave**
- Scroll suave entre seções
- Header fixo com navegação responsiva
- Animações baseadas em scroll

### 4. **Sistema de Notificações**
- Notificações toast para feedback do usuário
- Diferentes tipos: sucesso, erro, aviso, info
- Auto-remoção com animações suaves

## 🔧 Como Usar

### Instalação Local
1. Clone ou baixe o projeto
2. Abra o arquivo `index.html` em um navegador moderno
3. Para desenvolvimento, use um servidor local (recomendado)

### Servidor Local (Recomendado)
```bash
# Python 3
python -m http.server 8000

# Node.js (com http-server)
npx http-server

# PHP
php -S localhost:8000
```

### Personalização
1. **Conteúdo**: Edite o arquivo `index.html`
2. **Estilos**: Modifique `style.css` seguindo a metodologia BEM
3. **Funcionalidades**: Ajuste `script.js` conforme necessário
4. **Imagens**: Substitua arquivos na pasta `images/`

## 🎨 Personalização de Cores

As cores são definidas através de variáveis CSS no arquivo `style.css`:

```css
:root {
    --color-primary: #2563eb;        /* Cor principal */
    --color-secondary: #f59e0b;      /* Cor secundária */
    --color-accent: #10b981;         /* Cor de destaque */
    --color-bg-primary: #ffffff;     /* Fundo principal */
    --color-text-primary: #1e293b;   /* Texto principal */
}
```

## 📱 Compatibilidade

- **Navegadores Modernos**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Dispositivos**: Desktop, tablet e mobile
- **Funcionalidades**: Suporte a CSS Grid, Flexbox, CSS Variables
- **JavaScript**: ES6+ com fallbacks para funcionalidades básicas

## 🚀 Melhorias Futuras

- [ ] Integração com backend para formulário funcional
- [ ] Blog integrado
- [ ] Portfolio de projetos
- [ ] Sistema de comentários
- [ ] Analytics e métricas
- [ ] PWA (Progressive Web App)
- [ ] Testes automatizados
- [ ] CI/CD pipeline

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Fernando Silva Vale**
- Estudante de Análise e Desenvolvimento de Sistemas
- Foco em desenvolvimento web e análise de dados
- Fortaleza, CE - Brasil

## 📞 Contato

- **GitHub**: [@fernandosvale](https://github.com/fernandosvale)
- **LinkedIn**: [Fernando Silva Vale](https://www.linkedin.com/in/fernandosilvavale/)

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
