import { BottomNav } from "@/components/BottomNav";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AIAnalysis = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            navigate("/recommendations");
          }, 500);
          return 100;
        }
        return prev + 20;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="px-4 py-8">
        <h1 className="text-2xl font-semibold mb-6">Analyzing Your Style</h1>
        
        <div className="space-y-6">
          <div className="flex items-center justify-center p-8">
            <Loader2 className="w-12 h-12 animate-spin text-primary" />
          </div>
          
          <div className="space-y-2">
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm text-gray-500 text-center">{progress}% Complete</p>
          </div>

          <div className="space-y-4 mt-8">
            <p className="text-center text-gray-600">
              Our AI is analyzing your:
            </p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="flex items-center justify-between">
                <span>• Style preferences</span>
                {progress >= 20 && <span className="text-primary">✓</span>}
              </li>
              <li className="flex items-center justify-between">
                <span>• Wardrobe items</span>
                {progress >= 40 && <span className="text-primary">✓</span>}
              </li>
              <li className="flex items-center justify-between">
                <span>• Color patterns</span>
                {progress >= 60 && <span className="text-primary">✓</span>}
              </li>
              <li className="flex items-center justify-between">
                <span>• Professional context</span>
                {progress >= 80 && <span className="text-primary">✓</span>}
              </li>
              <li className="flex items-center justify-between">
                <span>• Interview requirements</span>
                {progress >= 100 && <span className="text-primary">✓</span>}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default AIAnalysis;