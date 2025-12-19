import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, CheckCircle2, Loader2, Timer, Send } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslations } from "@/lib/translations";

export default function Work() {
  const { language, isRTL } = useLanguage();
  const t = getTranslations(language);
  const [status, setStatus] = useState<'idle' | 'working' | 'completed'>('idle');
  const [progress, setProgress] = useState(0);
  const [balance, setBalance] = useState(1250.50);

  const startWork = () => {
    if (status !== 'idle') return;
    
    setStatus('working');
    setProgress(0);
    
    const duration = 5000; // 5 seconds
    const interval = 50;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress((currentStep / steps) * 100);

      if (currentStep >= steps) {
        clearInterval(timer);
        setStatus('completed');
        setBalance(prev => prev + 2.50); // Add profit
      }
    }, interval);
  };

  return (
    <div className={`min-h-screen bg-[#0f172a] text-white pb-24 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <header className="p-6 text-center border-b border-slate-800">
        <h1 className="text-xl font-bold text-gold">{t.work.title}</h1>
      </header>

      <main className="p-6 max-w-lg mx-auto space-y-8">
        {/* Balance Card */}
        <Card className="bg-gradient-to-br from-blue-600 to-blue-800 border-none p-8 text-center shadow-xl">
          <p className="text-blue-100 text-sm mb-2">{t.stats.currentBalance}</p>
          <p className="text-4xl font-bold text-white">${balance.toFixed(2)}</p>
        </Card>

        {/* Work Area */}
        <div className="flex flex-col items-center justify-center py-12 space-y-8">
          <div className="relative w-48 h-48">
            {/* Progress Circle */}
            <svg className="w-full h-full -rotate-90">
              <circle
                cx="96"
                cy="96"
                r="88"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="8"
                className="text-slate-800"
              />
              <circle
                cx="96"
                cy="96"
                r="88"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="8"
                strokeDasharray={552.92}
                strokeDashoffset={552.92 - (552.92 * progress) / 100}
                className="text-gold transition-all duration-75"
              />
            </svg>
            
            {/* Center Icon/Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              {status === 'idle' && (
                <button
                  onClick={startWork}
                  className="w-32 h-32 bg-gold rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform group"
                >
                  <Play className="w-12 h-12 text-slate-900 fill-slate-900 group-hover:scale-110 transition-transform" />
                </button>
              )}
              {status === 'working' && (
                <div className="flex flex-col items-center">
                  <Loader2 className="w-16 h-16 text-gold animate-spin" />
                  <p className="text-gold font-bold mt-2">{Math.round(progress)}%</p>
                </div>
              )}
              {status === 'completed' && (
                <div className="flex flex-col items-center animate-bounce">
                  <CheckCircle2 className="w-20 h-20 text-emerald-400" />
                </div>
              )}
            </div>
          </div>

          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold">
              {status === 'idle' && t.work.startWork}
              {status === 'working' && t.work.working}
              {status === 'completed' && t.work.completed}
            </h2>
            <p className="text-gray-400 text-sm max-w-xs mx-auto">
              {t.work.description}
            </p>
          </div>

          {status === 'completed' && (
            <Card className="bg-emerald-500/10 border-emerald-500/20 p-4 flex items-center gap-3">
              <Timer className="w-5 h-5 text-emerald-400" />
              <p className="text-emerald-400 text-sm font-medium">
                {t.work.nextWorkIn}: 23:59:59
              </p>
            </Card>
          )}
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
