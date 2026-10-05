<script setup lang="ts">
import HeroSection from '../components/sections/HeroSection.vue'
import InternshipConceptSection from '../components/sections/InternshipConceptSection.vue'
import TrainingMethodologySection from '../components/sections/TrainingMethodologySection.vue'
import AboutSection from '../components/sections/AboutSection.vue'
import TracksSection from '../components/sections/TracksSection.vue'
import TeamSection from '../components/sections/TeamSection.vue'
import B2BSolutionsSection from '../components/sections/B2BSolutionsSection.vue'
import DiscountsRewardsSection from '../components/sections/DiscountsRewardsSection.vue'
import TestimonialsSection from '../components/sections/TestimonialsSection.vue'
import BlogSection from '../components/sections/BlogSection.vue'
import FaqSection from '../components/sections/FaqSection.vue'
</script>

<template>
  <div>
    <!-- 1. الرئيسية: Hero Section (3D Emblem & Company Bio) -->
    <HeroSection />

    <!-- 2. مفهوم التدريب الداخلي وفارق الكورسات (The Internship Concept & Core Difference) -->
    <InternshipConceptSection />

    <!-- 3. منهجية وسير التدريب العملي في 4 مراحل واضحة (Training Lifecycle & Agile Methodology) -->
    <TrainingMethodologySection />

    <!-- 4. عن أكافيا: About Us & Operational Arms -->
    <AboutSection />

    <!-- 4. المسارات التدريبية: The 7 Technical Specialization Tracks & Capstone Projects -->
    <TracksSection />

    <!-- 5. فريق الإشراف والمدربون: Staff Leadership & Mentors Team (With LinkedIn) -->
    <TeamSection />

    <!-- 6. خدمات الشركات: B2B Enterprise Software & Cloud Solutions -->
    <B2BSolutionsSection />

    <!-- 7. الهدايا والكوبونات: Discounts, Referral Program & WhatsApp Reward -->
    <DiscountsRewardsSection />

    <!-- 8. Student Success Stories & Testimonials -->
    <TestimonialsSection />

    <!-- 9. Engineering Blog & Technical Insights Preview -->
    <BlogSection />

    <!-- 10. الأسئلة الشائعة: Frequently Asked Questions (Interactive Accordion) -->
    <FaqSection />
  </div>
</template>
