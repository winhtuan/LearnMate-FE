import React from 'react';
import Logo from '@/components/ui/logo';
import SocialLinks from '@/components/ui/social-links';
import { platformLinks, supportLinks, companyLinks, footerData, socialLinks } from '@/features/home/data/homeData';

function Footer() {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Logo size="small" className="mb-6" />
            <p className="text-slate-500 mb-8 max-w-sm leading-relaxed">
              {footerData.description}
            </p>
            <SocialLinks links={socialLinks} />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Platform</h4>
            <ul className="space-y-4">
              {platformLinks.map((link, i) => (
                <li key={i}><a className="text-sm text-slate-600 hover:text-primary transition-colors" href="#">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Support</h4>
            <ul className="space-y-4">
              {supportLinks.map((link, i) => (
                <li key={i}><a className="text-sm text-slate-600 hover:text-primary transition-colors" href="#">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4">
              {companyLinks.map((link, i) => (
                <li key={i}><a className="text-sm text-slate-600 hover:text-primary transition-colors" href="#">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500">© 2023 LearnMate Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a className="text-xs text-slate-400 hover:text-slate-600" href="#">Privacy Policy</a>
            <a className="text-xs text-slate-400 hover:text-slate-600" href="#">Terms of Service</a>
            <a className="text-xs text-slate-400 hover:text-slate-600" href="#">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
