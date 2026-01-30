import React from 'react';
import { Link } from 'react-router-dom';

// Static Data Extraction
const studentsImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCh0nADtXOal1AYLfJ778s02pZBBvYmdgVCTmanKpNJ16hKlyxhRbPytwPF31CFZFSkkglc5qB2qHphImb-EUOX2X5b8YihQrpmsZYPztFxRefPjp7Ov4wDtGixI3gZe7crf-qSDX8ls-whKEkPby0i9xkPWAzy-bZrve-jVyuXg8YjfpsVSC7pFBCNeDkk4HfI9Lk1-QNE4OVJAste8qCp2TKn0Khn9ilFfrIKW-YH7mDwEvl-7cUu1cAal8w5Slv4T-VbNvpGSSw",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAcjNybfuRPqc8xkERHz35QnagpHpqiwtuQgv2bMXg68Uk_6jB6ItIj0uQdDyKOKjD2Rn69m-M1BKQyXqPxY63lrSuKlzAV4AiA4kM0rlQ2YJ6uodrmyYP3LGHupsdW4O_-vMQQYJeMYUyGjCNasp-vbTpaY9By812-_ZLe7KAahvazUp8izTFAl3a1piHZuEmE1tIY1bXvudfToE6scXxsnRLKH-3cCjVfInmUuB6c7chiyKHiAbLXBIegmz4JDEQEt8AycnhFZGE",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuABgJQZ8-TGUtKkgccLE6DsCJA2op9ZiMtHI3dctix1LFco3pXxow3L-mG47NYIfPZudoP1x5cTA-BE5kFpgbUNDln9Nh5Ythp9VKthHUe0mp2BF5ZE_sj1kJXMHI4CU1WQUhp8QXDV8SLq_JogWEERHpUR2-TOWRCCJw7AiOjSuXhZsBq6_MBCmH3QwPEiw1mVX2k-A4zhV05byeHOziZfo4yBkcoZjDIN8A915H294uAmKRk9GH7YRTw__b751XLWvBHnxrPC9WE"
];

const features = [
  {
    icon: "school",
    title: "Expert Tutors",
    description: "Our tutors undergo a rigorous background check and proficiency testing to ensure you learn from the best in the field."
  },
  {
    icon: "schedule",
    title: "Flexible Scheduling",
    description: "Book sessions that fit your busy lifestyle. Whether it's early morning or late night, our global network has you covered."
  },
  {
    icon: "insights",
    title: "Personalized Growth",
    description: "Track your progress with customized learning paths and detailed feedback from tutors after every session."
  }
];

const steps = [
  {
    number: "1",
    title: "Discover",
    description: "Browse through thousands of certified tutors based on subject, rating, and availability."
  },
  {
    number: "2",
    title: "Connect",
    description: "Message tutors directly to discuss your goals and book your first introductory session."
  },
  {
    number: "3",
    title: "Learn",
    description: "Join your virtual classroom and start achieving your milestones with expert guidance."
  }
];

