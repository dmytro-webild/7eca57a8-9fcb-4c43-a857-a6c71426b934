"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import MediaAbout from "@/components/sections/about/MediaAbout";
import TestimonialCardOne from "@/components/sections/testimonial/TestimonialCardOne";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Phone, MessageCircle, Mail } from "lucide-react";

const navItems = [
  { name: "Home", id: "/" },
  { name: "Products", id: "/products" },
  { name: "Applications", id: "/applications" },
  { name: "About", id: "/about" },
  { name: "Contact", id: "/contact" },
];

export default function AboutPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="small"
      sizing="mediumSizeLargeTitles"
      background="noise"
      cardStyle="gradient-radial"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple brandName="RADHE MARKETING" navItems={navItems} />
      </div>

      <div id="about-company" data-section="about-company">
        <MediaAbout
          tag="Our Story"
          title="Trusted Industrial Wheel Supplier Since 1998"
          description="Radhe Marketing is a leading wholesaler and retailer of premium quality castor wheels, trolley wheels, and rubber wheels based in Ahmedabad, Gujarat. With over 25 years of industry experience, we have built a reputation for reliability, quality, and exceptional customer service. We serve factories, warehouses, hospitals, workshops, logistics companies, and material handling units across India with durable, cost-effective solutions."
          imageSrc="http://img.b2bpic.net/free-photo/smart-indian-engineer-man-wearing-safety-helmet-doing-stock-tick-check-cardboard-stock-product-management-factory-warehouse-background_609648-1422.jpg?_wi=2"
          imageAlt="Radhe Marketing warehouse and operations facility"
          buttons={[
            { text: "View Products", href: "/products" },
            { text: "Get in Touch", href: "/contact" },
          ]}
          useInvertedBackground={false}
        />
      </div>

      <div id="why-choose-us" data-section="why-choose-us">
        <TestimonialCardOne
          title="Customer Testimonials"
          description="Hear directly from the factory managers, warehouse operators, and business leaders who trust Radhe Marketing"
          tag="Client Success"
          testimonials={[
            {
              id: "1",
              name: "Rajesh Patel",
              role: "Production Manager",
              company: "Ahmedabad Manufacturing Ltd",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/confident-male-worker-standing-warehouse_107420-96550.jpg?_wi=5",
              imageAlt: "Rajesh Patel - Production Manager",
            },
            {
              id: "2",
              name: "Vikram Singh",
              role: "Warehouse Manager",
              company: "Gujarat Logistics Solutions",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/confident-male-worker-standing-warehouse_107420-96550.jpg?_wi=6",
              imageAlt: "Vikram Singh - Warehouse Manager",
            },
            {
              id: "3",
              name: "Dr. Neha Verma",
              role: "Hospital Administrator",
              company: "Apollo Hospital Ahmedabad",
              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-female-business-executive-standing-with-arms-crossed_1170-780.jpg?_wi=2",
              imageAlt: "Dr. Neha Verma - Hospital Administrator",
            },
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="commitment" data-section="commitment">
        <ContactSplit
          tag="Our Commitment"
          title="Quality, Reliability, and Partnership"
          description="We are committed to providing industrial-grade wheel solutions that exceed our customers' expectations. Our dedication to quality, competitive pricing, and responsive customer service makes Radhe Marketing the trusted choice for businesses across India."
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/warehouse-workers-checking-inventory-large-distribution-warehouse-storage_342744-1538.jpg?_wi=3"
          imageAlt="Radhe Marketing commitment to quality"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Stay Connected"
          termsText="Subscribe to our updates for new products, industry insights, and special offers."
          mediaAnimation="none"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="RADHE MARKETING"
          copyrightText="© 2025 Radhe Marketing | Premium Industrial Wheels & Castors | Ahmedabad, Gujarat, India"
          socialLinks={[
            { icon: Phone, href: "tel:+919909421029", ariaLabel: "Call us at +91-9909-421029" },
            { icon: MessageCircle, href: "https://wa.me/919909421029", ariaLabel: "WhatsApp us at +91-9909-421029" },
            { icon: Mail, href: "mailto:info@radhemarketingwheels.com", ariaLabel: "Email us" },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}