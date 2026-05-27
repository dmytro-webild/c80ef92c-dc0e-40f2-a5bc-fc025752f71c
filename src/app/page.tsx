"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="medium"
        sizing="mediumSizeLargeTitles"
        background="noise"
        cardStyle="glass-depth"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",          id: "#home"},
        {
          name: "About",          id: "#about"},
        {
          name: "Features",          id: "#features"},
        {
          name: "Menu",          id: "#menu"},
        {
          name: "Testimonials",          id: "#testimonials"},
        {
          name: "FAQs",          id: "#faqs"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="Island Coffee & Hobbies"
    />
  </div>

  <div id="home" data-section="home">
      <HeroLogoBillboard
      background={{
        variant: "radial-gradient"}}
      logoText="Island Coffee & Hobbies"
      description="Your ultimate destination in Bekasi for a unique blend of artisanal coffee, delicious food, and thrilling Tamiya racing and hobby activities. Unwind, play, and connect with family and friends."
      buttons={[
        {
          text: "Explore Our Offerings",          href: "#features"},
        {
          text: "Visit Us Now",          href: "#contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/top-view-female-hands-making-notes-coffee-dessert-break_1098-20190.jpg"
      imageAlt="Cafe interior with Tamiya track and coffee"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="More Than Just a Coffee Shop"
      description={[
        "Island Coffee & Hobbies offers a unique family-friendly experience where parents can unwind with artisanal coffee and delicious food, while kids (and adults!) dive into engaging hobbies like Tamiya.",        "Forget the usual playgrounds; we bring a fresh concept centered around shared interests and creative play. It's the perfect blend of relaxation and excitement, making every visit memorable for everyone in Bekasi."]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          id: "feature-1",          title: "Family-Friendly Fun",          tags: [
            "Kids Welcome"],
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-friends-drinking-kombucha_23-2150171636.jpg",          imageAlt: "Kids playing with Tamiya cars at the cafe"},
        {
          id: "feature-2",          title: "Tamiya Enthusiast Hub",          tags: [
            "Collect & Race"],
          imageSrc: "http://img.b2bpic.net/free-photo/couple-talking-while-sitting-vehicle_107420-9760.jpg",          imageAlt: "Tamiya race track in a cafe setting"},
        {
          id: "feature-3",          title: "Delicious & Affordable Menu",          tags: [
            "Coffee, Food & More"],
          imageSrc: "http://img.b2bpic.net/free-photo/wooden-board-with-various-sweet-eclairs-cup-tea-marble-surface_114579-54518.jpg",          imageAlt: "Variety of coffee and food on a cafe table"},
        {
          id: "feature-4",          title: "Exceptional Service",          tags: [
            "Friendly Staff"],
          imageSrc: "http://img.b2bpic.net/free-photo/person-paying-using-nfc-technology_23-2149893794.jpg",          imageAlt: "Friendly barista serving coffee"},
      ]}
      title="Why Island Coffee & Hobbies is Your Next Favorite Spot"
      description="Discover what makes us stand out as Bekasi's go-to destination for relaxation and fun, blending top-notch service with unique activities for the whole family."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      carouselMode="buttons"
      products={[
        {
          id: "product-1",          brand: "Signature Coffee",          name: "Island Breeze Latte",          price: "Rp 35.000",          rating: 5,
          reviewCount: "120",          imageSrc: "http://img.b2bpic.net/free-photo/cups-with-beverage-cookies_23-2147742633.jpg",          imageAlt: "Latte art in a coffee cup"},
        {
          id: "product-2",          brand: "Main Course",          name: "Nasi Goreng Kampung",          price: "Rp 45.000",          rating: 4,
          reviewCount: "95",          imageSrc: "http://img.b2bpic.net/free-photo/young-adults-enjoying-food_23-2149303516.jpg",          imageAlt: "Indonesian fried rice with egg"},
        {
          id: "product-3",          brand: "Snacks",          name: "Crispy Chicken Bites",          price: "Rp 30.000",          rating: 4,
          reviewCount: "80",          imageSrc: "http://img.b2bpic.net/free-photo/top-close-up-view-fastfood-plate-appetizing-chicken-wings-french-fries-lemon-right-three-types-sauces-notebook-pencil-left-side-table_140725-117211.jpg",          imageAlt: "Plate of crispy chicken bites"},
        {
          id: "product-4",          brand: "Tamiya Car",          name: "Neo Falcon Jr.",          price: "Rp 150.000",          rating: 5,
          reviewCount: "50",          imageSrc: "http://img.b2bpic.net/free-photo/car-tire-repair_23-2151947879.jpg",          imageAlt: "Tamiya Neo Falcon Jr. model car"},
        {
          id: "product-5",          brand: "Non-Coffee",          name: "Matcha Latte Delight",          price: "Rp 38.000",          rating: 5,
          reviewCount: "110",          imageSrc: "http://img.b2bpic.net/free-photo/iced-matcha-latte-plastic-cup-hands-woman_169016-43898.jpg",          imageAlt: "Iced matcha latte drink"},
        {
          id: "product-6",          brand: "Tamiya Track Part",          name: "Curve Section",          price: "Rp 50.000",          rating: 4,
          reviewCount: "75",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-small-cars-model-road-traffic-conception_1150-20135.jpg",          imageAlt: "Tamiya track curve section"},
      ]}
      title="Our Featured Menu & Hobbies"
      description="From freshly brewed coffee and savory meals to the latest Tamiya cars, find your next favorite at Island Coffee & Hobbies."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "testimonial-1",          name: "Aini Z.",          date: "May 2024",          title: "Perfect Spot for Family Healing!",          quote: "Island Coffee & Hobbies is truly a gem! It's super kid-friendly without being just a playground. My son loves the Tamiya track, and I get to enjoy great coffee. The service is fast and friendly too!",          tag: "Family Visit",          avatarSrc: "http://img.b2bpic.net/free-photo/attractive-latino-female-model-warm-bright-blue-sweater_633478-2090.jpg",          avatarAlt: "Aini Z. avatar",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-friends-with-delicious-cocktails_23-2150244954.jpg",          imageAlt: "Family enjoying cafe activities"},
        {
          id: "testimonial-2",          name: "Budi S.",          date: "April 2024",          title: "Tamiya Heaven!",          quote: "As a Tamiya enthusiast, this place is a dream come true. You can bring your own cars or buy new ones here. The track is well-maintained, and the community is fantastic. Plus, the coffee is genuinely good!",          tag: "Hobbyist",          avatarSrc: "http://img.b2bpic.net/free-photo/3d-cartoon-portrait-working-woman-celebration-labour-day_23-2151306599.jpg",          avatarAlt: "Budi S. avatar",          imageSrc: "http://img.b2bpic.net/free-photo/man-taking-photo-car_23-2147935469.jpg",          imageAlt: "Tamiya cars on a race track"},
        {
          id: "testimonial-3",          name: "Citra L.",          date: "March 2024",          title: "Affordable & Delicious!",          quote: "Finally, an Instagrammable cafe that doesn't break the bank! Their non-coffee menu is surprisingly good, and the food hits the spot. Definitely coming back for more, especially during weekdays for a calmer vibe.",          tag: "Foodie",          avatarSrc: "http://img.b2bpic.net/free-photo/blonde-influencer-recording-nutrition-food_23-2148135481.jpg",          avatarAlt: "Citra L. avatar",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-sugar-cookies-with-coconut-candies-grey-background_140725-76857.jpg",          imageAlt: "Delicious food and drinks spread"},
        {
          id: "testimonial-4",          name: "Doni P.",          date: "Feb 2024",          title: "Top-Notch Service!",          quote: "The staff here are incredibly welcoming and efficient. Even during busy times, they handle orders quickly with a smile. It makes the whole experience much more enjoyable. Highly recommend!",          tag: "Great Service",          avatarSrc: "http://img.b2bpic.net/free-photo/customer-care-webpage-interface-word_53876-21212.jpg",          avatarAlt: "Doni P. avatar",          imageSrc: "http://img.b2bpic.net/free-photo/empty-office-workplace-with-table-chair_1170-1957.jpg",          imageAlt: "Friendly cafe staff serving"},
        {
          id: "testimonial-5",          name: "Eka M.",          date: "Jan 2024",          title: "Unique Cafe Experience",          quote: "I love the concept of combining coffee with hobbies. It's so refreshing. My niece was entertained for hours with the toys, while I relaxed. A perfect escape in Bekasi!",          tag: "Unique Concept",          avatarSrc: "http://img.b2bpic.net/free-photo/closeup-charming-caring-friendlylooking-european-bearded-husband-talking-video-chat-wife-working-abroad-smiling-happy-see-family-standing-gladly-purple-background-rejoicing-enjoying-conversation_1258-306812.jpg",          avatarAlt: "Eka M. avatar",          imageSrc: "http://img.b2bpic.net/free-photo/every-woman-sometimes-needs-time-only-myself_329181-2902.jpg",          imageAlt: "People interacting in a unique cafe"},
      ]}
      title="What Our Visitors Say"
      description="Hear from our happy customers about their memorable experiences and why they love Island Coffee & Hobbies."
    />
  </div>

  <div id="faqs" data-section="faqs">
      <FaqSplitMedia
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq-1",          title: "Is Island Coffee & Hobbies suitable for children?",          content: "Absolutely! We pride ourselves on being a family-friendly spot where kids can engage in various hobbies like Tamiya, while adults relax. It's not a traditional playground, but rather a space for shared interests and creative play for all ages."},
        {
          id: "faq-2",          title: "Can I bring my own Tamiya cars?",          content: "Yes, Tamiya enthusiasts are welcome to bring their own cars and race them on our dedicated track. We also have a wide selection of Tamiya products available for purchase if you wish to expand your collection or start a new hobby."},
        {
          id: "faq-3",          title: "Do you offer non-coffee beverages and food?",          content: "Indeed! Our menu features a delicious range of non-coffee drinks, savory meals, and snacks that are both tasty and budget-friendly. We cater to all tastes, ensuring there's something for everyone to enjoy alongside their coffee or hobby activities."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/woman-works-cafe-evening_1153-3549.jpg"
      imageAlt="People chatting in a cozy cafe"
      mediaAnimation="slide-up"
      mediaPosition="right"
      title="Frequently Asked Questions"
      description="Find answers to common questions about our cafe, hobby activities, and visiting hours for a smooth experience."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient"}}
      tag="Connect With Us"
      title="Ready for Your Visit?"
      description="Have questions, want to book a special event, or simply want to say hello? Reach out to us anytime and we'll be happy to assist you!"
      buttons={[
        {
          text: "Get Directions",          href: "https://maps.app.goo.gl/YourLocation"},
        {
          text: "Message Us",          href: "mailto:info@islandcoffeehobbies.com"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Island Coffee & Hobbies"
      columns={[
        {
          title: "Explore",          items: [
            {
              label: "Home",              href: "#home"},
            {
              label: "About Us",              href: "#about"},
            {
              label: "Features",              href: "#features"},
            {
              label: "Menu",              href: "#menu"},
          ],
        },
        {
          title: "Hobbies",          items: [
            {
              label: "Tamiya Track",              href: "#features"},
            {
              label: "Our Products",              href: "#menu"},
            {
              label: "Special Events",              href: "#contact"},
          ],
        },
        {
          title: "Connect",          items: [
            {
              label: "Contact Us",              href: "#contact"},
            {
              label: "FAQs",              href: "#faqs"},
            {
              label: "Location",              href: "https://maps.app.goo.gl/YourLocation"},
          ],
        },
      ]}
      copyrightText="© 2024 Island Coffee & Hobbies. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