const tutors = [
  {
    name: "Dr. Sarah Jenkins",
    subject: "Advanced Mathematics & Physics",
    tags: ["Calculus", "Algebra"],
    price: 45,
    rating: 4.9,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTvhf2qEnPW2RJMLkXV27F6IZD44IP5vhM7IHXC0AmGQWxwhsuACL5VJPC5yzNz-Onfnq3sme0G4TMhBmtweTFgkL46S9Iuvd4iuAOE_xP8j6toepTPIfwPNWOrPvvZxP7G7GVNjXcfhFCX9PWG5kCv4KaFHE0od8QbKce-oasynN0epFMgN7uWwlCfOWi5_Cf9rRJ7N4GKdBUyQAyqhw2aw6XrJNzl6LPQIeyonihmaeWjUwMIULenvKzRTm9e4P6q9RmqF5G_Dg"
  },
  {
    name: "Michael Chen",
    subject: "Computer Science & Algorithms",
    tags: ["Python", "Java"],
    price: 60,
    rating: 5.0,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsznjWA31o4mJCeULvnGCiyf5i9zTpgbbuJUPagg1D3nN2l2ibcTJLvgl5gBHz44IXJrA9fejBSkzJhWvHyGOAUDzvgwrn79fUk3sihhef-lzYdNpzigSOuKpz9s2NYL8oqgv4jwZXs1c5UUxN0N4ePLrt9nONNT2Eo9W-O3HCPQfbYchW9XBBDKjvaXL1pmycRq4HU8YnFEhri-ozuv_N_AE9HPp0Y8VvOGgihIOijDWA93Rh0lgS2eVsQrtidepRi3inRPP392E"
  },
  {
    name: "Elena Rodriguez",
    subject: "Spanish & Comparative Literature",
    tags: ["Spanish", "Writing"],
    price: 40,
    rating: 4.8,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0TMr3N2zF9KA5O4e0Jh4Gq_iz3J8x145Wof292o71YLOcIN3Q_EDHFlArtaTlxi1iJEVFHl9Apqv3QxNvWXQtha7kFF38qsXkjf2iALVr6zWxk7oc926YADqNNyN1QG_jTDdK0xuGSu1A3XzyRHmYtuNalIkX9CwWZM3Ffb4ds34go7bAOtwuaJA4bAX-FrFuGnBkqVSPtvJgReIQYY4BQEuLn-vypQqOM4ujT9IXFFk7G90Nroq1jgQyvyg60JxW3Qxjo3LDu8E"
  },
  {
    name: "David Wilson",
    subject: "Organic Chemistry & Biology",
    tags: ["MCAT", "Pre-Med"],
    price: 55,
    rating: 4.9,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEVbN68_PPthYu4OrRSNcGTdF6MirhQ1cRY6ypuD5Fe__qfv8ibGOma07mHqJpmlox7BtS919s9DGp50P_s6sIXdMeo9i7a9ePaoQze0zknuMtFTtC5UaXYCu9OgSKCpDOFytxAnIBLr7hwrwSLWy6rCIHbMUFoCExeDX60t7HcKV_xsFrHxTZKwcoDf7lRUEo2t-oMMogXjN6tumxTECDMuc_51DlMOFAG_m8yC0oit9aT-S8u14c4_m7Qm6ERqFOBWySYKJtiH8"
  }
];

const platformLinks = ["Find a Tutor", "Pricing", "Groups", "For Businesses"];
const supportLinks = ["Help Center", "Trust & Safety", "Contact Us", "Refund Policy"];
const companyLinks = ["About Us", "Careers", "Press", "Partners"];

