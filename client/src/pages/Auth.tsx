import { useState } from "react";
import { useLocation } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslations } from "@/lib/translations";
import { useNotification } from "@/contexts/NotificationContext";
import { Eye, EyeOff, Mail, Lock, UserPlus, LogIn } from "lucide-react";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [, setLocation] = useLocation();
  const { language, isRTL } = useLanguage();
  const t = getTranslations(language);
  const { addNotification } = useNotification();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      addNotification({
        type: 'error',
        title: 'خطأ',
        message: t.auth.invalidCredentials,
      });
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      addNotification({
        type: 'error',
        title: 'خطأ',
        message: 'كلمات المرور غير متطابقة',
      });
      return;
    }

    const users = JSON.parse(localStorage.getItem("onsa_users") || "[]");

    if (isLogin) {
      const user = users.find((u: any) => u.email === email && u.password === password);
      if (user) {
        localStorage.setItem("onsa_current_user", JSON.stringify(user));
        addNotification({
          type: 'success',
          title: 'نجح',
          message: t.auth.loginSuccess,
        });
        setLocation("/");
      } else {
        addNotification({
          type: 'error',
          title: 'خطأ',
          message: t.auth.invalidCredentials,
        });
      }
    } else {
      if (users.find((u: any) => u.email === email)) {
        addNotification({
          type: 'error',
          title: 'خطأ',
          message: 'البريد الإلكتروني موجود بالفعل',
        });
        return;
      }

      const newUser = {
        email,
        password,
        balance: 0,
        dailyProfit: 0,
        totalProfit: 0,
        referrals: 0,
        teamBonus: 0,
        lastWorkTime: null
      };

      users.push(newUser);
      localStorage.setItem("onsa_users", JSON.stringify(users));
      localStorage.setItem("onsa_current_user", JSON.stringify(newUser));
      addNotification({
        type: 'success',
        title: 'نجح',
        message: t.auth.registerSuccess,
      });
      setLocation("/");
    }
  };

  return (
    <div className={`min-h-screen bg-[#0f172a] flex items-center justify-center p-4 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Card className="w-full max-w-md bg-slate-900/50 border-slate-800 p-8 shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gold mb-2">{t.header.platformName}</h1>
          <p className="text-gray-400 text-sm">
            {isLogin ? t.auth.welcomeBack : t.auth.createAccount}
          </p>
        </div>

        <form onSubmit={handleAuth} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">{t.auth.email}</label>
            <div className="relative">
              <Mail className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500`} />
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`bg-slate-800 border-slate-700 h-12 ${isRTL ? 'pr-10' : 'pl-10'}`}
                placeholder="example@mail.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">{t.auth.password}</label>
            <div className="relative">
              <Lock className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500`} />
              <Input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`bg-slate-800 border-slate-700 h-12 ${isRTL ? 'pr-10 pl-10' : 'pl-10 pr-10'}`}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute ${isRTL ? 'left-3' : 'right-3'} top-1/2 -translate-y-1/2 text-gray-500`}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {!isLogin && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">{t.auth.confirmPassword}</label>
              <div className="relative">
                <Lock className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500`} />
                <Input
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`bg-slate-800 border-slate-700 h-12 ${isRTL ? 'pr-10' : 'pl-10'}`}
                  placeholder="••••••••"
                />
              </div>
            </div>
          )}

          <Button type="submit" className="w-full h-12 bg-gold hover:bg-gold/90 text-slate-900 font-bold text-lg rounded-lg">
            {isLogin ? (
              <div className="flex items-center gap-2"><LogIn className="w-5 h-5" /> {t.auth.login}</div>
            ) : (
              <div className="flex items-center gap-2"><UserPlus className="w-5 h-5" /> {t.auth.register}</div>
            )}
          </Button>
        </form>

        <div className="mt-8 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-gold hover:underline text-sm font-medium"
          >
            {isLogin ? t.auth.noAccount : t.auth.haveAccount}
          </button>
        </div>
      </Card>
    </div>
  );
}
