import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ChevronRight, Star, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

// Add this interface for type safety
interface ExpandedImageProps {
  src: string;
  alt: string;
  onClose: () => void;
}

// Create a new component for the expanded image
const ExpandedImage: React.FC<ExpandedImageProps> = ({ src, alt, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
        >
          <X className="w-6 h-6" />
        </button>
        <img
          src={src}
          alt={alt}
          className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

const Recommendations = () => {
  // Add state for expanded image
  const [expandedImage, setExpandedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Expanded image modal */}
      {expandedImage && (
        <ExpandedImage
          src={expandedImage.src}
          alt={expandedImage.alt}
          onClose={() => setExpandedImage(null)}
        />
      )}

      <div className="px-4 py-8">
        <h1 className="text-2xl font-semibold mb-6">Your Interview Looks</h1>
        
        <div className="space-y-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium">Professional Look #1</h3>
                  <p className="text-sm text-gray-500">Perfect for your first interview</p>
                </div>
                <Check className="text-primary" />
              </div>
              
              <div className="mt-4">
                <img 
                  src="https://i.pinimg.com/564x/37/20/b0/3720b00695619b444515c649aadd5e9c.jpg" 
                  alt="Professional blazer outfit"
                  className="w-full h-48 object-cover rounded-md mb-4 cursor-pointer transition-transform hover:scale-[1.02]"
                  onClick={() => setExpandedImage({
                    src: "https://i.pinimg.com/564x/37/20/b0/3720b00695619b444515c649aadd5e9c.jpg",
                    alt: "Professional blazer outfit"
                  })}
                />
                <div className="space-y-2 text-sm">
                  <p>• Navy blazer with white button-up</p>
                  <p>• Tailored black pants</p>
                  <p>• Classic pumps</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium">Professional Look #2</h3>
                  <p className="text-sm text-gray-500">Alternative option</p>
                </div>
                <Check className="text-primary" />
              </div>
              
              <div className="mt-4">
                <img 
                  src="https://i.pinimg.com/originals/e9/91/80/e9918042f30514034000c65eb933ed65.jpg" 
                  alt="Business casual outfit"
                  className="w-full h-48 object-cover rounded-md mb-4 cursor-pointer transition-transform hover:scale-[1.02]"
                  onClick={() => setExpandedImage({
                    src: "https://i.pinimg.com/originals/e9/91/80/e9918042f30514034000c65eb933ed65.jpg",
                    alt: "Business casual outfit"
                  })}
                />
                <div className="space-y-2 text-sm">
                  <p>• Gray blazer with light blue shirt</p>
                  <p>• Navy pencil skirt</p>
                  <p>• Black leather flats</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 space-y-4">
            <Link to="/premium">
              <Button className="w-full" variant="outline">
                <Star className="w-4 h-4 mr-2" />
                Get more recommendations
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Recommendations;