export type Language = 'ar' | 'en' | 'tr';

export interface Translations {
  header: {
    platformName: string;
    goldStandard: string;
    platformLaunched: string;
    launchDate: string;
  };
  welcome: {
    title: string;
    subtitle: string;
  };
  stats: {
    currentBalance: string;
    dailyProfit: string;
    totalProfit: string;
    referrals: string;
    teamBonus: string;
    usd: string;
    today: string;
    lifetime: string;
    active: string;
    earned: string;
  };
  buttons: {
    depositNow: string;
    withdrawFunds: string;
    claimDailyBonus: string;
  };
  wallets: {
    title: string;
    usdtLabel: string;
    trxLabel: string;
  };
  profitRates: {
    title: string;
    investmentRange: string;
    minimumRate: string;
    maximumRate: string;
  };
  commissions: {
    title: string;
    referralBonus: string;
    withdrawBeforeDoubling: string;
    withdrawAfterDoubling: string;
  };
  teamRates: {
    title: string;
    teamLevel1: string;
    teamLevel2: string;
    teamLevel3: string;
  };
  wheelOfFortune: {
    title: string;
    minimumDeposit: string;
    description: string;
    from: string;
  };
  dailyMission: {
    title: string;
    description: string;
  };
  platformInfo: {
    title: string;
    platformName: string;
    launchDate: string;
    operatingStandard: string;
    supportedCurrencies: string;
    goldStandard: string;
  };
  footer: {
    aboutTitle: string;
    aboutText: string;
    linksTitle: string;
    contactTitle: string;
    email: string;
    availability: string;
    copyright: string;
  };
  language: {
    ar: string;
    en: string;
    tr: string;
  };
}