function HomePage() {
  return (
    <div className="font-display text-slate-900 bg-background-light min-h-screen flex flex-col">
      <header className="w-full bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="size-9 text-primary">
                <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" fill="currentColor" />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-900">LearnMate</span>
            </div>
            <nav className="hidden md:flex gap-10 items-center">
              <a className="text-sm font-semibold text-slate-900 hover:text-primary transition-colors" href="#">Find Tutors</a>
              <a className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors" href="#">How it Works</a>
              <a className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors" href="#">Resources</a>
              <a className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors" href="#">Pricing</a>
            </nav>
            <div className="flex items-center gap-4">
              <button className="hidden sm:block text-sm font-semibold text-slate-600 hover:text-slate-900 px-4 py-2">Log in</button>
              <button className="bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-blue-600 transition-all shadow-sm">Get Started</button>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-grow">
        <section className="hero-gradient pt-16 pb-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-primary rounded-full mb-6">
                  <span className="material-symbols-outlined text-sm">stars</span>
                  <span className="text-xs font-bold uppercase tracking-wider">Top Rated Tutoring Platform</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                  Empowering Learning Through <span className="text-primary">Expert Connection</span>
                </h1>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                  Connect with certified world-class tutors for personalized 1-on-1 sessions. Achieve your academic goals with a schedule that fits your life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/tutors"
                    className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-600 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 group"
                  >
                    Find a Tutor
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                  <Link to="/tutorRegister" className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center">
                    Become a Tutor
                  </Link>
                </div>
                <div className="mt-10 flex items-center gap-6">
                  <div className="flex -space-x-3">
                    {studentsImages.map((src, index) => (
                      <img key={index} alt="Student" className="size-10 rounded-full border-2 border-white object-cover" src={src} />
                    ))}
                    <div className="size-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600">+10k</div>
                  </div>
                  <p className="text-sm text-slate-500 font-medium">Join 10,000+ students already learning</p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
                <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                  <img alt="Tutor and student working together" class="w-full h-auto object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGCE6TOiMlYbOipjn-K-GnxVDOAcShWCGnrupIkksMKVNoCQHlYKadcpr31mKVS-gUrav1LhATLZ-mtAYA46dBIp-BxmPHRP04ikjmbNjqoTGoeO2-6HuIjHcHOLzGrZsGLERkS94n5a4hZE3mM5T1L3BPFI_CpTBS67HGD0xmZfHgPZ1nxNKk0UwIG0IWoRJS1__zBQD7g3OcekQD0fHvpfJAKojVymtg1VQlgfqoWMLLCXxWSlL5LkTbrNbK-ei_prQKCVij_AA" />
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg flex items-center gap-4">
                    <div className="size-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-emerald-600">verified_user</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Certified Tutors</p>
                      <p className="text-xs text-slate-500">Rigorous vetting for every expert</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose LearnMate?</h2>
              <p className="text-slate-600">We prioritize quality connection and learning outcomes through our dedicated platform features.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-8 bg-white border border-slate-100 rounded-2xl hover:shadow-xl hover:shadow-slate-100 transition-all group">
                  <div className="size-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 -skew-x-12 translate-x-1/2" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-3xl font-bold mb-4">Your Path to Mastery</h2>
              <p className="text-slate-400">Three simple steps to start your learning journey with us.</p>
            </div>
            <div className="relative">
              <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-slate-800" />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                {steps.map((step, index) => (
                  <div key={index} className="relative text-center">
                    <div className="size-24 bg-slate-800 border-4 border-slate-900 rounded-full flex items-center justify-center text-4xl font-bold text-primary mx-auto mb-8 relative z-20 shadow-lg">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <p className="text-slate-400">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Find Your Perfect Tutor</h2>
                <p className="text-slate-600">Hand-picked, top-rated experts available right now.</p>
              </div>
              <a className="text-primary font-bold hover:underline flex items-center gap-2 group" href="#">
                View all 2,400+ tutors
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward_ios</span>
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {tutors.map((tutor, index) => (
                <div key={index} className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <img alt={`Tutor ${tutor.name}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={tutor.image} />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1">
                      <span className="material-symbols-outlined text-yellow-500 text-sm fill-current">star</span>
                      <span className="text-xs font-bold text-slate-900">{tutor.rating}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 class="font-bold text-slate-900 mb-1">{tutor.name}</h4>
                    <p class="text-xs text-slate-500 mb-4">{tutor.subject}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {tutor.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-slate-50 text-[10px] font-bold text-slate-600 rounded">{tag}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-bold text-slate-900">${tutor.price}<span className="text-slate-400 font-normal">/hr</span></p>
                      <button className="text-primary text-xs font-bold hover:text-blue-700">Book Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" fill="currentColor" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path d="M0 100 C 20 0 50 0 100 100 Z" />
            </svg>
          </div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6">Ready to start your learning journey?</h2>
            <p className="text-blue-100 text-lg mb-10">Join thousands of students who are already achieving their academic goals with LearnMate.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-primary hover:bg-blue-50 px-10 py-4 rounded-xl font-bold transition-all shadow-xl">Get Started Today</button>
              <button className="bg-blue-700 text-white border border-blue-500 hover:bg-blue-800 px-10 py-4 rounded-xl font-bold transition-all">Schedule a Demo</button>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-8 text-primary">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z" fill="currentColor" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-slate-900">LearnMate</span>
              </div>
              <p className="text-slate-500 mb-8 max-w-sm leading-relaxed">
                Connecting curious minds with world-class experts since 2020. Making education accessible, personalized, and engaging for everyone, everywhere.
              </p>
              <div className="flex gap-4">
                {[1, 2, 3].map((_, i) => (
                  <a key={i} className="size-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary transition-colors" href="#">
                     {/* SVG icons simplified for brevity, assume similar to original */}
                     <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                  </a>
                ))}
              </div>
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
    </div>
  );
}

export default HomePage;
