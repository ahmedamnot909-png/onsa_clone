import { Card } from "@/components/ui/card";
import { ChevronRight, Globe, Shield, Lock, FileText, HelpCircle, Headset, Bell, Download, LogOut, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslations } from "@/lib/translations";

export default function Profile() {
  const { language, isRTL } = useLanguage();
  const t = getTranslations(language);

  const menuItems = [
    { icon: <Globe className="w-5 h-5 text-blue-400" />, label: t.profile.officialWebsite },
    { icon: <Lock className="w-5 h-5 text-blue-400" />, label: t.profile.loginPassword },
    { icon: <Shield className="w-5 h-5 text-blue-400" />, label: t.profile.securityPassword },
    { icon: <FileText className="w-5 h-5 text-blue-400" />, label: t.profile.records },
    { icon: <HelpCircle className="w-5 h-5 text-blue-400" />, label: t.profile.helpCenter },
    { icon: <Headset className="w-5 h-5 text-blue-400" />, label: t.profile.customerService },
    { icon: <Globe className="w-5 h-5 text-blue-400" />, label: t.profile.changeLanguage },
    { icon: <Bell className="w-5 h-5 text-blue-400" />, label: t.profile.notifications },
    { icon: <Download className="w-5 h-5 text-blue-400" />, label: t.profile.downloadApp },
  ];

  return (
    <div className={`min-h-screen bg-[#0f172a] text-white pb-24 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Stats Header */}
      <div className="bg-gradient-to-b from-blue-900/50 to-transparent p-6 pt-12">
        <div className="grid grid-cols-3 gap-4 text-center mb-6">
          <div>
            <p className="text-2xl font-bold">0</p>
            <p className="text-[10px] text-gray-400 mt-1">{t.stats.teamVolume} (USDT)</p>
          </div>
          <div>
            <p className="text-2xl font-bold">0.00</p>
            <p className="text-[10px] text-gray-400 mt-1">{t.stats.accumulatedWithdrawal} (USDT)</p>
          </div>
          <div>
            <p className="text-2xl font-bold">0</p>
            <p className="text-[10px] text-gray-400 mt-1">{t.stats.accumulatedRecharge}</p>
          </div>
        </div>
      </div>

      <main className="px-4 space-y-4 max-w-lg mx-auto">
        {/* Menu List */}
        <Card className="bg-slate-800/50 border-none overflow-hidden">
          <div className="divide-y divide-slate-700/50">
            {menuItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 hover:bg-slate-700/30 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
                <ChevronRight className={`w-4 h-4 text-gray-500 ${isRTL ? 'rotate-180' : ''}`} />
              </div>
            ))}
          </div>
        </Card>

        {/* Logout Button */}
        <button className="w-full h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg rounded-full mt-4 flex items-center justify-center gap-2">
          <LogOut className="w-5 h-5" />
          {t.profile.logout}
        </button>

        {/* Telegram Icon Floating */}
        <div className={`fixed bottom-24 ${isRTL ? 'left-4' : 'right-4'} z-50`}>
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer">
            <Send className="w-6 h-6 text-white -rotate-12" />
          </div>
        </div>
      </main>
    </div>
  );
}
