"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import FeatureCardTwentySeven from "@/components/sections/feature/FeatureCardTwentySeven";
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

export default function ApplicationsPage() {
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

      <div id="industry-applications" data-section="industry-applications">
        <ProductCardTwo
          title="Industry Applications"
          description="Our specialized wheel solutions power operations across multiple industrial sectors, from manufacturing and logistics to healthcare and workshops"
          tag="Applications"
          products={[
            {
              id: "1",              brand: "Manufacturing",              name: "Factory Production Lines",              price: "Heavy-Duty Solutions",              rating: 5,
              reviewCount: "500+",              imageSrc: "http://img.b2bpic.net/free-photo/african-american-female-industrial-employee-hardhat-overall-walking-plant-floor_74855-16327.jpg",              imageAlt: "Industrial factory production with material handling wheels"
            },
            {
              id: "2",              brand: "Healthcare",              name: "Hospital & Clinic Equipment",              price: "Light-Duty Specialized",              rating: 5,
              reviewCount: "300+",              imageSrc: "http://img.b2bpic.net/free-photo/closeup-walker_53876-20434.jpg",              imageAlt: "Hospital trolley with smooth operating wheels"
            },
            {
              id: "3",              brand: "Logistics",              name: "Warehouse & Distribution",              price: "Medium-Duty Reliable",              rating: 5,
              reviewCount: "600+",              imageSrc: "http://img.b2bpic.net/free-photo/warehouse-workers-discussing-about-logistics-distribution-packages-market_342744-1558.jpg",              imageAlt: "Warehouse with material handling equipment"
            },
            {
              id: "4",              brand: "Workshops",              name: "Mechanical & Auto Workshops",              price: "Heavy-Duty Variants",              rating: 5,
              reviewCount: "280+",              imageSrc: "http://img.b2bpic.net/free-photo/detail-precision-tools_1359-246.jpg",              imageAlt: "Workshop equipment with industrial wheels"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="use-cases" data-section="use-cases">
        <FeatureCardTwentySeven
          title="Sector-Specific Solutions"
          description="Radhe Marketing provides tailored wheel solutions optimized for each industry's unique requirements and operating conditions"
          tag="Specialized Applications"
          features={[
            {
              id: "manufacturing",              title: "Manufacturing & Foundries",              description: "Heavy-duty castors designed for extreme temperatures, corrosive chemicals, and maximum load capacities. Ideal for factory floors, production lines, and industrial machinery.",              imageSrc: "http://img.b2bpic.net/free-photo/african-american-female-industrial-employee-hardhat-overall-walking-plant-floor_74855-16327.jpg",              imageAlt: "Manufacturing facility with heavy equipment"
            },
            {
              id: "healthcare",              title: "Healthcare & Medical",              description: "Quiet, smooth-running wheels for hospital trolleys, medical equipment, and patient care devices. Engineered for sterile environments and safe patient transport.",              imageSrc: "http://img.b2bpic.net/free-photo/closeup-walker_53876-20434.jpg",              imageAlt: "Medical equipment with specialized wheels"
            },
            {
              id: "logistics",              title: "Logistics & Warehousing",              description: "Reliable, cost-effective wheels for pallets, carts, and material handling equipment. Supports high-volume daily operations in distribution centers.",              imageSrc: "http://img.b2bpic.net/free-photo/warehouse-workers-discussing-about-logistics-distribution-packages-market_342744-1558.jpg",              imageAlt: "Warehouse logistics and distribution"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="application-inquiry" data-section="application-inquiry">
        <ContactSplit
          tag="Technical Consultation"
          title="Find the Right Wheel for Your Application"
          description="Not sure which wheel solution is right for your specific needs? Our technical team provides free consultations to recommend the optimal wheel configuration for your application."
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/close-up-heavy-industrial-crane-mechanism_632498-60873.jpg"
          imageAlt="Technical consultation for application selection"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Get Consultation"
          termsText="Our technical experts will contact you within 24 hours with personalized recommendations."
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