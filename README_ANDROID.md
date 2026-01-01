# تطبيق أونصة Android

تم تحويل موقع أونصة الويب إلى تطبيق Android باستخدام Capacitor.

## البدء السريع

### المتطلبات:
- Node.js 16+
- Java JDK 11+
- Android SDK (يأتي مع Android Studio)

### التثبيت والبناء:

```bash
# 1. تثبيت الحزم
pnpm install

# 2. بناء الموقع
pnpm build

# 3. بناء APK
cd android
./gradlew assembleDebug

# 4. الملف النهائي
# android/app/build/outputs/apk/debug/app-debug.apk
```

## الملفات المهمة

- `capacitor.config.ts` - إعدادات Capacitor
- `android/` - مشروع Android
- `.github/workflows/build-android.yml` - GitHub Actions

## الميزات المدعومة

- ✅ تطبيق ويب كامل
- ✅ دعم اللغات الثلاث (عربي، إنجليزي، تركي)
- ✅ عجلة الحظ التفاعلية
- ✅ نظام الإشعارات
- ✅ تخزين الملفات

## الخطوات التالية

1. اقرأ [دليل البناء الكامل](../ANDROID_BUILD_GUIDE.md)
2. اختبر التطبيق على جهازك
3. وقّع APK للإصدار الإنتاجي
4. انشر على Google Play Store

## الدعم

للمزيد من المعلومات، راجع:
- [Capacitor Docs](https://capacitorjs.com/docs)
- [Android Development](https://developer.android.com/)
