<script setup lang="ts">
import { ref, computed } from 'vue'
import { blogData } from '../data/blogData'
import { useLanguage } from '../composables/useLanguage'
import { 
  BookOpen, 
  Search, 
  Clock, 
  Calendar, 
  ArrowUpRight, 
  ArrowLeft, 
  ArrowRight 
} from 'lucide-vue-next'

const { isArabic } = useLanguage()
const searchQuery = ref('')
const selectedCategory = ref('all')

const categories = [
  { id: 'all', label: { ar: 'كافة المقالات', en: 'All Articles' } },
  { id: 'معمارية برمجية', label: { ar: 'معمارية برمجية', en: 'Software Architecture' } },
  { id: 'هندسة الواجهات', label: { ar: 'هندسة الواجهات', en: 'Frontend' } },
  { id: 'التطوير المهني', label: { ar: 'التطوير المهني', en: 'Career & Growth' } },
]

const filteredArticles = computed(() => {
  return blogData.filter(post => {
    const titleMatch = (isArabic.value ? post.title.ar : post.title.en).toLowerCase().includes(searchQuery.value.toLowerCase())
    const excerptMatch = (isArabic.value ? post.excerpt.ar : post.excerpt.en).toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesSearch = titleMatch || excerptMatch
    const matchesCategory = selectedCategory.value === 'all' || post.category.ar === selectedCategory.value
    return matchesSearch && matchesCategory
  })
})

const featuredPost = computed(() => blogData[0])
</script>

