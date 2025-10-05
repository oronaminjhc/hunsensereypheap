// Language Toggle Functionality
class LanguageManager {
    constructor() {
        this.currentLanguage = null; // Start with null to ensure first load triggers update
        this.translations = {
            en: {
                // Navigation
                'about': 'About',
                'academics': 'Academics',
                'admission': 'Admission',
                'student': 'Student Life',
                'news': 'News',
                'contact': 'Contact',
                'parents': 'Parents',
                'alumni': 'Alumni',
                
                // Hero section
                'hero-title': 'Learning today leading tomorrow',
                'hero-subtitle': 'We provide quality education, strong values, and real-world skills so students thrive at university, in work, and in life.',
                'admission-inquiry': 'Admission Inquiry',
                'virtual-tour': 'Virtual Tour',
                'school-campus-image': 'School Campus Image',
                
                // Quick links
                'academic-calendar': 'Academic Calendar',
                'academic-calendar-desc': '2025 Academic Year Schedule',
                'online-learning': 'Online Learning',
                'online-learning-desc': 'Digital Learning Platform',
                'parent-portal': 'Parent Portal',
                'parent-portal-desc': 'Check Grades & Notifications',
                'admission-guide': 'Admission Guide',
                'admission-guide-desc': '2025 New Student Enrollment',
                
                // News section
                'latest-news': 'Latest News & Announcements',
                'news-subtitle': 'Stay updated with the latest news from Hun Sen Serey Pheap High School',
                'digital-education-title': 'Digital Education Innovation Program Launch',
                'digital-education-content': 'Smart classroom construction completed with latest IT technology. Creating a new educational environment to strengthen students\' 21st-century competencies.',
                'science-competition-title': '2025 Science Competition Victory',
                'science-competition-content': 'Our school students achieved excellent results in the national high school science competition, bringing honor to our school.',
                'international-exchange-title': 'International Exchange Program Notice',
                'international-exchange-content': 'Recruiting participants for educational exchange programs with ASEAN countries. An opportunity to develop global leadership and cultural understanding.',
                'read-more': 'Read More →',
                
                // Features section
                'what-makes-special': 'What Makes Us Special',
                'special-subtitle': 'Distinctive educational programs unique to Hun Sen Serey Pheap High School',
                'global-education': 'Global Education',
                'global-education-desc': 'Developing global talent through intensive English and Chinese education and international exchange programs',
                'it-education': 'IT-Specialized Education',
                'it-education-desc': 'Realizing future-oriented education using state-of-the-art computer labs and digital educational tools',
                'arts-sports': 'Arts & Sports Programs',
                'arts-sports-desc': 'Cultivating well-rounded individuals through various arts, music, and sports activities',
                
                // Stats section
                'students': 'Students',
                'faculty-staff': 'Faculty & Staff',
                'college-acceptance': 'College Acceptance',
                'club-activities': 'Club Activities',
                
                // Location section
                'location': 'Location',
                'location-subtitle': 'Hun Sen Serey Pheap High School Location',
                'school-address': '📍 Takhmao City, Kandal Province',
                'public-transport': '🚌 Public Transportation Available',
                'interactive-map': 'Interactive Map Area',
                
                // Footer
                'school-information': 'School Information',
                'school-history': 'School History',
                'educational-philosophy': 'Educational Philosophy',
                'facilities-guide': 'Facilities Guide',
                'faculty-introduction': 'Faculty Introduction',
                'academic-information': 'Academic Information',
                'curriculum': 'Curriculum',
                'grade-management': 'Grade Management',
                'graduation-requirements': 'Graduation Requirements',
                'quick-links': 'Quick Links',
                'library': 'Library',
                'cafeteria-menu': 'Cafeteria Menu',
                'school-bus': 'School Bus',
                'facebook-page': 'Facebook Page',
                'copyright': '© 2025 Hun Sen Serey Pheap High School. All rights reserved.',
                
                // Contact info
                'contact-email': '📧 info@hssphighschool.edu.kh',
                'contact-phone': '📞 +855 23 XXX XXX',
                'contact-address': '📍 Takhmao, Kandal Province',
                
                // School name
                'school-name': 'Hun Sen Serey Pheap High School',
                'school-tagline': 'Excellence in Education'
            },
            km: {
                // Navigation
                'about': 'អំពីយើង',
                'academics': 'ការសិក្សា',
                'admission': 'ការចុះឈ្មោះ',
                'student': 'ជីវិតសិស្ស',
                'news': 'ព័ត៌មាន',
                'contact': 'ទំនាក់ទំនង',
                'parents': 'ឪពុកម្តាយ',
                'alumni': 'សិស្សចាស់',
                
                // Hero section
                'hero-title': 'រៀនថ្ងៃនេះ ដឹកនាំថ្ងៃស្អែក',
                'hero-subtitle': 'យើងផ្តល់នូវការអប់រំគុណភាព តម្លៃរឹងមាំ និងជំនាញក្នុងជីវិតពិតប្រាកដ ដើម្បីឱ្យសិស្សរីកចម្រើននៅសាកលវិទ្យាល័យ ការងារ និងជីវិត។',
                'admission-inquiry': 'សំណួរចុះឈ្មោះ',
                'virtual-tour': 'ទស្សនកិច្ចនិម្មិត',
                'school-campus-image': 'រូបភាពបរិវេណសាលា',
                
                // Quick links
                'academic-calendar': 'ប្រតិទិនសិក្សា',
                'academic-calendar-desc': 'កាលវិភាគឆ្នាំសិក្សា ២០២៥',
                'online-learning': 'ការសិក្សាអនឡាញ',
                'online-learning-desc': 'វេទិកាសិក្សាឌីជីថល',
                'parent-portal': 'ផ្ទាំងគ្រប់គ្រងឪពុកម្តាយ',
                'parent-portal-desc': 'ពិនិត្យពិន្ទុ និងការជូនដំណឹង',
                'admission-guide': 'មគ្គុទ្ទេសក៍ចុះឈ្មោះ',
                'admission-guide-desc': 'ការចុះឈ្មោះសិស្សថ្មី ២០២៥',
                
                // News section
                'latest-news': 'ព័ត៌មាន និងប្រកាសចុងក្រោយ',
                'news-subtitle': 'ទទួលបានព័ត៌មានថ្មីៗពីវិទ្យាល័យ ហ៊ុន សែន សិរីភាព',
                'digital-education-title': 'ការចាប់ផ្តើមកម្មវិធីនវានុវត្តន៍អប់រំឌីជីថល',
                'digital-education-content': 'ការសាងសង់បន្ទប់រៀនឆ្លាតវៃបានបញ្ចប់ដោយបច្ចេកវិទ្យាព័ត៌មានវិទ្យាចុងក្រោយ។ បង្កើតបរិស្ថានអប់រំថ្មីដើម្បីពង្រឹងសមត្ថភាពសតវត្សទី២១របស់សិស្ស។',
                'science-competition-title': 'ជ័យជំនះការប្រកួតវិទ្យាសាស្ត្រ ២០២៥',
                'science-competition-content': 'សិស្សរបស់យើងបានសម្រេចលទ្ធផលល្អប្រសើរក្នុងការប្រកួតវិទ្យាសាស្ត្រវិទ្យាល័យថ្នាក់ជាតិ ធ្វើអោយសាលាមានកិត្តិយស។',
                'international-exchange-title': 'ដំណឹងកម្មវិធីដោះដូរអន្តរជាតិ',
                'international-exchange-content': 'ជ្រើសរើសសមាជិកចូលរួមកម្មវិធីដោះដូរអប់រំជាមួយប្រទេសអាស៊ាន។ ឱកាសដើម្បីអភិវឌ្ឍភាពជាអ្នកដឹកនាំសកលលោក និងការយល់ដឹងវប្បធម៌។',
                'read-more': 'អានបន្ថែម →',
                
                // Features section
                'what-makes-special': 'អ្វីដែលធ្វើអោយយើងពិសេស',
                'special-subtitle': 'កម្មវិធីអប់រំប្លែកពិសេសរបស់វិទ្យាល័យ ហ៊ុន សែន សិរីភាព',
                'global-education': 'អប់រំសកលលោក',
                'global-education-desc': 'អភិវឌ្ឍនិស្ស័តសកលលោកតាមរយៈការអប់រំភាសាអង់គ្លេស និងចិនពិសេស និងកម្មវិធីដោះដូរអន្តរជាតិ',
                'it-education': 'អប់រំជំនាញព័ត៌មានវិទ្យា',
                'it-education-desc': 'សម្រេចការអប់រំតម្រៀវអនាគតដោយប្រើបន្ទប់កុំព្យូទ័រទំនើប និងឧបករណ៍អប់រំឌីជីថល',
                'arts-sports': 'កម្មវិធីសិល្បៈ និងកីឡា',
                'arts-sports-desc': 'ការបណ្តុះបណ្តាលបុគ្គលគ្រប់ជ្រុងជ្រោយតាមរយៈសកម្មភាពសិល្បៈ តន្ត្រី និងកីឡាចម្រុះ',
                
                // Stats section
                'students': 'សិស្ស',
                'faculty-staff': 'គ្រូបង្រៀន និងបុគ្គលិក',
                'college-acceptance': 'ការទទួលយកចូលមហាវិទ្យាល័យ',
                'club-activities': 'សកម្មភាពក្លឹប',
                
                // Location section
                'location': 'ទីតាំង',
                'location-subtitle': 'ទីតាំងវិទ្យាល័យ ហ៊ុន សែន សិរីភាព',
                'school-address': '📍 ក្រុងត្រពាំងព្រីង ខេត្តកណ្តាល',
                'public-transport': '🚌 មានគ្រឿងចម្លងសាធារណៈ',
                'interactive-map': 'តំបន់ផែនទីអន្តរកម្ម',
                
                // Footer
                'school-information': 'ព័ត៌មានសាលា',
                'school-history': 'ប្រវត្តិសាលា',
                'educational-philosophy': 'ទស្សនវិជ្ជាអប់រំ',
                'facilities-guide': 'មគ្គុទ្ទេសក៍គ្រឿងបរិក្ខារ',
                'faculty-introduction': 'ការណែនាំគ្រូបង្រៀន',
                'academic-information': 'ព័ត៌មានសិក្សា',
                'curriculum': 'កម្មវិធីសិក្សា',
                'grade-management': 'ការគ្រប់គ្រងពិន្ទុ',
                'graduation-requirements': 'លក្ខខណ្ឌបញ្ចប់ការសិក្សា',
                'quick-links': 'តំណភ្ជាប់រហ័ស',
                'library': 'បណ្ណាល័យ',
                'cafeteria-menu': 'ម៉ឺនុយអាហារ',
                'school-bus': 'រថយន្តសាលា',
                'facebook-page': 'ទំព័រ Facebook',
                'copyright': '© ២០២៥ វិទ្យាល័យ ហ៊ុន សែន សិរីភាព។ រក្សាសិទ្ធិគ្រប់យ្យាង។',
                
                // Contact info
                'contact-email': '📧 info@hssphighschool.edu.kh',
                'contact-phone': '📞 +855 23 XXX XXX',
                'contact-address': '📍 ត្រពាំងព្រីង ខេត្តកណ្តាល',
                
                // School name
                'school-name': 'វិទ្យាល័យ ហ៊ុន សែន សិរីភាព',
                'school-tagline': 'វិទ្យាល័យ ហ៊ុន សែន សិរីភាព'
            }
        };
        
        this.init();
    }
    
