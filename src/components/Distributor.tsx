import React, { useState, useEffect } from 'react';
import { ShieldCheck, Truck, BarChart3, MapPin, Mail, Phone, Calendar, Sparkles } from 'lucide-react';

export const Distributor: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    city: '',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Read URL query params on mount to auto-fill interest messages
  useEffect(() => {
    const handleQueryParams = () => {
      const hash = window.location.hash;
      const subjectMatch = hash.match(/[?&]subject=([^&]+)/);
      if (subjectMatch && subjectMatch[1]) {
        const decodedSubject = decodeURIComponent(subjectMatch[1]);
        setFormData(prev => ({
          ...prev,
          message: `Interested in Partnering with MUSA. Specifically looking into details for: ${decodedSubject}.\n\nPlease supply wholesale pricing sheets.`
        }));
      }
    };
    handleQueryParams();
    window.addEventListener('hashchange', handleQueryParams);
    return () => window.removeEventListener('hashchange', handleQueryParams);
  }, []);

  const benefits = [
    {
      icon: <BarChart3 className="h-6 w-6 text-[#2dd4ff]" />,
      title: 'Strong Profitable Margins',
      desc: 'We support highly competitive wholesale and retail price matrixes, ensuring sustainable regional payouts.'
    },
    {
      icon: <Truck className="h-6 w-6 text-[#46f08a]" />,
      title: 'Supply & Transport Continuity',
      desc: 'With active bottling lanes inside the Bannu Industrial Area, we maintain predictable shipment cycles.'
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-yellow-400" />,
      title: 'Marketing & POS Collateral',
      desc: 'Get full access to MUSA banners, flyers, high-grain branded coolers, and local promotional support.'
    },
    {
      icon: <Sparkles className="h-6 w-6 text-purple-400" />,
      title: 'Exclusive Territories',
      desc: 'We map singular distributor scopes per city quadrant, protecting you against retail price under-cutting.'
    }
  ];

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) tempErrors.fullName = 'Full name is required.';
    if (!formData.businessName.trim()) tempErrors.businessName = 'Business name is required.';
    if (!formData.city.trim()) tempErrors.city = 'City or Area is required.';
    
    // Pakistani/General Phone format check
    const phoneClean = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required.';
    } else if (phoneClean.length < 10) {
      tempErrors.phone = 'Please provide a valid active contact number.';
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = 'Please specify a proper email format.';
    }

    if (!formData.message.trim()) tempErrors.message = 'Please provide a brief message of your intent.';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error inline as they type
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate slow API network request
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        // Persist local inquiry
        const existingInquiries = JSON.parse(localStorage.getItem('musa_distributors') || '[]');
        const newInquiry = {
          id: `dist-${Date.now()}`,
          ...formData,
          date: new Date().toLocaleString()
        };
        localStorage.setItem('musa_distributors', JSON.stringify([...existingInquiries, newInquiry]));
      }, 1200);
    }
  };

  const handleFormReset = () => {
    setFormData({
      fullName: '',
      businessName: '',
      city: '',
      phone: '',
      email: '',
      message: ''
    });
    setSubmitted(false);
  };

  return (
    <div id="distributor-view" className="bg-[#050a12] text-white min-h-screen pt-32 pb-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2dd4ff] font-mono bg-cyan-950/40 border border-cyan-800/30 px-3.5 py-1 rounded-full">
            DISTRIBUTION PARTNERSHIPS
          </span>
          <h1 className="text-4xl sm:text-5xl font-black font-sans tracking-tight">
            Become a MUSA Distributor
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            MUSA Soda Water is scaling rapidly. Formulate steady wholesale streams, claim territory monopolies, and join forces with our Bannu-grown premium brand.
          </p>
        </div>

        {/* Benefits & Registration Split */}
        <div id="distributor-content-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Benefits details */}
          <div className="lg:col-span-5 space-y-10 text-left">
            <div className="space-y-4">
              <span className="text-xs font-mono text-[#46f08a] uppercase font-bold tracking-widest">
                PARTNER INCENTIVES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Why partner with us?
              </h2>
              <p className="text-xs text-gray-500 leading-relaxed">
                We design our distribution frameworks with a deep focus on wholesale economics. That means honest margins, consistent delivery times, and strict regional protections.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {benefits.map((ben, idx) => (
                <div key={idx} className="flex space-x-4 bg-[#070e17] border border-gray-905 p-5 rounded-2xl shadow-md">
                  <div className="p-3 bg-gray-950 rounded-xl border border-gray-800 h-12 w-12 flex items-center justify-center shrink-0">
                    {ben.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">{ben.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed font-sans">{ben.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Form Panel */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-[#070e17] border-2 border-emerald-500/20 rounded-3xl p-8 sm:p-12 text-center shadow-2xl space-y-6">
                <div className="w-16 h-16 bg-emerald-950/40 border border-emerald-500/40 text-emerald-400 rounded-full flex items-center justify-center mx-auto animate-bounce">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Application Received!</h3>
                  <p className="text-xs text-gray-400 font-sans max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.fullName}</span> representing <span className="text-white font-semibold">{formData.businessName}</span>. Your inquiry for <span className="text-white font-semibold">{formData.city}</span> has been logged under ID: <span className="text-[#2dd4ff] font-mono font-bold">MUSD-{Date.now().toString().slice(-6)}</span>.
                  </p>
                </div>

                <div className="border-t border-gray-900 py-4 max-w-sm mx-auto text-xxs text-gray-500 font-mono space-y-1">
                  <p>Inquiry Date: {new Date().toLocaleDateString()}</p>
                  <p>Territory Target: {formData.city}</p>
                  <p>Our response window: Next 24 business hours.</p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button
                    onClick={handleFormReset}
                    className="bg-gray-900 text-white rounded-lg px-6 py-2.5 text-xs font-semibold hover:bg-gray-800 transition shadow cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                  <a
                    href={`mailto:partners@musasodawater.com?subject=Wholesale Application: ${formData.businessName}&body=Full Name: ${formData.fullName}%0ACity: ${formData.city}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`}
                    className="bg-gradient-to-r from-[#2dd4ff] to-[#46f08a] text-black text-xs font-bold rounded-lg px-6 py-2.5 flex items-center justify-center transition shadow-lg hover:shadow-cyan-400/15"
                  >
                    Open Mail Fallback
                  </a>
                </div>
              </div>
            ) : (
              <form
                id="distributor-form"
                onSubmit={handleSubmit}
                className="bg-[#070e17] border border-gray-900 rounded-3xl p-6 sm:p-10 shadow-2xl text-left space-y-6 relative"
              >
                <div className="text-left space-y-1">
                  <h3 className="text-lg font-bold text-white">Wholesale Application</h3>
                  <p className="text-xxs text-gray-500 font-mono uppercase">MUSA Official Intake Terminal</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-400 font-mono uppercase tracking-wider block">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. Musa Khan"
                      className={`w-full bg-gray-950 border ${errors.fullName ? 'border-red-500' : 'border-gray-850'} rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-[#2dd4ff] transition-all`}
                    />
                    {errors.fullName && <p className="text-[10px] text-red-500 font-mono">{errors.fullName}</p>}
                  </div>

                  {/* Business Name */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-400 font-mono uppercase tracking-wider block">Business Name *</label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      placeholder="e.g. Musa & Sons Distribution"
                      className={`w-full bg-gray-950 border ${errors.businessName ? 'border-red-500' : 'border-gray-850'} rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-[#2dd4ff] transition-all`}
                    />
                    {errors.businessName && <p className="text-[10px] text-red-500 font-mono">{errors.businessName}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* City/Area */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-400 font-mono uppercase tracking-wider block">City / Target Area *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="e.g. Bannu, Peshawar"
                      className={`w-full bg-gray-950 border ${errors.city ? 'border-red-500' : 'border-gray-850'} rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-[#2dd4ff] transition-all`}
                    />
                    {errors.city && <p className="text-[10px] text-red-500 font-mono">{errors.city}</p>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-400 font-mono uppercase tracking-wider block">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 0300-1234567"
                      className={`w-full bg-gray-950 border ${errors.phone ? 'border-red-500' : 'border-gray-850'} rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-[#2dd4ff] transition-all`}
                    />
                    {errors.phone && <p className="text-[10px] text-red-500 font-mono">{errors.phone}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-400 font-mono uppercase tracking-wider block">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. contact@business.com"
                      className={`w-full bg-gray-950 border ${errors.email ? 'border-red-500' : 'border-gray-850'} rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-[#2dd4ff] transition-all`}
                    />
                    {errors.email && <p className="text-[10px] text-red-500 font-mono">{errors.email}</p>}
                  </div>
                </div>

                {/* Message / Inquiry detail */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-gray-400 font-mono uppercase tracking-wider block">Describe Your Experience & Territories *</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Briefly explain your active coverage, current cold storage capacity, and which MUSA flavor lineup you seek first."
                    className={`w-full bg-gray-950 border ${errors.message ? 'border-red-500' : 'border-gray-850'} rounded-lg p-4 text-xs text-white focus:outline-none focus:border-[#2dd4ff] transition-all font-sans`}
                  />
                  {errors.message && <p className="text-[10px] text-red-500 font-mono">{errors.message}</p>}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#2dd4ff] to-[#46f08a] text-black font-extrabold uppercase tracking-widest py-4 rounded-xl text-xs transition duration-300 transform hover:-translate-y-0.5 hover:shadow-xl hover:shadow-cyan-400/10 disabled:opacity-50 flex items-center justify-center cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center space-x-2">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Validating intake parameters...</span>
                      </span>
                    ) : 'Submit Partnership Application'}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
