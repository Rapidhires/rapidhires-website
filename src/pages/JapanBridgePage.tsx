import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  Building2, 
  Globe, 
  Users, 
  CheckCircle2, 
  MapPin, 
  Mail, 
  Phone,
  FileText,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { JAPAN_CONTENT_EN, JAPAN_CONTENT_JA, JapanBridgeContent } from '../data/japanBridgeContent';

export const JapanBridgePage: React.FC = () => {
  // Determine default language (detect browser language if Japanese, else English)
  const [lang, setLang] = useState<'ja' | 'en'>(() => {
    if (typeof navigator !== 'undefined' && navigator.language && navigator.language.toLowerCase().startsWith('ja')) {
      return 'ja';
    }
    return 'en';
  });

  const content: JapanBridgeContent = lang === 'ja' ? JAPAN_CONTENT_JA : JAPAN_CONTENT_EN;

  // FAQ expanded state
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // Form State
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    jobTitle: '',
    email: '',
    country: lang === 'ja' ? '日本 (Japan)' : 'Japan',
    industry: '自動車・モビリティ部品 (Automotive & Mobility)',
    collabType: '技術人材パイロット検証 (Technical Talent Pilot)',
    role: '',
    volume: '',
    timeline: '',
    message: '',
    privacyAcknowledged: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

  // Scroll to section helper
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.privacyAcknowledged) {
      alert(lang === 'ja' ? '個人情報の取り扱いへの同意をご確認ください。' : 'Please check the privacy acknowledgement.');
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    const ref = `JP-DISC-${Date.now().toString(36).toUpperCase()}`;
    setReferenceCode(ref);

    // Save to local storage for audit
    try {
      const existing = JSON.parse(localStorage.getItem('rapidhire_japan_enquiries') || '[]');
      existing.unshift({
        ...formState,
        ref,
        lang,
        createdAt: new Date().toISOString()
      });
      localStorage.setItem('rapidhire_japan_enquiries', JSON.stringify(existing));
    } catch (err) {
      console.error(err);
    }

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="bg-[#F7F7F3] text-[#29343B] min-h-screen selection:bg-[#C45238] selection:text-white" style={{ fontFamily: lang === 'ja' ? "'Calibri', 'Noto Sans JP', 'Hiragino Sans', 'Meiryo', sans-serif" : "'Calibri', 'Carlito', sans-serif" }}>
      
      {/* ========================================================
          SECTION A: JAPAN BRIDGE MASTHEAD & ANCHOR NAVIGATION
         ======================================================== */}
      <header className="sticky top-0 z-50 bg-[#172C3C] text-white border-b border-[#2A4154] shadow-sm">
        {/* Top utility strip */}
        <div className="bg-[#0F1E2A] text-steel-400 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-[#1D3244] font-sans antialiased">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 text-steel-200 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#C45238] inline-block shadow-sm shadow-[#C45238]/50"></span>
                <span>{lang === 'ja' ? '日印産業人材連携デスク ｜ India registered Enterprise' : 'India registered Enterprise ｜ Japan Collaboration Desk'}</span>
              </span>
              <span className="hidden md:inline text-steel-600">|</span>
              <span className="hidden md:inline text-steel-400 font-normal">
                {lang === 'ja' ? '浜松・静岡・東海地域および全国の製造業・技術企業の皆様へ' : 'Focus on Hamamatsu, Shizuoka & Japanese Manufacturing Centers'}
              </span>
            </div>
            <div className="flex items-center gap-3 font-sans">
              <Link to="/" className="text-steel-400 hover:text-white transition-colors text-xs font-medium">
                &larr; {content.nav.backToMain}
              </Link>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Link to="/" className="w-9 h-9 bg-[#C45238] flex items-center justify-center font-bold text-white text-sm font-mono border border-[#9E3922]">
                RH
              </Link>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-2">
                  <span className="font-bold text-xl text-white uppercase font-mono tracking-wider leading-none">
                    RAPIDHIRE
                  </span>
                  <span className="text-[11px] font-mono text-[#E58872] uppercase tracking-wider font-semibold">
                    JAPAN BRIDGE
                  </span>
                </div>
                <span className="text-[10px] tracking-eyebrow text-steel-400 font-mono mt-1 uppercase">
                  {lang === 'ja' ? '日印ものづくり人材共創プログラム' : 'India–Japan Workforce Collaboration'}
                </span>
              </div>
            </div>

            {/* Desktop Anchor Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 text-xs uppercase tracking-wider font-mono">
              <button onClick={() => scrollTo('approach')} className="text-steel-300 hover:text-white transition-colors">
                {content.nav.approach}
              </button>
              <button onClick={() => scrollTo('partnership')} className="text-steel-300 hover:text-white transition-colors">
                {content.nav.partnership}
              </button>
              <button onClick={() => scrollTo('pilot')} className="text-steel-300 hover:text-white transition-colors">
                {content.nav.pilot}
              </button>
              <button onClick={() => scrollTo('about')} className="text-steel-300 hover:text-white transition-colors">
                {content.nav.about}
              </button>
              <button onClick={() => scrollTo('inquiry')} className="text-steel-300 hover:text-white transition-colors">
                {content.nav.contact}
              </button>
            </nav>

            {/* Language Switch & CTA Button */}
            <div className="flex items-center gap-4 font-mono">
              
              {/* Language Switch: 日本語 | EN */}
              <div className="inline-flex items-center border border-[#2A4154] bg-[#0F1E2A] p-0.5 text-xs">
                <button
                  onClick={() => setLang('ja')}
                  className={`px-2.5 py-1 text-[11px] transition-colors ${lang === 'ja' ? 'bg-[#C45238] text-white font-bold' : 'text-steel-400 hover:text-white'}`}
                  aria-label="Switch to Japanese"
                >
                  日本語
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`px-2.5 py-1 text-[11px] transition-colors ${lang === 'en' ? 'bg-[#C45238] text-white font-bold' : 'text-steel-400 hover:text-white'}`}
                  aria-label="Switch to English"
                >
                  EN
                </button>
              </div>

              {/* Primary Consultation Trigger */}
              <button
                onClick={() => scrollTo('inquiry')}
                className="hidden sm:inline-flex items-center gap-2 bg-[#C45238] hover:bg-[#B0432B] text-white text-xs font-semibold uppercase tracking-wider px-4 py-2.5 transition-colors border border-[#9E3922] shadow-sm"
              >
                <span>{content.nav.ctaButton}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ========================================================
          SECTION B: HERO (Bilingual Monograph)
         ======================================================== */}
      <section className="bg-[#172C3C] text-white py-16 lg:py-24 border-b border-[#2A4154] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Heading & Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0F1E2A] border border-[#2A4154] text-steel-300 text-[11px] font-mono uppercase tracking-eyebrow">
                <span className="w-1.5 h-1.5 bg-[#C45238]"></span>
                <span>{content.hero.eyebrow}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.18]">
                {content.hero.heading}
              </h1>

              <p className="text-lg text-[#E58872] font-medium leading-snug">
                {content.hero.subheading}
              </p>

              <p className="text-sm sm:text-base text-steel-300 leading-relaxed max-w-2xl font-sans">
                {content.hero.copy}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 font-mono">
                <button
                  onClick={() => scrollTo('inquiry')}
                  className="inline-flex items-center justify-center gap-2 bg-[#C45238] hover:bg-[#B0432B] text-white text-xs font-semibold uppercase tracking-wider px-6 py-4 transition-colors border border-[#9E3922] shadow-sm"
                >
                  <span>{content.hero.primaryCta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollTo('partnership')}
                  className="inline-flex items-center justify-center gap-2 bg-[#0F1E2A] hover:bg-[#1D3244] text-steel-200 text-xs font-semibold uppercase tracking-wider px-6 py-4 border border-[#2A4154] hover:border-steel-400 transition-colors"
                >
                  <span>{content.hero.secondaryCta}</span>
                  <ChevronDown className="w-4 h-4 text-steel-400" />
                </button>
              </div>

              {/* Three Value Pillars */}
              <div className="pt-6 border-t border-[#2A4154] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono text-steel-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#C45238]"></span>
                  <span>{content.hero.metaPill1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#C45238]"></span>
                  <span>{content.hero.metaPill2}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#C45238]"></span>
                  <span>{content.hero.metaPill3}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Documentary Photography */}
            <div className="lg:col-span-5">
              <div className="border border-[#2A4154] bg-[#0F1E2A] p-3 shadow-2xl relative">
                
                <div className="flex items-center justify-between text-[10px] font-mono text-steel-400 mb-2 border-b border-[#1D3244] pb-2">
                  <span className="uppercase tracking-wider text-[#C45238] font-bold">[{content.hero.provenanceTag}]</span>
                  <span>HAMAMATSU × HYDERABAD</span>
                </div>

                <div className="overflow-hidden relative aspect-[4/3] bg-black border border-[#1D3244]">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
                    alt="Precision technician performing quality inspection on specialized industrial equipment"
                    className="w-full h-full object-cover filter contrast-[1.08] brightness-90 grayscale-[20%]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E2A] via-transparent to-transparent"></div>

                  <div className="absolute bottom-3 left-3 right-3 text-xs bg-[#0F1E2A]/95 p-3 border border-[#2A4154]">
                    <div className="flex items-center justify-between text-[10px] font-mono text-steel-400 mb-1">
                      <span className="uppercase text-[#C45238] font-semibold">{lang === 'ja' ? '実務能力・現場適性の検証' : 'Practical Capability Verification'}</span>
                      <span>5-AXIS / CAD / TRADES</span>
                    </div>
                    <p className="text-steel-200 text-xs font-sans">
                      {content.hero.provenanceDesc}
                    </p>
                  </div>
                </div>

                <div className="mt-2 pt-2 border-t border-[#1D3244] text-[11px] font-mono text-steel-400 flex items-center justify-between">
                  <span>{lang === 'ja' ? '参画パートナー共同設計型' : 'Collaborative Co-Design Framework'}</span>
                  <span className="text-[#E58872]">{lang === 'ja' ? '事前内定不要' : 'No Upfront Commitment'}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION C: BUSINESS CHALLENGES WE WANT TO EXPLORE
         ======================================================== */}
      <section id="approach" className="py-20 bg-[#F7F7F3] border-b border-steel-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="text-[11px] font-mono uppercase tracking-eyebrow text-[#C45238] font-bold mb-1">
              [{content.challenges.eyebrow}]
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#172C3C] tracking-tight mb-3">
              {content.challenges.heading}
            </h2>
            <p className="text-sm text-graphite-600 leading-relaxed font-sans">
              {content.challenges.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-steel-300 divide-y md:divide-y-0 md:divide-x divide-steel-300 bg-white shadow-sm">
            
            <div className="p-8 space-y-3">
              <span className="text-xs font-mono text-[#C45238] font-bold block">
                {content.challenges.challenge1Title}
              </span>
              <h3 className="text-base font-bold text-[#172C3C]">
                {content.challenges.challenge1Subtitle}
              </h3>
              <p className="text-xs text-graphite-600 leading-relaxed font-sans">
                {content.challenges.challenge1Body}
              </p>
            </div>

            <div className="p-8 space-y-3">
              <span className="text-xs font-mono text-[#C45238] font-bold block">
                {content.challenges.challenge2Title}
              </span>
              <h3 className="text-base font-bold text-[#172C3C]">
                {content.challenges.challenge2Subtitle}
              </h3>
              <p className="text-xs text-graphite-600 leading-relaxed font-sans">
                {content.challenges.challenge2Body}
              </p>
            </div>

            <div className="p-8 space-y-3">
              <span className="text-xs font-mono text-[#C45238] font-bold block">
                {content.challenges.challenge3Title}
              </span>
              <h3 className="text-base font-bold text-[#172C3C]">
                {content.challenges.challenge3Subtitle}
              </h3>
              <p className="text-xs text-graphite-600 leading-relaxed font-sans">
                {content.challenges.challenge3Body}
              </p>
            </div>

          </div>

          <div className="mt-4 text-right">
            <span className="text-[11px] font-mono text-steel-500">
              {lang === 'ja' ? '* パートナー企業様と共同で検証・解決を目指す具体的テーマの例示です。' : '* Illustrative collaboration themes to be calibrated jointly with participating employer partners.'}
            </span>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION D: WHAT RAPIDHIRE BRINGS (Capabilities)
         ======================================================== */}
      <section className="py-20 bg-white border-b border-steel-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-5">
              <div className="text-[11px] font-mono uppercase tracking-eyebrow text-[#C45238] font-bold">
                [{content.capabilities.eyebrow}]
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#172C3C] tracking-tight">
                {content.capabilities.heading}
              </h2>
              <p className="text-sm text-graphite-600 leading-relaxed font-sans">
                {content.capabilities.intro}
              </p>
              <div className="p-4 bg-[#F7F7F3] border border-steel-300 text-xs text-graphite-600 font-mono">
                {content.capabilities.disclaimer}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3 font-mono">
              {[
                { title: content.capabilities.cap1Title, desc: content.capabilities.cap1Desc, code: 'CAP-01' },
                { title: content.capabilities.cap2Title, desc: content.capabilities.cap2Desc, code: 'CAP-02' },
                { title: content.capabilities.cap3Title, desc: content.capabilities.cap3Desc, code: 'CAP-03' },
                { title: content.capabilities.cap4Title, desc: content.capabilities.cap4Desc, code: 'CAP-04' },
                { title: content.capabilities.cap5Title, desc: content.capabilities.cap5Desc, code: 'CAP-05' },
              ].map((c) => (
                <div key={c.code} className="p-5 bg-[#F7F7F3] border border-steel-300 hover:border-[#172C3C] transition-colors">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-bold text-[#172C3C]">{c.title}</span>
                    <span className="text-[#C45238] text-[10px] font-mono">{c.code}</span>
                  </div>
                  <p className="text-xs text-graphite-600 leading-relaxed font-sans">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION E: INDUSTRY FIT FOR HAMAMATSU
         ======================================================== */}
      <section className="py-20 bg-[#F7F7F3] border-b border-steel-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-steel-300">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-eyebrow text-[#C45238] font-bold mb-1">
                [{content.industries.eyebrow}]
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#172C3C] tracking-tight">
                {content.industries.heading}
              </h2>
            </div>
            <p className="text-xs font-mono text-graphite-500 mt-2 md:mt-0 max-w-sm">
              {content.industries.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 border border-steel-300 shadow-sm space-y-2">
              <span className="text-[10px] font-mono uppercase text-[#C45238] font-bold block">[HAM-IND-01]</span>
              <h3 className="text-base font-bold text-[#172C3C]">{content.industries.ind1Title}</h3>
              <p className="text-xs text-graphite-600 leading-relaxed font-sans">{content.industries.ind1Desc}</p>
            </div>

            <div className="bg-white p-6 border border-steel-300 shadow-sm space-y-2">
              <span className="text-[10px] font-mono uppercase text-[#C45238] font-bold block">[HAM-IND-02]</span>
              <h3 className="text-base font-bold text-[#172C3C]">{content.industries.ind2Title}</h3>
              <p className="text-xs text-graphite-600 leading-relaxed font-sans">{content.industries.ind2Desc}</p>
            </div>

            <div className="bg-white p-6 border border-steel-300 shadow-sm space-y-2">
              <span className="text-[10px] font-mono uppercase text-[#C45238] font-bold block">[HAM-IND-03]</span>
              <h3 className="text-base font-bold text-[#172C3C]">{content.industries.ind3Title}</h3>
              <p className="text-xs text-graphite-600 leading-relaxed font-sans">{content.industries.ind3Desc}</p>
            </div>

            <div className="bg-white p-6 border border-steel-300 shadow-sm space-y-2">
              <span className="text-[10px] font-mono uppercase text-[#C45238] font-bold block">[HAM-IND-04]</span>
              <h3 className="text-base font-bold text-[#172C3C]">{content.industries.ind4Title}</h3>
              <p className="text-xs text-graphite-600 leading-relaxed font-sans">{content.industries.ind4Desc}</p>
            </div>
          </div>

          {/* Railway exploration callout */}
          <div className="p-6 bg-white border border-steel-300 border-l-4 border-l-[#C45238] shadow-sm">
            <h4 className="text-sm font-bold text-[#172C3C] mb-1 font-mono uppercase">
              {content.industries.railwayTitle}
            </h4>
            <p className="text-xs text-graphite-700 leading-relaxed font-sans mb-3">
              {content.industries.railwayCopy}
            </p>
            <p className="text-[11px] font-mono text-steel-500">
              {content.industries.jointSelectionNote}
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION F: HOW THE PARTNERSHIP WORKS (The Core Section)
         ======================================================== */}
      <section id="partnership" className="py-20 bg-white border-b border-steel-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="text-[11px] font-mono uppercase tracking-eyebrow text-[#C45238] font-bold mb-1">
              [{content.partnership.eyebrow}]
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#172C3C] tracking-tight mb-2">
              {content.partnership.heading}
            </h2>
            <p className="text-xs sm:text-sm text-graphite-600 leading-relaxed font-sans">
              {lang === 'ja'
                ? '日印双方の強みを活かし、現場が納得できる人材採用と定着のプロセスを共同で確立します。'
                : 'A transparent division of responsibilities designed to leverage respective strengths without ambiguity.'}
            </p>
          </div>

          {/* 3-Column Desktop Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 border border-steel-300 divide-y lg:divide-y-0 lg:divide-x divide-steel-300 bg-[#F7F7F3] shadow-sm">
            
            {/* Column 1: Rapidhire */}
            <div className="p-8 flex flex-col justify-between bg-white">
              <div>
                <div className="text-[11px] font-mono text-[#C45238] font-bold mb-1 uppercase">
                  PARTNER ROLE 01
                </div>
                <h3 className="text-lg font-bold text-[#172C3C] mb-1">
                  {content.partnership.col1Title}
                </h3>
                <p className="text-xs font-mono text-graphite-500 mb-6 pb-3 border-b border-steel-200">
                  {content.partnership.col1Subtitle}
                </p>
                <ul className="space-y-2.5 text-xs text-graphite-700 font-sans leading-relaxed">
                  {content.partnership.col1Points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#C45238] shrink-0 mt-1.5"></span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-steel-200 text-[10px] font-mono text-steel-500 uppercase">
                {lang === 'ja' ? '現地母集団形成・選考窓口' : 'India Sourcing & Vetting Core'}
              </div>
            </div>

            {/* Column 2: Japanese Employer */}
            <div className="p-8 flex flex-col justify-between bg-white">
              <div>
                <div className="text-[11px] font-mono text-[#C45238] font-bold mb-1 uppercase">
                  PARTNER ROLE 02
                </div>
                <h3 className="text-lg font-bold text-[#172C3C] mb-1">
                  {content.partnership.col2Title}
                </h3>
                <p className="text-xs font-mono text-graphite-500 mb-6 pb-3 border-b border-steel-200">
                  {content.partnership.col2Subtitle}
                </p>
                <ul className="space-y-2.5 text-xs text-graphite-700 font-sans leading-relaxed">
                  {content.partnership.col2Points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#172C3C] shrink-0 mt-1.5"></span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-steel-200 text-[10px] font-mono text-steel-500 uppercase">
                {lang === 'ja' ? '技術要件定義・現場受入' : 'Demand Definition & Plant Leadership'}
              </div>
            </div>

            {/* Column 3: Specialist Partners */}
            <div className="p-8 flex flex-col justify-between bg-white">
              <div>
                <div className="text-[11px] font-mono text-[#C45238] font-bold mb-1 uppercase">
                  PARTNER ROLE 03
                </div>
                <h3 className="text-lg font-bold text-[#172C3C] mb-1">
                  {content.partnership.col3Title}
                </h3>
                <p className="text-xs font-mono text-graphite-500 mb-6 pb-3 border-b border-steel-200">
                  {content.partnership.col3Subtitle}
                </p>
                <ul className="space-y-2.5 text-xs text-graphite-700 font-sans leading-relaxed">
                  {content.partnership.col3Points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-steel-400 shrink-0 mt-1.5"></span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-steel-200 text-[10px] font-mono text-steel-500 uppercase">
                {lang === 'ja' ? '教育・法務・在留資格支援' : 'Language, Legal & Visa Compliance'}
              </div>
            </div>

          </div>

          {/* Key closing statement */}
          <div className="mt-8 p-6 bg-[#172C3C] text-white text-center font-mono">
            <p className="text-sm font-semibold tracking-wide">
              {content.partnership.closingSentence}
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION G: THE PROPOSED PILOT (4-Stage Pathway)
         ======================================================== */}
      <section id="pilot" className="py-20 bg-[#F7F7F3] border-b border-steel-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="text-[11px] font-mono uppercase tracking-eyebrow text-[#C45238] font-bold mb-1">
              [{content.pilot.eyebrow}]
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#172C3C] tracking-tight mb-2">
              {content.pilot.heading}
            </h2>
            <p className="text-sm text-graphite-600 leading-relaxed font-sans">
              {content.pilot.intro}
            </p>
          </div>

          {/* 4-Stage Horizontal Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 border border-steel-300 divide-y md:divide-y-0 md:divide-x divide-steel-300 bg-white mb-10 shadow-sm">
            
            <div className="p-6 space-y-2">
              <span className="text-[11px] font-mono text-[#C45238] font-bold block">[PHASE 01]</span>
              <h4 className="text-sm font-bold text-[#172C3C] font-mono uppercase">{content.pilot.stage1Title}</h4>
              <p className="text-xs text-graphite-600 leading-relaxed font-sans">{content.pilot.stage1Desc}</p>
            </div>

            <div className="p-6 space-y-2">
              <span className="text-[11px] font-mono text-[#C45238] font-bold block">[PHASE 02]</span>
              <h4 className="text-sm font-bold text-[#172C3C] font-mono uppercase">{content.pilot.stage2Title}</h4>
              <p className="text-xs text-graphite-600 leading-relaxed font-sans">{content.pilot.stage2Desc}</p>
            </div>

            <div className="p-6 space-y-2">
              <span className="text-[11px] font-mono text-[#C45238] font-bold block">[PHASE 03]</span>
              <h4 className="text-sm font-bold text-[#172C3C] font-mono uppercase">{content.pilot.stage3Title}</h4>
              <p className="text-xs text-graphite-600 leading-relaxed font-sans">{content.pilot.stage3Desc}</p>
            </div>

            <div className="p-6 space-y-2">
              <span className="text-[11px] font-mono text-[#C45238] font-bold block">[PHASE 04]</span>
              <h4 className="text-sm font-bold text-[#172C3C] font-mono uppercase">{content.pilot.stage4Title}</h4>
              <p className="text-xs text-graphite-600 leading-relaxed font-sans">{content.pilot.stage4Desc}</p>
            </div>

          </div>

          {/* Pre-agreed metrics */}
          <div className="bg-white p-8 border border-steel-300 shadow-sm">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#172C3C] font-bold mb-4 pb-2 border-b border-steel-200">
              {content.pilot.metricsHeading}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs text-graphite-700 font-mono">
              {content.pilot.metrics.map((m, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2 bg-[#F7F7F3] border border-steel-200">
                  <Check className="w-3.5 h-3.5 text-[#C45238] shrink-0 mt-0.5" />
                  <span>{m}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] font-mono text-steel-500 mt-4 pt-3 border-t border-steel-200">
              {content.pilot.disclaimer}
            </p>
          </div>

          <div className="mt-8 text-center font-mono">
            <button
              onClick={() => scrollTo('inquiry')}
              className="inline-flex items-center gap-2 bg-[#C45238] hover:bg-[#B0432B] text-white text-xs font-semibold uppercase tracking-wider px-6 py-4 transition-colors border border-[#9E3922] shadow-sm"
            >
              <span>{content.pilot.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION H: CREDIBILITY & TRUST
         ======================================================== */}
      <section id="about" className="py-20 bg-white border-b border-steel-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-steel-300">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-eyebrow text-[#C45238] font-bold mb-1">
                [{content.trust.eyebrow}]
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#172C3C] tracking-tight">
                {content.trust.heading}
              </h2>
            </div>
            <p className="text-xs font-mono text-steel-500 mt-2 md:mt-0">
              {lang === 'ja' ? '確認可能な公的事実に基づく企業情報' : 'Evidence-based corporate milestones'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="p-6 bg-[#F7F7F3] border border-steel-300 space-y-2">
              <span className="text-[10px] font-sans uppercase text-[#C45238] font-bold block">[INDIA REGISTERED ENTERPRISE]</span>
              <h3 className="text-sm font-bold text-[#172C3C]">{content.trust.item1Title}</h3>
              <p className="text-xs text-graphite-600 leading-relaxed font-sans">{content.trust.item1Desc}</p>
            </div>

            <div className="p-6 bg-[#F7F7F3] border border-steel-300 space-y-2">
              <span className="text-[10px] font-mono uppercase text-[#C45238] font-bold block">[T-HUB RUBRIX WINNER]</span>
              <h3 className="text-sm font-bold text-[#172C3C]">{content.trust.item2Title}</h3>
              <p className="text-xs text-graphite-600 leading-relaxed font-sans">{content.trust.item2Desc}</p>
            </div>

            <div className="p-6 bg-[#F7F7F3] border border-steel-300 space-y-2">
              <span className="text-[10px] font-mono uppercase text-[#C45238] font-bold block">[TELANGANA SKILLED]</span>
              <h3 className="text-sm font-bold text-[#172C3C]">{content.trust.item3Title}</h3>
              <p className="text-xs text-graphite-600 leading-relaxed font-sans">{content.trust.item3Desc}</p>
            </div>

            <div className="p-6 bg-[#F7F7F3] border border-steel-300 space-y-2">
              <span className="text-[10px] font-mono uppercase text-[#C45238] font-bold block">[OPEN ARCHITECTURE]</span>
              <h3 className="text-sm font-bold text-[#172C3C]">{content.trust.item4Title}</h3>
              <p className="text-xs text-graphite-600 leading-relaxed font-sans">{content.trust.item4Desc}</p>
            </div>

            <div className="p-6 bg-[#F7F7F3] border border-steel-300 space-y-2">
              <span className="text-[10px] font-mono uppercase text-[#C45238] font-bold block">[ZERO CANDIDATE FEE]</span>
              <h3 className="text-sm font-bold text-[#172C3C]">{content.trust.item5Title}</h3>
              <p className="text-xs text-graphite-600 leading-relaxed font-sans">{content.trust.item5Desc}</p>
            </div>

            <div className="p-6 bg-[#F7F7F3] border border-steel-300 space-y-2">
              <span className="text-[10px] font-mono uppercase text-[#C45238] font-bold block">[24/7 WELFARE SUPPORT]</span>
              <h3 className="text-sm font-bold text-[#172C3C]">{content.trust.item6Title}</h3>
              <p className="text-xs text-graphite-600 leading-relaxed font-sans">{content.trust.item6Desc}</p>
            </div>
          </div>

          <div className="p-3 bg-white border border-steel-300 text-[11px] font-mono text-steel-500">
            {content.trust.disclaimer}
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION I: THE PARTNERSHIP ENQUIRY FORM
         ======================================================== */}
      <section id="inquiry" className="py-20 bg-[#F7F7F3] border-b border-steel-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="border-b border-steel-300 pb-6 mb-8 text-center sm:text-left">
            <div className="text-[11px] font-mono uppercase tracking-eyebrow text-[#C45238] font-bold mb-1">
              [{content.form.eyebrow}]
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#172C3C] tracking-tight mb-2">
              {content.form.heading}
            </h2>
            <p className="text-xs sm:text-sm text-graphite-600 leading-relaxed font-sans">
              {content.form.copy}
            </p>
          </div>

          {submitted ? (
            <div className="bg-white p-8 border border-steel-300 shadow-sm text-center font-mono">
              <div className="w-12 h-12 bg-[#172C3C] text-[#C45238] flex items-center justify-center mx-auto mb-4 border border-[#2A4154]">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div className="text-[11px] text-[#C45238] uppercase font-bold mb-1">[INQUIRY RECORDED]</div>
              <h3 className="text-xl font-bold text-[#172C3C] mb-2">{content.form.successHeading}</h3>
              <p className="text-xs text-steel-600 mb-4">
                REFERENCE CODE: <span className="text-[#C45238] font-bold">{referenceCode}</span>
              </p>
              <p className="text-xs text-graphite-600 max-w-lg mx-auto mb-6 leading-relaxed font-sans">
                {content.form.successBody}
              </p>

              <div className="bg-[#F7F7F3] p-4 border border-steel-300 text-left text-xs text-graphite-700 mb-6 space-y-1.5 font-mono">
                <div className="flex justify-between border-b border-steel-200 pb-1">
                  <span className="text-graphite-500">Company:</span>
                  <span className="font-semibold text-[#172C3C]">{formState.company}</span>
                </div>
                <div className="flex justify-between border-b border-steel-200 pb-1">
                  <span className="text-graphite-500">Contact Person:</span>
                  <span className="font-semibold text-[#172C3C]">{formState.name} ({formState.email})</span>
                </div>
                <div className="flex justify-between border-b border-steel-200 pb-1">
                  <span className="text-graphite-500">Target Role:</span>
                  <span className="font-semibold text-[#172C3C]">{formState.role}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-graphite-500">Collaboration Type:</span>
                  <span className="font-semibold text-[#172C3C]">{formState.collabType}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => setSubmitted(false)}
                  className="w-full sm:w-auto text-xs font-semibold uppercase tracking-wider px-5 py-2.5 bg-[#172C3C] text-white hover:bg-[#233B50]"
                >
                  {content.form.submitAnother}
                </button>
                <a
                  href="mailto:japan.desk@rapidhire.work"
                  className="w-full sm:w-auto text-xs font-semibold uppercase tracking-wider px-5 py-2.5 border border-steel-300 text-[#172C3C] hover:bg-white inline-flex items-center justify-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C45238]" />
                  <span>Email Japan Desk</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-10 border border-steel-300 shadow-sm space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono font-semibold text-[#172C3C] uppercase tracking-wider mb-1">
                    {content.form.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder={lang === 'ja' ? '例：山田 太郎' : 'e.g. Kenji Tanaka'}
                    className="w-full text-xs px-3 py-2 border border-steel-300 bg-[#F7F7F3] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono font-semibold text-[#172C3C] uppercase tracking-wider mb-1">
                    {content.form.companyLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    placeholder={lang === 'ja' ? '例：浜松精密機械株式会社' : 'e.g. Hamamatsu Precision Machinery Co., Ltd.'}
                    className="w-full text-xs px-3 py-2 border border-steel-300 bg-[#F7F7F3] focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono font-semibold text-[#172C3C] uppercase tracking-wider mb-1">
                    {content.form.jobTitleLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.jobTitle}
                    onChange={(e) => setFormState({ ...formState, jobTitle: e.target.value })}
                    placeholder={lang === 'ja' ? '例：生産技術部長 / 人事部長' : 'e.g. Head of Manufacturing / HR Director'}
                    className="w-full text-xs px-3 py-2 border border-steel-300 bg-[#F7F7F3] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono font-semibold text-[#172C3C] uppercase tracking-wider mb-1">
                    {content.form.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="tanaka@company.co.jp"
                    className="w-full text-xs px-3 py-2 border border-steel-300 bg-[#F7F7F3] focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono font-semibold text-[#172C3C] uppercase tracking-wider mb-1">
                    {content.form.countryLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.country}
                    onChange={(e) => setFormState({ ...formState, country: e.target.value })}
                    placeholder={lang === 'ja' ? '例：日本（静岡県浜松市）' : 'e.g. Japan (Hamamatsu, Shizuoka)'}
                    className="w-full text-xs px-3 py-2 border border-steel-300 bg-[#F7F7F3] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono font-semibold text-[#172C3C] uppercase tracking-wider mb-1">
                    {content.form.industryLabel}
                  </label>
                  <select
                    value={formState.industry}
                    onChange={(e) => setFormState({ ...formState, industry: e.target.value })}
                    className="w-full text-xs px-3 py-2 border border-steel-300 bg-[#F7F7F3] focus:bg-white font-mono"
                  >
                    <option value="自動車・モビリティ部品 (Automotive & Mobility)">自動車・モビリティ部品 (Automotive & Mobility)</option>
                    <option value="精密機械・金型・金属加工 (Precision Machinery & Tooling)">精密機械・金型・金属加工 (Precision Machinery & Tooling)</option>
                    <option value="電気・電子・制御機器 (Electrical & Electronics)">電気・電子・制御機器 (Electrical & Electronics)</option>
                    <option value="産業用ロボット・メカトロニクス (Industrial Robotics)">産業用ロボット・メカトロニクス (Industrial Robotics)</option>
                    <option value="設備保全・プラントメンテナンス (Equipment Maintenance)">設備保全・プラントメンテナンス (Equipment Maintenance)</option>
                    <option value="鉄道・高速鉄道関連 (Railway & High-Speed Rail)">鉄道・高速鉄道関連 (Railway & High-Speed Rail)</option>
                    <option value="その他製造業・技術サービス (Other Industrial)">その他製造業・技術サービス (Other Industrial)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono font-semibold text-[#172C3C] uppercase tracking-wider mb-1">
                    {content.form.collabTypeLabel}
                  </label>
                  <select
                    value={formState.collabType}
                    onChange={(e) => setFormState({ ...formState, collabType: e.target.value })}
                    className="w-full text-xs px-3 py-2 border border-steel-300 bg-[#F7F7F3] focus:bg-white font-mono"
                  >
                    <option value="技術人材パイロット検証 (Technical Talent Pilot)">技術人材パイロット検証 (Technical Talent Pilot)</option>
                    <option value="特定技能・エンジニア採用検討 (Direct Skilled Hiring)">特定技能・エンジニア採用検討 (Direct Skilled Hiring)</option>
                    <option value="研修・受入要件の共同設計 (Curriculum & Readiness Co-Design)">研修・受入要件の共同設計 (Curriculum & Readiness Co-Design)</option>
                    <option value="就労後ケア・定着支援連携 (Post-Placement Welfare Collaboration)">就労後ケア・定着支援連携 (Post-Placement Welfare Collaboration)</option>
                    <option value="教育機関・現地パートナー提携 (Educational/Agency Partnership)">教育機関・現地パートナー提携 (Educational/Agency Partnership)</option>
                    <option value="鉄道関連技術人材探索 (Railway Talent Exploration)">鉄道関連技術人材探索 (Railway Talent Exploration)</option>
                    <option value="その他 (Other Collaboration)">その他 (Other Collaboration)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-mono font-semibold text-[#172C3C] uppercase tracking-wider mb-1">
                    {content.form.roleLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.role}
                    onChange={(e) => setFormState({ ...formState, role: e.target.value })}
                    placeholder={lang === 'ja' ? '例：マシニングセンタオペレーター、CAD設計者' : 'e.g. 5-Axis CNC Operator, CAD Design Engineer'}
                    className="w-full text-xs px-3 py-2 border border-steel-300 bg-[#F7F7F3] focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono font-semibold text-[#172C3C] uppercase tracking-wider mb-1">
                    {content.form.volumeLabel}
                  </label>
                  <input
                    type="text"
                    value={formState.volume}
                    onChange={(e) => setFormState({ ...formState, volume: e.target.value })}
                    placeholder={lang === 'ja' ? '例：1〜2名（試行）、5名（年度内）' : 'e.g. 1-2 pilot candidates, 5 for FY2025'}
                    className="w-full text-xs px-3 py-2 border border-steel-300 bg-[#F7F7F3] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono font-semibold text-[#172C3C] uppercase tracking-wider mb-1">
                    {content.form.timelineLabel}
                  </label>
                  <input
                    type="text"
                    value={formState.timeline}
                    onChange={(e) => setFormState({ ...formState, timeline: e.target.value })}
                    placeholder={lang === 'ja' ? '例：3〜6ヶ月以内' : 'e.g. Within 3-6 months'}
                    className="w-full text-xs px-3 py-2 border border-steel-300 bg-[#F7F7F3] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono font-semibold text-[#172C3C] uppercase tracking-wider mb-1">
                  {content.form.messageLabel}
                </label>
                <textarea
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder={lang === 'ja' ? '求める技術スキル、機械制御盤（Fanuc、三菱等）、日本語の希望水準、現状の採用課題などをご自由にご記入ください。' : 'Describe specific technical skill criteria, machine controls (Fanuc, Mitsubishi, etc.), expected Japanese language readiness, or current staffing bottlenecks.'}
                  className="w-full text-xs px-3 py-2 border border-steel-300 bg-[#F7F7F3] focus:bg-white font-mono"
                />
              </div>

              <div className="pt-2 border-t border-steel-200">
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-graphite-600 font-sans">
                  <input
                    type="checkbox"
                    required
                    checked={formState.privacyAcknowledged}
                    onChange={(e) => setFormState({ ...formState, privacyAcknowledged: e.target.checked })}
                    className="mt-0.5 text-[#C45238] focus:ring-[#C45238]"
                  />
                  <span>{content.form.consentText}</span>
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C45238] hover:bg-[#B0432B] text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 transition-colors border border-[#9E3922] shadow-sm disabled:opacity-50 font-mono"
                >
                  {isSubmitting ? (
                    <span>{content.form.submitting}</span>
                  ) : (
                    <>
                      <span>{content.form.submitButton}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="text-[11px] text-steel-500 mt-2 font-mono">
                  {lang === 'ja' ? '※ 担当デスクより24営業時間以内にご連絡を差し上げます。パスポート番号や機微な個人情報は収集いたしません。' : '※ Our bilateral desk will follow up within 24 business hours. No sensitive identity numbers are collected.'}
                </p>
              </div>

            </form>
          )}

        </div>
      </section>

      {/* ========================================================
          SECTION J: FAQS
         ======================================================== */}
      <section className="py-20 bg-white border-b border-steel-300">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="border-b border-steel-300 pb-3 mb-8">
            <div className="text-[11px] font-mono uppercase tracking-eyebrow text-[#C45238] font-bold mb-1">
              [{content.faqs.eyebrow}]
            </div>
            <h2 className="text-2xl font-bold text-[#172C3C] tracking-tight">
              {content.faqs.heading}
            </h2>
          </div>

          <div className="space-y-3 font-mono">
            {content.faqs.items.map((item, idx) => {
              const isExpanded = expandedFaq === idx;
              return (
                <div key={idx} className="bg-[#F7F7F3] border border-steel-300 shadow-sm">
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-xs sm:text-sm font-bold text-[#172C3C]">
                      {item.q}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-[#C45238] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-steel-400 shrink-0" />
                    )}
                  </button>
                  {isExpanded && (
                    <div className="px-4 pb-4 pt-1 text-xs text-graphite-600 leading-relaxed border-t border-steel-200 font-sans">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION K: JAPAN BRIDGE FOOTER
         ======================================================== */}
      <footer className="bg-[#0F1E2A] text-steel-400 py-12 border-t border-[#1D3244] font-mono text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#1D3244] pb-6">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-[#C45238] text-white flex items-center justify-center font-bold text-xs border border-[#9E3922]">
                RH
              </div>
              <span className="font-bold text-white uppercase tracking-wider text-sm">
                RAPIDHIRE JAPAN BRIDGE
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-steel-500 uppercase">Language:</span>
              <button
                onClick={() => setLang('ja')}
                className={`px-2 py-0.5 text-xs ${lang === 'ja' ? 'text-white font-bold underline' : 'text-steel-400 hover:text-white'}`}
              >
                日本語
              </button>
              <span>|</span>
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 text-xs ${lang === 'en' ? 'text-white font-bold underline' : 'text-steel-400 hover:text-white'}`}
              >
                English
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-steel-400 font-sans">
            <div>
              <p className="text-white font-mono uppercase tracking-wider mb-1 text-[11px]">
                {content.footer.tagline}
              </p>
              <p className="leading-relaxed text-[11px] text-steel-400">
                {content.footer.description}
              </p>
            </div>
            <div className="md:text-right font-mono text-[11px] text-steel-400 space-y-1">
              <div>{content.footer.contacts}</div>
              <div>{content.footer.copyright}</div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};
