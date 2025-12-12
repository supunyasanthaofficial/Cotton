import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Welcome to Cotton Clouds
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
          Discover style for every season with our premium fashion collections.
        </p>
      </div>
    </div>
  );
};

export default Home;