<template>
  <div class="min-h-screen pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <!-- Back to Home Bar -->
    <div class="mb-8">
      <router-link 
        to="/"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/60 dark:bg-slate-900/80 light:bg-slate-100 border border-slate-700/60 text-xs font-bold text-slate-300 dark:text-slate-300 light:text-slate-800 hover:text-[#F3CE66] hover:border-[#F3CE66]/50 transition-all cursor-pointer"
      >
        <component :is="isArabic ? ArrowRight : ArrowLeft" class="w-3.5 h-3.5" />
        <span>{{ isArabic ? 'العودة للرئيسية' : 'Back to Home' }}</span>
      </router-link>
    </div>

    <!-- Header & Search -->
    <div class="text-center max-w-3xl mx-auto space-y-4 mb-14">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12295D]/40 border border-[#F3CE66]/30 shadow-inner">
        <BookOpen class="w-4 h-4 text-[#F3CE66]" />
        <span class="text-xs sm:text-sm font-bold text-[#F3CE66] tracking-wide uppercase">
          {{ isArabic ? 'مدونة Aqavia المعرفية' : 'Aqavia Engineering Journal' }}
        </span>
      </div>

      <h1 class="text-3xl sm:text-5xl font-black text-white dark:text-white light:text-[#0B1A3D] tracking-tight leading-tight">
        <span>{{ isArabic ? 'مقالات برمجية من ' : 'Technical Insights from ' }}</span>
        <span class="gold-gradient-text">{{ isArabic ? 'قلب الميدان' : 'Staff Engineers' }}</span>
      </h1>

      <p class="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed max-w-xl mx-auto">
        {{ isArabic 
          ? 'دليلك المتكامل لفهم المعماريات المتقدمة في Flutter و Laravel و Vue 3 والذكاء الاصطناعي وكيفية صياغة كود نظيف ينافس عالمياً.'
          : 'Deep dive into Clean Architecture, Vue 3, distributed systems, and real-world system design interview blueprints.'
        }}
      </p>

      <!-- Search Input -->
      <div class="pt-4 max-w-md mx-auto">
        <div class="relative">
          <Search class="w-5 h-5 text-slate-400 absolute top-1/2 -translate-y-1/2 start-4 pointer-events-none" />
          <input 
            v-model="searchQuery"
            type="text"
            :placeholder="isArabic ? 'ابحث في المقالات (Clean Architecture, Flutter...)' : 'Search articles...'"
            class="w-full ps-12 pe-4 py-3 rounded-full bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-700/80 dark:border-slate-700/80 light:border-slate-300 text-sm text-white dark:text-white light:text-slate-900 focus:outline-none focus:border-[#F3CE66] shadow-xl transition-all"
          />
        </div>
      </div>

      <!-- Categories Filter Tabs -->
      <div class="flex flex-wrap items-center justify-center gap-2 pt-2">
        <button
          v-for="cat in categories"
          :key="cat.id"
          @click="selectedCategory = cat.id"
          type="button"
          class="px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer"
          :class="selectedCategory === cat.id 
            ? 'bg-[#F3CE66] text-[#050811] shadow-md shadow-[#F3CE66]/20' 
            : 'bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 text-slate-400 hover:text-white border border-slate-800 dark:border-slate-800 light:border-slate-300'"
        >
          {{ isArabic ? cat.label.ar : cat.label.en }}
        </button>
      </div>
    </div>

    <!-- Featured Post Spotlight (If no search) -->
    <div v-if="!searchQuery && selectedCategory === 'all' && featuredPost" class="mb-14">
      <router-link 
        :to="`/blog/${featuredPost.slug}`"
        class="block group p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0E162B] via-[#090E1D] to-[#0E162B] border border-[#F3CE66]/30 shadow-2xl hover:border-[#F3CE66]/60 transition-all duration-300 relative overflow-hidden"
      >
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-6 relative h-64 sm:h-72 rounded-2xl overflow-hidden">
            <img 
              :src="featuredPost.image" 
              :alt="isArabic ? featuredPost.title.ar : featuredPost.title.en"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span class="absolute top-4 start-4 px-3 py-1 rounded-full text-xs font-bold uppercase bg-[#F3CE66] text-[#050811] shadow-lg">
              {{ isArabic ? 'مقال مميز' : 'Featured Article' }}
            </span>
          </div>

          <div class="lg:col-span-6 space-y-4 text-start">
            <div class="flex items-center gap-4 text-xs text-slate-400">
              <span class="text-[#38BDF8] font-bold">{{ isArabic ? featuredPost.category.ar : featuredPost.category.en }}</span>
              <span>•</span>
              <span>{{ isArabic ? featuredPost.readTime.ar : featuredPost.readTime.en }}</span>
            </div>

            <h2 class="text-xl sm:text-3xl font-black text-white group-hover:text-[#F3CE66] transition-colors leading-snug">
              {{ isArabic ? featuredPost.title.ar : featuredPost.title.en }}
            </h2>

            <p class="text-sm text-slate-300 leading-relaxed line-clamp-3">
              {{ isArabic ? featuredPost.excerpt.ar : featuredPost.excerpt.en }}
            </p>

            <div class="flex items-center justify-between pt-4 border-t border-slate-800">
              <div class="flex items-center gap-3">
                <img :src="featuredPost.author.avatar" class="w-10 h-10 rounded-full object-cover border border-[#F3CE66]/40" />
                <div>
                  <h4 class="text-xs font-bold text-white">{{ isArabic ? featuredPost.author.name.ar : featuredPost.author.name.en }}</h4>
                  <p class="text-[10px] text-slate-400">{{ isArabic ? featuredPost.author.role.ar : featuredPost.author.role.en }}</p>
                </div>
              </div>

              <span class="inline-flex items-center gap-1 text-xs font-bold text-[#F3CE66] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                <span>{{ isArabic ? 'اقرأ المقال' : 'Read Article' }}</span>
                <component :is="isArabic ? ArrowLeft : ArrowRight" class="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </router-link>
    </div>

    <!-- All Articles Grid -->
    <div v-if="filteredArticles.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <article 
        v-for="post in filteredArticles" 
        :key="post.id"
        class="flex flex-col justify-between rounded-3xl bg-[#090E1D]/90 dark:bg-[#090E1D]/95 light:bg-white/95 border border-slate-800 dark:border-slate-800 light:border-slate-200 backdrop-blur-xl shadow-xl hover:border-[#F3CE66]/40 transition-all duration-300 group hover:-translate-y-1.5 overflow-hidden"
      >
        <div>
          <!-- Article Image -->
          <div class="relative h-48 w-full overflow-hidden bg-slate-900">
            <img 
              :src="post.image" 
              :alt="isArabic ? post.title.ar : post.title.en"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span class="absolute top-4 start-4 px-3 py-1 rounded-full text-[11px] font-bold uppercase bg-[#12295D]/85 text-[#93C5FD] border border-[#12295D]">
              {{ isArabic ? post.category.ar : post.category.en }}
            </span>
          </div>

          <div class="p-6 space-y-3 text-start">
            <div class="flex items-center gap-4 text-xs text-slate-400">
              <div class="flex items-center gap-1.5">
                <Calendar class="w-3.5 h-3.5 text-[#F3CE66]" />
                <span>{{ isArabic ? post.date.ar : post.date.en }}</span>
              </div>
              <div class="flex items-center gap-1.5">
                <Clock class="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>{{ isArabic ? post.readTime.ar : post.readTime.en }}</span>
              </div>
            </div>

            <h3 class="text-base sm:text-lg font-black text-white dark:text-white light:text-slate-900 group-hover:text-[#F3CE66] transition-colors leading-snug line-clamp-2">
              <router-link :to="`/blog/${post.slug}`">
                {{ isArabic ? post.title.ar : post.title.en }}
              </router-link>
            </h3>

            <p class="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-600 leading-relaxed font-normal line-clamp-3">
              {{ isArabic ? post.excerpt.ar : post.excerpt.en }}
            </p>

            <div class="flex flex-wrap gap-1.5 pt-1">
              <span 
                v-for="tag in post.tags" 
                :key="tag"
                class="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-800/60 text-slate-300 border border-slate-700/40"
              >
                #{{ tag }}
              </span>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="p-6 pt-0 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-100 mt-4 flex items-center justify-between">
          <div class="flex items-center gap-2.5 pt-4 text-start">
            <img :src="post.author.avatar" class="w-9 h-9 rounded-full object-cover border border-[#F3CE66]/40" />
            <div>
              <h5 class="text-xs font-bold text-white dark:text-white light:text-slate-900">{{ isArabic ? post.author.name.ar : post.author.name.en }}</h5>
              <p class="text-[10px] text-slate-400">{{ isArabic ? post.author.role.ar : post.author.role.en }}</p>
            </div>
          </div>

          <router-link 
            :to="`/blog/${post.slug}`"
            class="p-2.5 rounded-xl bg-slate-800/60 hover:bg-[#F3CE66] text-slate-300 hover:text-[#050811] transition-all cursor-pointer mt-4"
          >
            <ArrowUpRight class="w-4 h-4" />
          </router-link>
        </div>
      </article>
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-16 space-y-4">
      <p class="text-base text-slate-400">
        {{ isArabic ? 'لم يتم العثور على مقالات مطابقة لبحثك.' : 'No articles matched your query.' }}
      </p>
      <button 
        @click="searchQuery = ''; selectedCategory = 'all'"
        class="px-5 py-2 rounded-full text-xs font-bold bg-[#F3CE66] text-[#050811]"
      >
        {{ isArabic ? 'إعادة ضبط البحث' : 'Reset Search' }}
      </button>
    </div>
  </div>
</template>
