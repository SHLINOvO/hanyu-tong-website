import { useState } from 'react'
import {
  Globe, BookOpen, MessageSquare, Feather, Landmark,
  Bot, Languages, Smartphone, Monitor, Download,
  ChevronLeft, ChevronRight, Sparkles, Mic, Brain, CheckCircle2,
  Menu, X, ExternalLink, LayoutGrid, AlertTriangle, PenTool, AlignLeft
} from 'lucide-react'
import './App.css'

// 翻译词典
const zh = {
  // 导航
  nav_languages: '支持语言',
  nav_features: '功能介绍',
  nav_ai: 'AI 评分',
  nav_screenshots: '界面预览',
  nav_download: '立即下载',
  nav_screenshot_m: '截图预览',
  nav_ai_m: 'AI 评分',
  nav_download_m: '下载',

  // Hero
  hero_title: '一款App，学通中文的一切',
  hero_desc: '面向全球中文学习者的智能学习平台，\n8种语言界面，全离线AI语音评测，提供一站式学习体验',
  hero_download: '立即下载',
  hero_preview: '在线预览',

  // 为什么选择
  why_title: '为什么选择汉语通？',
  why_subtitle: '专业、免费、高效，让中文学习变得更简单',
  why_8langs: '支持8种语言',
  why_8langs_desc: '母语界面 + 母语释义，无障碍学习中文，学习体验强、效率高',
  why_8modules: '8大学习板块',
  why_8modules_desc: '汉字、词语、语法、句子、成语、谚语、诗词、文化，一站式掌握中文精髓',
  why_ai: '全离线AI评测',
  why_ai_desc: '三链路全离线评估，覆盖发音、声学、语义三大维度',
  why_free: '完全免费',
  why_free_desc: '无广告、无内购，所有功能免费开放，零成本开始学习',

  // 统计数据
  stat_langs: '支持语言',
  stat_modules: '学习模块',
  stat_hanzi: '汉字',
  stat_words: '词汇数量',
  stat_sentences: '句子',
  stat_idioms: '成语谚语',
  stat_poems: '古诗词',
  stat_culture: '文化常识',

  // 支持语言
  langs_title: '🌍 支持语言列表',
  langs_subtitle: '用你的母语，学习最美的中文',

  // 核心功能
  features_title: '🛠️ 核心功能介绍',
  features_subtitle: '全方位覆盖中文学习的各个环节',
  feature_hanzi: '汉字学习',
  feature_hanzi_desc: '笔画动画演示，掌握汉字书写',
  feature_words: '词汇学习',
  feature_words_desc: 'HSK 1-9 级全面覆盖，AI 发音评测',
  feature_grammar: '语法练习',
  feature_grammar_desc: '图文讲解，轻松掌握语法规则',
  feature_sentences: '句子学习',
  feature_sentences_desc: '实用句子，AI 发音与语义评测',
  feature_idioms: '成语谚语',
  feature_idioms_desc: 'AI 发音评测，领略中文智慧',
  feature_poetry: '诗词文化',
  feature_poetry_desc: '唐诗宋词与节气节日，品味中华文化',

  // AI评测
  ai_title: '🤖 全离线AI智能评测',
  ai_subtitle: '三链路全离线评分系统，全面评估你的中文水平',
  ai_asr_title: '发音评测与语义识别',
  ai_asr_tech: '双引擎语音识别（全离线）',
  ai_asr_desc: '双引擎全离线评测，精准评估发音与语义',
  ai_asr_feature1: '中文发音准确度评分',
  ai_asr_feature2: '语义匹配评分',
  ai_score_title: '声学诊断与语音合成',
  ai_score_tech: '声学诊断 + 语音合成',
  ai_score_desc: '逐音节声学纠错，离线语音合成双引擎',
  ai_score_feature1: '逐音节声母/韵母/声调纠错',

  // 截图预览
  ss_title: '📱 真实界面预览',
  ss_subtitle: '简洁直观的界面设计，学习更轻松',

  // 下载
  dl_title: '⬇️ 立即开始学习',
  dl_subtitle: '下载汉语通客户端，开启你的中文学习之旅',
  dl_android: 'Android',
  dl_windows: 'Windows',
  dl_web: 'Web',
  dl_android_title: 'Android 版本',
  dl_android_desc: '适用于 Android 6.0 及以上设备',
  dl_android_f1: '全离线 AI 语音评测',
  dl_android_f2: '完整功能体验',
  dl_scan: '扫码下载',
  dl_android_btn: '下载 Android 版',
  dl_web_title: 'Web 版本',
  dl_web_desc: '无需安装，直接在浏览器中使用',
  dl_web_f1: 'Web 端预览',
  dl_web_f2: '无需下载',
  dl_web_f3: '完整体验请下载客户端',
  dl_web_btn: '在线预览',
  dl_win_title: 'Windows 桌面版',
  dl_win_desc: '适用于 Windows 10 及以上系统',
  dl_win_f1: '全离线 AI 语音评测',
  dl_win_f2: '原生桌面体验',
  dl_win_btn: '下载 Windows 版',

  // 底部
  footer_brand: '面向全球中文学习者的智能学习平台',
  footer_resources: '资源',
  footer_help: '帮助文档',
  footer_about: '关于',
  footer_contact: '联系我们：1911866886@qq.com',
  footer_copyright: '© 2026 汉语通 HanYu Tong. All rights reserved.',
  footer_tech: '基于 Flutter + 全离线 AI 技术构建',

  // 手机预览模块
  preview_hanzi: '汉字',
  preview_vocab: '词汇',
  preview_grammar: '语法',
  preview_sentences: '句子',
  preview_idiom: '成语',
  preview_proverb: '谚语',
  preview_poetry: '诗词',
  preview_culture: '文化',
}

