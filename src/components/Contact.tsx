import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, CheckCircle, Navigation, Compass } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Please provide your name.';
    if (!formData.subject.trim()) tempErrors.subject = 'Subject line is required.';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = 'Invalid email structure.';
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Please specify your message.';
    } else if (formData.message.trim().length < 15) {
      tempErrors.message = 'Inquiry must be at least 15 characters long.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        // Save to localStorage
        const existingMessages = JSON.parse(localStorage.getItem('musa_contact_messages') || '[]');
        const newMessage = {
          id: `msg-${Date.now()}`,
          ...formData,
          date: new Date().toLocaleString()
        };
        localStorage.setItem('musa_contact_messages', JSON.stringify([...existingMessages, newMessage]));
      }, 1200);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setSubmitted(false);
  };

  return (
    <div id="contact-view" className="bg-[#050a12] text-white min-h-screen pt-32 pb-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2dd4ff] font-mono bg-cyan-950/40 border border-cyan-800/30 px-3.5 py-1 rounded-full">
            CONNECT WITH US
          </span>
          <h1 className="text-4xl sm:text-5xl font-black font-sans tracking-tight">
            We are Here to Help
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Reach out to our communications department in Bannu. Whether you are seeking regional prices, wholesale accounts, or local career tracks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Coordinates details */}
          <div className="lg:col-span-5 space-y-10 text-left">
            <div className="space-y-4">
              <span className="text-xs font-mono text-[#46f08a] uppercase font-bold tracking-widest">
                OFFICE LOCATION & CONTACT
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Headquarters
              </h2>
              <p className="text-xs text-gray-400 font-sans leading-relaxed">
                Our central production facility supports regional distribution teams 24 hours a day. Drop in or call to coordinate.
              </p>
            </div>

            {/* Coordinates Cards */}
            <div className="grid grid-cols-1 gap-6 text-sm font-sans">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-950 border border-gray-900 rounded-xl text-[#2dd4ff]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-xs">MUSA Bottling Factory</h4>
                  <p className="text-[#46f08a] text-[10px] font-mono mt-0.5">ESTATE COORDINATE PIN</p>
                  <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                    Plot #24-28, Industrial Estate Area, Bannu, KPK, Pakistan.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-950 border border-gray-900 rounded-xl text-[#46f08a]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-xs">Email Correspondence</h4>
                  <p className="text-[10px] text-gray-500 font-mono mt-0.5">DIRECT CHANNELS</p>
                  <p className="text-gray-400 text-xs mt-1">
                    General: <a href="mailto:contact@musasodawater.com" className="hover:text-[#2dd4ff] underline">contact@musasodawater.com</a><br />
                    Partners: <a href="mailto:partners@musasodawater.com" className="hover:text-[#2dd4ff] underline">partners@musasodawater.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-950 border border-gray-900 rounded-xl text-yellow-500">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-xs">Phone Directories</h4>
                  <p className="text-[10px] text-gray-500 font-mono mt-0.5">HOTLINES</p>
                  <p className="text-gray-400 text-xs mt-1">
                    Corporate Office: +92 (928) 613200<br />
                    Wholesale Sales: +92 (300) 5712101
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-950 border border-gray-900 rounded-xl text-indigo-400">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white uppercase tracking-wider text-xs">Work Hours</h4>
                  <p className="text-[10px] text-gray-500 font-mono mt-0.5">STANDARD INTERVALS</p>
                  <p className="text-gray-400 text-xs mt-1">
                    Monday – Saturday: 08:30 AM – 06:00 PM (GMT+5)<br />
                    Sundays: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Geographical map vector representation */}
            <div id="factory-map-diagram" className="border border-gray-900 bg-gray-950 rounded-2xl p-6 shadow-indigo-950/20 shadow-lg flex flex-col justify-between h-44 relative overflow-hidden group select-none">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xxs font-mono text-[#2dd4ff]">BANNU MAP PLOT</p>
                  <p className="text-xs font-bold text-white">32.986° N, 70.603° E</p>
                </div>
                <Navigation className="h-4 w-4 text-[#46f08a] animate-pulse" />
              </div>

              {/* abstract mapping dots */}
              <div className="flex flex-col space-y-1.5 opacity-30 mt-2">
                <div className="w-full bg-gray-900 h-1 rounded" />
                <div className="w-11/12 bg-gray-900 h-1 rounded" />
                <div className="w-10/12 bg-emerald-500/40 h-1.5 rounded relative flex items-center">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#46f08a] border-2 border-slate-900 absolute right-4 animate-ping" />
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-gray-900 pt-3 text-xxs font-mono text-gray-500">
                <span className="flex items-center"><Compass className="h-3 w-3 mr-1" /> Indus Highway Route</span>
                <span className="text-[#46f08a] font-bold">MUSA PLANT</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form box */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-[#070e17] border-2 border-emerald-500/20 rounded-3xl p-8 sm:p-12 text-center shadow-2xl space-y-6">
                <div className="w-16 h-16 bg-emerald-950/40 border border-emerald-500/40 text-emerald-400 rounded-full flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle className="h-8 w-8" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                  <p className="text-xs text-gray-400 font-sans max-w-sm mx-auto leading-relaxed">
                    Thank you <span className="text-white font-semibold">{formData.name}</span>. Your message regarding <span className="text-white font-semibold">"{formData.subject}"</span> has been captured.
                  </p>
                </div>

                <div className="border-t border-gray-900 py-4 max-w-sm mx-auto text-xxs text-gray-500 font-mono space-y-1">
                  <p>Inquiry ID: MSG-{Date.now().toString().slice(-6)}</p>
                  <p>Expected Response: Within one business afternoon.</p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button
                    onClick={handleReset}
                    className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg px-6 py-2.5 text-xs font-semibold transition cursor-pointer"
                  >
                    Send Another Message
                  </button>
                  <a
                    href={`mailto:contact@musasodawater.com?subject=${formData.subject}&body=Hello MUSA Team,%0A%0A${formData.message}%0A%0ARegards,%0A${formData.name}`}
                    className="bg-gradient-to-r from-[#2dd4ff] to-[#46f08a] text-black text-xs font-bold rounded-lg px-6 py-2.5 flex items-center justify-center transition shadow-lg"
                  >
                    Standard Mail Backup
                  </a>
                </div>
              </div>
            ) : (
              <form
                id="contact-form"
                onSubmit={handleSubmit}
                className="bg-[#070e17] border border-gray-900 rounded-3xl p-6 sm:p-10 shadow-2xl text-left space-y-6"
              >
                <div className="text-left space-y-1">
                  <h3 className="text-lg font-bold text-white">Submit Secure Message</h3>
                  <p className="text-xxs text-gray-500 font-mono uppercase">MUSA Direct Office Intake</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-400 font-mono uppercase tracking-wider block">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Musa Khan"
                      className={`w-full bg-gray-950 border ${errors.name ? 'border-red-500' : 'border-gray-850'} rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-[#2dd4ff] transition-all`}
                    />
                    {errors.name && <p className="text-[10px] text-red-500 font-mono">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-gray-400 font-mono uppercase tracking-wider block">Direct Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. musa@example.com"
                      className={`w-full bg-gray-950 border ${errors.email ? 'border-red-500' : 'border-gray-850'} rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-[#2dd4ff] transition-all`}
                    />
                    {errors.email && <p className="text-[10px] text-red-500 font-mono">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-gray-400 font-mono uppercase tracking-wider block">Inquiry Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Feedback about Lemon Zest fizziness"
                    className={`w-full bg-gray-950 border ${errors.subject ? 'border-red-500' : 'border-gray-850'} rounded-lg px-4 py-3 text-xs text-white focus:outline-none focus:border-[#2dd4ff] transition-all`}
                  />
                  {errors.subject && <p className="text-[10px] text-red-500 font-mono">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-gray-400 font-mono uppercase tracking-wider block">Write Message *</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your request in full detail. If you are reporting a batch issue, please supply date stamp and location."
                    className={`w-full bg-gray-950 border ${errors.message ? 'border-red-500' : 'border-gray-850'} rounded-lg p-4 text-xs text-white focus:outline-none focus:border-[#2dd4ff] transition-all font-sans`}
                  />
                  {errors.message && <p className="text-[10px] text-red-500 font-mono">{errors.message}</p>}
                </div>

                {/* Buttons trigger */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#2dd4ff] to-[#46f08a] text-black font-extrabold uppercase tracking-widest py-4 rounded-xl text-xs transition duration-300 transform hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-50 flex items-center justify-center cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center space-x-2">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Transmission routing validation...</span>
                      </span>
                    ) : 'Transmit Secure Message'}
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