    init() {
        // Add event listeners to language buttons
        const enBtn = document.getElementById('en-btn');
        const kmBtn = document.getElementById('km-btn');
        
        if (enBtn && kmBtn) {
            enBtn.addEventListener('click', () => this.switchLanguage('en'));
            kmBtn.addEventListener('click', () => this.switchLanguage('km'));
        }
        
        // Set initial language
        this.switchLanguage('en');
        
        // Add smooth scrolling to navigation links
        this.initSmoothScrolling();
        
        // Add scroll animations
        this.initScrollAnimations();
    }
    
    switchLanguage(language) {
        if (language === this.currentLanguage) return;
        
        // Add loading state
        document.body.classList.add('language-switching');
        
        setTimeout(() => {
            this.currentLanguage = language;
            
            // Update button states
            const enBtn = document.getElementById('en-btn');
            const kmBtn = document.getElementById('km-btn');
            
            if (enBtn && kmBtn) {
                enBtn.classList.toggle('active', language === 'en');
                kmBtn.classList.toggle('active', language === 'km');
                
                // Update ARIA labels
                enBtn.setAttribute('aria-label', language === 'en' ? 'English (Current)' : 'Switch to English');
                kmBtn.setAttribute('aria-label', language === 'km' ? 'ភាសាខ្មែរ (បច្ចុប្បន្ន)' : 'Switch to Khmer');
            }
            
            // Update all translatable elements
            this.updateAllTexts();
            
            // Update document language attribute
            document.documentElement.lang = language === 'en' ? 'en' : 'km';
            
            // Remove loading state
            document.body.classList.remove('language-switching');
        }, 150);
    }
    
