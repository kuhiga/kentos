export const languages = {
  en: 'English',
  ja: '日本語',
};

export const defaultLang = 'en';
export const showDefaultLang = false;

export const routes = {
  en: {
    about: '/',
    team: '/team',
    testimonials: '/testimonials',
    contact: '/contact',
  },
  ja: {
    about: '/',
    team: '/team',
    testimonials: '/testimonials',
    contact: '/contact',
  },
};

export const ui = {
  en: {
    'contact.header': 'Get started',
    'nav.about': 'About',
    'nav.team': 'Meet Your Tutor',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    //hero
    'hero.header':
      'Speak English, Feel Aloha – Elevate Your Conversations Today!',
    'hero.description':
      'Welcome to a unique journey of language and culture! Our eikaiwa lessons are more than just English classes; they are an experience infused with the essence of Aloha. Embrace a learning environment where warmth, friendliness, and a relaxed atmosphere are at the heart of every session.',
    'hero.contact': 'Get started',
    'hero.meetTutor': 'Meet your tutor',
  },
  ja: {
    'contact.header': 'お問い合わせ',
    'nav.about': '情報',
    'nav.team': '先生について',
    'nav.testimonials': 'レビュー',
    'nav.contact': '連絡先',
    //hero
    'hero.header': '英語でアロハを感じ、会話を向上しよう！',
    'hero.description':
      '言語と文化のユニークな旅へようこそ！私たちの英会話レッスンは、単なる英語の授業以上のものです。それはアロハの精神が注入された体験です。暖かさ、友好性、そしてリラックスした雰囲気がすべてのセッションの中心である学習環境を受け入れてください。',
    'hero.contact': 'お問い合わせ',
    'hero.meetTutor': 'チューターについて',
  },
} as const;
