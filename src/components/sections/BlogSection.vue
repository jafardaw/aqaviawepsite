<script setup lang="ts">
import { blogData } from '../../data/blogData'
import { useLanguage } from '../../composables/useLanguage'
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  ArrowUpRight
} from 'lucide-vue-next'

const { isArabic } = useLanguage()
</script>

<template>
  <section 
    id="blog" 
    class="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
  >
    <!-- Background Ambient Glow -->
    <div class="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#12295D]/20 rounded-full blur-[140px] pointer-events-none -z-10"></div>

    <!-- Section Header -->
    <div class="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12295D]/40 border border-[#F3CE66]/30 shadow-inner">
        <BookOpen class="w-4 h-4 text-[#F3CE66]" />
        <span class="text-xs sm:text-sm font-bold text-[#F3CE66] tracking-wide uppercase">
          {{ isArabic ? 'رؤى برمجية ومقالات متقدمة' : 'Engineering Blog & Insights' }}
        </span>
      </div>

      <h2 class="text-3xl sm:text-5xl font-black text-white dark:text-white light:text-[#0B1A3D] tracking-tight leading-tight">
        <span>{{ isArabic ? 'مدونة ' : 'The Aqavia ' }}</span>
        <span class="gold-gradient-text">{{ isArabic ? 'Aqavia الهندسية' : 'Engineering Blog' }}</span>
      </h2>

      <p class="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed max-w-2xl mx-auto">
        {{ isArabic 
          ? 'مقالات معمقة يكتبها مهندسونا وخبراؤنا لمشاركة أسرار المعماريات النظيفة، ومقارنات التقنيات، وكيفية اجتياز المقابلات التقنية الكبرى.'
          : 'In-depth architectural guides authored by our staff engineers on Clean Architecture, high-scale frontend patterns, and system design interviews.'
        }}
      </p>
    </div>

    <!-- Blog Articles Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <article 
        v-for="post in blogData" 
        :key="post.id"
        class="flex flex-col justify-between rounded-3xl bg-[#090E1D]/90 dark:bg-[#090E1D]/95 light:bg-white/95 border border-slate-800 dark:border-slate-800 light:border-slate-200 backdrop-blur-xl shadow-xl hover:border-[#F3CE66]/40 transition-all duration-300 group hover:-translate-y-1.5 overflow-hidden"
      >
        <div>
          <!-- Article Image Container -->
          <div class="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
            <img 
              :src="post.image" 
              :alt="isArabic ? post.title.ar : post.title.en"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#090E1D] via-transparent to-transparent opacity-80"></div>
            
            <!-- Category Tag -->
            <span class="absolute top-4 start-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase bg-[#12295D]/85 text-[#93C5FD] border border-[#12295D] backdrop-blur-md">
              {{ isArabic ? post.category.ar : post.category.en }}
            </span>
          </div>

          <!-- Content Padding Area -->
          <div class="p-6 sm:p-7 space-y-4">
            <!-- Meta: Date & Read Time -->
            <div class="flex items-center gap-4 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
              <div class="flex items-center gap-1.5">
                <Calendar class="w-3.5 h-3.5 text-[#F3CE66]" />
                <span>{{ isArabic ? post.date.ar : post.date.en }}</span>
              </div>
              <div class="flex items-center gap-1.5">
                <Clock class="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>{{ isArabic ? post.readTime.ar : post.readTime.en }}</span>
              </div>
            </div>

            <!-- Title -->
            <h3 class="text-base sm:text-lg font-black text-white dark:text-white light:text-slate-900 group-hover:text-[#F3CE66] transition-colors leading-snug line-clamp-2">
              {{ isArabic ? post.title.ar : post.title.en }}
            </h3>

            <!-- Excerpt -->
            <p class="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed font-normal line-clamp-3">
              {{ isArabic ? post.excerpt.ar : post.excerpt.en }}
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-1.5 pt-1">
              <span 
                v-for="tag in post.tags" 
                :key="tag"
                class="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-800/60 dark:bg-slate-800/60 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-700 border border-slate-700/40"
              >
                #{{ tag }}
              </span>
            </div>
          </div>
        </div>

        <!-- Author Footer & Action -->
        <div class="p-6 sm:p-7 pt-0 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-100 mt-4 flex items-center justify-between">
          <div class="flex items-center gap-2.5 pt-4">
            <img 
              :src="post.author.avatar" 
              :alt="isArabic ? post.author.name.ar : post.author.name.en"
              class="w-9 h-9 rounded-full object-cover border border-[#F3CE66]/40"
            />
            <div>
              <h5 class="text-xs font-bold text-white dark:text-white light:text-slate-900 leading-tight">
                {{ isArabic ? post.author.name.ar : post.author.name.en }}
              </h5>
              <p class="text-[10px] text-slate-400 dark:text-slate-400 light:text-slate-600">
                {{ isArabic ? post.author.role.ar : post.author.role.en }}
              </p>
            </div>
          </div>

          <button 
            type="button" 
            class="p-2 rounded-xl bg-slate-800/60 hover:bg-[#F3CE66] text-slate-300 hover:text-[#050811] transition-all cursor-pointer mt-4"
          >
            <ArrowUpRight class="w-4 h-4" />
          </button>
        </div>
      </article>
    </div>
  </section>
</template>
