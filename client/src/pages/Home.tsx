import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Copy, TrendingUp, Users, Gift, Wallet, Download, Upload, Globe } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslations, type Language } from "@/lib/translations";
import { Link } from "wouter";

/**
 * Design Philosophy: Premium Investment Dashboard
 * - Color Scheme: Deep blue (#1a1f3a) with gold accents (#d4af37)
 * - Typography: Bold headers with clean body text
 * - Layout: Card-based grid with clear hierarchy
 * - Spacing: Generous whitespace for premium feel
 * - Language Support: Arabic (RTL), English (LTR), Turkish (LTR)
 */

export default function Home() {
  const { language, setLanguage, isRTL } = useLanguage();
  const t = getTranslations(language);
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  // Mock user data
  const userData = {
    balance: 1250.50,
    dailyProfit: 45.32,
    totalProfit: 892.15,
    referrals: 12,
    teamBonus: 156.80,
  };

  // Profit rates based on deposit amount
  const profitRates = [
    { range: "$50 - $500", min: 1.8, max: 3.2 },
    { range: "$500 - $5,000", min: 2.5, max: 3.6 },
    { range: "$5,000 - $10,000", min: 3.1, max: 4.2 },
    { range: "$10,000 - $20,000", min: 3.3, max: 5.0 },
  ];

  // Wheel of fortune prizes
  const wheelPrizes = [
    { prize: "$1", count: 10 },
    { prize: "$5", count: 10 },
    { prize: "$10", count: 10 },
    { prize: "$20", count: 3, note: "from 30" },
    { prize: "$50", count: 1, note: "from 50" },
    { prize: "$100", count: 1, note: "from 100" },
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="border-b border-gold/20 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-gold to-yellow-500 rounded-lg flex items-center justify-center">
              <span className="text-slate-900 font-bold text-lg">Ⓞ</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">{t.header.platformName}</h1>
              <p className="text-xs text-gold">{t.header.goldStandard}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="flex items-center gap-2 bg-slate-800/50 rounded-lg p-2 border border-gold/20">
              <Globe className="w-4 h-4 text-gold" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="bg-transparent text-white text-sm font-medium cursor-pointer outline-none"
              >
                <option value="ar">{t.language.ar}</option>
                <option value="en">{t.language.en}</option>
                <option value="tr">{t.language.tr}</option>
              </select>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">{t.header.platformLaunched}</p>
              <p className="text-lg font-semibold text-gold">{t.header.launchDate}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-white mb-2">{t.welcome.title}</h2>
          <p className="text-gray-400">{t.welcome.subtitle}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-blue-600 to-blue-700 border-gold/30 p-6">
            <p className="text-sm text-blue-100 mb-2">{t.stats.currentBalance}</p>
            <p className="text-3xl font-bold text-white">${userData.balance.toFixed(2)}</p>
            <p className="text-xs text-blue-200 mt-2">{t.stats.usd}</p>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-600 to-emerald-700 border-gold/30 p-6">
            <p className="text-sm text-emerald-100 mb-2">{t.stats.dailyProfit}</p>
            <p className="text-3xl font-bold text-white">${userData.dailyProfit.toFixed(2)}</p>
            <p className="text-xs text-emerald-200 mt-2">{t.stats.today}</p>
          </Card>

          <Card className="bg-gradient-to-br from-purple-600 to-purple-700 border-gold/30 p-6">
            <p className="text-sm text-purple-100 mb-2">{t.stats.totalProfit}</p>
            <p className="text-3xl font-bold text-white">${userData.totalProfit.toFixed(2)}</p>
            <p className="text-xs text-purple-200 mt-2">{t.stats.lifetime}</p>
          </Card>

          <Card className="bg-gradient-to-br from-orange-600 to-orange-700 border-gold/30 p-6">
            <p className="text-sm text-orange-100 mb-2">{t.stats.referrals}</p>
            <p className="text-3xl font-bold text-white">{userData.referrals}</p>
            <p className="text-xs text-orange-200 mt-2">{t.stats.active}</p>
          </Card>

          <Card className="bg-gradient-to-br from-gold to-yellow-500 border-gold/30 p-6">
            <p className="text-sm text-yellow-900 mb-2">{t.stats.teamBonus}</p>
            <p className="text-3xl font-bold text-slate-900">${userData.teamBonus.toFixed(2)}</p>
            <p className="text-xs text-yellow-800 mt-2">{t.stats.earned}</p>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white h-14 text-lg font-semibold rounded-lg flex items-center justify-center gap-2">
            <Upload className="w-5 h-5" />
            {t.buttons.depositNow}
          </Button>
          <Link href="/withdraw">
            <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white h-14 text-lg font-semibold rounded-lg flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              {t.buttons.withdrawFunds}
            </Button>
          </Link>
        </div>

        {/* Wallet Addresses */}
        <Card className="bg-slate-800/50 border-gold/20 p-6 mb-8">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Wallet className="w-5 h-5 text-gold" />
            {t.wallets.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-900/50 rounded-lg p-4 border border-gold/20">
              <p className="text-sm text-gray-400 mb-2">{t.wallets.usdtLabel}</p>
              <div className="flex items-center gap-2">
                <code className="text-xs text-gold break-all font-mono">0x4cb40625433ea49f44f39b8f7bcb480e3fddbde5</code>
                <button
                  onClick={() => copyToClipboard("0x4cb40625433ea49f44f39b8f7bcb480e3fddbde5", "usdt")}
                  className="ml-auto p-2 hover:bg-slate-800 rounded transition-colors"
                >
                  <Copy className={`w-4 h-4 ${copied === "usdt" ? "text-emerald-400" : "text-gold"}`} />
                </button>
              </div>
            </div>
            <div className="bg-slate-900/50 rounded-lg p-4 border border-gold/20">
              <p className="text-sm text-gray-400 mb-2">{t.wallets.trxLabel}</p>
              <div className="flex items-center gap-2">
                <code className="text-xs text-gold break-all font-mono">TAqFCN9UeLi3qtNrMRvnrkaneaLSo4CPtg</code>
                <button
                  onClick={() => copyToClipboard("TAqFCN9UeLi3qtNrMRvnrkaneaLSo4CPtg", "trx")}
                  className="ml-auto p-2 hover:bg-slate-800 rounded transition-colors"
                >
                  <Copy className={`w-4 h-4 ${copied === "trx" ? "text-emerald-400" : "text-gold"}`} />
                </button>
              </div>
            </div>
          </div>
        </Card>

        {/* Profit Rates Section */}
        <Card className="bg-slate-800/50 border-gold/20 p-6 mb-8">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-gold" />
            {t.profitRates.title}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gold/20">
                  <th className="text-left py-3 px-4 text-gold font-semibold">{t.profitRates.investmentRange}</th>
                  <th className="text-right py-3 px-4 text-gold font-semibold">{t.profitRates.minimumRate}</th>
                  <th className="text-right py-3 px-4 text-gold font-semibold">{t.profitRates.maximumRate}</th>
                </tr>
              </thead>
              <tbody>
                {profitRates.map((rate, idx) => (
                  <tr key={idx} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                    <td className="py-3 px-4 text-gray-300">{rate.range}</td>
                    <td className="py-3 px-4 text-right text-emerald-400">{rate.min}%</td>
                    <td className="py-3 px-4 text-right text-emerald-400">{rate.max}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Commission Rates */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card className="bg-slate-800/50 border-gold/20 p-6">
            <h3 className="text-xl font-bold text-white mb-4">{t.commissions.title}</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-slate-900/50 rounded-lg border border-gold/10">
                <span className="text-gray-300">{t.commissions.referralBonus}</span>
                <span className="text-gold font-bold text-lg">10%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-900/50 rounded-lg border border-gold/10">
                <span className="text-gray-300">{t.commissions.withdrawBeforeDoubling}</span>
                <span className="text-gold font-bold text-lg">20%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-900/50 rounded-lg border border-gold/10">
                <span className="text-gray-300">{t.commissions.withdrawAfterDoubling}</span>
                <span className="text-gold font-bold text-lg">5%</span>
              </div>
            </div>
          </Card>

          <Card className="bg-slate-800/50 border-gold/20 p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-gold" />
              {t.teamRates.title}
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-slate-900/50 rounded-lg border border-gold/10">
                <span className="text-gray-300">{t.teamRates.teamLevel1}</span>
                <span className="text-gold font-bold text-lg">10%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-900/50 rounded-lg border border-gold/10">
                <span className="text-gray-300">{t.teamRates.teamLevel2}</span>
                <span className="text-gold font-bold text-lg">3%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-900/50 rounded-lg border border-gold/10">
                <span className="text-gray-300">{t.teamRates.teamLevel3}</span>
                <span className="text-gold font-bold text-lg">1%</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Wheel of Fortune */}
        <Card className="bg-slate-800/50 border-gold/20 p-6 mb-8">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Gift className="w-5 h-5 text-gold" />
            {t.wheelOfFortune.title}
          </h3>
          <div className="bg-slate-900/50 rounded-lg p-4 mb-4 border border-gold/20">
            <p className="text-sm text-gold mb-3 font-semibold">{t.wheelOfFortune.minimumDeposit}</p>
            <p className="text-xs text-gray-400">{t.wheelOfFortune.description}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {wheelPrizes.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gold/20 to-yellow-600/20 border border-gold/30 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-gold mb-1">{item.prize}</p>
                <p className="text-xs text-gray-400">{item.count}x</p>
                {item.note && <p className="text-xs text-gold/70 mt-1">{t.wheelOfFortune.from} {item.note}</p>}
              </div>
            ))}
          </div>
        </Card>

        {/* Daily Mission */}
        <Card className="bg-gradient-to-r from-gold/20 to-yellow-600/20 border-gold/30 p-6 mb-8">
          <h3 className="text-xl font-bold text-white mb-4">{t.dailyMission.title}</h3>
          <p className="text-gray-300 mb-4">
            {t.dailyMission.description}
          </p>
          <Button className="bg-gradient-to-r from-gold to-yellow-500 hover:from-yellow-500 hover:to-gold text-slate-900 font-bold h-12 rounded-lg w-full">
            {t.buttons.claimDailyBonus}
          </Button>
        </Card>

        {/* Platform Info */}
        <Card className="bg-slate-800/50 border-gold/20 p-6">
          <h3 className="text-xl font-bold text-white mb-4">{t.platformInfo.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="p-3 bg-slate-900/50 rounded-lg border border-gold/10">
              <p className="text-gray-400 mb-1">{t.platformInfo.platformName}</p>
              <p className="text-gold font-bold text-lg">{t.header.platformName}</p>
            </div>
            <div className="p-3 bg-slate-900/50 rounded-lg border border-gold/10">
              <p className="text-gray-400 mb-1">{t.platformInfo.launchDate}</p>
              <p className="text-gold font-bold text-lg">{t.header.launchDate}</p>
            </div>
            <div className="p-3 bg-slate-900/50 rounded-lg border border-gold/10">
              <p className="text-gray-400 mb-1">{t.platformInfo.operatingStandard}</p>
              <p className="text-gold font-bold text-lg">{t.platformInfo.goldStandard}</p>
            </div>
            <div className="p-3 bg-slate-900/50 rounded-lg border border-gold/10">
              <p className="text-gray-400 mb-1">{t.platformInfo.supportedCurrencies}</p>
              <p className="text-gold font-bold text-lg">USDT, TRX</p>
            </div>
          </div>
        </Card>
      </main>

      {/* Footer */}
      <footer className="border-t border-gold/20 bg-slate-900/50 backdrop-blur-sm mt-12">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-3">{t.footer.aboutTitle}</h4>
              <p className="text-sm text-gray-400">{t.footer.aboutText}</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">{t.footer.linksTitle}</h4>
              <ul className="text-sm text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-gold transition-colors">{t.buttons.depositNow}</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">{t.buttons.withdrawFunds}</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">{t.stats.referrals}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">{t.footer.contactTitle}</h4>
              <p className="text-sm text-gray-400">{t.footer.email}</p>
              <p className="text-sm text-gray-400">{t.footer.availability}</p>
            </div>
          </div>
          <div className="border-t border-gold/20 pt-8 text-center text-sm text-gray-400">
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
