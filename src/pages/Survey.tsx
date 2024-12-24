import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BottomNav } from "@/components/BottomNav";
import { AlertCircle } from 'lucide-react'; // Import error icon

interface SurveyResponse {
  id: string;
  timestamp: string;
  subscriptionLikelihood: string;
  preferredPricing: string;
  feedback: string;
}

interface ValidationErrors {
  subscriptionLikelihood?: string;
  preferredPricing?: string;
  feedback?: string;
}

// const Survey = () => {
//   const [responses, setResponses] = useState<SurveyResponse>({
//     id: '',
//     timestamp: '',
//     subscriptionLikelihood: '',
//     preferredPricing: '',
//     feedback: '',
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [allResponses, setAllResponses] = useState<SurveyResponse[]>([]);
//   const [errors, setErrors] = useState<ValidationErrors>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitError, setSubmitError] = useState<string | null>(null);

//   // Validation function
//   const validateForm = (): boolean => {
//     const newErrors: ValidationErrors = {};

//     if (!responses.subscriptionLikelihood) {
//       newErrors.subscriptionLikelihood = 'Please select your subscription likelihood';
//     }

//     if (!responses.preferredPricing) {
//       newErrors.preferredPricing = 'Please select your preferred pricing';
//     }

//     if (responses.feedback && responses.feedback.length > 500) {
//       newErrors.feedback = 'Feedback must not exceed 500 characters';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitError(null);
    
//     // Validate form
//     if (!validateForm()) {
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       // Create new response
//       const newResponse = {
//         ...responses,
//         id: `response_${Date.now()}`,
//         timestamp: new Date().toISOString(),
//       };

//       // Add to existing responses
//       const updatedResponses = [...allResponses, newResponse];

//       // Save to localStorage with error handling
//       try {
//         localStorage.setItem('surveyResponses', JSON.stringify(updatedResponses));
//         setAllResponses(updatedResponses);
//       } catch (error) {
//         throw new Error('Failed to save response to local storage');
//       }

//       // Download files with error handling
//       try {
//         await downloadResponses(updatedResponses);
//       } catch (error) {
//         throw new Error('Failed to download response files');
//       }

//       // Reset form and show success message
//       setIsSubmitted(true);
//       setResponses({
//         id: '',
//         timestamp: '',
//         subscriptionLikelihood: '',
//         preferredPricing: '',
//         feedback: '',
//       });

//     } catch (error) {
//       setSubmitError(error instanceof Error ? error.message : 'An unexpected error occurred');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const downloadResponses = async (data: SurveyResponse[]): Promise<void> => {
//     try {
//       // Download as JSON
//       const jsonString = JSON.stringify(data, null, 2);
//       const jsonBlob = new Blob([jsonString], { type: 'application/json' });
//       const jsonUrl = URL.createObjectURL(jsonBlob);
//       const jsonLink = document.createElement('a');
//       jsonLink.href = jsonUrl;
//       jsonLink.download = `survey_responses_${new Date().toISOString().split('T')[0]}.json`;
//       document.body.appendChild(jsonLink);
//       jsonLink.click();
//       document.body.removeChild(jsonLink);
//       URL.revokeObjectURL(jsonUrl);

//       // Download as CSV
//       const csvHeader = 'ID,Timestamp,Subscription Likelihood,Preferred Pricing,Feedback\n';
//       const csvContent = data.map(response => 
//         `${response.id},${response.timestamp},"${response.subscriptionLikelihood}","${response.preferredPricing}","${response.feedback.replace(/"/g, '""')}"`
//       ).join('\n');
//       const csvBlob = new Blob([csvHeader + csvContent], { type: 'text/csv' });
//       const csvUrl = URL.createObjectURL(csvBlob);
//       const csvLink = document.createElement('a');
//       csvLink.href = csvUrl;
//       csvLink.download = `survey_responses_${new Date().toISOString().split('T')[0]}.csv`;
//       document.body.appendChild(csvLink);
//       csvLink.click();
//       document.body.removeChild(csvLink);
//       URL.revokeObjectURL(csvUrl);
//     } catch (error) {
//       throw new Error('Failed to download files');
//     }
//   };

