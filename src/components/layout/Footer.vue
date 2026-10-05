<script setup lang="ts">
import { useLanguage } from '../../composables/useLanguage'
import logoImg from '../../assets/logo.jpg'
import { 
  Linkedin, 
  Instagram, 
  Facebook, 
  Send, 
  MessageCircle, 
  ExternalLink,
  MapPin,
  CheckCircle2
} from 'lucide-vue-next'

const { isArabic } = useLanguage()

const socialLinks = [
  { name: 'Facebook', url: 'https://facebook.com', icon: Facebook, color: '#1877F2' },
  { name: 'Instagram', url: 'https://instagram.com', icon: Instagram, color: '#E4405F' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin, color: '#0A66C2' },
  { name: 'Telegram', url: 'https://t.me', icon: Send, color: '#229ED9' },
]

const whatsappUrl = 'https://wa.me/963988588859'
</script>

<template>
  <footer class="relative bg-[#03050B] border-t border-[#F3CE66]/20 pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden text-slate-400 text-sm">
    <!-- Top Gold Glow Line -->
    <div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#F3CE66] to-transparent"></div>

    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
      <!-- 1. الشعار والتعريف القانوني المعتمد -->
      <div class="space-y-4 md:col-span-1 text-start">
        <!-- الشعار الرسومي المعتمد فقط بدون أي نص مكرر -->
        <div class="flex items-center">
          <img 
            :src="logoImg" 
            alt="AQAVIA Logo" 
            class="h-10 w-auto object-contain rounded-lg transition-transform duration-300 hover:scale-105" 
          />
        </div>

        <!-- التعريف القانوني المعتمد -->
        <div class="space-y-1">
          <p class="text-xs font-bold text-slate-200 tracking-wide font-mono">
            AQAVIA LLC
          </p>
          <p class="text-xs text-[#F3CE66] font-medium">
            Registered in New Mexico, USA.
          </p>
        </div>

        <p class="text-xs leading-relaxed text-slate-400 font-normal">
          {{ isArabic 
            ? 'شركة تقنية مسجلة رسمياً بالولايات المتحدة، تعمل بنموذج العمل عن بُعد عبر كفاءات هندسية شابة، وتقدم برامج تدريب داخلي تطبيقي وحلول برمجية للشركات.'
            : 'An officially registered US technology company operating remotely, delivering hands-on software internships and enterprise B2B solutions.'
          }}
        </p>

        <!-- روابط التواصل الاجتماعي المباشرة -->
        <div class="flex items-center gap-2.5 pt-2">
          <a 
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="w-9 h-9 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 hover:scale-110 shadow-sm"
            :style="{ '--hover-color': social.color }"
            :title="social.name"
          >
            <component :is="social.icon" class="w-4 h-4" />
          </a>
        </div>
      </div>

      <!-- 2. روابط سريعة للموقع -->
      <div class="space-y-3 text-start">
        <h4 class="text-sm font-bold text-white uppercase tracking-wider">
          {{ isArabic ? 'روابط سريعة' : 'Quick Links' }}
        </h4>
        <ul class="space-y-2 text-xs">
          <li><a href="#home" class="hover:text-[#F3CE66] transition-colors">{{ isArabic ? 'الرئيسية' : 'Home' }}</a></li>
          <li><a href="#internship" class="hover:text-[#F3CE66] transition-colors">{{ isArabic ? 'ما هو التدريب الداخلي؟' : 'Internship Concept' }}</a></li>
          <li><a href="#methodology" class="hover:text-[#F3CE66] transition-colors">{{ isArabic ? 'منهجية وسير التدريب' : 'Training Methodology' }}</a></li>
          <li><a href="#about" class="hover:text-[#F3CE66] transition-colors">{{ isArabic ? 'عن أكافيا' : 'About AQAVIA' }}</a></li>
          <li><a href="#tracks" class="hover:text-[#F3CE66] transition-colors">{{ isArabic ? 'المسارات التدريبية الـ 7' : 'The 7 Tracks' }}</a></li>
          <li><a href="#team" class="hover:text-[#F3CE66] transition-colors">{{ isArabic ? 'فريق الإشراف والمدربون' : 'Mentors Team' }}</a></li>
          <li><a href="#b2b" class="hover:text-[#F3CE66] transition-colors">{{ isArabic ? 'خدمات الشركات (B2B)' : 'B2B Solutions' }}</a></li>
          <li><a href="#faq" class="hover:text-[#F3CE66] transition-colors">{{ isArabic ? 'الأسئلة الشائعة' : 'FAQs' }}</a></li>
        </ul>
      </div>

      <!-- 3. استمارات التسجيل المباشرة للمسارات -->
      <div class="space-y-3 text-start">
        <h4 class="text-sm font-bold text-white uppercase tracking-wider">
          {{ isArabic ? 'استمارات التسجيل' : 'Application Forms' }}
        </h4>
        <ul class="space-y-2 text-xs">
          <li>
            <a 
              href="https://forms.gle/jSx7Kh73dWGd2kCfA" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="hover:text-[#F3CE66] transition-colors inline-flex items-center gap-1.5"
            >
              <span>{{ isArabic ? 'استمارة المسارات التقنية (5 مسارات)' : 'Technical Tracks Form' }}</span>
              <ExternalLink class="w-3 h-3 text-[#F3CE66]" />
            </a>
          </li>
          <li>
            <a 
              href="https://forms.gle/f9sDsSgYY7RYXsdS8" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="hover:text-[#F3CE66] transition-colors inline-flex items-center gap-1.5"
            >
              <span>{{ isArabic ? 'استمارة الهندسة المعمارية (من الصفر)' : 'Architecture Track Form' }}</span>
              <ExternalLink class="w-3 h-3 text-[#F3CE66]" />
            </a>
          </li>
          <li>
            <a 
              href="https://forms.gle/QTumH99Dmkqf76tf9" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="hover:text-[#F3CE66] transition-colors inline-flex items-center gap-1.5"
            >
              <span>{{ isArabic ? 'استمارة الذكاء الاصطناعي المتقدم' : 'Advanced AI Track Form' }}</span>
              <ExternalLink class="w-3 h-3 text-[#F3CE66]" />
            </a>
          </li>
        </ul>
      </div>

      <!-- 4. تواصل واستفسارات الواتساب المباشر -->
      <div class="space-y-4 text-start">
        <h4 class="text-sm font-bold text-white uppercase tracking-wider">
          {{ isArabic ? 'الدعم والاستفسارات' : 'Direct Support' }}
        </h4>
        
        <p class="text-xs text-slate-400 leading-relaxed font-normal">
          {{ isArabic 
            ? 'فريق إدارة وتنسيق التدريب متاح للرد المباشر على جميع استفساراتكم عبر الواتساب.' 
            : 'Our admissions coordination team is available for real-time support on WhatsApp.' 
          }}
        </p>

        <!-- رابط الواتساب المباشر المعتمد -->
        <a 
          :href="whatsappUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-2xl font-bold text-xs
                 bg-emerald-500/15 text-emerald-300 border border-emerald-500/35 hover:bg-emerald-500 hover:text-[#050811]
                 transition-all duration-300 shadow-lg shadow-emerald-500/10 cursor-pointer w-full group"
        >
          <MessageCircle class="w-4 h-4 text-emerald-400 group-hover:text-[#050811] transition-colors" />
          <span dir="ltr">+963 988 588 859</span>
          <ExternalLink class="w-3 h-3 opacity-60 group-hover:opacity-100" />
        </a>

        <div class="flex items-center gap-2 text-[11px] text-slate-500">
          <MapPin class="w-3.5 h-3.5 text-[#F3CE66]" />
          <span>New Mexico, USA • Global Remote</span>
        </div>
      </div>
    </div>

    <!-- Bottom Copyright -->
    <div class="pt-8 border-t border-slate-900 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-start">
      <div class="font-mono text-slate-400">
        AQAVIA. All rights reserved 2026 ©
      </div>
      <div class="flex items-center gap-2 text-slate-400">
        <CheckCircle2 class="w-3.5 h-3.5 text-[#F3CE66]" />
        <span>AQAVIA LLC — New Mexico, USA</span>
      </div>
    </div>
  </footer>
</template>
