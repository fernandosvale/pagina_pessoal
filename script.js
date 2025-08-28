/**
 * Script principal da página pessoal
 * Implementado seguindo as melhores práticas de desenvolvimento JavaScript
 * 
 * @author Fernando Silva Vale
 * @version 2.0.0
 */

// ============================================================================
// Configurações e Constantes
// ============================================================================

const CONFIG = {
    THEME_STORAGE_KEY: 'site-theme',
    FORM_VALIDATION: {
        MIN_NAME_LENGTH: 2,
        MAX_NAME_LENGTH: 50,
        MAX_MESSAGE_LENGTH: 500,
        EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    ANIMATION: {
        SCROLL_OFFSET: 100,
        DEBOUNCE_DELAY: 150
    }
};

// ============================================================================
// Gerenciamento de Tema
// ============================================================================

class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.body = document.body;
        this.currentTheme = this.getStoredTheme() || this.getPreferredTheme();
        
        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
        this.setupEventListeners();
        this.updateToggleButton();
    }

    getStoredTheme() {
        return localStorage.getItem(CONFIG.THEME_STORAGE_KEY);
    }

    getPreferredTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    applyTheme(theme) {
        this.body.setAttribute('data-theme', theme);
        this.currentTheme = theme;
        localStorage.setItem(CONFIG.THEME_STORAGE_KEY, theme);
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
        this.updateToggleButton();
    }

    updateToggleButton() {
        const icon = this.themeToggle.querySelector('.theme-toggle__icon');
        const text = this.themeToggle.querySelector('.theme-toggle__text');
        
        if (this.currentTheme === 'dark') {
            icon.textContent = '☀️';
            text.textContent = 'Modo Claro';
            this.themeToggle.setAttribute('aria-pressed', 'true');
        } else {
            icon.textContent = '🌙';
            text.textContent = 'Modo Escuro';
            this.themeToggle.setAttribute('aria-pressed', 'false');
        }
    }

    setupEventListeners() {
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
        this.themeToggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.toggleTheme();
            }
        });
    }
}

// ============================================================================
// Validação de Formulário
// ============================================================================

class FormValidator {
    constructor() {
        this.form = document.querySelector('.contact-form');
        this.fields = {
            nome: document.getElementById('nome'),
            email: document.getElementById('email'),
            mensagem: document.getElementById('mensagem')
        };
        this.errors = {
            nome: document.getElementById('nome-error'),
            email: document.getElementById('email-error'),
            mensagem: document.getElementById('mensagem-error')
        };
        this.counter = document.getElementById('mensagem-counter');
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupCharacterCounter();
    }

    setupEventListeners() {
        // Validação em tempo real
        Object.keys(this.fields).forEach(fieldName => {
            const field = this.fields[fieldName];
            const errorElement = this.errors[fieldName];
            
            field.addEventListener('blur', () => this.validateField(fieldName));
            field.addEventListener('input', () => this.clearFieldError(fieldName));
        });

        // Submissão do formulário
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    setupCharacterCounter() {
        this.fields.mensagem.addEventListener('input', () => {
            const currentLength = this.fields.mensagem.value.length;
            const maxLength = CONFIG.FORM_VALIDATION.MAX_MESSAGE_LENGTH;
            
            this.counter.textContent = `${currentLength}/${maxLength}`;
            
            // Mudança de cor baseada no limite
            if (currentLength > maxLength * 0.9) {
                this.counter.style.color = 'var(--color-warning)';
            } else if (currentLength > maxLength * 0.8) {
                this.counter.style.color = 'var(--color-text-muted)';
            } else {
                this.counter.style.color = 'var(--color-text-muted)';
            }
        });
    }

    validateField(fieldName) {
        const field = this.fields[fieldName];
        const value = field.value.trim();
        const errorElement = this.errors[fieldName];
        
        let isValid = true;
        let errorMessage = '';

        switch (fieldName) {
            case 'nome':
                if (!value) {
                    errorMessage = 'Nome é obrigatório';
                    isValid = false;
                } else if (value.length < CONFIG.FORM_VALIDATION.MIN_NAME_LENGTH) {
                    errorMessage = `Nome deve ter pelo menos ${CONFIG.FORM_VALIDATION.MIN_NAME_LENGTH} caracteres`;
                    isValid = false;
                } else if (value.length > CONFIG.FORM_VALIDATION.MAX_NAME_LENGTH) {
                    errorMessage = `Nome deve ter no máximo ${CONFIG.FORM_VALIDATION.MAX_NAME_LENGTH} caracteres`;
                    isValid = false;
                }
                break;

            case 'email':
                if (!value) {
                    errorMessage = 'Email é obrigatório';
                    isValid = false;
                } else if (!CONFIG.FORM_VALIDATION.EMAIL_REGEX.test(value)) {
                    errorMessage = 'Email deve ter um formato válido';
                    isValid = false;
                }
                break;

            case 'mensagem':
                if (!value) {
                    errorMessage = 'Mensagem é obrigatória';
                    isValid = false;
                } else if (value.length > CONFIG.FORM_VALIDATION.MAX_MESSAGE_LENGTH) {
                    errorMessage = `Mensagem deve ter no máximo ${CONFIG.FORM_VALIDATION.MAX_MESSAGE_LENGTH} caracteres`;
                    isValid = false;
                }
                break;
        }

        if (!isValid) {
            this.showFieldError(fieldName, errorMessage);
            field.classList.add('form-input--error');
        } else {
            this.clearFieldError(fieldName);
            field.classList.remove('form-input--error');
        }

        return isValid;
    }

    showFieldError(fieldName, message) {
        const errorElement = this.errors[fieldName];
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    clearFieldError(fieldName) {
        const errorElement = this.errors[fieldName];
        errorElement.textContent = '';
        errorElement.style.display = 'none';
        this.fields[fieldName].classList.remove('form-input--error');
    }

    validateForm() {
        let isValid = true;
        
        Object.keys(this.fields).forEach(fieldName => {
            if (!this.validateField(fieldName)) {
                isValid = false;
            }
        });

        return isValid;
    }

    async handleSubmit(event) {
        event.preventDefault();
        
        if (!this.validateForm()) {
            window.App.notifications.show('Por favor, corrija os erros no formulário.', 'error');
            return;
        }

        try {
            // Simulação de envio (substitua por sua lógica real)
            await this.simulateFormSubmission();
            
            window.App.notifications.show('Mensagem enviada com sucesso!', 'success');
            this.resetForm();
            
        } catch (error) {
            window.App.notifications.show('Erro ao enviar mensagem. Tente novamente.', 'error');
            console.error('Erro no formulário:', error);
        }
    }

    async simulateFormSubmission() {
        // Simula um delay de rede
        return new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });
    }