    updateAllTexts() {
        // Update elements with data attributes
        const translatableElements = document.querySelectorAll('[data-en][data-km]');
        
        translatableElements.forEach(element => {
            const key = this.currentLanguage;
            const text = element.getAttribute(`data-${key}`);
            
            if (text) {
                // Handle HTML entities
                if (text.includes('&copy;')) {
                    element.innerHTML = text;
                } else {
                    element.textContent = text;
                }
            }
        });
        
        // Update additional elements by ID or class if needed
        this.updateSpecialElements();
    }
    
    updateSpecialElements() {
        const t = this.translations[this.currentLanguage];
        if (!t) return;

        // Update document title
        document.title = this.currentLanguage === 'en'
            ? 'Hun Sen Serey Pheap High School - Excellence in Education'
            : 'វិទ្យាល័យ ហ៊ុន សែន សិរីភាព - ល្អឥតខ្ចោះក្នុងការអប់រំ';

        // Update meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content',
                this.currentLanguage === 'en'
                    ? 'A safe, disciplined school in Takhmao offering strong academics, clubs, and Bac II preparation.'
                    : 'សាលាសុវត្ថិភាព និងវិន័យ នៅតាខ្មៅ ជាមួយកម្មវិធីសិក្សាខ្លាំង ក្លឹប និងការរៀបចំសម្រាប់ Bac II.');
        }
    }
    
    initSmoothScrolling() {
        // Add smooth scrolling to all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    initScrollAnimations() {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);
        
        // Observe elements that should animate on scroll
        document.querySelectorAll('.news-card, .feature-card, .quick-link, .stat-item').forEach(el => {
            observer.observe(el);
        });
    }
    
    // Utility method to get current translation
    getTranslation(key) {
        return this.translations[this.currentLanguage][key] || key;
    }
}

