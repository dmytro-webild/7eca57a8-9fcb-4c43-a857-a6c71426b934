"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import MediaAbout from "@/components/sections/about/MediaAbout";
import FeatureCardTwentySeven from "@/components/sections/feature/FeatureCardTwentySeven";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Phone, MessageCircle, Mail } from "lucide-react";

const navItems = [
  { name: "Home", id: "/" },
  { name: "Products", id: "/products" },
  { name: "Applications", id: "/applications" },
  { name: "About", id: "/about" },
  { name: "Contact", id: "/contact" },
];

export default function ContactPage() {
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

      <div id="contact-form" data-section="contact-form">
        <ContactSplit
          tag="Get In Touch"
          title="Reach Out for Bulk Orders & Inquiries"
          description="Contact Radhe Marketing for wholesale pricing, product specifications, technical support, or to discuss your specific industrial wheel requirements. Our team responds quickly to all inquiries with customized solutions."
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-vector/web-contact-form-template_23-2147608998.jpg?_wi=2"
          imageAlt="Radhe Marketing customer inquiry contact"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Send Inquiry"
          termsText="We respect your privacy. We'll respond within 24 hours with detailed information."
          mediaAnimation="none"
        />
      </div>

      <div id="contact-methods" data-section="contact-methods">
        <FeatureCardTwentySeven
          title="Multiple Ways to Connect"
          description="Choose your preferred method to reach us - phone, WhatsApp, email, or the contact form above"
          tag="Contact Options"
          features={[
            {
              id: "phone",
              title: "Call Us Directly",
              description: "Speak with our sales team directly for immediate assistance on product selection, pricing, and bulk orders. Available Monday to Friday during business hours.",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-heavy-industrial-crane-mechanism_632498-60873.jpg?_wi=5",
              imageAlt: "Direct phone contact",
            },
            {
              id: "whatsapp",
              title: "WhatsApp Inquiry",
              description: "Send product inquiries, photos, or specifications via WhatsApp. Quick response times and perfect for sharing detailed requirements with our team.",
              imageSrc: "http://img.b2bpic.net/free-photo/arrangement-with-bike-pieces_23-2148932626.jpg?_wi=4",
              imageAlt: "WhatsApp messaging",
            },
            {
              id: "email",
              title: "Email for Documents",
              description: "Send detailed inquiries, technical specifications, or bulk order requests via email. Perfect for comprehensive correspondence and record-keeping.",
              imageSrc: "http://img.b2bpic.net/free-photo/detail-precision-tools_1359-246.jpg?_wi=5",
              imageAlt: "Email communication",
            },
          ]}
          gridVariant="uniform-4-items"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="visit-us" data-section="visit-us">
        <MediaAbout
          tag="Visit Our Facility"
          title="Radhe Marketing Headquarters"
          description="Located in Ahmedabad, Gujarat - the industrial heart of India. Visit our warehouse to view our complete product range, discuss custom requirements, and arrange pickup for bulk orders. We welcome factory managers, logistics coordinators, and business partners."
          imageSrc="http://img.b2bpic.net/free-photo/smart-indian-engineer-man-wearing-safety-helmet-doing-stock-tick-check-cardboard-stock-product-management-factory-warehouse-background_609648-1422.jpg?_wi=3"
          imageAlt="Radhe Marketing Ahmedabad facility"
          buttons={[
            { text: "Call for Directions", href: "tel:+919909421029" },
            { text: "Request Visit", href: "https://wa.me/919909421029" },
          ]}
          useInvertedBackground={false}
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