"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import FeatureCardTwentySeven from "@/components/sections/feature/FeatureCardTwentySeven";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
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

export default function ProductsPage() {
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

      <div id="product-categories" data-section="product-categories">
        <FeatureCardTwentySeven
          title="Complete Wheel Solutions"
          description="Explore our full range of industrial wheels, castor wheels, and trolley solutions designed for every application"
          tag="Product Catalog"
          features={[
            {
              id: "heavy-duty",              title: "Heavy Duty Castor Wheels",              description: "Our premium heavy-duty castor wheels are engineered for maximum load capacity, durability, and performance in the most demanding industrial environments including foundries, steel plants, and heavy machinery operations.",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-heavy-industrial-crane-mechanism_632498-60873.jpg",              imageAlt: "Heavy duty industrial wheels for demanding applications"
            },
            {
              id: "medium-duty",              title: "Medium Duty Wheels",              description: "Balanced performance with excellent reliability for general warehouse, distribution, and material handling operations. Perfect for trolleys, carts, and standard equipment transfer applications.",              imageSrc: "http://img.b2bpic.net/free-psd/portable-folding-utility-cart-with-two-shelves-orange-handle_84443-76242.jpg",              imageAlt: "Medium duty trolley wheels for warehouses"
            },
            {
              id: "light-duty",              title: "Light Duty Wheels",              description: "Specialized light-duty wheels for hospitals, clinics, and sensitive applications. Engineered for smooth, quiet operation with superior floor protection.",              imageSrc: "http://img.b2bpic.net/free-photo/closeup-walker_53876-20434.jpg",              imageAlt: "Light duty wheels for hospital and medical equipment"
            },
            {
              id: "pu-nylon",              title: "PU & Nylon Wheels",              description: "Modern polyurethane and nylon wheel variants offering superior grip, exceptional floor protection, and reduced noise for sensitive environments.",              imageSrc: "http://img.b2bpic.net/free-photo/fitness-equipment_53876-31257.jpg",              imageAlt: "PU and nylon wheel materials"
            },
            {
              id: "swivel-fixed",              title: "Swivel & Fixed Castors",              description: "Complete wheel configurations including swivel castors for maximum maneuverability and fixed castors for directional stability with optional braking.",              imageSrc: "http://img.b2bpic.net/free-photo/arrangement-with-bike-pieces_23-2148932626.jpg",              imageAlt: "Swivel and fixed castor wheel configurations"
            },
            {
              id: "braked",              title: "Braked Wheel Solutions",              description: "Integrated braking systems providing secure equipment positioning and enhanced operator safety, essential for steep surfaces and dynamic work environments.",              imageSrc: "http://img.b2bpic.net/free-photo/detail-precision-tools_1359-246.jpg",              imageAlt: "Braked wheel systems for safety"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="featured-products" data-section="featured-products">
        <ProductCardTwo
          title="Featured Products"
          description="Our bestselling industrial wheels trusted by hundreds of factories and warehouses across India"
          tag="Best Sellers"
          products={[
            {
              id: "1",              brand: "Industrial Standard",              name: "Heavy Load Industrial Castor",              price: "₹2,500-5,000",              rating: 5,
              reviewCount: "450+",              imageSrc: "http://img.b2bpic.net/free-photo/close-up-heavy-industrial-crane-mechanism_632498-60873.jpg",              imageAlt: "Heavy load industrial castor wheels"
            },
            {
              id: "2",              brand: "Warehouse Pro",              name: "Standard Trolley Wheel Set",              price: "₹1,200-2,800",              rating: 5,
              reviewCount: "580+",              imageSrc: "http://img.b2bpic.net/free-psd/portable-folding-utility-cart-with-two-shelves-orange-handle_84443-76242.jpg",              imageAlt: "Standard trolley wheel sets"
            },
            {
              id: "3",              brand: "Medical Grade",              name: "Hospital Equipment Wheels",              price: "₹800-1,800",              rating: 5,
              reviewCount: "320+",              imageSrc: "http://img.b2bpic.net/free-photo/closeup-walker_53876-20434.jpg",              imageAlt: "Hospital medical equipment wheels"
            },
            {
              id: "4",              brand: "Premium PU Series",              name: "Polyurethane Eco Wheels",              price: "₹3,000-6,500",              rating: 5,
              reviewCount: "290+",              imageSrc: "http://img.b2bpic.net/free-photo/fitness-equipment_53876-31257.jpg",              imageAlt: "Premium polyurethane eco-friendly wheels"
            }
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="bulk-inquiry" data-section="bulk-inquiry">
        <ContactSplit
          tag="Wholesale Pricing"
          title="Request Bulk Order Quotes"
          description="Get competitive wholesale pricing for large quantity orders. Our team provides customized solutions for factories, distributors, and logistics companies."
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/warehouse-workers-checking-inventory-large-distribution-warehouse-storage_342744-1538.jpg"
          imageAlt="Bulk order warehousing and logistics"
          mediaPosition="right"
          inputPlaceholder="Enter your email for quote"
          buttonText="Request Quote"
          termsText="We'll contact you within 24 hours with custom pricing for your bulk order."
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