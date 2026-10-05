<script setup lang="ts">
import { ref } from 'vue'
import { useLanguage } from '../../composables/useLanguage'
import { useTheme } from '../../composables/useTheme'
import { useApplicationModal } from '../../composables/useApplicationModal'
import { tracksData } from '../../data/tracksData'
import { 
  Sun, 
  Moon, 
  Globe, 
  Sparkles, 
  Menu, 
  X, 
  ArrowUpRight,
  ChevronDown,
  Layers
} from 'lucide-vue-next'
import logoImg from '../../assets/logo.jpg'

const { t, isArabic, toggleLanguage } = useLanguage()
const { currentTheme, toggleTheme } = useTheme()
const { openModal } = useApplicationModal()

const isMobileMenuOpen = ref(false)
const isTracksDropdownOpen = ref(false)

interface NavLinkItem {
  path: string
  key: 'home' | 'about' | 'internship' | 'tracks' | 'mentors' | 'b2b' | 'faq'
  isRouterLink?: boolean
  hasDropdown?: boolean
}

const navLinks: NavLinkItem[] = [
  { path: '/', key: 'home', isRouterLink: true },
  { path: '/#about', key: 'about' },
  { path: '/#internship', key: 'internship' },
  { path: '/#tracks', key: 'tracks', hasDropdown: true },
  { path: '/#team', key: 'mentors' },
  { path: '/#b2b', key: 'b2b' },
  { path: '/#faq', key: 'faq' },
]
</script>

