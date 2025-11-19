export function Footer() {
  const currentYear = new Date().getFullYear()

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
              Authentic easy rider motorbike tours through the heart of Central Vietnam. 
              Experience the real Vietnam with a local guide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/70 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white/70 hover:text-primary transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-primary transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-white/70">
              <li>Central Vietnam</li>
              <li>Phone: +84 366 952 767</li>
              <li>Email: mrcuba@example.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>
            © {currentYear} Mr. Cuba Tours. All rights reserved. 
            {' '} Made with ❤️ in Vietnam
          </p>
        </div>
      </div>
    </footer>
  )
}

