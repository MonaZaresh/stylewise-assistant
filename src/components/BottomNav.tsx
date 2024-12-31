import { Home, Camera, Star, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const BottomNav = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex justify-around items-center">
        <Link to="/" className={`flex flex-col items-center ${isActive('/') ? 'text-primary' : 'text-gray-500'}`}>
          <Home size={24} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link to="/upload" className={`flex flex-col items-center ${isActive('/upload') ? 'text-primary' : 'text-gray-500'}`}>
          <Camera size={24} />
          <span className="text-xs mt-1">Upload</span>
        </Link>
        <Link to="/survey" className={`flex flex-col items-center ${isActive('/survey') ? 'text-primary' : 'text-gray-500'}`}>
          <User size={24} />
          <span className="text-xs mt-1">Survey</span>
        </Link>
        <Link to="/premium" className={`flex flex-col items-center ${isActive('/premium') ? 'text-primary' : 'text-gray-500'}`}>
          <Star size={24} />
          <span className="text-xs mt-1">Premium</span>
        </Link>
      </div>
    </nav>
  );
};