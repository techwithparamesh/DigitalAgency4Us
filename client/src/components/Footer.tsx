import { Link } from "wouter";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B1220] text-slate-300 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-xl font-bold text-white mb-4">
              DigitalAgency<span className="text-primary">4Us</span>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              We build, host & scale websites that grow your business.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover-elevate p-2 rounded" data-testid="link-social-github" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="#" className="hover-elevate p-2 rounded" data-testid="link-social-linkedin" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover-elevate p-2 rounded" data-testid="link-social-twitter" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition-colors" data-testid="link-footer-home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors" data-testid="link-footer-services">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-primary transition-colors" data-testid="link-footer-portfolio">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors" data-testid="link-footer-about">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-primary transition-colors cursor-pointer">WordPress Development</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Custom Code Sites</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Full-Stack Development</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Hosting & Maintenance</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 text-primary flex-shrink-0" />
                <a href="mailto:hello@digitalagency4us.com" className="hover:text-primary transition-colors" data-testid="link-email">
                  hello@digitalagency4us.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 text-primary flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors" data-testid="link-phone">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 text-primary flex-shrink-0" />
                <span>Global Remote Services</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} DigitalAgency4Us. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
