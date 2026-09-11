<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { blogData } from '../data/blogData'
import { useLanguage } from '../composables/useLanguage'
import { 
  Clock, 
  Calendar, 
  ArrowLeft, 
  ArrowRight, 
  Share2, 
  ArrowUpRight 
} from 'lucide-vue-next'

const route = useRoute()
const { isArabic } = useLanguage()

const article = computed(() => {
  const slug = route.params.slug as string
  return blogData.find(item => item.slug === slug) || blogData[0]
})

const relatedArticles = computed(() => {
  return blogData.filter(item => item.id !== article.value.id).slice(0, 2)
})

const copyLink = () => {
  if (typeof window !== 'undefined') {
    navigator.clipboard.writeText(window.location.href)
    alert(isArabic.value ? 'تم نسخ رابط المقال بنجاح!' : 'Article link copied!')
  }
}
</script>

<template>
  <div class="min-h-screen pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
    <!-- Back Navigation & Breadcrumb -->
    <div class="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
      <router-link 
        to="/blog"
        class="inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-[#F3CE66] transition-colors"
      >
        <component :is="isArabic ? ArrowRight : ArrowLeft" class="w-3.5 h-3.5" />
        <span>{{ isArabic ? 'العودة لقائمة المدونة' : 'Back to Blog' }}</span>
      </router-link>

      <div class="flex items-center gap-2">
        <button 
          @click="copyLink"
          type="button"
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/60 hover:bg-[#F3CE66] hover:text-[#050811] text-slate-300 text-xs font-semibold transition-all cursor-pointer"
        >
          <Share2 class="w-3.5 h-3.5" />
          <span>{{ isArabic ? 'مشاركة المقال' : 'Share' }}</span>
        </button>
      </div>
    </div>

    <!-- Article Header -->
    <header class="space-y-6 text-start mb-10">
      <div class="flex flex-wrap items-center gap-3">
        <span class="px-3.5 py-1 rounded-full text-xs font-bold uppercase bg-[#12295D]/80 text-[#93C5FD] border border-[#12295D]">
          {{ isArabic ? article.category.ar : article.category.en }}
        </span>
        <div class="flex items-center gap-1 text-xs text-slate-400">
          <Clock class="w-3.5 h-3.5 text-[#F3CE66]" />
          <span>{{ isArabic ? article.readTime.ar : article.readTime.en }}</span>
        </div>
        <span class="text-slate-600">•</span>
        <div class="flex items-center gap-1 text-xs text-slate-400">
          <Calendar class="w-3.5 h-3.5 text-[#38BDF8]" />
          <span>{{ isArabic ? article.date.ar : article.date.en }}</span>
        </div>
      </div>

      <h1 class="text-2xl sm:text-4xl lg:text-5xl font-black text-white dark:text-white light:text-slate-900 leading-tight">
        {{ isArabic ? article.title.ar : article.title.en }}
      </h1>

      <p class="text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed font-normal">
        {{ isArabic ? article.excerpt.ar : article.excerpt.en }}
      </p>

      <!-- Author Profile Card -->
      <div class="flex items-center justify-between p-4 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-300">
        <div class="flex items-center gap-3">
          <img 
            :src="article.author.avatar" 
            :alt="isArabic ? article.author.name.ar : article.author.name.en"
            class="w-12 h-12 rounded-full object-cover border-2 border-[#F3CE66]/50 shadow-md"
          />
          <div>
            <h4 class="text-sm sm:text-base font-bold text-white dark:text-white light:text-slate-900">
              {{ isArabic ? article.author.name.ar : article.author.name.en }}
            </h4>
            <p class="text-xs text-[#F3CE66] font-medium">
              {{ isArabic ? article.author.role.ar : article.author.role.en }} • Aqavia US
            </p>
          </div>
        </div>

        <span class="text-[11px] text-slate-400 font-semibold hidden sm:inline-block">
          {{ isArabic ? 'مقال معتمد هندسياً' : 'Peer-Reviewed Tech Guide' }}
        </span>
      </div>
    </header>

    <!-- Main Featured Cover Image -->
    <div class="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden mb-12 shadow-2xl border border-slate-800">
      <img 
        :src="article.image" 
        :alt="isArabic ? article.title.ar : article.title.en"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-transparent opacity-60"></div>
    </div>

    <!-- Article Content Body -->
    <article class="prose prose-invert prose-lg max-w-none text-start text-slate-200 dark:text-slate-200 light:text-slate-800 leading-loose space-y-6">
      <div 
        class="space-y-6 text-sm sm:text-base leading-relaxed bg-[#090E1D]/50 p-6 sm:p-10 rounded-3xl border border-slate-800/80 whitespace-pre-line"
      >
        {{ isArabic ? article.content.ar : article.content.en }}
      </div>
    </article>

    <!-- Tags & Footnote -->
    <div class="mt-12 pt-8 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
      <div class="flex flex-wrap gap-2">
        <span 
          v-for="tag in article.tags" 
          :key="tag"
          class="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-800 text-slate-200 border border-slate-700"
        >
          #{{ tag }}
        </span>
      </div>

      <button 
        @click="copyLink"
        class="inline-flex items-center gap-2 text-xs font-bold text-[#F3CE66] hover:underline cursor-pointer"
      >
        <Share2 class="w-4 h-4" />
        <span>{{ isArabic ? 'انسخ رابط المقال لنشره' : 'Copy Article Link' }}</span>
      </button>
    </div>

    <!-- Related Articles Section -->
    <div class="mt-20 pt-12 border-t border-slate-800">
      <h3 class="text-xl sm:text-2xl font-black text-white mb-8 text-start">
        {{ isArabic ? 'مقالات ذات صلة' : 'Related Articles' }}
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <router-link 
          v-for="rel in relatedArticles" 
          :key="rel.id"
          :to="`/blog/${rel.slug}`"
          class="p-6 rounded-2xl bg-[#090E1D] border border-slate-800 hover:border-[#F3CE66]/50 transition-all text-start group flex flex-col justify-between"
        >
          <div class="space-y-2">
            <span class="text-[11px] text-[#38BDF8] font-bold uppercase">{{ isArabic ? rel.category.ar : rel.category.en }}</span>
            <h4 class="text-base font-bold text-white group-hover:text-[#F3CE66] transition-colors leading-snug">
              {{ isArabic ? rel.title.ar : rel.title.en }}
            </h4>
            <p class="text-xs text-slate-400 line-clamp-2">
              {{ isArabic ? rel.excerpt.ar : rel.excerpt.en }}
            </p>
          </div>
          <div class="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-[#F3CE66]">
            <span>{{ isArabic ? 'قراءة المزيد' : 'Read More' }}</span>
            <ArrowUpRight class="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