// Additional utility functions
class AnimationManager {
    static addScrollReveal() {
        const reveals = document.querySelectorAll('.slide-up');
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'slideUp 0.6s ease forwards';
                }
            });
        });
        
        reveals.forEach(reveal => {
            revealObserver.observe(reveal);
        });
    }
    
    static addHoverEffects() {
        // Add dynamic hover effects to cards
        document.querySelectorAll('.news-card, .feature-card, .quick-link').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
}

// Search functionality
// Academics Tab Manager
class AcademicsTabManager {
    constructor() {
        this.tabButtons = document.querySelectorAll('.tab-btn');
        this.tabPanels = document.querySelectorAll('.tab-panel');
        this.init();
    }
    
    init() {
        this.tabButtons.forEach(button => {
            button.addEventListener('click', (e) => this.switchTab(e));
        });
    }
    
    switchTab(e) {
        const clickedButton = e.target;
        const targetGrade = clickedButton.getAttribute('data-grade');
        
        // Remove active class from all buttons and panels
        this.tabButtons.forEach(btn => btn.classList.remove('active'));
        this.tabPanels.forEach(panel => panel.classList.remove('active'));
        
        // Add active class to clicked button
        clickedButton.classList.add('active');
        
        // Show corresponding panel
        const targetPanel = document.getElementById(`grade-${targetGrade}`);
        if (targetPanel) {
            targetPanel.classList.add('active');
        }
    }
}

// FAQ Accordion Manager
class FAQManager {
    constructor() {
        this.faqQuestions = document.querySelectorAll('.faq-question');
        this.init();
    }
    
    init() {
        this.faqQuestions.forEach(question => {
            question.addEventListener('click', (e) => this.toggleFAQ(e));
        });
    }
    
    toggleFAQ(e) {
        const question = e.target;
        const answer = question.nextElementSibling;
        
        // Close all other FAQs
        this.faqQuestions.forEach(q => {
            if (q !== question) {
                q.nextElementSibling.classList.remove('active');
            }
        });
        
        // Toggle current FAQ
        answer.classList.toggle('active');
    }
}

class SearchManager {
    constructor() {
        this.searchOverlay = document.getElementById('search-overlay');
        this.searchBtn = document.getElementById('search-btn');
        this.searchClose = document.getElementById('search-close');
        this.searchInput = document.getElementById('search-input');
        this.searchSubmit = document.getElementById('search-submit');
        this.searchResults = document.getElementById('search-results');
        this.init();
    }
    
