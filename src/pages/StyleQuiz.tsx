import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";

const StyleQuiz = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const navigate = useNavigate();

  const styles = [
    {
      id: "business-professional",
      title: "Business Professional",
      description: "Traditional, polished office attire",
    },
    {
      id: "business-casual",
      title: "Business Casual",
      description: "Relaxed yet professional look",
    },
    {
      id: "creative-professional",
      title: "Creative Professional",
      description: "Modern and expressive workwear",
    },
    {
      id: "smart-casual",
      title: "Smart Casual",
      description: "Polished but comfortable style",
    },
  ];

  const handleNext = () => {
    if (selected) {
      navigate("/upload");
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <div className="max-w-md mx-auto">
        <div className="mb-8">
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-primary rounded-full w-1/4"></div>
          </div>
          <p className="text-center mt-2 text-sm text-gray-500">Step 1 of 4</p>
        </div>

        <h2 className="text-2xl font-semibold mb-6">What's your preferred interview style?</h2>

        <div className="space-y-4">
          {styles.map((style) => (
            <button
              key={style.id}
              className={`w-full p-4 rounded-lg border-2 transition-all ${
                selected === style.id
                  ? "border-primary bg-primary/5"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => setSelected(style.id)}
            >
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <h3 className="font-medium">{style.title}</h3>
                  <p className="text-sm text-gray-500">{style.description}</p>
                </div>
                {selected === style.id && (
                  <Check className="text-primary" size={24} />
                )}
              </div>
            </button>
          ))}
        </div>

        <button
          className={`w-full mt-8 py-3 rounded-lg font-medium transition-colors ${
            selected
              ? "bg-primary text-white"
              : "bg-gray-200 text-gray-500 cursor-not-allowed"
          }`}
          onClick={handleNext}
          disabled={!selected}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default StyleQuiz;