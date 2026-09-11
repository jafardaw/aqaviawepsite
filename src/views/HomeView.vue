<script setup lang="ts">
import HeroSection from '../components/sections/HeroSection.vue'
import AboutSection from '../components/sections/AboutSection.vue'
import TeamSection from '../components/sections/TeamSection.vue'
import TracksSection from '../components/sections/TracksSection.vue'
import DiscountsRewardsSection from '../components/sections/DiscountsRewardsSection.vue'
import TestimonialsSection from '../components/sections/TestimonialsSection.vue'
import BlogSection from '../components/sections/BlogSection.vue'
import FaqSection from '../components/sections/FaqSection.vue'
</script>

<template>
  <div>
    <!-- Hero Section (3D Emblem & Company Bio) -->
    <HeroSection />

    <!-- About Us & 4-Stage Apprenticeship Methodology -->
    <AboutSection />

    <!-- Staff Leadership & Mentors Team (With LinkedIn Links) -->
    <TeamSection />

    <!-- Technical Specialization Tracks & Capstone Projects -->
    <TracksSection />

    <!-- Discounts, Referral Program & Lucky Wheel -->
    <DiscountsRewardsSection />

    <!-- Student Success Stories & Testimonials -->
    <TestimonialsSection />

    <!-- Engineering Blog & Technical Insights Preview -->
    <BlogSection />

    <!-- Frequently Asked Questions (Interactive Accordion) -->
    <FaqSection />
  </div>
</template>
