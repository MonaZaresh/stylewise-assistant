import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BottomNav } from "@/components/BottomNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-4 pt-16 pb-24">
        <div className="animate-fade-in">
          <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Your AI Interview Style Assistant
          </h1>
          <p className="text-xl text-center mb-12 text-gray-600">
            Look confident. Feel prepared.
          </p>
          
          <Link 
            to="/quiz"
            className="block w-full max-w-sm mx-auto bg-primary text-white rounded-lg px-6 py-3 text-center font-semibold shadow-lg hover:bg-primary/90 transition-colors"
          >
            Get Started
            <ArrowRight className="inline-block ml-2" size={20} />
          </Link>

          <div className="mt-12 space-y-6">
            <div className="bg-gray-50 rounded-lg p-6 card-shadow">
              <h3 className="font-semibold mb-2">AI-Powered Styling</h3>
              <p className="text-gray-600">Get personalized outfit recommendations for your interviews</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 card-shadow">
              <h3 className="font-semibold mb-2">Professional Analysis</h3>
              <p className="text-gray-600">Color and style recommendations from experts</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 card-shadow">
              <h3 className="font-semibold mb-2">Interview Ready</h3>
              <p className="text-gray-600">Look perfect for any type of interview</p>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Index;