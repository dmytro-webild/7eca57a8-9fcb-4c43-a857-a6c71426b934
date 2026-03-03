"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroCarouselLogo from "@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo";
import MediaAbout from "@/components/sections/about/MediaAbout";
import FeatureCardTwentySeven from "@/components/sections/feature/FeatureCardTwentySeven";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import TestimonialCardOne from "@/components/sections/testimonial/TestimonialCardOne";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Phone, MessageCircle, Mail } from "lucide-react";

const navItems = [
  { name: "Home", id: "/" },
  { name: "Products", id: "/products" },
  { name: "Applications", id: "/applications" },
  { name: "About", id: "/about" },
  { name: "Contact", id: "/contact" }
];

export default function HomePage() {
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

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="RADHE MARKETING"
          description="Premium Industrial Wheels & Castor Solutions for Factories, Warehouses, Hospitals & Logistics"
          buttons={[
            { text: "Explore Products", href: "/products" },
            { text: "Request Quote", href: "/contact" }
          ]}
          slides={[
            {
              imageSrc: "http://img.b2bpic.net/free-photo/warehouse-workers-checking-inventory-large-distribution-warehouse-storage_342744-1538.jpg",              imageAlt: "Industrial warehouse with material handling equipment"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/arrangement-with-bike-pieces_23-2148932626.jpg",              imageAlt: "Professional castor wheels for industrial applications"
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/african-american-female-industrial-employee-hardhat-overall-walking-plant-floor_74855-16327.jpg",              imageAlt: "Factory production floor with industrial wheels"
            }
          ]}
          autoplayDelay={4000}
          showDimOverlay={true}
          ariaLabel="Radhe Marketing - Industrial Wheels Hero Section"
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          tag="About Us"
          title="Trusted Industrial Wheel Supplier Since 1998"
          description="Radhe Marketing is a leading wholesaler and retailer of premium quality castor wheels, trolley wheels, and rubber wheels based in Ahmedabad, Gujarat. Serving factories, warehouses, hospitals, workshops, logistics companies, and material handling units across India with reliable, durable, and cost-effective solutions."
          imageSrc="http://img.b2bpic.net/free-photo/smart-indian-engineer-man-wearing-safety-helmet-doing-stock-tick-check-cardboard-stock-product-management-factory-warehouse-background_609648-1422.jpg"
          imageAlt="Radhe Marketing warehouse and operations facility"
          buttons={[
            { text: "Call Us", href: "tel:+919909421029" },
            { text: "WhatsApp Inquiry", href: "https://wa.me/919909421029" }
          ]}
          useInvertedBackground={false}
        />
      </div>

      <div id="products-overview" data-section="products-overview">
        <FeatureCardTwentySeven
          title="Product Categories"
          description="Comprehensive range of industrial wheels designed for every application and load requirement"
          tag="Our Products"
          features={[
            {
              id: "heavy-duty",              title: "Heavy Duty Castor Wheels",              description: "Engineered for maximum load capacity and durability in demanding industrial environments. Perfect for factories, foundries, and heavy machinery applications.",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-heavy-industrial-crane-mechanism_632498-60873.jpg",              imageAlt: "Heavy duty industrial wheels for demanding applications"
            },
            {
              id: "medium-duty",              title: "Medium Duty Wheels",              description: "Balanced performance for general warehouse and material handling operations. Reliable for trolleys, carts, and standard material transfer equipment.",              imageSrc: "http://img.b2bpic.net/free-psd/portable-folding-utility-cart-with-two-shelves-orange-handle_84443-76242.jpg",              imageAlt: "Medium duty trolley wheels for warehouses"
            },
            {
              id: "light-duty",              title: "Light Duty Wheels",              description: "Specialized for hospitals, clinics, and light-load applications. Smooth operation ensures quiet, safe movement of medical and office equipment.",              imageSrc: "http://img.b2bpic.net/free-photo/closeup-walker_53876-20434.jpg",              imageAlt: "Light duty wheels for hospital and medical equipment"
            },
            {
              id: "pu-nylon",              title: "PU & Nylon Wheels",              description: "Modern polyurethane and nylon variants offering superior grip, floor protection, and reduced noise. Ideal for sensitive environments and precision handling.",              imageSrc: "http://img.b2bpic.net/free-photo/fitness-equipment_53876-31257.jpg",              imageAlt: "PU and nylon wheel materials"
            },
            {
              id: "swivel-fixed",              title: "Swivel & Fixed Castors",              description: "Complete wheel configurations including swivel for maneuverability and fixed for directional stability. Braked variants available for safety.",              imageSrc: "http://img.b2bpic.net/free-photo/arrangement-with-bike-pieces_23-2148932626.jpg",              imageAlt: "Swivel and fixed castor wheel configurations"
            },
            {
              id: "braked",              title: "Braked Wheel Solutions",              description: "Integrated braking systems for secure equipment positioning and operator safety. Essential for steep surfaces and dynamic work environments.",              imageSrc: "http://img.b2bpic.net/free-photo/detail-precision-tools_1359-246.jpg",              imageAlt: "Braked wheel systems for safety"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          buttons={[{ text: "View All Products", href: "/products" }]}
        />
      </div>

      <div id="applications" data-section="applications">
        <ProductCardTwo
          title="Industry Applications"
          description="Our wheels power operations across diverse industrial sectors"
          tag="Applications"
          products={[
            {
              id: "1",              brand: "Manufacturing",              name: "Factory Production Lines",              price: "Custom Solutions",              rating: 5,
              reviewCount: "500+",              imageSrc: "http://img.b2bpic.net/free-photo/african-american-female-industrial-employee-hardhat-overall-walking-plant-floor_74855-16327.jpg",              imageAlt: "Industrial factory production with material handling wheels"
            },
            {
              id: "2",              brand: "Healthcare",              name: "Hospital & Clinic Equipment",              price: "Light-Duty Wheels",              rating: 5,
              reviewCount: "300+",              imageSrc: "http://img.b2bpic.net/free-photo/closeup-walker_53876-20434.jpg",              imageAlt: "Hospital trolley with smooth operating wheels"
            },
            {
              id: "3",              brand: "Logistics",              name: "Warehouse & Distribution",              price: "Medium-Duty Wheels",              rating: 5,
              reviewCount: "600+",              imageSrc: "http://img.b2bpic.net/free-photo/warehouse-workers-discussing-about-logistics-distribution-packages-market_342744-1558.jpg",              imageAlt: "Warehouse with material handling equipment"
            },
            {
              id: "4",              brand: "Workshops",              name: "Mechanical & Auto Workshops",              price: "Heavy-Duty Options",              rating: 5,
              reviewCount: "280+",              imageSrc: "http://img.b2bpic.net/free-photo/detail-precision-tools_1359-246.jpg",              imageAlt: "Workshop equipment with industrial wheels"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Trusted by leading industrial businesses across Gujarat and India"
          tag="Testimonials"
          testimonials={[
            {
              id: "1",              name: "Rajesh Patel",              role: "Production Manager",              company: "Ahmedabad Manufacturing Ltd",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/confident-male-worker-standing-warehouse_107420-96550.jpg",              imageAlt: "Rajesh Patel - Production Manager"
            },
            {
              id: "2",              name: "Vikram Singh",              role: "Warehouse Manager",              company: "Gujarat Logistics Solutions",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/confident-male-worker-standing-warehouse_107420-96550.jpg",              imageAlt: "Vikram Singh - Warehouse Manager"
            },
            {
              id: "3",              name: "Dr. Neha Verma",              role: "Hospital Administrator",              company: "Apollo Hospital Ahmedabad",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-female-business-executive-standing-with-arms-crossed_1170-780.jpg",              imageAlt: "Dr. Neha Verma - Hospital Administrator"
            },
            {
              id: "4",              name: "Anil Desai",              role: "Workshop Owner",              company: "Desai Auto Workshop",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-serious-young-handyman-standing-own-workshop-interior_1163-3158.jpg",              imageAlt: "Anil Desai - Workshop Owner"
            },
            {
              id: "5",              name: "Priya Gupta",              role: "Operations Head",              company: "Premium Distribution Network",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/confident-male-worker-standing-warehouse_107420-96550.jpg",              imageAlt: "Priya Gupta - Operations Head"
            },
            {
              id: "6",              name: "Suresh Nair",              role: "Maintenance Director",              company: "Indian Steel Corporation",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/confident-male-worker-standing-warehouse_107420-96550.jpg",              imageAlt: "Suresh Nair - Maintenance Director"
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="inquiry-contact" data-section="inquiry-contact">
        <ContactSplit
          tag="Get In Touch"
          title="Reach Out for Bulk Orders & Inquiries"
          description="Contact Radhe Marketing for wholesale pricing, product specifications, technical support, or to discuss your specific industrial wheel requirements. Our team responds quickly to all inquiries."
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-vector/web-contact-form-template_23-2147608998.jpg"
          imageAlt="Radhe Marketing customer inquiry contact"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Send Inquiry"
          termsText="We respect your privacy. We'll respond within 24 hours."
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
            { icon: Mail, href: "mailto:info@radhemarketingwheels.com", ariaLabel: "Email us" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}