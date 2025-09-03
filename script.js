// Navegação suave
document.addEventListener('DOMContentLoaded', function() {
    // Navegação suave para links internos
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                }); 
            }
        });
    });

    const btn = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const contactBtn = document.querySelector('.contact-button');

btn.addEventListener('click', () => {
  navList.classList.toggle('open');
  contactBtn.classList.toggle('open');
});


    // Funcionalidade dos botões
    const planButtons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-select-plan');
    
    planButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent.includes('Ver Nossos Planos')) {
                document.querySelector('#plans').scrollIntoView({
                    behavior: 'smooth'
                });
            } else if (this.textContent.includes('Agendar Consultoria') || this.textContent.includes('Fale Conosco')) {
                document.querySelector('#contact').scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Funcionalidade do formulário
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        const message = this.querySelector('textarea').value;
        
        if (name && email && message) {
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            this.reset();
        } else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }
    });
});


