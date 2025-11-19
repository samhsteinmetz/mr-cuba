import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'ko' | 'zh' | 'fr'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.gallery': 'Gallery',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'nav.bookNow': 'Book Now',
    
    // Hero
    'hero.title': 'MR. CUBA',
    'hero.subtitle': 'Authentic Easy Rider Motorbike Tours in Central Vietnam',
    'hero.cta': 'Book Your Adventure',
    'hero.discover': 'Discover More',
    
    // About
    'about.title': 'Meet Mr. Cuba',
    'about.description': 'With over 5 years of experience guiding tours through Central Vietnam, I offer authentic, personalized Easy Rider motorbike adventures that showcase the hidden gems and breathtaking landscapes of my homeland.\n\nFrom misty mountains to pristine beaches, ancient temples to vibrant local markets – experience Vietnam through the eyes of a local.\n\nNo license or experience on scooters is required, I will teach you everything you need to know.',
    'about.yearsExp': 'Years Experience',
    'about.authentic': 'Authentic',
    
    // Gallery
    'gallery.title': 'Tour Gallery',
    'gallery.subtitle': 'Explore the stunning landscapes and unforgettable moments from our tours',
    
    // Testimonials
    'testimonials.title': 'What Travelers Say',
    'testimonials.subtitle': 'Hear from travelers who have experienced the magic of Central Vietnam',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to explore Central Vietnam? Contact me to book your authentic easy rider motorbike adventure!',
    'contact.phone': 'Phone',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'Email',
    
    // Footer
    'footer.description': 'Authentic easy rider motorbike tours through the heart of Central Vietnam. Experience the real Vietnam with a local guide.',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact',
    'footer.location': 'Central Vietnam',
    'footer.rights': 'Mr. Cuba Tours. All rights reserved.',
    'footer.madeWith': 'Made with ❤️ in Vietnam'
  },
  ko: {
    // Navigation
    'nav.home': '홈',
    'nav.about': '소개',
    'nav.gallery': '갤러리',
    'nav.testimonials': '후기',
    'nav.contact': '연락처',
    'nav.bookNow': '예약하기',
    
    // Hero
    'hero.title': 'MR. CUBA',
    'hero.subtitle': '베트남 중부의 정통 이지 라이더 오토바이 투어',
    'hero.cta': '모험 예약하기',
    'hero.discover': '더 알아보기',
    
    // About
    'about.title': 'Mr. Cuba를 만나보세요',
    'about.description': '베트남 중부 투어 가이드로 5년 이상의 경험을 바탕으로, 제 고향의 숨겨진 보석과 숨막히는 풍경을 보여주는 정통적이고 개인화된 이지 라이더 오토바이 모험을 제공합니다.\n\n안개 낀 산에서 깨끗한 해변, 고대 사원에서 활기찬 현지 시장까지 - 현지인의 눈으로 베트남을 경험하세요.\n\n스쿠터 면허증이나 경험이 필요하지 않습니다. 제가 필요한 모든 것을 가르쳐드립니다.',
    'about.yearsExp': '년 경력',
    'about.authentic': '정통',
    
    // Gallery
    'gallery.title': '투어 갤러리',
    'gallery.subtitle': '투어의 멋진 풍경과 잊지 못할 순간들을 탐험하세요',
    
    // Testimonials
    'testimonials.title': '여행자들의 이야기',
    'testimonials.subtitle': '베트남 중부의 마법을 경험한 여행자들의 이야기를 들어보세요',
    
    // Contact
    'contact.title': '연락하기',
    'contact.subtitle': '베트남 중부를 탐험할 준비가 되셨나요? 정통 이지 라이더 오토바이 모험을 예약하려면 저에게 연락하세요!',
    'contact.phone': '전화',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': '이메일',
    
    // Footer
    'footer.description': '베트남 중부 중심부를 통과하는 정통 이지 라이더 오토바이 투어. 현지 가이드와 함께 진정한 베트남을 경험하세요.',
    'footer.quickLinks': '빠른 링크',
    'footer.contact': '연락처',
    'footer.location': '베트남 중부',
    'footer.rights': 'Mr. Cuba Tours. 모든 권리 보유.',
    'footer.madeWith': '베트남에서 ❤️ 로 제작'
  },
  zh: {
    // Navigation
    'nav.home': '首页',
    'nav.about': '关于',
    'nav.gallery': '画廊',
    'nav.testimonials': '评价',
    'nav.contact': '联系',
    'nav.bookNow': '立即预订',
    
    // Hero
    'hero.title': 'MR. CUBA',
    'hero.subtitle': '越南中部正宗易骑士摩托车之旅',
    'hero.cta': '预订您的冒险',
    'hero.discover': '了解更多',
    
    // About
    'about.title': '认识 Mr. Cuba',
    'about.description': '凭借5年以上越南中部导游经验，我提供正宗、个性化的易骑士摩托车冒险，展示我家乡的隐藏宝石和令人惊叹的风景。\n\n从雾蒙蒙的山脉到原始海滩，从古老寺庙到充满活力的当地市场 - 通过当地人的眼睛体验越南。\n\n不需要摩托车驾照或经验，我会教你所需的一切。',
    'about.yearsExp': '年经验',
    'about.authentic': '正宗',
    
    // Gallery
    'gallery.title': '旅游画廊',
    'gallery.subtitle': '探索我们旅游中令人惊叹的风景和难忘的时刻',
    
    // Testimonials
    'testimonials.title': '旅行者评价',
    'testimonials.subtitle': '听听体验过越南中部魔力的旅行者的故事',
    
    // Contact
    'contact.title': '联系我们',
    'contact.subtitle': '准备好探索越南中部了吗？联系我预订您的正宗易骑士摩托车冒险！',
    'contact.phone': '电话',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': '邮箱',
    
    // Footer
    'footer.description': '穿越越南中部中心的正宗易骑士摩托车之旅。与当地导游一起体验真正的越南。',
    'footer.quickLinks': '快速链接',
    'footer.contact': '联系方式',
    'footer.location': '越南中部',
    'footer.rights': 'Mr. Cuba Tours. 版权所有。',
    'footer.madeWith': '在越南用 ❤️ 制作'
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.gallery': 'Galerie',
    'nav.testimonials': 'Témoignages',
    'nav.contact': 'Contact',
    'nav.bookNow': 'Réserver',
    
    // Hero
    'hero.title': 'MR. CUBA',
    'hero.subtitle': 'Circuits Authentiques en Moto Easy Rider au Centre du Vietnam',
    'hero.cta': 'Réservez votre aventure',
    'hero.discover': 'Découvrir plus',
    
    // About
    'about.title': 'Rencontrez Mr. Cuba',
    'about.description': 'Avec plus de 5 ans d\'expérience en tant que guide au centre du Vietnam, je propose des aventures authentiques et personnalisées en moto Easy Rider qui mettent en valeur les joyaux cachés et les paysages à couper le souffle de ma patrie.\n\nDes montagnes brumeuses aux plages immaculées, des temples anciens aux marchés locaux animés - découvrez le Vietnam à travers les yeux d\'un local.\n\nAucun permis ni expérience en scooter n\'est requis, je vous enseignerai tout ce que vous devez savoir.',
    'about.yearsExp': 'Années d\'expérience',
    'about.authentic': 'Authentique',
    
    // Gallery
    'gallery.title': 'Galerie de Circuits',
    'gallery.subtitle': 'Explorez les paysages époustouflants et les moments inoubliables de nos circuits',
    
    // Testimonials
    'testimonials.title': 'Ce Que Disent Les Voyageurs',
    'testimonials.subtitle': 'Écoutez les voyageurs qui ont vécu la magie du centre du Vietnam',
    
    // Contact
    'contact.title': 'Contactez-nous',
    'contact.subtitle': 'Prêt à explorer le centre du Vietnam ? Contactez-moi pour réserver votre aventure authentique en moto Easy Rider !',
    'contact.phone': 'Téléphone',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'Email',
    
    // Footer
    'footer.description': 'Circuits authentiques en moto Easy Rider à travers le cœur du centre du Vietnam. Découvrez le vrai Vietnam avec un guide local.',
    'footer.quickLinks': 'Liens Rapides',
    'footer.contact': 'Contact',
    'footer.location': 'Centre du Vietnam',
    'footer.rights': 'Mr. Cuba Tours. Tous droits réservés.',
    'footer.madeWith': 'Fait avec ❤️ au Vietnam'
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