    init() {
        if (this.searchBtn) {
            this.searchBtn.addEventListener('click', () => this.openSearch());
        }
        if (this.searchClose) {
            this.searchClose.addEventListener('click', () => this.closeSearch());
        }
        if (this.searchSubmit) {
            this.searchSubmit.addEventListener('click', () => this.performSearch());
        }
        if (this.searchInput) {
            this.searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.performSearch();
                }
            });
        }
        
        // Close search on overlay click
        if (this.searchOverlay) {
            this.searchOverlay.addEventListener('click', (e) => {
                if (e.target === this.searchOverlay) {
                    this.closeSearch();
                }
            });
        }
        
        // Close search on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.searchOverlay.style.display !== 'none') {
                this.closeSearch();
            }
        });
    }
    
    openSearch() {
        this.searchOverlay.style.display = 'flex';
        this.searchInput.focus();
        document.body.style.overflow = 'hidden';
    }
    
    closeSearch() {
        this.searchOverlay.style.display = 'none';
        this.searchInput.value = '';
        this.searchResults.innerHTML = '';
        document.body.style.overflow = '';
    }
    
    performSearch() {
        const query = this.searchInput.value.trim();
        if (!query) return;
        
        // Simple search implementation
        const results = this.searchContent(query);
        this.displayResults(results);
    }
    
    searchContent(query) {
        const searchableContent = [
            { title: 'About Us', content: 'Learn about our school mission, vision, and history', url: '#about' },
            { title: 'Academics', content: 'Curriculum, departments, and academic programs', url: '#academics' },
            { title: 'Admissions', content: 'Enrollment process and requirements', url: '#admissions' },
            { title: 'Student Life', content: 'Clubs, activities, and student organizations', url: '#student-life' },
            { title: 'News & Events', content: 'Latest announcements and upcoming events', url: '#news' },
            { title: 'Contact', content: 'Get in touch with our school', url: '#contact' }
        ];
        
        return searchableContent.filter(item => 
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.content.toLowerCase().includes(query.toLowerCase())
        );
    }
    
    displayResults(results) {
        if (results.length === 0) {
            this.searchResults.innerHTML = '<p>No results found. Try different keywords.</p>';
            return;
        }
        
        this.searchResults.innerHTML = results.map(result => `
            <div class="search-result-item" onclick="window.location.href='${result.url}'">
                <h4>${result.title}</h4>
                <p>${result.content}</p>
            </div>
        `).join('');
    }
}

// Mobile menu functionality
class MobileMenuManager {
    constructor() {
        this.init();
    }
    
    init() {
        this.createMobileToggle();
        this.handleResize();
        this.handleMobileDropdowns();
    }
    
    createMobileToggle() {
        const nav = document.querySelector('nav');
        if (!nav) return;
        
        const mobileToggle = document.createElement('button');
        mobileToggle.className = 'mobile-menu-toggle';
        mobileToggle.innerHTML = '☰';
        mobileToggle.setAttribute('aria-label', 'Toggle mobile menu');
        
        const headerContent = document.querySelector('.header-content');
        if (headerContent) {
            headerContent.insertBefore(mobileToggle, nav);
        }
        
        mobileToggle.addEventListener('click', () => {
            nav.classList.toggle('mobile-open');
            mobileToggle.innerHTML = nav.classList.contains('mobile-open') ? '✕' : '☰';
        });
    }
    
    handleMobileDropdowns() {
        const dropdownItems = document.querySelectorAll('.has-dropdown');
        
        dropdownItems.forEach(item => {
            const link = item.querySelector('a');
            const dropdown = item.querySelector('.dropdown');
            
            if (link && dropdown) {
                link.addEventListener('click', (e) => {
                    if (window.innerWidth <= 768) {
                        e.preventDefault();
                        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
                    }
                });
            }
        });
    }
    
    handleResize() {
        window.addEventListener('resize', () => {
            const nav = document.querySelector('nav');
            const toggle = document.querySelector('.mobile-menu-toggle');
            const dropdowns = document.querySelectorAll('.dropdown');
            
            if (window.innerWidth > 768) {
                if (nav) nav.classList.remove('mobile-open');
                if (toggle) toggle.innerHTML = '☰';
                dropdowns.forEach(dropdown => {
                    dropdown.style.display = '';
                });
            }
        });
    }
}

// Performance optimization
class PerformanceManager {
    static lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    static optimizeAnimations() {
        // Reduce animations for users who prefer reduced motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.documentElement.style.setProperty('--animation-duration', '0s');
        }
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language manager
    window.languageManager = new LanguageManager();
    
    // Initialize search functionality
    new SearchManager();
    
    // Initialize academics functionality
    new AcademicsTabManager();
    new FAQManager();
    
    // Initialize mobile menu
    new MobileMenuManager();
    
    // Initialize animations
    AnimationManager.addScrollReveal();
    AnimationManager.addHoverEffects();
    
    // Initialize performance optimizations
    PerformanceManager.lazyLoadImages();
    PerformanceManager.optimizeAnimations();
    
    // Add loading complete class
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Export for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LanguageManager, AnimationManager, MobileMenuManager, PerformanceManager };
}
