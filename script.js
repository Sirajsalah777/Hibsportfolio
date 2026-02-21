/* ============================================
   HIBA LAHJOU — DIGITAL MARKETING PORTFOLIO
   Animations & Interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ---------- Localization ----------
    const translations = {
        en: {
            nav_about: "About",
            nav_skills: "Skills",
            nav_projects: "Projects",
            nav_contact: "Contact",
            hero_tag: "Digital Marketing Student",
            hero_first_name: "Hiba",
            hero_last_name: "Lahjou",
            hero_subtitle: "Crafting digital strategies that connect brands with their audience through data-driven creativity.",
            hero_btn_work: "View My Work",
            hero_btn_contact: "Get in Touch",
            hero_scroll: "Scroll",
            about_title_1: "About",
            about_title_2: "Me",
            about_lead: "I'm a passionate <strong>Digital Marketing student</strong> who thrives at the intersection of creativity and analytics.",
            about_text_1: "With a keen eye for trends and a love for data, I specialize in building comprehensive digital strategies that drive real results. From crafting compelling social media campaigns to optimizing SEO performance, I bring a strategic mindset to every project.",
            about_text_2: "I believe that great marketing tells a story — and every brand has a unique one waiting to be told.",
            skills_title_1: "My",
            skills_title_2: "Skills",
            skill_sm_title: "Social Media Management",
            skill_sm_desc: "Content planning, community management, and platform-specific strategies across Instagram, Facebook, and TikTok.",
            skill_content_title: "Content Creation",
            skill_content_desc: "Copywriting and visual storytelling to craft compelling brand narratives and engaging digital assets.",
            skill_seo_title: "SEO Basics",
            skill_seo_desc: "Understanding search algorithms, keyword optimization, and on-page technical fundamentals.",
            skill_canva_title: "Canva & Visual Design",
            skill_canva_desc: "Designing high-quality visual content using Canva and other creative tools to enhance brand aesthetic.",
            skill_comm_title: "Communication",
            skill_comm_desc: "Effective verbal and written communication, essential for client relations and teamwork.",
            skill_org_title: "Organizational Skills",
            skill_org_desc: "Strong time management and project organization talents to ensure efficient and timely delivery.",
            projects_title_1: "My",
            projects_title_2: "Projects",
            project_view_btn: "View Project →",
            project_ifrane_survey_title: "ISMAGI BDE — Ifrane Survey Post",
            project_ifrane_survey_desc: "Designed an interactive survey post for ISMAGI BDE's ski trip to Ifrane, featuring mountain visuals and a QR code for student feedback.",
            project_ifrane_snow_title: "ISMAGI BDE — Ifrane Snow Trip",
            project_ifrane_snow_desc: "Created a visually stunning promotional poster for ISMAGI BDE's \"Journée Blanche\" snow trip to Ifrane, complete with pricing and photo collage.",
            project_can_live_title: "ISMAGI BDE — CAN Live Viewing",
            project_can_live_desc: "Created promotional material for ISMAGI BDE's live CAN football viewing event with bold typography, Moroccan flags, and an energetic stadium atmosphere.",
            project_masquerade_title: "ISMAGI BDE — Masquerade Ball",
            project_masquerade_desc: "Designed a cinematic event poster for ISMAGI BDE's \"Un Bal masqué\" New Year's party, featuring dramatic lighting and elegant masquerade imagery.",
            project_cherry_promo_title: "Cherry Cream — Promo Post",
            project_cherry_promo_desc: "Designed a vibrant promotional social media post for Cherry Cream's \"Buy 2 Get 1 Free\" ice cream campaign with bold typography and appetizing visuals.",
            project_cherry_identity_title: "Cherry Cream — Brand Identity",
            project_cherry_identity_desc: "Created the complete brand identity and logo for Cherry Cream, a playful ice cream brand featuring soft pastels and a cherry motif.",
            project_cherry_variant_title: "Cherry Cream — Campaign Variant",
            project_cherry_variant_desc: "Developed an alternative framed version of the Cherry Cream promo post for cross-platform campaign consistency and A/B testing.",
            tag_social_media: "Social Media",
            tag_engagement: "Engagement",
            tag_event_marketing: "Event Marketing",
            tag_poster_design: "Poster Design",
            tag_sports: "Sports",
            tag_event_design: "Event Design",
            tag_poster: "Poster",
            tag_graphic_design: "Graphic Design",
            tag_branding: "Branding",
            tag_logo_design: "Logo Design",
            tag_content_design: "Content Design",
            tag_campaign: "Campaign",
            contact_title_1: "Let's",
            contact_title_2: "Connect",
            contact_lead: "Have a project in mind or want to collaborate? I'd love to hear from you.",
            contact_whatsapp_block: "WhatsApp",
            contact_email_block: "Email",
            footer_rights: "© 2026 Hiba Lahjou. All rights reserved.",
            aria_nav_toggle: "Toggle navigation",
            aria_whatsapp: "Chat on WhatsApp",
            aria_instagram: "Visit My Instagram",
            aria_twitter: "Visit My Twitter",
            alt_hero_portrait: "Portrait of Hiba Lahjou",
            alt_project_ifrane_survey: "ISMAGI BDE Ifrane Ski Trip Survey Post",
            alt_project_ifrane_snow: "ISMAGI BDE Ifrane Snow Day Poster",
            alt_project_can_live: "ISMAGI BDE CAN Live Stream Event",
            alt_project_masquerade: "ISMAGI BDE Masquerade Ball Event",
            alt_project_cherry_promo: "Cherry Cream Promotional Post",
            alt_project_cherry_identity: "Cherry Cream Brand Logo",
            alt_project_cherry_variant: "Cherry Cream Campaign Design",
            project_ramadan_title: "ISMAGI BDE — Ramadan Panier",
            project_ramadan_desc: "Designed promotional material for the 'Panier Ramadan' charity initiative, encouraging donations and community participation.",
            alt_project_ramadan: "Ramadan Panier Charity Campaign Poster",
            tag_charity: "Charity",
            tag_social_impact: "Social Impact"
        },
        fr: {
            nav_about: "À Propos",
            nav_skills: "Compétences",
            nav_projects: "Projets",
            nav_contact: "Contact",
            hero_tag: "Étudiante en Marketing Digital",
            hero_first_name: "Hiba",
            hero_last_name: "Lahjou",
            hero_subtitle: "Élaborer des stratégies numériques qui connectent les marques avec leur public grâce à une créativité axée sur les données.",
            hero_btn_work: "Voir Mes Projets",
            hero_btn_contact: "Me Contacter",
            hero_scroll: "Défiler",
            about_title_1: "À Propos de",
            about_title_2: "Moi",
            about_lead: "Je suis une <strong>étudiante en Marketing Digital</strong> passionnée qui s'épanouit à l'intersection de la créativité et de l'analyse.",
            about_text_1: "Avec un œil attentif aux tendances et un amour pour les données, je me spécialise dans la construction de stratégies numériques complètes. De la création de campagnes médias sociaux convaincantes à l'optimisation du référencement (SEO), j'apporte un esprit stratégique à chaque projet.",
            about_text_2: "Je crois qu'un excellent marketing raconte une histoire — et chaque marque en a une unique qui attend d'être racontée.",
            skills_title_1: "Mes",
            skills_title_2: "Compétences",
            skill_sm_title: "Gestion des Médias Sociaux",
            skill_sm_desc: "Planification de contenu, gestion de communauté et stratégies spécifiques sur Instagram, Facebook et TikTok.",
            skill_content_title: "Création de Contenu",
            skill_content_desc: "Rédaction et narration visuelle pour élaborer des récits de marque convaincants.",
            skill_seo_title: "Bases du SEO",
            skill_seo_desc: "Compréhension des algorithmes de recherche, optimisation des mots-clés et principes techniques du SEO.",
            skill_canva_title: "Canva & Design Visuel",
            skill_canva_desc: "Conception de contenu visuel de haute qualité à l'aide de Canva pour améliorer l'esthétique de la marque.",
            skill_comm_title: "Communication",
            skill_comm_desc: "Communication verbale et écrite efficace, essentielle pour les relations clients et le travail d'équipe.",
            skill_org_title: "Sens de l'Organisation",
            skill_org_desc: "Fortes capacités en gestion du temps et organisation de projets pour assurer une livraison efficace.",
            projects_title_1: "Mes",
            projects_title_2: "Projets",
            project_view_btn: "Voir le Projet →",
            project_ifrane_survey_title: "ISMAGI BDE — Sondage Ifrane",
            project_ifrane_survey_desc: "Publication interactive pour le voyage de ski de l'ISMAGI BDE à Ifrane, avec code QR pour les retours étudiants.",
            project_ifrane_snow_title: "ISMAGI BDE — Voyage Ifrane",
            project_ifrane_snow_desc: "Affiche promotionnelle pour le voyage \"Journée Blanche\" à Ifrane, avec tarifs et collage photo.",
            project_can_live_title: "ISMAGI BDE — Diffusion CAN",
            project_can_live_desc: "Matériel promotionnel pour la diffusion en direct de la CAN avec une typographie audacieuse et une ambiance de stade.",
            project_masquerade_title: "ISMAGI BDE — Bal Masqué",
            project_masquerade_desc: "Conception d'une affiche cinématique pour la soirée du Nouvel An \"Un Bal masqué\" de l'ISMAGI BDE.",
            project_cherry_promo_title: "Cherry Cream — Promo",
            project_cherry_promo_desc: "Conception d'une publication vibrante pour la campagne \"2 Achetés 1 Offert\" de la marque Cherry Cream.",
            project_cherry_identity_title: "Cherry Cream — Identité Visuelle",
            project_cherry_identity_desc: "Création de l'identité de marque complète et du logo pour Cherry Cream, une marque de glace ludique.",
            project_cherry_variant_title: "Cherry Cream — Variantes",
            project_cherry_variant_desc: "Développement d'une version alternative de la publication promo pour la cohérence de la campagne.",
            tag_social_media: "Médias Sociaux",
            tag_engagement: "Engagement",
            tag_event_marketing: "Marketing d'Événements",
            tag_poster_design: "Design d'Affiches",
            tag_sports: "Sports",
            tag_event_design: "Design d'Événements",
            tag_poster: "Affiche",
            tag_graphic_design: "Design Graphique",
            tag_branding: "Branding",
            tag_logo_design: "Design de Logo",
            tag_content_design: "Design de Contenu",
            tag_campaign: "Campagne",
            contact_title_1: "Parlons",
            contact_title_2: "Ensemble",
            contact_lead: "Vous avez un projet en tête ? J'aimerais beaucoup en discuter avec vous.",
            contact_whatsapp_block: "WhatsApp",
            contact_email_block: "Email",
            footer_rights: "© 2026 Hiba Lahjou. Tous droits réservés.",
            aria_nav_toggle: "Ouvrir le menu",
            aria_whatsapp: "Discuter sur WhatsApp",
            aria_instagram: "Visitez mon Instagram",
            aria_twitter: "Visitez mon Twitter",
            alt_hero_portrait: "Portrait de Hiba Lahjou",
            alt_project_ifrane_survey: "Publication Sondage Voyage Ifrane ISMAGI BDE",
            alt_project_ifrane_snow: "Affiche Journée Blanche Ifrane ISMAGI BDE",
            alt_project_can_live: "Événement Diffusion en Direct CAN ISMAGI BDE",
            alt_project_masquerade: "Événement Bal Masqué ISMAGI BDE",
            alt_project_cherry_promo: "Publication Promotionnelle Cherry Cream",
            alt_project_cherry_identity: "Logo de la marque Cherry Cream",
            alt_project_cherry_variant: "Design de campagne Cherry Cream",
            project_ramadan_title: "ISMAGI BDE — Panier Ramadan",
            project_ramadan_desc: "Conception de matériel promotionnel pour l'initiative solidaire 'Panier Ramadan', encourageant les dons et la participation communautaire.",
            alt_project_ramadan: "Affiche de la campagne solidaire Panier Ramadan",
            tag_charity: "Charité",
            tag_social_impact: "Impact Social"
        }
    };

    function setLanguage(lang) {
        document.documentElement.lang = lang;
        document.documentElement.dir = 'ltr';

        // Translate text content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Translate placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        // Translate alt text
        document.querySelectorAll('[data-i18n-alt]').forEach(el => {
            const key = el.getAttribute('data-i18n-alt');
            if (translations[lang] && translations[lang][key]) {
                el.alt = translations[lang][key];
            }
        });

        // Translate aria-labels
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const key = el.getAttribute('data-i18n-aria');
            if (translations[lang] && translations[lang][key]) {
                el.setAttribute('aria-label', translations[lang][key]);
            }
        });

        // Update active button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        // Restart hero animation if loading is done
        if (loader && loader.classList.contains('hidden')) {
            initHeroAnimation();
        }
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // ---------- Loader ----------
    const loader = document.getElementById('loader');
    setTimeout(() => {
        if (loader) {
            loader.classList.add('hidden');
        }
        document.body.style.overflow = '';
        initHeroAnimation();
    }, 2200);
    document.body.style.overflow = 'hidden';

    // ---------- Cursor Glow ----------
    const cursorGlow = document.getElementById('cursorGlow');
    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // ---------- Magnetic & Advanced Cursor ----------
    let cursorScale = 1;
    let magneticTarget = null;

    const animateCursor = () => {
        if (cursorGlow) {
            let targetX = mouseX;
            let targetY = mouseY;

            if (magneticTarget) {
                const rect = magneticTarget.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                // Snap towards center by 30%
                targetX = centerX + (mouseX - centerX) * 0.3;
                targetY = centerY + (mouseY - centerY) * 0.3;
                cursorScale = 1.5;
            } else {
                cursorScale = 1;
            }

            glowX += (targetX - glowX) * 0.1;
            glowY += (targetY - glowY) * 0.1;

            cursorGlow.style.left = glowX + 'px';
            cursorGlow.style.top = glowY + 'px';
            cursorGlow.style.transform = `translate(-50%, -50%) scale(${cursorScale})`;
        }
        requestAnimationFrame(animateCursor);
    };
    animateCursor();

    const magneticElements = document.querySelectorAll('.btn, .nav-link, .theme-toggle, .carousel-btn, .whatsapp-widget, .nav-logo');
    magneticElements.forEach(el => {
        el.setAttribute('data-magnetic', 'true');
        el.addEventListener('mouseenter', () => magneticTarget = el);
        el.addEventListener('mouseleave', () => magneticTarget = null);
    });

    // ---------- Parallax Hero Image (3D Tilt) ----------
    const heroImage = document.querySelector('.hero-image-frame');
    const heroSection = document.querySelector('.hero');

    if (heroImage && heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
            const { width, height, left, top } = heroSection.getBoundingClientRect();
            const x = (e.clientX - left) / width - 0.5;
            const y = (e.clientY - top) / height - 0.5;

            // Tilt intensity
            const tiltX = y * 20; // 20 degrees max
            const tiltY = -x * 20;

            heroImage.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        heroSection.addEventListener('mouseleave', () => {
            heroImage.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    }


    // ---------- Navigation ----------
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const navLinkItems = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section, .hero');

    // Scroll effect for nav
    window.addEventListener('scroll', () => {
        if (nav) {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        }
        updateActiveNav();
    });

    // Mobile menu toggle
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Close mobile menu on link click
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navToggle) navToggle.classList.remove('active');
            if (navLinks) navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Active nav highlighting
    function updateActiveNav() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinkItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').includes(current)) {
                item.classList.add('active');
            }
        });
    }

    // ---------- Theme Management ----------
    const themeToggle = document.getElementById('themeToggle');
    const storageKey = 'portfolio-theme';

    const getTheme = () => localStorage.getItem(storageKey) || 'dark';
    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(storageKey, theme);
    };

    // Initialize theme
    setTheme(getTheme());

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            setTheme(newTheme);
        });
    }





    // ---------- Hero Animation ----------
    function initHeroAnimation() {
        const heroElements = document.querySelectorAll('.hero .reveal-up');
        heroElements.forEach((el, i) => {
            el.classList.remove('revealed');
            setTimeout(() => {
                el.classList.add('revealed');
            }, 200 + i * 150);
        });
    }

    // ---------- Scroll Reveal (IntersectionObserver) ----------
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Don't re-trigger hero items
                if (entry.target.closest('.hero')) return;
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        // Skip hero elements — they animate via initHeroAnimation
        if (!el.closest('.hero')) {
            revealObserver.observe(el);
        }
    });

    // ---------- Skill Bars Animation ----------
    const skillBars = document.querySelectorAll('.skill-bar-fill');

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.getAttribute('data-width');
                bar.style.setProperty('--bar-width', width + '%');
                bar.classList.add('animated');
                skillObserver.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => skillObserver.observe(bar));

    // ---------- Smooth Scroll ----------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href');
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });


    // ---------- Project Carousel ----------
    const track = document.getElementById('projectTrack');
    const items = Array.from(document.querySelectorAll('.project-carousel-item'));
    const nextBtn = document.querySelector('.carousel-btn.next');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const pagination = document.querySelector('.carousel-pagination');

    let currentIndex = 0;
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID = 0;

    // Create pagination dots
    items.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('pagination-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        pagination.appendChild(dot);
    });

    const dots = document.querySelectorAll('.pagination-dot');

    function updateCarousel() {
        requestAnimationFrame(() => {
            const isRTL = document.documentElement.dir === 'rtl';
            // Recalculate dimensions to handle potential race conditions
            const itemWidth = items[0].getBoundingClientRect().width;
            const containerWidth = track.parentElement.clientWidth;

            if (itemWidth === 0 || containerWidth === 0) return;

            // Calculate the center position
            const centerOffset = (containerWidth - itemWidth) / 2;
            currentTranslate = currentIndex * -itemWidth + centerOffset;

            // Handle RTL
            if (isRTL) {
                currentTranslate = currentIndex * itemWidth - centerOffset;
            }

            track.style.transform = `translateX(${currentTranslate}px)`;
            prevTranslate = currentTranslate;

            // Update classes for 3D effect
            items.forEach((item, index) => {
                item.classList.remove('active', 'prev-item', 'next-item');
                if (index === currentIndex) {
                    item.classList.add('active');
                } else if (index === currentIndex - 1) {
                    item.classList.add('prev-item');
                } else if (index === currentIndex + 1) {
                    item.classList.add('next-item');
                }
            });

            // Update dots
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentIndex);
            });

            // Disable/enable buttons
            if (prevBtn) prevBtn.style.opacity = currentIndex === 0 ? '0.3' : '1';
            if (nextBtn) nextBtn.style.opacity = currentIndex === items.length - 1 ? '0.3' : '1';
        });
    }

    function goToSlide(index) {
        currentIndex = Math.max(0, Math.min(index, items.length - 1));
        updateCarousel();
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentIndex < items.length - 1) {
                currentIndex++;
                updateCarousel();
            }
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });
    }

    // Touch & Mouse Events
    track.addEventListener('touchstart', touchStart(currentIndex));
    track.addEventListener('touchend', touchEnd);
    track.addEventListener('touchmove', touchMove);

    track.addEventListener('mousedown', touchStart(currentIndex));
    track.addEventListener('mouseup', touchEnd);
    track.addEventListener('mouseleave', touchEnd);
    track.addEventListener('mousemove', touchMove);

    function touchStart(index) {
        return function (event) {
            isDragging = true;
            startPos = getPositionX(event);
            animationID = requestAnimationFrame(animation);
            track.style.transition = 'none';
        }
    }

    function touchEnd() {
        isDragging = false;
        cancelAnimationFrame(animationID);
        track.style.transition = 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)';

        const movedBy = currentTranslate - prevTranslate;
        const isRTL = document.documentElement.dir === 'rtl';
        const threshold = 100;

        if (isRTL) {
            if (movedBy > threshold && currentIndex > 0) currentIndex--;
            if (movedBy < -threshold && currentIndex < items.length - 1) currentIndex++;
        } else {
            if (movedBy < -threshold && currentIndex < items.length - 1) currentIndex++;
            if (movedBy > threshold && currentIndex > 0) currentIndex--;
        }

        updateCarousel();
    }

    function touchMove(event) {
        if (isDragging) {
            const currentPosition = getPositionX(event);
            currentTranslate = prevTranslate + currentPosition - startPos;
        }
    }

    function getPositionX(event) {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    }

    function animation() {
        if (isDragging) {
            track.style.transform = `translateX(${currentTranslate}px)`;
            requestAnimationFrame(animation);
        }
    }

    // Handle Window Resize
    window.addEventListener('resize', updateCarousel);

    // Initial positioning with a small delay to ensure layout is ready
    setTimeout(updateCarousel, 100);
    window.addEventListener('load', updateCarousel);

    // ---------- Parallax Orbs (subtle) ----------
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const orbs = document.querySelectorAll('.hero-gradient-orb');
        orbs.forEach((orb, i) => {
            const speed = (i + 1) * 0.05;
            orb.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });

});
