import { useLanguage } from '../contexts/LanguageContext'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4 text-primary">
              MR. CUBA
            </h3>
            <p className="text-white/70 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/70 hover:text-primary transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-primary transition-colors">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white/70 hover:text-primary transition-colors">
                  {t('nav.gallery')}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-primary transition-colors">
                  {t('nav.testimonials')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-primary transition-colors">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2 text-white/70">
              <li>{t('footer.location')}</li>
              <li>{t('contact.phone')}: +84 366 952 767</li>
              <li>{t('contact.email')}: cubahuetour@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>
            © {currentYear} {t('footer.rights')} 
            {' '} {t('footer.madeWith')}
          </p>
        </div>
      </div>
    </footer>
  )
}

