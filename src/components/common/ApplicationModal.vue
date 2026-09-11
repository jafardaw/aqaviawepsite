<script setup lang="ts">
import { ref } from 'vue'
import { useLanguage } from '../../composables/useLanguage'
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  Send, 
  User, 
  Mail, 
  Phone, 
  Code2, 
  Github 
} from 'lucide-vue-next'

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const { isArabic } = useLanguage()

const isSubmitted = ref(false)
const isSubmitting = ref(false)

const form = ref({
  fullName: '',
  email: '',
  phone: '',
  track: 'flutter-mobile',
  experience: 'intermediate',
  github: '',
})

const handleSubmit = () => {
  isSubmitting.value = true
  setTimeout(() => {
    isSubmitting.value = false
    isSubmitted.value = true
  }, 1000)
}

const handleReset = () => {
  isSubmitted.value = false
  form.value = {
    fullName: '',
    email: '',
    phone: '',
    track: 'flutter-mobile',
    experience: 'intermediate',
    github: '',
  }
  emit('close')
}
</script>

<template>
  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div 
      v-if="isOpen" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto"
      @click.self="emit('close')"
    >
      <div 
        class="relative w-full max-w-xl p-6 sm:p-8 rounded-3xl bg-[#080D1C] border border-[#F3CE66]/40 shadow-2xl shadow-black/80 text-white overflow-hidden"
      >
        <!-- Top Accent Light -->
        <div class="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#F3CE66] to-transparent"></div>

        <!-- Close Button -->
        <button 
          @click="emit('close')"
          type="button"
          class="absolute top-5 end-5 p-2 rounded-full bg-slate-850 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X class="w-5 h-5" />
        </button>

        <!-- Success Message -->
        <div v-if="isSubmitted" class="py-10 text-center space-y-4">
          <div class="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mx-auto text-emerald-400">
            <CheckCircle2 class="w-8 h-8" />
          </div>
          <h3 class="text-2xl font-black text-white">
            {{ isArabic ? 'تم استلام طلبك بنجاح!' : 'Application Submitted!' }}
          </h3>
          <p class="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            {{ isArabic 
              ? 'شكراً لاهتمامك بالانضمام إلى صرح Aqavia الأمريكي. سيتواصل معك أحد مستشارينا التقنيين خلال 24 ساعة لترتيب موعد التقييم التقني المبدئي.'
              : 'Thank you for applying to Aqavia US. A technical advisor will reach out within 24 hours to schedule your initial diagnostic assessment.'
            }}
          </p>
          <button 
            @click="handleReset"
            type="button"
            class="mt-4 px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider bg-[#F3CE66] text-[#050811] hover:scale-105 transition-transform cursor-pointer"
          >
            {{ isArabic ? 'إغلاق' : 'Close' }}
          </button>
        </div>

        <!-- Form Content -->
        <div v-else class="space-y-6">
          <div class="text-start space-y-1">
            <div class="inline-flex items-center gap-2 text-xs font-bold text-[#F3CE66] uppercase tracking-wider">
              <Sparkles class="w-3.5 h-3.5" />
              <span>{{ isArabic ? 'بوابة التسجيل والتدريب الداخلي' : 'Apprenticeship Admissions' }}</span>
            </div>
            <h3 class="text-xl sm:text-2xl font-black text-white">
              {{ isArabic ? 'قدّم طلب انضمامك لـ Aqavia' : 'Apply for Aqavia Apprenticeship' }}
            </h3>
            <p class="text-xs text-slate-400">
              {{ isArabic ? 'المقاعد محدودة لضمان جودة الإشراف الفردي والمراجعة الشخصية للكود.' : 'Strict cohort caps to guarantee genuine 1-on-1 mentor code reviews.' }}
            </p>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-4">
            <!-- Full Name -->
            <div class="space-y-1.5 text-start">
              <label class="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <User class="w-3.5 h-3.5 text-[#F3CE66]" />
                <span>{{ isArabic ? 'الاسم الثلاثي' : 'Full Name' }}</span>
              </label>
              <input 
                v-model="form.fullName"
                required
                type="text" 
                :placeholder="isArabic ? 'مثال: أحمد محمد العلي' : 'e.g. John Doe'"
                class="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-sm text-white focus:outline-none focus:border-[#F3CE66] transition-colors"
              />
            </div>

            <!-- Email & Phone Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div class="space-y-1.5 text-start">
                <label class="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <Mail class="w-3.5 h-3.5 text-[#F3CE66]" />
                  <span>{{ isArabic ? 'البريد الإلكتروني' : 'Email Address' }}</span>
                </label>
                <input 
                  v-model="form.email"
                  required
                  type="email" 
                  placeholder="engineer@example.com"
                  class="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-sm text-white focus:outline-none focus:border-[#F3CE66] transition-colors"
                />
              </div>

              <div class="space-y-1.5 text-start">
                <label class="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <Phone class="w-3.5 h-3.5 text-[#F3CE66]" />
                  <span>{{ isArabic ? 'رقم الهاتف / الواتساب' : 'WhatsApp / Phone' }}</span>
                </label>
                <input 
                  v-model="form.phone"
                  required
                  type="tel" 
                  placeholder="+1 (555) 000-0000"
                  class="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-sm text-white focus:outline-none focus:border-[#F3CE66] transition-colors"
                />
              </div>
            </div>

            <!-- Track Selector -->
            <div class="space-y-1.5 text-start">
              <label class="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <Code2 class="w-3.5 h-3.5 text-[#F3CE66]" />
                <span>{{ isArabic ? 'المسار التدريبي المطلوب' : 'Target Track' }}</span>
              </label>
              <select 
                v-model="form.track"
                class="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-sm text-white focus:outline-none focus:border-[#F3CE66] transition-colors"
              >
                <option value="flutter-mobile">{{ isArabic ? 'هندسة تطبيقات الموبايل (Flutter & Dart)' : 'Mobile Engineering (Flutter & Dart)' }}</option>
                <option value="laravel-backend">{{ isArabic ? 'هندسة الأنظمة الخلفية (Laravel & Microservices)' : 'Backend & Microservices (Laravel)' }}</option>
                <option value="vue-frontend">{{ isArabic ? 'هندسة واجهات الويب (Vue 3 & TypeScript)' : 'Frontend Engineering (Vue 3 & TypeScript)' }}</option>
                <option value="ai-ml-systems">{{ isArabic ? 'هندسة الذكاء الاصطناعي (AI & LLMs)' : 'Applied AI & Autonomous Systems' }}</option>
                <option value="ui-ux-design">{{ isArabic ? 'تصميم المنتجات والأنظمة (UI/UX Systems)' : 'Enterprise UI/UX Design Systems' }}</option>
              </select>
            </div>

            <!-- GitHub / Portfolio -->
            <div class="space-y-1.5 text-start">
              <label class="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <Github class="w-3.5 h-3.5 text-[#F3CE66]" />
                <span>{{ isArabic ? 'رابط GitHub أو أعمال سابقة (اختياري)' : 'GitHub or Portfolio (Optional)' }}</span>
              </label>
              <input 
                v-model="form.github"
                type="url" 
                placeholder="https://github.com/your-username"
                class="w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-700/80 text-sm text-white focus:outline-none focus:border-[#F3CE66] transition-colors"
              />
            </div>

            <!-- Submit Button -->
            <button 
              type="submit"
              :disabled="isSubmitting"
              class="w-full mt-2 py-3.5 rounded-xl font-bold text-sm text-[#050811] bg-gradient-to-r from-[#C89B3C] via-[#F3CE66] to-[#C89B3C] shadow-lg shadow-[#F3CE66]/20 hover:shadow-[#F3CE66]/40 hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <span v-if="isSubmitting">{{ isArabic ? 'جاري الإرسال...' : 'Submitting...' }}</span>
              <template v-else>
                <Send class="w-4 h-4" />
                <span>{{ isArabic ? 'إرسال طلب الانضمام' : 'Submit Application' }}</span>
              </template>
            </button>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>
