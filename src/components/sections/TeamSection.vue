<script setup lang="ts">
import { useLanguage } from '../../composables/useLanguage'
import mentorsJson from '../../data/mentorsData.json'
import type { MentorItem } from '../../types/team'
import { 
  Users, 
  Linkedin, 
  ArrowUpRight, 
  Quote, 
  ShieldCheck,
  Sparkles
} from 'lucide-vue-next'

const { isArabic } = useLanguage()
const mentors = mentorsJson as MentorItem[]
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
          {{ isArabic ? 'فريق الإشراف والمدربون (Mentors & Trainers)' : 'Mentors & Technical Supervisors' }}
        </span>
      </div>

      <h2 class="text-3xl sm:text-5xl font-black text-white dark:text-white light:text-[#0B1A3D] tracking-tight leading-tight">
        <span>{{ isArabic ? 'نخبة من ' : 'Direct Mentorship by ' }}</span>
        <span class="gold-gradient-text">{{ isArabic ? 'كبار المهندسين والمشرفين' : 'Practicing Senior Engineers' }}</span>
      </h2>

      <p class="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
        {{ isArabic 
          ? 'نؤمن في أكافيا بأهمية الشفافية والمصداقية الكاملة؛ لذا يقود برامجنا التدريبية نخبة من المهندسين الممارسين والمشرفين المباشرين على كود ومشاريع المتدربين.'
          : 'Transparency and engineering integrity: meet our senior mentors and lead specialists who conduct 1-on-1 code reviews and supervise production sprints.'
        }}
      </p>
    </div>

    <!-- Mentors Cards Grid (6 Mentors) -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
      <div 
        v-for="mentor in mentors" 
        :key="mentor.id"
        class="relative flex flex-col justify-between p-7 rounded-3xl
               bg-[#080D1C] dark:bg-[#080D1C] light:bg-white
               border border-slate-800 dark:border-slate-800 light:border-slate-200
               backdrop-blur-xl shadow-2xl hover:border-[#F3CE66]/50 transition-all duration-300 group hover:-translate-y-1.5 overflow-hidden"
      >
        <!-- Top Glow Accent Bar -->
        <div 
          class="absolute top-0 inset-x-8 h-1 transition-all group-hover:h-1.5"
          :style="{ background: `linear-gradient(90deg, transparent, ${mentor.accentColor || '#F3CE66'}, transparent)` }"
        ></div>

        <div class="space-y-5">
          <!-- Avatar, Track Tag & Direct LinkedIn Link -->
          <div class="flex items-start justify-between gap-3">
            <div class="relative shrink-0">
              <img 
                :src="mentor.avatar" 
                :alt="mentor.name"
                class="w-16 h-16 rounded-2xl object-cover border-2 shadow-lg group-hover:scale-105 transition-transform duration-300"
                :style="{ borderColor: mentor.accentColor || '#F3CE66' }"
              />
              <span class="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-[#090E1D] rounded-full"></span>
            </div>

            <!-- Track Tag -->
            <div class="flex flex-col items-end gap-2">
              <span 
                class="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase inline-flex items-center gap-1 border"
                :style="{ 
                  backgroundColor: `${mentor.accentColor || '#F3CE66'}15`, 
                  borderColor: `${mentor.accentColor || '#F3CE66'}40`,
                  color: mentor.accentColor || '#F3CE66'
                }"
              >
                <Sparkles class="w-3 h-3" />
                {{ mentor.track }}
              </span>

              <a 
                :href="mentor.linkedinUrl" 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold
                       bg-[#0B1530] text-[#60A5FA] border border-[#12295D] hover:bg-[#1A3D8B] hover:text-white transition-all shadow-sm group/link"
              >
                <Linkedin class="w-3.5 h-3.5" />
                <span>LinkedIn</span>
                <ArrowUpRight class="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          <!-- Name & Role -->
          <div class="text-start space-y-1">
            <div class="flex items-center gap-2">
              <h3 class="text-lg sm:text-xl font-black text-white dark:text-white light:text-slate-900 group-hover:text-[#F3CE66] transition-colors">
                {{ mentor.name }}
              </h3>
              <ShieldCheck class="w-4 h-4 text-emerald-400" />
            </div>
            <p class="text-xs font-semibold text-[#F3CE66]">
              {{ mentor.role }}
            </p>
          </div>

          <!-- Bio Quote (الاقتباس التوجيهي) -->
          <div class="p-4 rounded-2xl bg-[#050811]/90 border border-slate-800 relative text-start">
            <Quote class="w-4 h-4 text-[#F3CE66]/40 mb-1" />
            <p class="text-xs text-slate-300 leading-relaxed font-normal italic">
              "{{ mentor.bioQuote }}"
            </p>
          </div>
        </div>

        <!-- Card Footer -->
        <div class="pt-4 mt-5 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
          <span>{{ isArabic ? 'إشراف ومراجعة كود دورية' : 'Code Review & Mentorship' }}</span>
          <a 
            :href="mentor.linkedinUrl"
            target="_blank" 
            rel="noopener noreferrer"
            class="text-[#60A5FA] hover:text-white font-bold inline-flex items-center gap-1"
          >
            <span>{{ isArabic ? 'الملف المهني' : 'Profile' }}</span>
            <ArrowUpRight class="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
