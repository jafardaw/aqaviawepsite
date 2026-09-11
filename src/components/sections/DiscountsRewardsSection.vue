<script setup lang="ts">
import { ref } from 'vue'
import { discountOffers } from '../../data/rewardsData'
import { useLanguage } from '../../composables/useLanguage'
import { 
  Tag, 
  Gift, 
  Share2, 
  Copy, 
  Check, 
  Clock, 
  MessageCircle, 
  AlertCircle,
  RotateCw,
  Send,
  User,
  Users
} from 'lucide-vue-next'

const { isArabic } = useLanguage()

// WhatsApp Official Number
const WHATSAPP_NUMBER = '963988588859'
const WHATSAPP_DISPLAY = '+963 988588859'

type ActiveTab = 'discounts' | 'referral' | 'wheel'
const currentTab = ref<ActiveTab>('discounts')

// Copy state feedback
const copiedCode = ref<string | null>(null)
const copySuccess = (code: string) => {
  if (typeof window !== 'undefined') {
    navigator.clipboard.writeText(code)
    copiedCode.value = code
    setTimeout(() => {
      copiedCode.value = null
    }, 2500)
  }
}

// 1. Send Coupon via WhatsApp
const sendCouponViaWhatsApp = (code: string, percent: number) => {
  const text = isArabic.value
    ? `مرحباً إدارة Aqavia، أرغب بالاستفادة من كود الخصم (${code}) بنسبة ${percent}% للتسجيل في التدريب.`
    : `Hello Aqavia Admin, I would like to redeem the discount coupon (${code}) for ${percent}% OFF for my training enrollment.`
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
  window.open(url, '_blank')
}

// 2. Referral Form via WhatsApp (أخبر الإدارة أن الشخص الفلاني سجل عن طريقي)
const myName = ref('')
const friendName = ref('')
const selectedTrack = ref('Flutter & Dart')

const tracksList = [
  'هندسة تطبيقات الموبايل (Flutter & Dart)',
  'هندسة الأنظمة الخلفية (Laravel & Microservices)',
  'هندسة واجهات الويب (Vue 3 & TypeScript)',
  'هندسة الذكاء الاصطناعي (AI & LLMs)',
  'تصميم المنتجات (UI/UX Systems)',
]

const submitReferralViaWhatsApp = () => {
  if (!myName.value.trim() || !friendName.value.trim()) {
    alert(isArabic.value ? 'يرجى كتابة اسمك واسم الشخص الذي سجل عن طريقك.' : 'Please enter your name and your friend’s name.')
    return
  }

  const message = isArabic.value
    ? `مرحباً إدارة Aqavia، أنا المهندس/ة: (${myName.value})،\nأود إعلامكم بأن: (${friendName.value}) قد سجل في (${selectedTrack.value}) عن طريقي.\nأرجو تفعيل نسبة الخصم الخاصة بي في برنامج (شارك واربح).`
    : `Hello Aqavia Admin, I am (${myName.value}).\nI would like to notify you that (${friendName.value}) has enrolled in (${selectedTrack.value}) through my referral.\nPlease activate my referral reward.`

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
}

// 3. Lucky Wheel Logic
const isSpinning = ref(false)
const wheelRotation = ref(0)
const spinResult = ref<string | null>(null)

const spinWheel = () => {
  if (isSpinning.value) return

  isSpinning.value = true
  spinResult.value = null

  // Fixed outcome: always lands cleanly on "حظ أوفر / Better luck"
  const targetAngle = 90 + (Math.random() > 0.5 ? 0 : 180)
  const fullSpins = 360 * 6
  const totalDegrees = fullSpins + targetAngle

  wheelRotation.value += totalDegrees

  setTimeout(() => {
    isSpinning.value = false
    spinResult.value = isArabic.value 
      ? '🍀 حظ أوفر في هذه المرة! لا تقلق، يمكنك مراسلة الإدارة عبر الواتساب للاستفادة فوراً من كود خصم التسجيل المبكر 25%!' 
      : '🍀 Better luck next time! Don’t worry, you can contact our WhatsApp support directly to claim our 25% discount!'
  }, 4800)
}

const contactWhatsAppSupport = () => {
  const text = isArabic.value
    ? `مرحباً إدارة Aqavia، جربت عجلة الحظ وأرغب بالاستفسار عن الخصومات المتاحة حالياً على مسارات التدريب.`
    : `Hello Aqavia Support, I played the lucky wheel and would like to inquire about available discounts on training tracks.`
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
  window.open(url, '_blank')
}
</script>