    resetForm() {
        Object.values(this.fields).forEach(field => {
            field.value = '';
            field.classList.remove('form-input--error');
        });
        
        Object.values(this.errors).forEach(error => {
            error.textContent = '';
            error.style.display = 'none';
        });
        
        this.counter.textContent = '0/500';
        this.counter.style.color = 'var(--color-text-muted)';
    }
}

// ============================================================================
// Sistema de Notificações
// ============================================================================

class NotificationSystem {
    constructor() {
        this.container = this.createContainer();
    }

    createContainer() {
        const container = document.createElement('div');
        container.className = 'notification-container';
        container.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            display: flex;
            flex-direction: column;
            gap: 10px;
        `;
        document.body.appendChild(container);
        return container;
    }

    show(message, type = 'info', duration = 5000) {
        const notification = this.createNotification(message, type);
        this.container.appendChild(notification);

        // Animação de entrada
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
            notification.style.opacity = '1';
        }, 100);

        // Auto-remoção
        setTimeout(() => {
            this.hide(notification);
        }, duration);

        return notification;
    }

    createNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        
        const colors = {
            success: 'var(--color-success)',
            error: 'var(--color-error)',
            warning: 'var(--color-warning)',
            info: 'var(--color-primary)'
        };

        notification.style.cssText = `
            background: ${colors[type] || colors.info};
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            transform: translateX(100%);
            opacity: 0;
            transition: all 0.3s ease;
            max-width: 300px;
            word-wrap: break-word;
        `;

        notification.textContent = message;
        
        // Botão de fechar
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '×';
        closeBtn.style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 20px;
            cursor: pointer;
            margin-left: 10px;
            float: right;
        `;
        closeBtn.addEventListener('click', () => this.hide(notification));
        
        notification.appendChild(closeBtn);
        
        return notification;
    }

    hide(notification) {
        notification.style.transform = 'translateX(100%)';
        notification.style.opacity = '0';
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }
}

// ============================================================================
// Navegação Suave e Scroll
// ============================================================================

class SmoothScroller {
    constructor() {
        this.init();
    }

    init() {
        this.setupSmoothScroll();
        this.setupScrollEffects();
    }

    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    setupScrollEffects() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observa elementos para animação
        document.querySelectorAll('.skill-card, .section').forEach(el => {
            observer.observe(el);
        });
    }
}

// ============================================================================
// Utilitários
// ============================================================================

class Utils {
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// ============================================================================
// Inicialização da Aplicação
// ============================================================================

class App {
    constructor() {
        this.notifications = new NotificationSystem();
        this.themeManager = new ThemeManager();
        this.formValidator = new FormValidator();
        this.smoothScroller = new SmoothScroller();
        
        this.init();
    }

    init() {
        // Aguarda o DOM estar completamente carregado
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupApp());
        } else {
            this.setupApp();
        }
    }

    setupApp() {
        // Adiciona classe para indicar que o JavaScript está funcionando
        document.body.classList.add('js-enabled');
        
        // Inicializa funcionalidades adicionais
        this.setupAccessibility();
        this.setupPerformanceOptimizations();
        
        console.log('🚀 Aplicação inicializada com sucesso!');
    }

    setupAccessibility() {
        // Melhora navegação por teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                document.body.classList.add('keyboard-navigation');
            }
        });

        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        });

        // Skip link funcionalidade
        const skipLink = document.querySelector('.skip-link');
        if (skipLink) {
            skipLink.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(skipLink.getAttribute('href'));
                if (target) {
                    target.focus();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    }

    setupPerformanceOptimizations() {
        // Lazy loading para imagens
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }

        // Preload de recursos críticos
        this.preloadCriticalResources();
    }

    preloadCriticalResources() {
        const criticalResources = [
            'images/fotoperfil.jpg'
        ];

        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = resource;
            document.head.appendChild(link);
        });
    }
}

// ============================================================================
// Inicialização
// ============================================================================

// Inicia a aplicação quando o script for carregado
const app = new App();

// Exporta para uso global se necessário
window.App = app;