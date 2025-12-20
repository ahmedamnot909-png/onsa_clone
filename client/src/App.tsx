import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";
import { NotificationProvider } from "./contexts/NotificationContext";
import { NotificationContainer } from "./components/NotificationContainer";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Withdraw from "./pages/Withdraw";
import Profile from "./pages/Profile";
import Work from "./pages/Work";
import { Home as HomeIcon, Zap, Shield, Users, User } from "lucide-react";
import { getTranslations } from "./lib/translations";

function BottomNav() {
  const [location] = useLocation();
  const { language, isRTL } = useLanguage();
  const t = getTranslations(language);

  const navItems = [
    { path: "/", icon: <HomeIcon className="w-6 h-6" />, label: t.nav.home },
    { path: "/work", icon: <Zap className="w-6 h-6" />, label: t.nav.work },
    { path: "/vip", icon: <Shield className="w-6 h-6" />, label: t.nav.vip },
    { path: "/team", icon: <Users className="w-6 h-6" />, label: t.nav.team },
    { path: "/profile", icon: <User className="w-6 h-6" />, label: t.nav.profile },
  ];

  return (
    <nav className={`fixed bottom-0 left-0 right-0 bg-[#1e293b] border-t border-slate-800 px-2 py-2 flex justify-around items-center z-50 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {navItems.map((item) => {
        const isActive = location === item.path;
        return (
          <a
            key={item.path}
            href={item.path}
            className={`flex flex-col items-center gap-1 px-3 py-1 rounded-lg transition-colors ${
              isActive ? "text-gold" : "text-gray-400 hover:text-gray-200"
            }`}
          >
            {item.icon}
            <span className="text-[10px] font-medium">{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}

function Router() {
  const [location] = useLocation();
  const isAuthPage = location === '/auth';

  return (
    <div className="pb-16">
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/" component={Home} />
        <Route path="/withdraw" component={Withdraw} />
        <Route path="/profile" component={Profile} />
        <Route path="/work" component={Work} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
      {!isAuthPage && <BottomNav />}
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <ThemeProvider defaultTheme="dark">
          <NotificationProvider>
            <TooltipProvider>
              <Toaster />
              <NotificationContainer />
              <Router />
            </TooltipProvider>
          </NotificationProvider>
        </ThemeProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