//   // Error message component
//   const ErrorMessage = ({ message }: { message: string }) => (
//     <div className="text-red-500 text-sm flex items-center mt-1">
//       <AlertCircle className="w-4 h-4 mr-1" />
//       {message}
//     </div>
//   );

//   if (isSubmitted) {
//     return (
//       <Card className="w-full max-w-2xl mx-auto">
//         <CardContent className="p-6 text-center">
//           <h2 className="text-xl font-semibold mb-4">Thank You!</h2>
//           <p className="mb-6">Your feedback has been recorded and downloaded.</p>
//           <Button onClick={() => setIsSubmitted(false)}>
//             Submit Another Response
//           </Button>
//         </CardContent>
//       </Card>
//     );
//   }

//   return (
//     <Card className="w-full max-w-2xl mx-auto">
//       <CardContent className="p-6">
//         <h2 className="text-xl font-semibold mb-6">Feedback Survey</h2>
        
//         {submitError && (
//           <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6 flex items-center">
//             <AlertCircle className="w-5 h-5 mr-2" />
//             {submitError}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="space-y-4">
//             <Label className={errors.subscriptionLikelihood ? 'text-red-500' : ''}>
//               How likely are you to subscribe to this service?*
//             </Label>
//             <RadioGroup
//               value={responses.subscriptionLikelihood}
//               onValueChange={(value) => {
//                 setResponses(prev => ({ ...prev, subscriptionLikelihood: value }));
//                 setErrors(prev => ({ ...prev, subscriptionLikelihood: undefined }));
//               }}
//             >
//               {['Very Likely', 'Likely', 'Neutral', 'Unlikely', 'Very Unlikely'].map((option) => (
//                 <div key={option} className="flex items-center space-x-2">
//                   <RadioGroupItem value={option} id={option} />
//                   <Label htmlFor={option}>{option}</Label>
//                 </div>
//               ))}
//             </RadioGroup>
//             {errors.subscriptionLikelihood && (
//               <ErrorMessage message={errors.subscriptionLikelihood} />
//             )}
//           </div>

//           <div className="space-y-4">
//             <Label className={errors.preferredPricing ? 'text-red-500' : ''}>
//               Which pricing tier appeals to you most?*
//             </Label>
//             <RadioGroup
//               value={responses.preferredPricing}
//               onValueChange={(value) => {
//                 setResponses(prev => ({ ...prev, preferredPricing: value }));
//                 setErrors(prev => ({ ...prev, preferredPricing: undefined }));
//               }}
//             >
//               {[
//                 'Basic ($9.99/month)',
//                 'Professional ($19.99/month)',
//                 'Premium ($29.99/month)',
//               ].map((option) => (
//                 <div key={option} className="flex items-center space-x-2">
//                   <RadioGroupItem value={option} id={option} />
//                   <Label htmlFor={option}>{option}</Label>
//                 </div>
//               ))}
//             </RadioGroup>
//             {errors.preferredPricing && (
//               <ErrorMessage message={errors.preferredPricing} />
//             )}
//           </div>

//           <div className="space-y-4">
//             <Label className={errors.feedback ? 'text-red-500' : ''}>
//               What would make you more likely to subscribe?
//             </Label>
//             <Textarea
//               value={responses.feedback}
//               onChange={(e) => {
//                 setResponses(prev => ({ ...prev, feedback: e.target.value }));
//                 setErrors(prev => ({ ...prev, feedback: undefined }));
//               }}
//               placeholder="Share your thoughts..."
//               className={`min-h-[100px] ${errors.feedback ? 'border-red-500' : ''}`}
//             />
//             {errors.feedback && (
//               <ErrorMessage message={errors.feedback} />
//             )}
//             <div className="text-sm text-gray-500">
//               {responses.feedback.length}/500 characters
//             </div>
//           </div>

//           <Button 
//             type="submit" 
//             className="w-full"
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
//           </Button>
//         </form>
//       </CardContent>
//     </Card>
//   );
// };
const Survey = () => {
  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="px-4 py-8">
        <h1 className="text-2xl font-semibold mb-6">Your Interview Looks</h1>
        
        {/* Your existing cards and content */}

        {/* Add Survey Button */}
        <div className="mt-8">
          <a 
            href="https://forms.gle/ZQaPQTT3tae3EwGt9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full inline-flex justify-center items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Take Our Survey
          </a>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Survey;  