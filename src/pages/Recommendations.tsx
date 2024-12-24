import { BottomNav } from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ChevronRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Recommendations = () => {
  return (
    <div className="min-h-screen bg-white pb-20">
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
              
              <div className="mt-4 space-y-2 text-sm">
                <p>• Navy blazer with white button-up</p>
                <p>• Tailored black pants</p>
                <p>• Classic pumps</p>
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
              
              <div className="mt-4 space-y-2 text-sm">
                <p>• Gray blazer with light blue shirt</p>
                <p>• Navy pencil skirt</p>
                <p>• Black leather flats</p>
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