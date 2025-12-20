export type Language = 'ar' | 'en' | 'tr';

export interface Translations {
  nav: {
    home: string;
    work: string;
    vip: string;
    team: string;
    profile: string;
  };
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
    teamVolume: string;
    accumulatedWithdrawal: string;
    accumulatedRecharge: string;
  };
  withdraw: {
    title: string;
    availableAssets: string;
    selectNetwork: string;
    withdrawalAddress: string;
    addressPlaceholder: string;
    withdrawalAmount: string;
    amountPlaceholder: string;
    all: string;
    minWithdrawal: string;
    maxWithdrawal: string;
    securityPassword: string;
    passwordPlaceholder: string;
    fees: string;
    actualArrival: string;
    confirm: string;
    reminderTitle: string;
    reminderText: string;
  };
  profile: {
    officialWebsite: string;
    loginPassword: string;
    securityPassword: string;
    records: string;
    helpCenter: string;
    customerService: string;
    changeLanguage: string;
    notifications: string;
    downloadApp: string;
    logout: string;
  };
  work: {
    title: string;
    startWork: string;
    working: string;
    completed: string;
    nextWorkIn: string;
    description: string;
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
  auth: {
    login: string;
    register: string;
    email: string;
    password: string;
    confirmPassword: string;
    noAccount: string;
    haveAccount: string;
    loginSuccess: string;
    registerSuccess: string;
    invalidCredentials: string;
    welcomeBack: string;
    createAccount: string;
  };
  language: {
    ar: string;
    en: string;
    tr: string;
  };
}

