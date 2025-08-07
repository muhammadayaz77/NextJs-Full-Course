import React from 'react';

// Types
interface NavItem {
  name: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: NavItem[];
}

interface ContactInfo {
  icon: string;
  text: string;
}

const HeaderFooter: React.FC = () => {
  // Header navigation items
  const navItems: NavItem[] = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  // Footer sections
  const footerSections: FooterSection[] = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Careers', href: '#careers' },
        { name: 'Blog', href: '#blog' },
        { name: 'Press', href: '#press' },
      ]
    },
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Documentation', href: '#docs' },
        { name: 'API', href: '#api' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#privacy' },
        { name: 'Terms of Service', href: '#terms' },
        { name: 'Cookie Policy', href: '#cookies' },
        { name: 'GDPR', href: '#gdpr' },
      ]
    }
  ];

  // Contact information
  const contactInfo: ContactInfo[] = [
    { icon: '📧', text: 'contact@example.com' },
    { icon: '📞', text: '+1 (555) 123-4567' },
    { icon: '🏢', text: '123 Business St, City, Country' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}

      {/* Main Content - Empty for this example */}
      <main className="flex-grow"></main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white pt-12 pb-8 px-[5%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Section 1: About */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-300 mb-4">
              We provide innovative solutions to help your business grow in the digital era.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                <a key={social} href={`#${social}`} className="text-gray-300 hover:text-white transition-colors duration-300">
                  <span className="sr-only">{social}</span>
                  <span className="text-xl">📱</span> {/* Replace with actual icons */}
                </a>
              ))}
            </div>
          </div>

          {/* Sections 2-4: Dynamic sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xl font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Section 4: Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span>{info.icon}</span>
                  <span className="text-gray-300">{info.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HeaderFooter;