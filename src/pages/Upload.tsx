import { Camera, Image, Upload as UploadIcon } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

const UploadPage = () => {
  const navigate = useNavigate();

  const handleUpload = (method: string) => {
    toast({
      title: "Upload initiated",
      description: `Starting ${method} upload...`,
    });
    // In a real app, we would handle the upload here
    // For now, we'll simulate success and navigate to the next quiz step
    setTimeout(() => {
      navigate("/quiz");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="px-4 py-8">
        <h1 className="text-2xl font-semibold mb-6">Add to Your Wardrobe</h1>

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <div className="max-w-sm mx-auto space-y-6">
            <button 
              onClick={() => handleUpload('camera')}
              className="w-full bg-primary text-white rounded-lg p-4 flex items-center justify-center space-x-2"
            >
              <Camera />
              <span>Take Photo</span>
            </button>

            <button 
              onClick={() => handleUpload('gallery')}
              className="w-full bg-white border-2 border-gray-200 rounded-lg p-4 flex items-center justify-center space-x-2"
            >
              <Image />
              <span>Upload from Gallery</span>
            </button>

            <button 
              onClick={() => handleUpload('preset')}
              className="w-full bg-white border-2 border-gray-200 rounded-lg p-4 flex items-center justify-center space-x-2"
            >
              <UploadIcon />
              <span>Select from Presets</span>
            </button>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-medium mb-4">Tips for best results:</h2>
          <ul className="space-y-2 text-gray-600">
            <li>• Use good lighting</li>
            <li>• Capture the full item</li>
            <li>• Use a plain background</li>
            <li>• Take multiple angles</li>
          </ul>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default UploadPage;