const translations: Record<Language, Translations> = {
  ar: {
    header: {
      platformName: 'أونصة',
      goldStandard: 'معيار الذهب للاستثمار',
      platformLaunched: 'تم افتتاح المنصة',
      launchDate: '25 ديسمبر 2025',
    },
    welcome: {
      title: 'أهلا وسهلا',
      subtitle: 'أدر استثماراتك وأرباحك على منصة أونصة',
    },
    stats: {
      currentBalance: 'الرصيد الحالي',
      dailyProfit: 'الربح اليومي',
      totalProfit: 'إجمالي الربح',
      referrals: 'الإحالات',
      teamBonus: 'مكافأة الفريق',
      usd: 'دولار أمريكي',
      today: 'اليوم',
      lifetime: 'مدى الحياة',
      active: 'نشطة',
      earned: 'المكتسبة',
    },
    buttons: {
      depositNow: 'إيداع الآن',
      withdrawFunds: 'سحب الأموال',
      claimDailyBonus: 'استلام المكافأة اليومية',
    },
    wallets: {
      title: 'محافظ السحب',
      usdtLabel: 'USDT (ERC-20)',
      trxLabel: 'TRX (TRON)',
    },
    profitRates: {
      title: 'نسب الأرباح اليومية',
      investmentRange: 'نطاق الاستثمار',
      minimumRate: 'الحد الأدنى للسعر',
      maximumRate: 'الحد الأقصى للسعر',
    },
    commissions: {
      title: 'عمولة السحب',
      referralBonus: 'مكافأة الإحالة',
      withdrawBeforeDoubling: 'السحب قبل المضاعفة',
      withdrawAfterDoubling: 'السحب بعد المضاعفة',
    },
    teamRates: {
      title: 'نسب أرباح الفريق',
      teamLevel1: 'مستوى الفريق الأول',
      teamLevel2: 'مستوى الفريق الثاني',
      teamLevel3: 'مستوى الفريق الثالث',
    },
    wheelOfFortune: {
      title: 'عجلة الحظ',
      minimumDeposit: 'الحد الأدنى للإيداع المطلوب: 150 دولار',
      description: 'ادور العجلة يومياً للحصول على فرصة للفوز بجوائز نقدية. جوائز iPhone 17 Pro Max والدراجة النارية حصرية.',
      from: 'من',
    },
    dailyMission: {
      title: 'المهمة اليومية',
      description: 'استلم مكافأتك اليومية مرة واحدة كل 24 ساعة. سيتم إضافة المبلغ إلى حسابك بناءً على فئة استثمارك الحالية.',
    },
    platformInfo: {
      title: 'معلومات المنصة',
      platformName: 'اسم المنصة',
      launchDate: 'تاريخ الافتتاح',
      operatingStandard: 'معيار التشغيل',
      supportedCurrencies: 'العملات المدعومة',
      goldStandard: 'معيار الذهب',
    },
    footer: {
      aboutTitle: 'عن أونصة',
      aboutText: 'منصة استثمار متميزة تعمل على معايير الذهب، توفر أرباح يومية ومكافآت فريق.',
      linksTitle: 'روابط سريعة',
      contactTitle: 'التواصل',
      email: 'البريد الإلكتروني: support@onsa.com',
      availability: 'متاح 24/7',
      copyright: '© 2025 منصة أونصة. جميع الحقوق محفوظة. | معيار الذهب للاستثمار',
    },
    language: {
      ar: 'العربية',
      en: 'الإنجليزية',
      tr: 'التركية',
    },
  },
  en: {
    header: {
      platformName: 'ONSA',
      goldStandard: 'Gold Standard Investment',
      platformLaunched: 'Platform Launched',
      launchDate: 'Dec 25, 2025',
    },
    welcome: {
      title: 'Welcome Back',
      subtitle: 'Manage your investments and earnings on the ONSA platform',
    },
    stats: {
      currentBalance: 'Current Balance',
      dailyProfit: 'Daily Profit',
      totalProfit: 'Total Profit',
      referrals: 'Referrals',
      teamBonus: 'Team Bonus',
      usd: 'USD',
      today: 'Today',
      lifetime: 'Lifetime',
      active: 'Active',
      earned: 'Earned',
    },
    buttons: {
      depositNow: 'Deposit Now',
      withdrawFunds: 'Withdraw Funds',
      claimDailyBonus: 'Claim Daily Bonus',
    },
    wallets: {
      title: 'Withdrawal Wallets',
      usdtLabel: 'USDT (ERC-20)',
      trxLabel: 'TRX (TRON)',
    },
    profitRates: {
      title: 'Daily Profit Rates',
      investmentRange: 'Investment Range',
      minimumRate: 'Minimum Rate',
      maximumRate: 'Maximum Rate',
    },
    commissions: {
      title: 'Withdrawal Commission',
      referralBonus: 'Referral Bonus',
      withdrawBeforeDoubling: 'Withdraw Before Doubling',
      withdrawAfterDoubling: 'Withdraw After Doubling',
    },
    teamRates: {
      title: 'Team Profit Rates',
      teamLevel1: 'Team Level 1',
      teamLevel2: 'Team Level 2',
      teamLevel3: 'Team Level 3',
    },
    wheelOfFortune: {
      title: 'Wheel of Fortune',
      minimumDeposit: 'Minimum Deposit Required: $150',
      description: 'Spin the wheel daily for a chance to win cash prizes. iPhone 17 Pro Max and motorcycle prizes are exclusive rewards.',
      from: 'from',
    },
    dailyMission: {
      title: 'Daily Mission',
      description: 'Claim your daily bonus once every 24 hours. The amount will be credited to your account based on your current investment tier.',
    },
    platformInfo: {
      title: 'Platform Information',
      platformName: 'Platform Name',
      launchDate: 'Launch Date',
      operatingStandard: 'Operating Standard',
      supportedCurrencies: 'Supported Currencies',
      goldStandard: 'Gold Standard',
    },
    footer: {
      aboutTitle: 'About ONSA',
      aboutText: 'A premium investment platform operating on gold standard principles, offering daily profits and team bonuses.',
      linksTitle: 'Quick Links',
      contactTitle: 'Contact',
      email: 'Email: support@onsa.com',
      availability: 'Available 24/7',
      copyright: '© 2025 ONSA Platform. All rights reserved. | Gold Standard Investment',
    },
    language: {
      ar: 'Arabic',
      en: 'English',
      tr: 'Turkish',
    },
  },
  tr: {
    header: {
      platformName: 'ONSA',
      goldStandard: 'Altın Standardı Yatırım',
      platformLaunched: 'Platform Başlatıldı',
      launchDate: '25 Aralık 2025',
    },
    welcome: {
      title: 'Hoş Geldiniz',
      subtitle: 'ONSA platformunda yatırımlarınızı ve kazançlarınızı yönetin',
    },
    stats: {
      currentBalance: 'Mevcut Bakiye',
      dailyProfit: 'Günlük Kar',
      totalProfit: 'Toplam Kar',
      referrals: 'Referanslar',
      teamBonus: 'Takım Bonusu',
      usd: 'USD',
      today: 'Bugün',
      lifetime: 'Yaşam Boyu',
      active: 'Aktif',
      earned: 'Kazanılan',
    },
    buttons: {
      depositNow: 'Şimdi Yatırın',
      withdrawFunds: 'Fonları Çekin',
      claimDailyBonus: 'Günlük Bonusu Talep Edin',
    },
    wallets: {
      title: 'Çekim Cüzdanları',
      usdtLabel: 'USDT (ERC-20)',
      trxLabel: 'TRX (TRON)',
    },
    profitRates: {
      title: 'Günlük Kar Oranları',
      investmentRange: 'Yatırım Aralığı',
      minimumRate: 'Minimum Oran',
      maximumRate: 'Maksimum Oran',
    },
    commissions: {
      title: 'Çekim Komisyonu',
      referralBonus: 'Referans Bonusu',
      withdrawBeforeDoubling: 'İkiye Katlanmadan Önce Çekim',
      withdrawAfterDoubling: 'İkiye Katlandıktan Sonra Çekim',
    },
    teamRates: {
      title: 'Takım Kar Oranları',
      teamLevel1: 'Takım Seviyesi 1',
      teamLevel2: 'Takım Seviyesi 2',
      teamLevel3: 'Takım Seviyesi 3',
    },
    wheelOfFortune: {
      title: 'Şans Çarkı',
      minimumDeposit: 'Gerekli Minimum Yatırım: $150',
      description: 'Nakit ödüller kazanma şansı için her gün çarkı çevirin. iPhone 17 Pro Max ve motosiklet ödülleri özel ödüllerdir.',
      from: 'dan',
    },
    dailyMission: {
      title: 'Günlük Görev',
      description: 'Her 24 saatte bir günlük bonusunuzu talep edin. Tutar, mevcut yatırım seviyenize göre hesabınıza yatırılacaktır.',
    },
    platformInfo: {
      title: 'Platform Bilgileri',
      platformName: 'Platform Adı',
      launchDate: 'Başlangıç Tarihi',
      operatingStandard: 'İşletme Standardı',
      supportedCurrencies: 'Desteklenen Para Birimleri',
      goldStandard: 'Altın Standardı',
    },
    footer: {
      aboutTitle: 'ONSA Hakkında',
      aboutText: 'Altın standardı ilkeleri üzerinde çalışan, günlük kâr ve takım bonusları sunan bir premium yatırım platformu.',
      linksTitle: 'Hızlı Bağlantılar',
      contactTitle: 'İletişim',
      email: 'E-posta: support@onsa.com',
      availability: '24/7 Kullanılabilir',
      copyright: '© 2025 ONSA Platformu. Tüm hakları saklıdır. | Altın Standardı Yatırım',
    },
    language: {
      ar: 'Arapça',
      en: 'İngilizce',
      tr: 'Türkçe',
    },
  },
};

export function getTranslations(language: Language): Translations {
  return translations[language];
}