const translations: Record<Language, Translations> = {
  ar: {
    nav: {
      home: 'بيت',
      work: 'ترقية',
      vip: 'كبار الشخصيات',
      team: 'ادعو أصدقاء',
      profile: 'أنا',
    },
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
      teamVolume: 'الحجم الإجمالي للفريق',
      accumulatedWithdrawal: 'الانسحاب التراكمي',
      accumulatedRecharge: 'التغذية التراكمية',
    },
    withdraw: {
      title: 'ينسحب',
      availableAssets: 'الأصول المتاحة حاليا',
      selectNetwork: 'حدد الشبكة الرئيسية',
      withdrawalAddress: 'عنوان السحب',
      addressPlaceholder: 'الإدخال أو الضغط لفترة طويلة للصق عنوان السحب',
      withdrawalAmount: 'كمية السحب',
      amountPlaceholder: 'الرجاء إدخال مبلغ التحويل',
      all: 'الجميع',
      minWithdrawal: 'الحد الأدنى لمبلغ السحب',
      maxWithdrawal: 'الحد الأقصى لمبلغ السحب',
      securityPassword: 'كلمة المرور الأمن',
      passwordPlaceholder: 'كلمة المرور الأمن',
      fees: 'مصاريف',
      actualArrival: 'الوصول الفعلي',
      confirm: 'يؤاكد',
      reminderTitle: 'تذكير دافئ',
      reminderText: 'الحد الأدنى لمبلغ السحب لـ BEP هو 2USDT، والحد الأدنى لمبلغ السحب لـ TRC20 هو 2USDT. وهو يدعم عمليات السحب على مدار 24 ساعة. رسوم السحب هي 5%-20% (نظراً لأنه يجب دفع الضرائب، يلزم دفع رسوم السحب). اعتماداً على الوقت والمنطقة الخاصة بكل بلد، فإن أسرع وقت للسحب هو دقيقة واحدة وأبطأ وقت هو 24 ساعة. يرجى الانتظار بصبر. إذا لم يصل حسابك خلال 24 ساعة، يرجى الاتصال بخدمة العملاء عبر الإنترنت.',
    },
    profile: {
      officialWebsite: 'الموقع الرسمي',
      loginPassword: 'كلمة سر الدخول',
      securityPassword: 'كلمة المرور الأمن',
      records: 'سجل',
      helpCenter: 'مركز المساعدة',
      customerService: 'اتصل بخدمة العملاء',
      changeLanguage: 'تبديل اللغة',
      notifications: 'إشعار',
      downloadApp: 'تحميل التطبيق',
      logout: 'تسجيل خروج',
    },
    work: {
      title: 'واجهة العمل',
      startWork: 'ابدأ العمل',
      working: 'جاري العمل...',
      completed: 'تم العمل بنجاح',
      nextWorkIn: 'العمل القادم خلال',
      description: 'انقر لبدء مهمتك اليومية. سيستغرق الأمر 5 ثوانٍ لإكمال المهمة وإضافة الأرباح إلى محفظتك.',
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
    auth: {
      login: 'تسجيل الدخول',
      register: 'إنشاء حساب',
      email: 'البريد الإلكتروني',
      password: 'كلمة المرور',
      confirmPassword: 'تأكيد كلمة المرور',
      noAccount: 'ليس لديك حساب؟',
      haveAccount: 'لديك حساب بالفعل؟',
      loginSuccess: 'تم تسجيل الدخول بنجاح',
      registerSuccess: 'تم إنشاء الحساب بنجاح',
      invalidCredentials: 'بيانات الدخول غير صحيحة',
      welcomeBack: 'مرحباً بعودتك',
      createAccount: 'ابدأ رحلتك الاستثمارية معنا',
    },
    language: {
      ar: 'العربية',
      en: 'الإنجليزية',
      tr: 'التركية',
    },
  },
  en: {
    nav: {
      home: 'Home',
      work: 'Upgrade',
      vip: 'VIP',
      team: 'Invite',
      profile: 'Me',
    },
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
      teamVolume: 'Total Team Volume',
      accumulatedWithdrawal: 'Accumulated Withdrawal',
      accumulatedRecharge: 'Accumulated Recharge',
    },
    withdraw: {
      title: 'Withdraw',
      availableAssets: 'Currently Available Assets',
      selectNetwork: 'Select Main Network',
      withdrawalAddress: 'Withdrawal Address',
      addressPlaceholder: 'Enter or long press to paste withdrawal address',
      withdrawalAmount: 'Withdrawal Amount',
      amountPlaceholder: 'Please enter transfer amount',
      all: 'All',
      minWithdrawal: 'Min Withdrawal Amount',
      maxWithdrawal: 'Max Withdrawal Amount',
      securityPassword: 'Security Password',
      passwordPlaceholder: 'Security Password',
      fees: 'Fees',
      actualArrival: 'Actual Arrival',
      confirm: 'Confirm',
      reminderTitle: 'Warm Reminder',
      reminderText: 'The minimum withdrawal amount for BEP is 2USDT, and the minimum withdrawal amount for TRC20 is 2USDT. It supports 24-hour withdrawals. Withdrawal fees are 5%-20% (since taxes must be paid, withdrawal fees are required). Depending on the time and region of each country, the fastest withdrawal time is 1 minute and the slowest time is 24 hours. Please wait patiently. If your account does not arrive within 24 hours, please contact online customer service.',
    },
    profile: {
      officialWebsite: 'Official Website',
      loginPassword: 'Login Password',
      securityPassword: 'Security Password',
      records: 'Records',
      helpCenter: 'Help Center',
      customerService: 'Contact Customer Service',
      changeLanguage: 'Change Language',
      notifications: 'Notifications',
      downloadApp: 'Download App',
      logout: 'Logout',
    },
    work: {
      title: 'Work Interface',
      startWork: 'Start Work',
      working: 'Working...',
      completed: 'Work Completed',
      nextWorkIn: 'Next Work In',
      description: 'Click to start your daily task. It will take 5 seconds to complete the task and add profits to your wallet.',
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
    auth: {
      login: 'Login',
      register: 'Register',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      noAccount: "Don't have an account?",
      haveAccount: 'Already have an account?',
      loginSuccess: 'Login successful',
      registerSuccess: 'Registration successful',
      invalidCredentials: 'Invalid credentials',
      welcomeBack: 'Welcome Back',
      createAccount: 'Start your investment journey',
    },
    language: {
      ar: 'Arabic',
      en: 'English',
      tr: 'Turkish',
    },
  },
  tr: {
    nav: {
      home: 'Ev',
      work: 'Yükselt',
      vip: 'VIP',
      team: 'Davet Et',
      profile: 'Ben',
    },
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
      teamVolume: 'Toplam Takım Hacmi',
      accumulatedWithdrawal: 'Birikmiş Çekim',
      accumulatedRecharge: 'Birikmiş Yükleme',
    },
    withdraw: {
      title: 'Geri Çekil',
      availableAssets: 'Şu Anda Mevcut Varlıklar',
      selectNetwork: 'Ana Ağı Seçin',
      withdrawalAddress: 'Çekim Adresi',
      addressPlaceholder: 'Çekim adresini girin veya yapıştırmak için uzun basın',
      withdrawalAmount: 'Çekim Tutarı',
      amountPlaceholder: 'Lütfen transfer tutarını girin',
      all: 'Hepsi',
      minWithdrawal: 'Min Çekim Tutarı',
      maxWithdrawal: 'Maks Çekim Tutarı',
      securityPassword: 'Güvenlik Şifresi',
      passwordPlaceholder: 'Güvenlik Şifresi',
      fees: 'Ücretler',
      actualArrival: 'Gerçek Varış',
      confirm: 'Onayla',
      reminderTitle: 'Sıcak Hatırlatma',
      reminderText: 'BEP için minimum çekim tutarı 2USDT, TRC20 için minimum çekim tutarı 2USDT\'dir. 24 saatlik çekimleri destekler. Çekim ücretleri %5-%20\'dir (vergiler ödenmesi gerektiğinden çekim ücretleri gereklidir). Her ülkenin saatine ve bölgesine bağlı olarak, en hızlı çekim süresi 1 dakika, en yavaş süre 24 saattir. Lütfen sabırla bekleyin. Hesabınız 24 saat içinde gelmezse, lütfen çevrimiçi müşteri hizmetleriyle iletişime geçin.',
    },
    profile: {
      officialWebsite: 'Resmi Web Sitesi',
      loginPassword: 'Giriş Şifresi',
      securityPassword: 'Güvenlik Şifresi',
      records: 'Kayıtlar',
      helpCenter: 'Yardım Merkezi',
      customerService: 'Müşteri Hizmetleriyle İletişime Geçin',
      changeLanguage: 'Dili Değiştir',
      notifications: 'Bildirimler',
      downloadApp: 'Uygulamayı İndir',
      logout: 'Çıkış Yap',
    },
    work: {
      title: 'Çalışma Arayüzü',
      startWork: 'Çalışmaya Başla',
      working: 'Çalışılıyor...',
      completed: 'Çalışma Tamamlandı',
      nextWorkIn: 'Sonraki Çalışma',
      description: 'Günlük görevinizi başlatmak için tıklayın. Görevi tamamlamak ve cüzدانınıza kâr eklemek 5 saniye sürecektir.',
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
    auth: {
      login: 'Giriş Yap',
      register: 'Kayıt Ol',
      email: 'E-posta',
      password: 'Şifre',
      confirmPassword: 'Şifreyi Onayla',
      noAccount: 'Hesabınız yok mu?',
      haveAccount: 'Zaten hesabınız var mı?',
      loginSuccess: 'Giriş başarılı',
      registerSuccess: 'Kayıt başarılı',
      invalidCredentials: 'Geçersiz bilgiler',
      welcomeBack: 'Tekrar Hoş Geldiniz',
      createAccount: 'Yatırım yolculuğunuza başlayın',
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