<template>
  <!-- Floating Island Container -->
  <header class="fixed top-3 sm:top-5 inset-x-0 z-50 px-3 sm:px-6 max-w-7xl mx-auto pointer-events-none">
    <nav 
      class="pointer-events-auto flex items-center justify-between px-3 sm:px-5 py-2 sm:py-2.5 rounded-full 
             bg-[#060813]/85 dark:bg-[#060813]/90 light:bg-white/95 backdrop-blur-xl
             border border-[#F3CE66]/25 shadow-2xl shadow-black/50
             transition-all duration-300 hover:border-[#F3CE66]/45"
      style="box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 20px 0 rgba(243, 206, 102, 0.08);"
    >
      <!-- Brand Logo Container (Image only, without duplicate text) -->
      <router-link to="/" class="brand-container flex items-center group shrink-0">
        <img 
          :src="logoImg" 
          alt="AQAVIA Logo" 
          class="h-10 w-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-105" 
        />
      </router-link>

      <!-- Desktop Navigation Links -->
      <div class="hidden lg:flex items-center gap-1 xl:gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/40 dark:bg-slate-900/60 light:bg-slate-100/80 border border-white/5">
        <template v-for="link in navLinks" :key="link.key">
          <!-- Tracks link with dropdown -->
          <div 
            v-if="link.hasDropdown" 
            class="relative"
            @mouseenter="isTracksDropdownOpen = true"
            @mouseleave="isTracksDropdownOpen = false"
          >
            <a 
              :href="link.path"
              class="relative inline-flex items-center gap-1 px-3 py-1.5 text-xs xl:text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 
                     hover:text-[#F3CE66] transition-colors duration-200 rounded-full hover:bg-white/5 group"
            >
              <span>{{ t.nav[link.key] }}</span>
              <ChevronDown class="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:rotate-180 transition-transform duration-200" />
              <span class="absolute bottom-1 inset-x-3 h-0.5 bg-gradient-to-r from-transparent via-[#F3CE66] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>

            <!-- Tracks Hover Dropdown Menu (7 Tracks) -->
            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 translate-y-2 scale-95"
              enter-to-class="opacity-100 translate-y-0 scale-100"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 translate-y-0 scale-100"
              leave-to-class="opacity-0 translate-y-2 scale-95"
            >
              <div 
                v-if="isTracksDropdownOpen"
                class="absolute top-full mt-2 w-72 p-2 rounded-2xl bg-[#080D1C]/95 backdrop-blur-2xl border border-[#F3CE66]/30 shadow-2xl shadow-black/80 z-50"
                :class="isArabic ? 'right-0' : 'left-0'"
              >
                <div class="px-3 py-2 border-b border-slate-800 text-[11px] font-bold text-[#F3CE66] uppercase tracking-wider flex items-center justify-between">
                  <span>{{ isArabic ? 'المسارات التدريبية الـ 7' : 'The 7 Engineering Tracks' }}</span>
                  <Layers class="w-3.5 h-3.5 text-[#F3CE66]" />
                </div>
                <div class="py-1 space-y-0.5 max-h-80 overflow-y-auto">
                  <a 
                    v-for="track in tracksData" 
                    :key="track.id"
                    :href="`/#tracks`"
                    @click="isTracksDropdownOpen = false"
                    class="flex items-center justify-between px-3 py-2 rounded-xl text-xs text-slate-300 hover:text-white hover:bg-white/10 transition-colors group/item"
                  >
                    <span class="truncate max-w-[190px] font-medium group-hover/item:text-[#F3CE66]">
                      {{ isArabic ? track.name.ar : track.name.en }}
                    </span>
                    <span 
                      class="w-2 h-2 rounded-full shrink-0" 
                      :style="{ backgroundColor: track.accentColor }"
                    ></span>
                  </a>
                </div>
              </div>
            </transition>
          </div>

          <!-- Router Link -->
          <router-link 
            v-else-if="link.isRouterLink"
            :to="link.path"
            class="relative px-3 py-1.5 text-xs xl:text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 
                   hover:text-[#F3CE66] transition-colors duration-200 rounded-full hover:bg-white/5 group"
          >
            {{ t.nav[link.key] }}
            <span class="absolute bottom-1 inset-x-3 h-0.5 bg-gradient-to-r from-transparent via-[#F3CE66] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </router-link>

          <!-- Standard Anchor Link -->
          <a 
            v-else
            :href="link.path"
            class="relative px-3 py-1.5 text-xs xl:text-sm font-medium text-slate-300 dark:text-slate-300 light:text-slate-700 
                   hover:text-[#F3CE66] transition-colors duration-200 rounded-full hover:bg-white/5 group"
          >
            {{ t.nav[link.key] }}
            <span class="absolute bottom-1 inset-x-3 h-0.5 bg-gradient-to-r from-transparent via-[#F3CE66] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
        </template>
      </div>

      <!-- Action Controls (Theme, Language, CTA) -->
      <div class="flex items-center gap-2 sm:gap-2.5">
        <!-- Language Switcher -->
        <button 
          @click="toggleLanguage" 
          type="button"
          class="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-full
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

        <!-- CTA Button (سجّل في التدريب الداخلي) -->
        <button 
          @click="openModal"
          type="button"
          class="hidden sm:inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold
                 bg-gradient-to-r from-[#C89B3C] via-[#F3CE66] to-[#C89B3C] text-[#050811]
                 shadow-lg shadow-[#F3CE66]/20 hover:shadow-[#F3CE66]/40 hover:scale-[1.03] active:scale-95 transition-all duration-300 cursor-pointer"
        >
          <Sparkles class="w-3.5 h-3.5 shrink-0" />
          <span class="whitespace-nowrap">{{ t.nav.applyNow }}</span>
          <ArrowUpRight class="w-3.5 h-3.5 shrink-0" />
        </button>

        <!-- Mobile Menu Toggle -->
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          type="button"
          class="lg:hidden p-2 rounded-full bg-slate-800/70 text-slate-300 hover:text-white border border-slate-700 cursor-pointer"
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
        class="pointer-events-auto lg:hidden mt-3 p-4 rounded-3xl bg-[#060813]/95 backdrop-blur-2xl border border-[#F3CE66]/30 shadow-2xl space-y-3"
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