const en = {
  // Navigation
  nav_languages: 'Languages',
  nav_features: 'Features',
  nav_ai: 'AI Scoring',
  nav_screenshots: 'Screenshots',
  nav_download: 'Download',
  nav_screenshot_m: 'Screenshots',
  nav_ai_m: 'AI Scoring',
  nav_download_m: 'Download',

  // Hero
  hero_title: 'One App, Master Chinese',
  hero_desc: 'An intelligent learning platform for Chinese learners worldwide, 8 interface languages, fully offline AI voice assessment, all in one app.',
  hero_download: 'Download Now',
  hero_preview: 'Try Online',

  // Why choose
  why_title: 'Why Choose HanYu Tong?',
  why_subtitle: 'Professional, free, and efficient — making Chinese learning simple',
  why_8langs: '8 Languages Supported',
  why_8langs_desc: 'Native UI + native language explanations, learn Chinese without barriers',
  why_8modules: '8 Learning Modules',
  why_8modules_desc: 'Characters, vocabulary, grammar, sentences, idioms, proverbs, poetry, and culture — master Chinese in one place',
  why_ai: 'Fully Offline AI Assessment',
  why_ai_desc: 'Triple-link offline assessment covering pronunciation, acoustics, and semantics',
  why_free: 'Completely Free',
  why_free_desc: 'No ads, no in-app purchases, all features free, start learning at zero cost',

  // Stats
  stat_langs: 'Languages',
  stat_modules: 'Sections',
  stat_hanzi: 'Characters',
  stat_words: 'Words',
  stat_sentences: 'Sentences',
  stat_idioms: 'Idioms & Proverbs',
  stat_poems: 'Poems',
  stat_culture: 'Culture Topics',

  // Supported Languages
  langs_title: '🌍 Supported Languages',
  langs_subtitle: 'Learn beautiful Chinese in your native language',

  // Core Features
  features_title: '🛠️ Core Features',
  features_subtitle: 'Comprehensive coverage of all aspects of Chinese learning',
  feature_hanzi: 'Characters',
  feature_hanzi_desc: 'Stroke animations to master Chinese writing',
  feature_words: 'Vocabulary',
  feature_words_desc: 'Full HSK 1-9 coverage with AI pronunciation assessment',
  feature_grammar: 'Grammar',
  feature_grammar_desc: 'Illustrated explanations to easily master grammar rules',
  feature_sentences: 'Sentences',
  feature_sentences_desc: 'Practical sentences with AI pronunciation and semantic assessment',
  feature_idioms: 'Idioms & Proverbs',
  feature_idioms_desc: 'AI assessment, explore Chinese wisdom',
  feature_poetry: 'Poetry & Culture',
  feature_poetry_desc: 'Classical poems, solar terms and festivals, savor Chinese culture',

  // AI Scoring
  ai_title: '🤖 Fully Offline AI Assessment',
  ai_subtitle: 'Triple-link offline scoring system, comprehensively assess your Chinese level',
  ai_asr_title: 'Pronunciation & Semantics',
  ai_asr_tech: 'Dual-Engine Speech Recognition (Offline)',
  ai_asr_desc: 'Dual-engine offline assessment, precise pronunciation and semantics evaluation',
  ai_asr_feature1: 'Chinese pronunciation accuracy scoring',
  ai_asr_feature2: 'Semantic matching scoring',
  ai_score_title: 'Acoustic Diagnosis & TTS',
  ai_score_tech: 'Acoustic Diagnosis + Speech Synthesis',
  ai_score_desc: 'Per-syllable acoustic correction, dual-engine offline TTS',
  ai_score_feature1: 'Per-syllable consonant/vowel/tone correction',

  // Screenshots
  ss_title: '📱 Real Interface Preview',
  ss_subtitle: 'Clean and intuitive interface design, easier learning',

  // Download
  dl_title: '⬇️ Start Learning Now',
  dl_subtitle: 'Download HanYu Tong client, begin your Chinese learning journey',
  dl_android: 'Android',
  dl_windows: 'Windows',
  dl_web: 'Web',
  dl_android_title: 'Android Version',
  dl_android_desc: 'For Android 6.0 and above',
  dl_android_f1: 'Fully offline AI voice assessment',
  dl_android_f2: 'Full feature experience',
  dl_scan: 'Scan to Download',
  dl_android_btn: 'Download Android',
  dl_web_title: 'Web Version',
  dl_web_desc: 'No installation, use directly in browser',
  dl_web_f1: 'Web preview',
  dl_web_f2: 'No download needed',
  dl_web_f3: 'Download the client for the full experience',
  dl_web_btn: 'Try Online',
  dl_win_title: 'Windows Desktop',
  dl_win_desc: 'For Windows 10 and above',
  dl_win_f1: 'Fully offline AI voice assessment',
  dl_win_f2: 'Native desktop experience',
  dl_win_btn: 'Download Windows',

  // Footer
  footer_brand: 'An intelligent learning platform for Chinese learners worldwide',
  footer_resources: 'Resources',
  footer_help: 'Help Docs',
  footer_about: 'About',
  footer_contact: 'Contact us: 1911866886@qq.com',
  footer_copyright: '© 2026 HanYu Tong. All rights reserved.',
  footer_tech: 'Built with Flutter + Fully Offline AI',

  // Phone preview modules
  preview_hanzi: 'Characters',
  preview_vocab: 'Words',
  preview_grammar: 'Grammar',
  preview_sentences: 'Sentences',
  preview_idiom: 'Idioms',
  preview_proverb: 'Proverbs',
  preview_poetry: 'Poetry',
  preview_culture: 'Culture',
}

