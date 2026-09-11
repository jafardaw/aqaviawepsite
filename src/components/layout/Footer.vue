<script setup lang="ts">
import { useLanguage } from '../../composables/useLanguage'
import logoImg from '../../assets/logo.jpg'
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  MapPin, 
  Phone,
  Heart
} from 'lucide-vue-next'

const { isArabic } = useLanguage()
</script>

<template>
  <footer class="relative bg-[#03050B] border-t border-[#F3CE66]/20 pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden text-slate-400 text-sm">
    <!-- Top Gold Glow Line -->
    <div class="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#F3CE66] to-transparent"></div>

    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
      <!-- Brand & Mission -->
      <div class="space-y-4 md:col-span-1">
        <div class="flex items-center gap-3">
          <img :src="logoImg" alt="Aqavia" class="w-10 h-10 rounded-full border border-[#F3CE66]/40" />
          <div class="flex items-baseline tracking-widest font-black text-xl">
            <span class="text-[#3B82F6]">AQ</span>
            <span class="text-[#F3CE66]">AVIA</span>
          </div>
        </div>
        <p class="text-xs leading-relaxed text-slate-400">
          {{ isArabic 
            ? 'شركة Aqavia الأمريكية: صرح رائد في التدريب والتأهيل الهندسي البرمجي المتقدم. نبني مهندسين قادرين على قيادة وتطوير أضخم الأنظمة الإنتاجية.'
            : 'Aqavia US Technology Hub: An elite software apprenticeship institute forging production-ready engineers for high-impact global careers.'
          }}
        </p>
        <div class="flex items-center gap-3 text-slate-300">
          <a href="#" class="p-2 rounded-full bg-slate-900 hover:text-[#F3CE66] hover:bg-slate-800 transition-colors">
            <Github class="w-4 h-4" />
          </a>
          <a href="#" class="p-2 rounded-full bg-slate-900 hover:text-[#F3CE66] hover:bg-slate-800 transition-colors">
            <Linkedin class="w-4 h-4" />
          </a>
          <a href="#" class="p-2 rounded-full bg-slate-900 hover:text-[#F3CE66] hover:bg-slate-800 transition-colors">
            <Twitter class="w-4 h-4" />
          </a>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="space-y-3">
        <h4 class="text-sm font-bold text-white uppercase tracking-wider">
          {{ isArabic ? 'روابط سريعة' : 'Navigation' }}
        </h4>
        <ul class="space-y-2 text-xs">
          <li><a href="#home" class="hover:text-[#F3CE66] transition-colors">{{ isArabic ? 'الرئيسية' : 'Home' }}</a></li>
          <li><a href="#about" class="hover:text-[#F3CE66] transition-colors">{{ isArabic ? 'عن الشركة ومنهجيتنا' : 'About & Methodology' }}</a></li>
          <li><a href="#tracks" class="hover:text-[#F3CE66] transition-colors">{{ isArabic ? 'مسارات التدريب' : 'Training Tracks' }}</a></li>
          <li><a href="#testimonials" class="hover:text-[#F3CE66] transition-colors">{{ isArabic ? 'آراء الخريجين' : 'Success Stories' }}</a></li>
          <li><a href="#blog" class="hover:text-[#F3CE66] transition-colors">{{ isArabic ? 'المدونة الهندسية' : 'Engineering Blog' }}</a></li>
          <li><a href="#faq" class="hover:text-[#F3CE66] transition-colors">{{ isArabic ? 'الأسئلة الشائعة' : 'FAQs' }}</a></li>
        </ul>
      </div>

      <!-- Tracks -->
      <div class="space-y-3">
        <h4 class="text-sm font-bold text-white uppercase tracking-wider">
          {{ isArabic ? 'مسارات التخصص' : 'Specializations' }}
        </h4>
        <ul class="space-y-2 text-xs">
          <li><a href="#tracks" class="hover:text-[#F3CE66] transition-colors">Flutter & Dart Architecture</a></li>
          <li><a href="#tracks" class="hover:text-[#F3CE66] transition-colors">Enterprise Laravel & Cloud</a></li>
          <li><a href="#tracks" class="hover:text-[#F3CE66] transition-colors">Vue 3, TypeScript & GSAP</a></li>
          <li><a href="#tracks" class="hover:text-[#F3CE66] transition-colors">Applied AI & Autonomous LLMs</a></li>
          <li><a href="#tracks" class="hover:text-[#F3CE66] transition-colors">UI/UX Enterprise Systems</a></li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div class="space-y-3">
        <h4 class="text-sm font-bold text-white uppercase tracking-wider">
          {{ isArabic ? 'المقر والتواصل' : 'Contact & Headquarters' }}
        </h4>
        <ul class="space-y-2.5 text-xs">
          <li class="flex items-start gap-2">
            <MapPin class="w-4 h-4 text-[#F3CE66] shrink-0 mt-0.5" />
            <span>Delaware, United States / Global Remote Hub</span>
          </li>
          <li class="flex items-center gap-2">
            <Mail class="w-4 h-4 text-[#F3CE66] shrink-0" />
            <span>admissions@aqavia.us</span>
          </li>
          <li class="flex items-center gap-2">
            <Phone class="w-4 h-4 text-[#F3CE66] shrink-0" />
            <span dir="ltr">+1 (302) 800-AQAVIA</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Bottom Copyright -->
    <div class="pt-8 border-t border-slate-900 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
      <div>
        © 2026 Aqavia US LLC. All rights reserved.
      </div>
      <div class="flex items-center gap-1">
        <span>{{ isArabic ? 'صنع بكل فخر وإتقان مهندسي' : 'Crafted with passion for engineers' }}</span>
        <Heart class="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
      </div>
    </div>
  </footer>
</template>
