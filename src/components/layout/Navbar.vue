<script setup lang="ts">
import { ref } from 'vue'
import { useLanguage } from '../../composables/useLanguage'
import { useTheme } from '../../composables/useTheme'
import { useApplicationModal } from '../../composables/useApplicationModal'
import { 
  Sun, 
  Moon, 
  Globe, 
  Sparkles, 
  Menu, 
  X, 
  ArrowUpRight 
} from 'lucide-vue-next'
import logoImg from '../../assets/logo.jpg'

const { t, isArabic, toggleLanguage } = useLanguage()
const { currentTheme, toggleTheme } = useTheme()
const { openModal } = useApplicationModal()

const isMobileMenuOpen = ref(false)

const navLinks = [
  { path: '/', key: 'home', isRouterLink: true },
  { path: '/#about', key: 'about', isRouterLink: false },
  { path: '/#team', key: 'team', isRouterLink: false },
  { path: '/#tracks', key: 'tracks', isRouterLink: false },
  { path: '/#rewards', key: 'gifts', isRouterLink: false },
  { path: '/blog', key: 'blog', isRouterLink: true },
  { path: '/#faq', key: 'faq', isRouterLink: false },
] as const
</script>

<template>
  <!-- Floating Island Container -->
  <header class="fixed top-4 sm:top-6 inset-x-0 z-50 px-4 sm:px-8 max-w-7xl mx-auto pointer-events-none">
    <nav 
      class="pointer-events-auto flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full 
             bg-[#060813]/80 dark:bg-[#060813]/85 light:bg-white/90 backdrop-blur-xl
             border border-[#F3CE66]/25 shadow-2xl shadow-black/50
             transition-all duration-300 hover:border-[#F3CE66]/45"
      style="box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 20px 0 rgba(243, 206, 102, 0.08);"
    >
      <!-- Brand Logo & Name -->
      <router-link to="/" class="flex items-center gap-3 group">
        <div class="relative w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-[#12295D] via-[#F3CE66] to-[#C89B3C] shadow-md group-hover:scale-105 transition-transform duration-300">
          <img 
            :src="logoImg" 
            alt="Aqavia Logo" 
            class="w-full h-full object-cover rounded-full bg-[#050811]"
          />
          <span class="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-[#050811] rounded-full animate-pulse"></span>
        </div>
        <div class="flex flex-col">
          <div class="flex items-baseline tracking-widest font-black text-lg">
            <span class="text-[#3B82F6] group-hover:text-[#60A5FA] transition-colors">AQ</span>
            <span class="text-[#F3CE66] group-hover:text-[#FFF1C5] transition-colors">AVIA</span>
          </div>
          <span class="text-[9px] uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-500 font-semibold -mt-1">
            USA Tech Hub
          </span>
        </div>
      </router-link>

      <!-- Desktop Navigation Links -->
      <div class="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-slate-900/40 dark:bg-slate-900/60 light:bg-slate-100/80 border border-white/5">
        <template v-for="link in navLinks" :key="link.key">
          <!-- Router Link -->
          <router-link 
            v-if="link.isRouterLink"
            :to="link.path"
            class="relative px-3.5 py-1.5 text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 
                   hover:text-[#F3CE66] transition-colors duration-200 rounded-full hover:bg-white/5 group"
          >
            {{ t.nav[link.key] }}
            <span class="absolute bottom-1 inset-x-3 h-0.5 bg-gradient-to-r from-transparent via-[#F3CE66] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </router-link>

          <!-- Anchor Link -->
          <a 
            v-else
            :href="link.path"
            class="relative px-3.5 py-1.5 text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 
                   hover:text-[#F3CE66] transition-colors duration-200 rounded-full hover:bg-white/5 group"
          >
            {{ t.nav[link.key] }}
            <span class="absolute bottom-1 inset-x-3 h-0.5 bg-gradient-to-r from-transparent via-[#F3CE66] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
        </template>
      </div>

      <!-- Action Controls (Theme, Language, CTA) -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Language Switcher -->
        <button 
          @click="toggleLanguage" 
          type="button"
          class="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full
                 bg-slate-800/60 dark:bg-slate-800/60 light:bg-slate-100 text-slate-300 dark:text-slate-300 light:text-slate-800
                 border border-slate-700/50 hover:border-[#F3CE66]/50 hover:text-[#F3CE66] transition-all cursor-pointer"
          :title="isArabic ? 'Switch to English' : 'التحويل للعربية'"
        >
          <Globe class="w-3.5 h-3.5 text-[#F3CE66]" />
          <span>{{ isArabic ? 'EN' : 'عربي' }}</span>
        </button>

        <!-- Theme Switcher (Dark / Light) -->
        <button 
          @click="toggleTheme" 
          type="button"
          class="p-2 rounded-full bg-slate-800/60 dark:bg-slate-800/60 light:bg-slate-100
                 text-slate-300 dark:text-slate-300 light:text-slate-800 border border-slate-700/50
                 hover:border-[#F3CE66]/50 hover:text-[#F3CE66] transition-all cursor-pointer"
          :title="currentTheme === 'dark' ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع الداكن'"
        >
          <Sun v-if="currentTheme === 'dark'" class="w-4 h-4 text-[#F3CE66]" />
          <Moon v-else class="w-4 h-4 text-[#12295D]" />
        </button>

        <!-- CTA Button -->
        <button 
          @click="openModal"
          type="button"
          class="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold
                 bg-gradient-to-r from-[#C89B3C] via-[#F3CE66] to-[#C89B3C] text-[#050811]
                 shadow-lg shadow-[#F3CE66]/20 hover:shadow-[#F3CE66]/40 hover:scale-[1.03] active:scale-95 transition-all duration-300 cursor-pointer"
        >
          <Sparkles class="w-3.5 h-3.5" />
          <span>{{ t.nav.applyNow }}</span>
          <ArrowUpRight class="w-3.5 h-3.5" />
        </button>

        <!-- Mobile Menu Toggle -->
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          type="button"
          class="md:hidden p-2 rounded-full bg-slate-800/70 text-slate-300 hover:text-white border border-slate-700 cursor-pointer"
        >
          <X v-if="isMobileMenuOpen" class="w-5 h-5 text-[#F3CE66]" />
          <Menu v-else class="w-5 h-5 text-slate-200" />
        </button>
      </div>
    </nav>

    <!-- Mobile Dropdown Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 -translate-y-4 scale-95"
    >
      <div 
        v-if="isMobileMenuOpen" 
        class="pointer-events-auto md:hidden mt-3 p-4 rounded-3xl bg-[#060813]/95 backdrop-blur-2xl border border-[#F3CE66]/30 shadow-2xl space-y-3"
      >
        <div class="flex flex-col space-y-1">
          <template v-for="link in navLinks" :key="link.key">
            <router-link
              v-if="link.isRouterLink"
              :to="link.path"
              @click="isMobileMenuOpen = false"
              class="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-[#F3CE66] hover:bg-white/5 transition-all text-start"
            >
              {{ t.nav[link.key] }}
            </router-link>
            <a 
              v-else
              :href="link.path"
              @click="isMobileMenuOpen = false"
              class="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-[#F3CE66] hover:bg-white/5 transition-all text-start"
            >
              {{ t.nav[link.key] }}
            </a>
          </template>
        </div>
        <div class="pt-3 border-t border-slate-800">
          <button 
            @click="isMobileMenuOpen = false; openModal()"
            type="button"
            class="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-sm
                   bg-gradient-to-r from-[#C89B3C] via-[#F3CE66] to-[#C89B3C] text-[#050811] shadow-lg cursor-pointer"
          >
            <Sparkles class="w-4 h-4" />
            <span>{{ t.nav.applyNow }}</span>
          </button>
        </div>
      </div>
    </transition>
  </header>
</template>