<template>
  <section 
    id="rewards" 
    class="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
  >
    <!-- Background Ambient Glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-[#12295D]/25 via-[#F3CE66]/15 to-[#2B5DE0]/20 blur-[150px] rounded-full pointer-events-none -z-10"></div>

    <!-- Section Header -->
    <div class="text-center max-w-3xl mx-auto space-y-4 mb-12">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12295D]/40 border border-[#F3CE66]/30 shadow-inner">
        <Gift class="w-4 h-4 text-[#F3CE66]" />
        <span class="text-xs sm:text-sm font-bold text-[#F3CE66] tracking-wide uppercase">
          {{ isArabic ? 'برامج المكافآت والخصومات والتواصل' : 'Discounts, Referral & WhatsApp Support' }}
        </span>
      </div>

      <h2 class="text-3xl sm:text-5xl font-black text-white dark:text-white light:text-[#0B1A3D] tracking-tight leading-tight">
        <span>{{ isArabic ? 'كوبونات الخصم | ' : 'Exclusive Coupons | ' }}</span>
        <span class="gold-gradient-text">{{ isArabic ? 'شارك واربح وعجلة الحظ' : 'Refer & Lucky Wheel' }}</span>
      </h2>

      <p class="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed max-w-2xl mx-auto">
        {{ isArabic 
          ? 'انسخ كود الخصم وفعّله مباشرة عبر الواتساب، أو شارك التدريب مع صديق وتواصل مع الإدارة للحصول على مكافأتك!'
          : 'Copy your discount coupon and activate it directly via WhatsApp, or refer a friend and notify our team!'
        }}
      </p>

      <!-- Official WhatsApp Quick Contact Badge -->
      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/50 border border-emerald-500/40 text-emerald-400 text-xs sm:text-sm font-bold shadow-lg">
        <MessageCircle class="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
        <span>{{ isArabic ? 'الواتساب الرسمي المعتمد للتسجيل:' : 'Official WhatsApp Support:' }}</span>
        <span dir="ltr" class="font-mono text-[#F3CE66]">{{ WHATSAPP_DISPLAY }}</span>
      </div>

      <!-- Interactive Tab Controls -->
      <div class="flex flex-wrap items-center justify-center gap-3 pt-6">
        <button
          @click="currentTab = 'discounts'"
          type="button"
          class="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer"
          :class="currentTab === 'discounts' 
            ? 'bg-gradient-to-r from-[#C89B3C] via-[#F3CE66] to-[#C89B3C] text-[#050811] shadow-lg shadow-[#F3CE66]/25 scale-105' 
            : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'"
        >
          <Tag class="w-4 h-4" />
          <span>{{ isArabic ? 'كوبونات الخصم' : 'Discount Coupons' }}</span>
        </button>

        <button
          @click="currentTab = 'referral'"
          type="button"
          class="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer"
          :class="currentTab === 'referral' 
            ? 'bg-gradient-to-r from-[#C89B3C] via-[#F3CE66] to-[#C89B3C] text-[#050811] shadow-lg shadow-[#F3CE66]/25 scale-105' 
            : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'"
        >
          <Share2 class="w-4 h-4" />
          <span>{{ isArabic ? 'شارك واربح (إبلاغ الإدارة)' : 'Refer & Claim' }}</span>
        </button>

        <button
          @click="currentTab = 'wheel'"
          type="button"
          class="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer"
          :class="currentTab === 'wheel' 
            ? 'bg-gradient-to-r from-[#C89B3C] via-[#F3CE66] to-[#C89B3C] text-[#050811] shadow-lg shadow-[#F3CE66]/25 scale-105' 
            : 'bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800'"
        >
          <RotateCw class="w-4 h-4" />
          <span>{{ isArabic ? 'عجلة الحظ' : 'Lucky Wheel' }}</span>
        </button>
      </div>
    </div>

    <!-- TAB 1: DISCOUNTS (انسخ الكود وأرسله ع الواتساب) -->
    <div v-if="currentTab === 'discounts'" class="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch animate-fadeIn">
      <div 
        v-for="discount in discountOffers" 
        :key="discount.id"
        class="relative flex flex-col justify-between p-7 rounded-3xl bg-[#090E1D]/90 dark:bg-[#090E1D]/95 light:bg-white/95 border border-slate-800 dark:border-slate-800 light:border-slate-200 backdrop-blur-xl shadow-2xl hover:border-[#F3CE66]/50 transition-all duration-300 group hover:-translate-y-1 overflow-hidden text-start"
      >
        <!-- Top Cut Bar -->
        <div 
          class="absolute top-0 inset-x-8 h-1 rounded-b-full"
          :style="{ background: discount.accentColor }"
        ></div>

        <div class="space-y-5">
          <div class="flex items-center justify-between">
            <span 
              class="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider"
              :style="{ backgroundColor: `${discount.accentColor}18`, color: discount.accentColor, border: `1px solid ${discount.accentColor}40` }"
            >
              {{ isArabic ? discount.badge.ar : discount.badge.en }}
            </span>
            <div class="flex items-center gap-1 text-xs text-slate-400">
              <Clock class="w-3.5 h-3.5 text-[#F3CE66]" />
              <span>{{ isArabic ? discount.expiresIn.ar : discount.expiresIn.en }}</span>
            </div>
          </div>

          <!-- Big Discount Percent -->
          <div class="flex items-baseline gap-2">
            <span class="text-4xl sm:text-5xl font-black text-white" :style="{ color: discount.accentColor }">
              {{ discount.discountPercent }}%
            </span>
            <span class="text-lg font-bold text-slate-300 uppercase">OFF</span>
          </div>

          <h3 class="text-lg font-black text-white group-hover:text-[#F3CE66] transition-colors leading-snug">
            {{ isArabic ? discount.title.ar : discount.title.en }}
          </h3>

          <p class="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed">
            {{ isArabic ? discount.description.ar : discount.description.en }}
          </p>
        </div>

        <!-- Coupon Box & WhatsApp Action -->
        <div class="pt-6 mt-6 border-t border-slate-800/70 space-y-3">
          <!-- Copy Coupon Box -->
          <div class="flex items-center justify-between p-2.5 rounded-xl bg-[#060914] border border-dashed border-[#F3CE66]/40">
            <code class="text-xs sm:text-sm font-mono font-bold text-[#F3CE66] tracking-wider ps-2">
              {{ discount.code }}
            </code>
            <button
              @click="copySuccess(discount.code)"
              type="button"
              class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer"
              :class="copiedCode === discount.code 
                ? 'bg-emerald-500 text-white' 
                : 'bg-slate-800 hover:bg-[#F3CE66] hover:text-[#050811] text-slate-200'"
            >
              <component :is="copiedCode === discount.code ? Check : Copy" class="w-3.5 h-3.5" />
              <span>{{ copiedCode === discount.code ? (isArabic ? 'تم النسخ!' : 'Copied!') : (isArabic ? 'نسخ الكود' : 'Copy') }}</span>
            </button>
          </div>

          <!-- Send via WhatsApp Button -->
          <button 
            @click="sendCouponViaWhatsApp(discount.code, discount.discountPercent)"
            type="button"
            class="w-full py-3 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-600/20"
          >
            <MessageCircle class="w-4 h-4 fill-white/20" />
            <span>{{ isArabic ? 'أرسل الكود عبر واتساب للتثبيت' : 'Send Coupon to WhatsApp' }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- TAB 2: REFERRAL (أخبر الإدارة أن الشخص الفلاني سجل عن طريقي عبر الواتساب) -->
    <div v-else-if="currentTab === 'referral'" class="max-w-3xl mx-auto animate-fadeIn">
      <div class="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#090E1D] via-[#0E162B] to-[#090E1D] border border-[#F3CE66]/30 shadow-2xl relative overflow-hidden text-start">
        
        <div class="text-center max-w-xl mx-auto space-y-3 mb-8">
          <span class="px-4 py-1 rounded-full text-xs font-bold uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
            {{ isArabic ? 'إثبات الإحالة المباشر عبر واتساب' : 'Direct WhatsApp Referral' }}
          </span>
          <h3 class="text-2xl sm:text-3xl font-black text-white">
            {{ isArabic ? 'شارك واربح | أبلغ الإدارة عبر واتساب' : 'Claim Your Referral Reward' }}
          </h3>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {{ isArabic 
              ? 'هل شاركت التدريب مع صديق أو زميل وقام بالتسجيل؟ أدخل بياناتك أدناه واضغط على الزر ليتم إرسال رسالة رسمية للإدارة عبر الواتساب (+963 988588859) لتفعيل نسبة الخصم الخاصة بك!'
              : 'Did a peer enroll in a track through you? Fill in the details below to instantly dispatch a verified WhatsApp notice to our admissions team (+963 988588859)!'
            }}
          </p>
        </div>

        <!-- Referral WhatsApp Form -->
        <form @submit.prevent="submitReferralViaWhatsApp" class="space-y-4 max-w-lg mx-auto">
          <!-- My Name -->
          <div class="space-y-1.5">
            <label class="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <User class="w-3.5 h-3.5 text-[#F3CE66]" />
              <span>{{ isArabic ? 'اسمك الكامل (صاحب الإحالة)' : 'Your Full Name' }}</span>
            </label>
            <input 
              v-model="myName"
              required
              type="text" 
              :placeholder="isArabic ? 'مثال: المهندس أحمد العلي' : 'e.g. Ahmed Ali'"
              class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-[#F3CE66]"
            />
          </div>

          <!-- Friend's Name -->
          <div class="space-y-1.5">
            <label class="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <Users class="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>{{ isArabic ? 'اسم الشخص الذي سجل في التدريب عن طريقك' : 'Name of Person Who Enrolled' }}</span>
            </label>
            <input 
              v-model="friendName"
              required
              type="text" 
              :placeholder="isArabic ? 'مثال: سامر يوسف' : 'e.g. Samer Youssef'"
              class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-[#38BDF8]"
            />
          </div>

          <!-- Track -->
          <div class="space-y-1.5">
            <label class="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <Tag class="w-3.5 h-3.5 text-[#F3CE66]" />
              <span>{{ isArabic ? 'المسار التدريبي الذي اختاره' : 'Enrolled Track' }}</span>
            </label>
            <select 
              v-model="selectedTrack"
              class="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-[#F3CE66]"
            >
              <option v-for="tr in tracksList" :key="tr" :value="tr">{{ tr }}</option>
            </select>
          </div>

          <!-- Send Notice via WhatsApp Button -->
          <button
            type="submit"
            class="w-full mt-2 py-3.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/30 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle class="w-5 h-5 fill-white/20" />
            <span>{{ isArabic ? 'إرسال إثبات الإحالة للإدارة عبر الواتساب' : 'Notify Admin via WhatsApp' }}</span>
            <Send class="w-4 h-4" />
          </button>
        </form>

        <!-- Guarantee Note -->
        <div class="mt-6 text-center text-xs text-slate-400">
          {{ isArabic ? 'سيتم الرد عليك وتأكيد نسبة الخصم الخاصة بك خلال ساعات العمل الرسمية.' : 'Our team will verify the enrollment and confirm your discount code promptly.' }}
        </div>
      </div>
    </div>

    <!-- TAB 3: LUCKY SPIN WHEEL (عجلة الحظ التفاعلية مع حظ أوفر) -->
    <div v-else-if="currentTab === 'wheel'" class="max-w-3xl mx-auto animate-fadeIn">
      <div class="p-8 sm:p-12 rounded-3xl bg-[#090E1D]/95 border border-[#F3CE66]/30 shadow-2xl relative overflow-hidden text-center flex flex-col items-center">
        
        <span class="px-4 py-1 rounded-full text-xs font-bold uppercase bg-[#12295D]/60 text-[#60A5FA] border border-[#12295D] mb-4">
          {{ isArabic ? 'مكافأة يومية مجانية' : 'Free Daily Spin' }}
        </span>

        <h3 class="text-2xl sm:text-4xl font-black text-white mb-2">
          {{ isArabic ? 'عجلة الحظ الهندسية 🎡' : 'The Engineer’s Lucky Wheel 🎡' }}
        </h3>
        <p class="text-xs sm:text-sm text-slate-400 max-w-md mb-8">
          {{ isArabic 
            ? 'أدر العجلة وجرّب حظك للحصول على خصومات استثنائية أو منح تدريبية!' 
            : 'Spin the lucky wheel for a chance to win tuition discounts and grants!' 
          }}
        </p>

        <!-- The Physical Wheel Graphic Container -->
        <div class="relative w-72 h-72 sm:w-88 sm:h-88 mb-8 flex items-center justify-center">
          
          <!-- Top Arrow Pointer -->
          <div class="absolute -top-3 z-30 flex flex-col items-center pointer-events-none">
            <div class="w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[24px] border-t-[#F3CE66] drop-shadow-[0_4px_10px_rgba(243,206,102,0.8)]"></div>
          </div>

          <!-- Outer Glowing Ring -->
          <div class="absolute inset-0 rounded-full border-4 border-[#F3CE66]/50 shadow-[0_0_50px_rgba(243,206,102,0.3)] pointer-events-none z-20"></div>

          <!-- Rotating SVG Wheel -->
          <div 
            class="w-full h-full rounded-full transition-transform duration-[4800ms] ease-out shadow-2xl relative"
            :style="{ 
              transform: `rotate(${wheelRotation}deg)`,
              transitionTimingFunction: 'cubic-bezier(0.15, 0.9, 0.2, 1)' 
            }"
          >
            <!-- SVG Wheel Pie Segments -->
            <svg viewBox="0 0 100 100" class="w-full h-full rounded-full overflow-hidden">
              <!-- Slice 0 (0-60deg) -->
              <path d="M 50 50 L 50 0 A 50 50 0 0 1 93.3 25 Z" fill="#12295D" stroke="#050811" stroke-width="0.8" />
              <!-- Slice 1 (60-120deg) -->
              <path d="M 50 50 L 93.3 25 A 50 50 0 0 1 93.3 75 Z" fill="#080D1C" stroke="#050811" stroke-width="0.8" />
              <!-- Slice 2 (120-180deg) -->
              <path d="M 50 50 L 93.3 75 A 50 50 0 0 1 50 100 Z" fill="#1B3B80" stroke="#050811" stroke-width="0.8" />
              <!-- Slice 3 (180-240deg) -->
              <path d="M 50 50 L 50 100 A 50 50 0 0 1 6.7 75 Z" fill="#12295D" stroke="#050811" stroke-width="0.8" />
              <!-- Slice 4 (240-300deg) -->
              <path d="M 50 50 L 6.7 75 A 50 50 0 0 1 6.7 25 Z" fill="#080D1C" stroke="#050811" stroke-width="0.8" />
              <!-- Slice 5 (300-360deg) -->
              <path d="M 50 50 L 6.7 25 A 50 50 0 0 1 50 0 Z" fill="#C89B3C" stroke="#050811" stroke-width="0.8" />
            </svg>

            <!-- Text Labels Placed on Segments -->
            <div class="absolute inset-0 flex items-center justify-center pointer-events-none text-[9px] sm:text-[11px] font-black uppercase">
              <span class="absolute top-8 right-14 text-[#F3CE66] rotate-[30deg]">30% OFF</span>
              <span class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 rotate-[90deg]">حظ أوفر 🍀</span>
              <span class="absolute bottom-8 right-14 text-white rotate-[150deg]">50% OFF</span>
              <span class="absolute bottom-8 left-14 text-[#38BDF8] rotate-[-150deg]">استشارة 💡</span>
              <span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 rotate-[-90deg]">حظ أوفر ✨</span>
              <span class="absolute top-8 left-14 text-[#050811] rotate-[-30deg]">منحة 100%</span>
            </div>

            <!-- Center Metallic Hub -->
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-tr from-[#12295D] via-[#F3CE66] to-[#C89B3C] p-1 shadow-2xl flex items-center justify-center z-10">
              <div class="w-full h-full rounded-full bg-[#050811] flex items-center justify-center text-xs font-black text-[#F3CE66] border border-[#F3CE66]/50">
                AQ
              </div>
            </div>
          </div>
        </div>

        <!-- Spin Action Button -->
        <button
          @click="spinWheel"
          :disabled="isSpinning"
          type="button"
          class="px-8 py-3.5 rounded-full font-black text-sm uppercase tracking-wider bg-gradient-to-r from-[#C89B3C] via-[#F3CE66] to-[#C89B3C] text-[#050811] shadow-xl shadow-[#F3CE66]/30 hover:shadow-[#F3CE66]/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <RotateCw class="w-4 h-4" :class="isSpinning ? 'animate-spin' : ''" />
          <span>{{ isSpinning ? (isArabic ? 'جاري تدوير العجلة...' : 'Spinning...') : (isArabic ? 'أدر العجلة الآن مجاناً!' : 'Spin The Wheel Now!') }}</span>
        </button>

        <!-- Spin Outcome Result Box -->
        <transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="opacity-0 translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
        >
          <div 
            v-if="spinResult"
            class="mt-6 p-5 rounded-2xl bg-[#060A16] border border-[#F3CE66]/40 text-start max-w-lg space-y-3"
          >
            <div class="flex items-center gap-2 text-amber-400 font-bold text-sm">
              <AlertCircle class="w-4 h-4 shrink-0" />
              <span>{{ isArabic ? 'نتيجة الجولة' : 'Spin Result' }}</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {{ spinResult }}
            </p>
            <div class="pt-2 flex items-center justify-between">
              <button 
                @click="contactWhatsAppSupport"
                type="button"
                class="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all flex items-center gap-2 cursor-pointer shadow-md"
              >
                <MessageCircle class="w-4 h-4 fill-white/20" />
                <span>{{ isArabic ? 'تواصل مع الواتساب الآن' : 'Contact WhatsApp Support' }}</span>
              </button>
            </div>
          </div>
        </transition>

      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 0.3s ease-out forwards;
}
</style>