function App() {
  const [activeTab, setActiveTab] = useState('android')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [language, setLanguage] = useState('en')

  const t = (key) => {
    const dict = language === 'zh' ? zh : en
    return dict[key] || key
  }

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'zh' ? 'en' : 'zh')
  }

  // App截图数据
  const appScreenshots = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    file: `${i + 1}.png`,
  }))

  // 支持的语言
  const supportedLanguages = [
    { code: 'en', name: 'English', countries: [
      { code:'GB', name:'英国' }, { code:'US', name:'美国' }, { code:'AU', name:'澳洲' }, { code:'CA', name:'加拿大' }
    ]},
    { code: 'ru', name: 'Русский', countries: [
      { code:'RU', name:'俄罗斯' }, { code:'BY', name:'白俄' }, { code:'KZ', name:'哈萨克' }, { code:'KG', name:'吉尔吉斯' }
    ]},
    { code: 'tr', name: 'Türkçe', countries: [
      { code:'TR', name:'土耳其' }, { code:'AZ', name:'阿塞拜疆' }
    ]},
    { code: 'ar', name: 'العربية', countries: [
      { code:'SA', name:'沙特' }, { code:'EG', name:'埃及' }, { code:'AE', name:'阿联酋' }, { code:'YE', name:'也门' }
    ]},
    { code: 'fa', name: 'فارسی', countries: [
      { code:'IR', name:'伊朗' }, { code:'AF', name:'阿富汗' }, { code:'TJ', name:'塔吉克斯坦' }
    ]},
    { code: 'id', name: 'Bahasa', countries: [
      { code:'ID', name:'印尼' }, { code:'MY', name:'马来西亚' }, { code:'SG', name:'新加坡' }
    ]},
    { code: 'vi', name: 'Tiếng Việt', countries: [
      { code:'VN', name:'越南' }
    ]},
    { code: 'km', name: 'ភាសាខ្មែរ', countries: [
      { code:'KH', name:'柬埔寨' }
    ]},
  ]

  // 核心功能数据
  const coreFeatures = [
    { icon: PenTool, titleKey: 'feature_hanzi', descKey: 'feature_hanzi_desc' },
    { icon: BookOpen, titleKey: 'feature_words', descKey: 'feature_words_desc' },
    { icon: Landmark, titleKey: 'feature_grammar', descKey: 'feature_grammar_desc' },
    { icon: AlignLeft, titleKey: 'feature_sentences', descKey: 'feature_sentences_desc' },
    { icon: MessageSquare, titleKey: 'feature_idioms', descKey: 'feature_idioms_desc' },
    { icon: Feather, titleKey: 'feature_poetry', descKey: 'feature_poetry_desc' },
  ]

  // 统计数据
  const stats = [
    { value: '8', labelKey: 'stat_langs' },
    { value: '8', labelKey: 'stat_modules' },
    { value: '1,500+', labelKey: 'stat_hanzi' },
    { value: '9,000+', labelKey: 'stat_words' },
    { value: '300+', labelKey: 'stat_sentences' },
    { value: '1,000+', labelKey: 'stat_idioms' },
    { value: '500+', labelKey: 'stat_poems' },
    { value: '30+', labelKey: 'stat_culture' },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % appScreenshots.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + appScreenshots.length) % appScreenshots.length)
  }

  return (
    <div className={`app lang-${language}`}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-content">
          <button className="lang-toggle-btn" onClick={toggleLanguage}>
            {language === 'zh' ? 'EN' : '中'}
          </button>
          <a href="#" className="logo">
            <span className="logo-icon">汉</span>
            <span className="logo-text">汉语通</span>
          </a>

          <div className="nav-links desktop-nav">
            <a href="#languages">{t('nav_languages')}</a>
            <a href="#features">{t('nav_features')}</a>
            <a href="#ai">{t('nav_ai')}</a>
            <a href="#screenshots">{t('nav_screenshots')}</a>
          </div>

          <div className="nav-actions">
            <a href="#download" className="btn-download-nav">
              <Download size={16} />
              {t('nav_download')}
            </a>
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <a href="#features" onClick={() => setMobileMenuOpen(false)}>{t('nav_features')}</a>
            <a href="#languages" onClick={() => setMobileMenuOpen(false)}>{t('nav_languages')}</a>
            <a href="#screenshots" onClick={() => setMobileMenuOpen(false)}>{t('nav_screenshot_m')}</a>
            <a href="#ai" onClick={() => setMobileMenuOpen(false)}>{t('nav_ai_m')}</a>
            <a href="#download" onClick={() => setMobileMenuOpen(false)}>{t('nav_download_m')}</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>{t('hero_title')}</h1>
            <p className="hero-desc">
              {t('hero_desc')}
            </p>
            <div className="hero-buttons">
              <a href="#download" className="btn btn-primary">
                <Smartphone size={18} />
                {t('hero_download')}
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="phone-mockup">
              <div className="phone-frame">
                <div className="phone-screen">
                  <div className="app-preview">
                    <div className="preview-header">
                      <div className="preview-dots">
                        <span></span><span></span><span></span>
                      </div>
                    </div>
                    <div className="preview-content">
                      <div className="preview-title">汉语通</div>
                      <div className="preview-modules">
                        <div className="module-item">
                          <span className="module-emoji">✍️</span>
                          <span className="module-text">{t('preview_hanzi')}</span>
                        </div>
                        <div className="module-item">
                          <span className="module-emoji">📖</span>
                          <span className="module-text">{t('preview_vocab')}</span>
                        </div>
                        <div className="module-item">
                          <span className="module-emoji">📝</span>
                          <span className="module-text">{t('preview_grammar')}</span>
                        </div>
                        <div className="module-item">
                          <span className="module-emoji">💬</span>
                          <span className="module-text">{t('preview_sentences')}</span>
                        </div>
                        <div className="module-item">
                          <span className="module-emoji">📚</span>
                          <span className="module-text">{t('preview_idiom')}</span>
                        </div>
                        <div className="module-item">
                          <span className="module-emoji">📜</span>
                          <span className="module-text">{t('preview_proverb')}</span>
                        </div>
                        <div className="module-item">
                          <span className="module-emoji">🏛️</span>
                          <span className="module-text">{t('preview_poetry')}</span>
                        </div>
                        <div className="module-item">
                          <span className="module-emoji">🎭</span>
                          <span className="module-text">{t('preview_culture')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="why-us">
        <div className="section-header">
          <h2>{t('why_title')}</h2>
          <p>{t('why_subtitle')}</p>
        </div>
        <div className="why-us-grid">
          <div className="why-card">
            <div className="why-icon">
              <Languages size={32} />
            </div>
            <h3>{t('why_8langs')}</h3>
            <p>{t('why_8langs_desc')}</p>
          </div>
          <div className="why-card">
            <div className="why-icon ai">
              <LayoutGrid size={32} />
            </div>
            <h3>{t('why_8modules')}</h3>
            <p>{t('why_8modules_desc')}</p>
          </div>
          <div className="why-card">
            <div className="why-icon ai">
              <Bot size={32} />
            </div>
            <h3>{t('why_ai')}</h3>
            <p>{t('why_ai_desc')}</p>
          </div>
          <div className="why-card">
            <div className="why-icon free">
              <Sparkles size={32} />
            </div>
            <h3>{t('why_free')}</h3>
            <p>{t('why_free_desc')}</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{t(stat.labelKey)}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Supported Languages */}
      <section id="languages" className="languages">
        <div className="section-header">
          <h2>{t('langs_title')}</h2>
          <p>{t('langs_subtitle')}</p>
        </div>
        <div className="languages-grid">
          {supportedLanguages.map((lang) => (
            <div key={lang.code} className="lang-card">
              <div className="lang-flags">
                {lang.countries.map((c, i) => (
                  <img
                    key={i}
                    src={`/national_flag/${c.code.toLowerCase()}.png`}
                    alt={c.name}
                    title={c.name}
                    className="lang-flag-img"
                  />
                ))}
              </div>
              <span className="lang-name">{lang.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="features">
        <div className="section-header">
          <h2>{t('features_title')}</h2>
          <p>{t('features_subtitle')}</p>
        </div>
        <div className="features-grid">
          {coreFeatures.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <feature.icon size={28} />
              </div>
              <h3>{t(feature.titleKey)}</h3>
              <p>{t(feature.descKey)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Scoring Section */}
      <section id="ai" className="ai-section">
        <div className="section-header">
          <h2>{t('ai_title')}</h2>
          <p>{t('ai_subtitle')}</p>
        </div>
        <div className="ai-grid">
          <div className="ai-card">
            <div className="ai-icon">
              <Mic size={36} />
            </div>
            <h3>{t('ai_asr_title')}</h3>
            <p className="ai-tech">{t('ai_asr_tech')}</p>
            <p className="ai-desc">{t('ai_asr_desc')}</p>
            <ul className="ai-features">
              <li><CheckCircle2 size={16} /> {t('ai_asr_feature1')}</li>
              <li><CheckCircle2 size={16} /> {t('ai_asr_feature2')}</li>
            </ul>
          </div>
          <div className="ai-card">
            <div className="ai-icon">
              <Brain size={36} />
            </div>
            <h3>{t('ai_score_title')}</h3>
            <p className="ai-tech">{t('ai_score_tech')}</p>
            <p className="ai-desc">{t('ai_score_desc')}</p>
            <ul className="ai-features">
              <li><CheckCircle2 size={16} /> {t('ai_score_feature1')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section id="screenshots" className="screenshots">
        <div className="section-header">
          <h2>{t('ss_title')}</h2>
          <p>{t('ss_subtitle')}</p>
        </div>
        <div className="screenshot-carousel">
          <button className="carousel-btn prev" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>
          <div className="carousel-container">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {appScreenshots.map((screenshot, index) => (
                <div key={screenshot.id} className="screenshot-slide">
                  <div className="screenshot-phone-mockup">
                    <div className="screenshot-phone-frame">
                      <div className="screenshot-phone-screen">
                          <img
                            src={`/screenshots/${screenshot.file}`}
                            alt={`Screenshot ${screenshot.id}`}
                            className="screenshot-image"
                          />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-btn next" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="carousel-dots">
          {appScreenshots.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="download">
        <div className="section-header">
          <h2>{t('dl_title')}</h2>
          <p>{t('dl_subtitle')}</p>
        </div>
        <div className="download-tabs">
          <button
            className={`tab ${activeTab === 'android' ? 'active' : ''}`}
            onClick={() => setActiveTab('android')}
          >
            <Smartphone size={20} />
            {t('dl_android')}
          </button>
          <button
            className={`tab ${activeTab === 'windows' ? 'active' : ''}`}
            onClick={() => setActiveTab('windows')}
          >
            <Monitor size={20} />
            {t('dl_windows')}
          </button>
        </div>

        <div className="download-content">
          {activeTab === 'android' && (
            <div className="download-card">
              <div className="download-info">
                <h3>{t('dl_android_title')}</h3>
                <p>{t('dl_android_desc')}</p>
                <ul className="download-features">
                  <li><CheckCircle2 size={16} /> {t('dl_android_f1')}</li>
                  <li><CheckCircle2 size={16} /> {t('dl_android_f2')}</li>
                </ul>
                {/* APK 下载按钮 */}
                <a
                  href="https://github.com/SHLINOvO/hanyu-tong-download/releases/download/v1.0.2/hanyu_tong.apk"
                  className="btn btn-preview"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={16} />
                  {t('dl_android_btn')}
                </a>
              </div>
              <div className="qr-code">
                <img src="/download_apk.png" alt="Android 下载二维码" />
                <span>{t('dl_scan')}</span>
              </div>
            </div>
          )}

          {activeTab === 'windows' && (
            <div className="download-card">
              <div className="download-info">
                <h3>{t('dl_win_title')}</h3>
                <p>{t('dl_win_desc')}</p>
                <ul className="download-features">
                  <li><CheckCircle2 size={16} /> {t('dl_win_f1')}</li>
                  <li><CheckCircle2 size={16} /> {t('dl_win_f2')}</li>
                </ul>
                <a
                  href="https://github.com/SHLINOvO/hanyu-tong-download/releases/download/v1.0.2/hanyutong_setup.exe"
                  className="btn btn-preview"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={16} />
                  {t('dl_win_btn')}
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-brand-name">汉语通</span>
            <p>{t('footer_brand')}</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>{t('footer_resources')}</h4>
              <a href={language === 'zh' ? '/download/汉语通V1.0使用说明书.pdf' : '/download/HanYu Tong V1.0 User Manual.pdf'} download>{t('footer_help')}</a>
            </div>
            <div className="footer-column">
              <h4>{t('footer_about')}</h4>
              <p>{language === 'zh' ? '联系我们：' : 'Contact us: '}<a href="mailto:1911866886@qq.com">1911866886@qq.com</a></p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{t('footer_copyright')}</p>
          <p>{t('footer_tech')}</p>
        </div>
      </footer>
    </div>
  )
}

export default App
