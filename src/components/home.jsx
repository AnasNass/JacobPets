import React from "react";
import PageContainer from "./layout/PageContainer";
import HeroSection from "./home/HeroSection";
import DogAccordion from "./home/DogAccordion";
import { Link } from "react-router-dom";

const Home = ({ user }) => {
  return (
    <PageContainer>
      <HeroSection />
      
      <div className="max-w-4xl mx-auto px-4">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700">
            At Jacob Pet Supplies, we are dedicated to rescuing and rehabilitating dogs in need. 
            Our mission is to provide a safe haven for abandoned and neglected dogs, giving them 
            a second chance at a happy life.
          </p>
        </section>

        <section className="mb-12 bg-primary/10 p-8 rounded-xl text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            {user ? "Your Special Offer" : "Get a Special Offer!"}
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            {user 
              ? "Access your 15% discount voucher for your first purchase!"
              : "Register today and receive a printable voucher for 15% off your first purchase!"
            }
          </p>
          {user ? (
            <Link 
              to="/voucher" 
              className="inline-block bg-accent text-white px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors"
            >
              View My Voucher
            </Link>
          ) : (
            <Link 
              to="/register" 
              className="inline-block bg-accent text-white px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors"
            >
              Register Now
            </Link>
          )}
        </section>

        <DogAccordion />

        <section className="my-12 bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-primary mb-6">Visit Us</h2>
          <p className="text-lg text-gray-700 text-center">
            Located in the heart of [City Name], our facility is open Monday through Saturday.
            Come visit us at: 123 Pet Haven Street, [City], [State] [ZIP]
          </p>
          <div className="mt-6 text-center">
            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Schedule a Visit
            </button>
          </div>
        </section>
      </div>
    </PageContainer>
  );
};

export default Home;