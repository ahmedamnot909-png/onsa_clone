import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, History, Eye, EyeOff, Send } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslations } from "@/lib/translations";
import { Link } from "wouter";

export default function Withdraw() {
  const { language, isRTL } = useLanguage();
  const t = getTranslations(language);
  const [showPassword, setShowPassword] = useState(false);
  const [network, setNetwork] = useState<'TRC20' | 'BEP20'>('TRC20');

  return (
    <div className={`min-h-screen bg-[#0f172a] text-white pb-20 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="p-4 flex items-center justify-between border-b border-slate-800 sticky top-0 bg-[#0f172a] z-50">
        <Link href="/">
          <ChevronLeft className={`w-6 h-6 cursor-pointer ${isRTL ? 'rotate-180' : ''}`} />
        </Link>
        <h1 className="text-lg font-bold">{t.withdraw.title}</h1>
        <History className="w-6 h-6 text-gold cursor-pointer" />
      </header>

      <main className="p-4 space-y-4 max-w-lg mx-auto">
        {/* Available Assets */}
        <Card className="bg-gradient-to-br from-blue-900 to-purple-900 border-none p-6 text-center">
          <p className="text-sm text-blue-200 mb-2">{t.withdraw.availableAssets} (USDT)</p>
          <p className="text-4xl font-bold">0.000000</p>
        </Card>

        {/* Network Selection */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-400">{t.withdraw.selectNetwork}</p>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setNetwork('TRC20')}
              className={`p-3 rounded-lg border flex items-center justify-center gap-2 transition-all ${
                network === 'TRC20' ? 'bg-blue-600 border-blue-400' : 'bg-slate-800 border-slate-700'
              }`}
            >
              <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-[10px] font-bold">T</div>
              TRC20-USDT
            </button>
            <button
              onClick={() => setNetwork('BEP20')}
              className={`p-3 rounded-lg border flex items-center justify-center gap-2 transition-all ${
                network === 'BEP20' ? 'bg-blue-600 border-blue-400' : 'bg-slate-800 border-slate-700'
              }`}
            >
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-[10px] font-bold">B</div>
              BEP20-USDT
            </button>
          </div>
        </div>

        {/* Withdrawal Address */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-400">{t.withdraw.withdrawalAddress}</p>
          <div className="bg-slate-800 rounded-lg p-1 border border-slate-700">
            <Input
              placeholder={t.withdraw.addressPlaceholder}
              className="bg-transparent border-none focus-visible:ring-0 text-sm h-12"
            />
          </div>
        </div>

        {/* Withdrawal Amount */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-400">{t.withdraw.withdrawalAmount}</p>
          <div className="bg-slate-800 rounded-lg p-1 border border-slate-700 relative">
            <Input
              placeholder={t.withdraw.amountPlaceholder}
              className="bg-transparent border-none focus-visible:ring-0 text-sm h-12 pr-16"
            />
            <button className={`absolute ${isRTL ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 text-emerald-400 font-bold text-sm`}>
              {t.withdraw.all}
            </button>
          </div>
          <div className="flex justify-between text-[10px] text-gray-500 px-1">
            <span>{t.withdraw.minWithdrawal}: 2.000</span>
            <span>{t.withdraw.maxWithdrawal}: 9999999.00</span>
          </div>
        </div>

        {/* Security Password */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-400">{t.withdraw.securityPassword}</p>
          <div className="bg-slate-800 rounded-lg p-1 border border-slate-700 relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder={t.withdraw.passwordPlaceholder}
              className="bg-transparent border-none focus-visible:ring-0 text-sm h-12"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className={`absolute ${isRTL ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 text-gray-400`}
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Fees Info */}
        <div className="space-y-2 pt-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">{t.withdraw.fees}:</span>
            <span className="font-bold">0 USDT</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">{t.withdraw.actualArrival}:</span>
            <span className="font-bold">0 USDT</span>
          </div>
        </div>

        {/* Confirm Button */}
        <Button className="w-full h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg rounded-full mt-4">
          {t.withdraw.confirm}
        </Button>

        {/* Warm Reminder */}
        <div className="mt-6 p-4 bg-slate-800/30 rounded-lg border border-slate-800">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 bg-white text-slate-900 rounded-full flex items-center justify-center text-xs font-bold">!</div>
            <p className="text-sm font-bold">{t.withdraw.reminderTitle}</p>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed">
            {t.withdraw.reminderText}
          </p>
        </div>

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
