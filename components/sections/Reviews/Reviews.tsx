"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import { cardVariants } from "../../../lib/motion-variants";
import SectionHeader from "../../ui/SectionHeader";

const Reviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reviews = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      rating: 5,
      text: "Our family trip to Meghalaya was absolutely magical! The driver was incredibly polite and knowledgeable about local culture. The vehicle was spotless and perfect for hill travel. Highly recommend!",
    },
    {
      name: "Rahul Verma",
      location: "Delhi",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      rating: 5,
      text: "Exceptional service from start to finish. The coordination was seamless, and the driver's local expertise made our Arunachal adventure unforgettable. Safe, reliable, and professional.",
    },
    {
      name: "Ananya Patel",
      location: "Bangalore",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
      rating: 5,
      text: "Traveling with kids can be stressful, but Meghalaya Holidays made it effortless. Clean, comfortable vehicles and a driver who went above and beyond to ensure our family's safety.",
    },
    {
      name: "Vikram Singh",
      location: "Chennai",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
      rating: 5,
      text: "The homestay recommendations were perfect! Authentic local experiences and the driver knew all the hidden gems. Transparent pricing with no surprises. Will definitely book again!",
    },
    {
      name: "Sneha Reddy",
      location: "Hyderabad",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
      rating: 5,
      text: "From booking to completion, everything was smooth. The vehicle was well-maintained and the driver was professional. The team's local knowledge added so much value to our trip.",
    },
    {
      name: "Amit Kumar",
      location: "Kolkata",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
      rating: 5,
      text: "Best travel experience in Northeast India! The driver's expertise on mountain roads was impressive. Clean vehicle, punctual service, and amazing coordination throughout the journey.",
    },
  ];

  const scrollVariants = {
    animate: {
      x: [0, -800],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section className="py-20 sm:py-24 lg:py-28 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="What Our"
          highlight="Travelers Say"
          subtitle="Real experiences from real travelers exploring Northeast India with us"
        />

        {/* Auto-scrolling Carousel */}
        <div className="relative">
          <motion.div
            ref={ref}
            variants={scrollVariants}
            animate="animate"
            className="flex gap-6"
          >
            {/* Original reviews */}
            {reviews.map((review, index) => (
              <motion.div
                key={`original-${index}`}
                variants={cardVariants}
                whileHover={{ 
                  y: -4,
                  boxShadow: "0 25px 50px -12px rgba(245, 158, 11, 0.25)"
                }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 w-72 sm:w-80 md:w-96 bg-white rounded-2xl p-5 sm:p-6 shadow-card border border-gray-100 hover:border-accent/40 hover:shadow-card-hover transition-all duration-300 relative group"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-10 h-10 text-accent" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-base text-text mb-6 leading-relaxed line-clamp-4">
                  {review.text}
                </p>

                {/* Customer Info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-accent/20"
                  />
                  <div>
                    <h4 className="text-base font-semibold text-text">{review.name}</h4>
                    <p className="text-sm text-text-light">{review.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Duplicate reviews for seamless loop */}
            {reviews.map((review, index) => (
              <motion.div
                key={`duplicate-${index}`}
                variants={cardVariants}
                whileHover={{ 
                  y: -4,
                  boxShadow: "0 25px 50px -12px rgba(245, 158, 11, 0.25)"
                }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 w-72 sm:w-80 md:w-96 bg-white rounded-2xl p-5 sm:p-6 shadow-card border border-gray-100 hover:border-accent/40 hover:shadow-card-hover transition-all duration-300 relative group"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-10 h-10 text-accent" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-base text-text mb-6 leading-relaxed line-clamp-4">
                  {review.text}
                </p>

                {/* Customer Info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-accent/20"
                  />
                  <div>
                    <h4 className="text-base font-semibold text-text">{review.name}</h4>
                    <p className="text-sm text-text-light">{review.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Gradient Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-20 md:w-24 lg:w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-20 md:w-24 lg:w-32 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

export default Reviews;
