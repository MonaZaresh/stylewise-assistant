import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StyleQuiz from "./pages/StyleQuiz";
import UploadPage from "./pages/Upload";
import Premium from "./pages/Premium";
import AIAnalysis from "./pages/AIAnalysis";
import Recommendations from "./pages/Recommendations";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quiz" element={<StyleQuiz />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/analysis" element={<AIAnalysis />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/premium" element={<Premium />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;