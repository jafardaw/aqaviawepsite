<script setup lang="ts">
import { teamData } from '../../data/teamData'
import { useLanguage } from '../../composables/useLanguage'
import { 
  Users, 
  Linkedin, 
  Github, 
  ShieldCheck, 
  ArrowUpRight
} from 'lucide-vue-next'

const { isArabic } = useLanguage()
</script>

<template>
  <section 
    id="team" 
    class="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
  >
    <!-- Background Glow -->
    <div class="absolute top-1/2 right-1/3 w-[600px] h-[400px] bg-[#12295D]/25 rounded-full blur-[140px] pointer-events-none -z-10"></div>

    <!-- Section Header -->
    <div class="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12295D]/40 border border-[#F3CE66]/30 shadow-inner">
        <Users class="w-4 h-4 text-[#F3CE66]" />
        <span class="text-xs sm:text-sm font-bold text-[#F3CE66] tracking-wide uppercase">
          {{ isArabic ? 'فريق القيادة والمهندسون المشرفون' : 'Leadership & Staff Mentors' }}
        </span>
      </div>

      <h2 class="text-3xl sm:text-5xl font-black text-white dark:text-white light:text-[#0B1A3D] tracking-tight leading-tight">
        <span>{{ isArabic ? 'نخبة من ' : 'Mentored by ' }}</span>
        <span class="gold-gradient-text">{{ isArabic ? 'كبار مهندسي البرمجيات' : 'Silicon-Caliber Architects' }}</span>
      </h2>

      <p class="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed max-w-2xl mx-auto">
        {{ isArabic 
          ? 'في Aqavia لا يدربك هواة؛ بل يشرف عليك كبار المهندسين المعماريين الذين بنوا أنظمة مليونية في كبرى المنصات العالمية، ويوجهونك سطر بسطر عبر الـ Code Review الفردي.'
          : 'At Aqavia, mentorship is exclusively delivered by senior staff engineers who have architected multi-million user platforms and guide your code line-by-line.'
        }}
      </p>
    </div>

    <!-- Team Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
      <div 
        v-for="member in teamData" 
        :key="member.id"
        class="relative flex flex-col justify-between p-7 rounded-3xl
               bg-[#090E1D]/90 dark:bg-[#090E1D]/95 light:bg-white/95
               border border-slate-800 dark:border-slate-800 light:border-slate-200
               backdrop-blur-xl shadow-xl hover:border-[#F3CE66]/50 transition-all duration-300 group hover:-translate-y-1.5 overflow-hidden"
      >
        <!-- Top Glow Accent Bar -->
        <div class="absolute top-0 inset-x-8 h-1 bg-gradient-to-r from-transparent via-[#F3CE66]/40 to-transparent group-hover:via-[#F3CE66] transition-all"></div>

        <div class="space-y-5">
          <!-- Avatar & Socials -->
          <div class="flex items-start justify-between">
            <div class="relative">
              <img 
                :src="member.avatar" 
                :alt="isArabic ? member.name.ar : member.name.en"
                class="w-20 h-20 rounded-2xl object-cover border-2 border-[#F3CE66]/50 shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
              <span class="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 border-2 border-[#090E1D] rounded-full"></span>
            </div>

            <!-- Social Links (LinkedIn & GitHub) -->
            <div class="flex items-center gap-2">
              <a 
                :href="member.linkedinUrl" 
                target="_blank" 
                rel="noopener noreferrer"
                class="p-2.5 rounded-xl bg-[#0B1530] text-[#60A5FA] border border-[#12295D] hover:bg-[#2552B5] hover:text-white transition-all shadow-md cursor-pointer group/link"
                :title="isArabic ? 'الملف الشخصي على LinkedIn' : 'LinkedIn Profile'"
              >
                <Linkedin class="w-4 h-4 group-hover/link:scale-110 transition-transform" />
              </a>

              <a 
                v-if="member.githubUrl"
                :href="member.githubUrl" 
                target="_blank" 
                rel="noopener noreferrer"
                class="p-2.5 rounded-xl bg-slate-800/80 text-slate-300 border border-slate-700 hover:bg-slate-700 hover:text-white transition-all shadow-md cursor-pointer group/link"
                :title="isArabic ? 'ملف GitHub' : 'GitHub Profile'"
              >
                <Github class="w-4 h-4 group-hover/link:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <!-- Name & Role -->
          <div>
            <div class="flex items-center gap-2">
              <h3 class="text-lg sm:text-xl font-black text-white dark:text-white light:text-slate-900 group-hover:text-[#F3CE66] transition-colors">
                {{ isArabic ? member.name.ar : member.name.en }}
              </h3>
              <ShieldCheck class="w-4 h-4 text-[#38BDF8]" />
            </div>
            <p class="text-xs text-[#F3CE66] font-bold mt-1">
              {{ isArabic ? member.role.ar : member.role.en }}
            </p>
            <span class="inline-block mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-[#12295D]/50 text-[#93C5FD] border border-[#12295D]">
              {{ isArabic ? member.badge.ar : member.badge.en }}
            </span>
          </div>

          <!-- Bio -->
          <p class="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed font-normal">
            {{ isArabic ? member.bio.ar : member.bio.en }}
          </p>

          <!-- Skills Badges -->
          <div class="flex flex-wrap gap-1.5 pt-2">
            <span 
              v-for="skill in member.skills" 
              :key="skill"
              class="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-800/70 dark:bg-slate-800/70 light:bg-slate-100 text-slate-200 dark:text-slate-200 light:text-slate-800 border border-slate-700/50"
            >
              {{ skill }}
            </span>
          </div>
        </div>

        <!-- LinkedIn Connect Action Bar -->
        <div class="pt-5 mt-5 border-t border-slate-800/70 dark:border-slate-800/70 light:border-slate-200 flex items-center justify-between">
          <span class="text-[11px] text-slate-400 dark:text-slate-400 light:text-slate-600 font-medium">
            {{ isArabic ? 'متاح للاستشارة الهندسية' : 'Available for Mentorship' }}
          </span>
          <a 
            :href="member.linkedinUrl" 
            target="_blank" 
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 text-xs font-bold text-[#60A5FA] hover:text-[#F3CE66] transition-colors"
          >
            <span>LinkedIn</span>
            <ArrowUpRight class="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
