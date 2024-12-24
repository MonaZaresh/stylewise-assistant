import { Star, Wand2, Palette } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";

const Premium = () => {
  const features = [
    {
      title: "AI Styling Assistant",
      description: "Get personalized outfit recommendations",
      icon: Wand2,
    },
    {
      title: "Interview Look Generator",
      description: "Perfect outfits for any interview type",
      icon: Star,
    },
    {
      title: "Color Analysis",
      description: "Professional color recommendations",
      icon: Palette,
    },
  ];

  const plans = [
    {
      name: "Basic",
      price: "Free",
      features: ["Basic wardrobe management", "Limited outfit suggestions", "Community access"],
    },
    {
      name: "Professional",
      price: "$19.99",
      features: ["Everything in Basic", "AI styling assistant", "Unlimited outfits", "Priority support"],
      popular: true,
    },
    {
      name: "Premium",
      price: "$29.99",
      features: ["Everything in Professional", "Color analysis", "Expert consultations", "Custom recommendations"],
    },
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="px-4 py-8">
        <h1 className="text-2xl font-semibold mb-6">Premium Features</h1>

        <div className="space-y-4 mb-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-gray-50 rounded-lg p-6 card-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`border-2 rounded-lg p-6 ${
                plan.popular ? "border-primary" : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <span className="premium-badge mb-2 inline-block">Most Popular</span>
              )}
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <div className="mt-2 mb-4">
                <span className="text-2xl font-bold">{plan.price}</span>
                {plan.price !== "Free" && <span className="text-gray-500">/month</span>}
              </div>
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-2">
                    <Check className="text-primary" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full mt-6 py-2 rounded-lg font-medium ${
                  plan.popular
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {plan.price === "Free" ? "Get Started" : "Start Free Trial"}
              </button>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Premium;