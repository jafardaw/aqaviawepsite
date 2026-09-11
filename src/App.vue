<script setup lang="ts">
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
import ApplicationModal from './components/common/ApplicationModal.vue'
import { useApplicationModal } from './composables/useApplicationModal'

const { isModalOpen, closeModal } = useApplicationModal()
</script>

<template>
  <div class="min-h-screen bg-[#050811] dark:bg-[#050811] light:bg-[#F8FAFC] text-slate-100 dark:text-slate-100 light:text-[#0B1A3D] transition-colors duration-400 relative selection:bg-[#F3CE66] selection:text-black flex flex-col justify-between">
    <!-- Floating Capsule Navbar -->
    <Navbar />

    <!-- Routed Views Outlet -->
    <main class="flex-grow">
      <router-view />
    </main>

    <!-- Global Footer -->
    <Footer />

    <!-- Global Application / Enrollment Modal -->
    <ApplicationModal 
      :is-open="isModalOpen" 
      @close="closeModal" 
    />
  </div>
</template>
