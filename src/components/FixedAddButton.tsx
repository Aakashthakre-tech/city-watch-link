import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const FixedAddButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button 
        size="lg" 
        className="rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
        asChild
      >
        <Link to="/report">
          <Plus className="h-8 w-8 text-white" />
        </Link>
      </Button>
    </div>
  );
};

export default FixedAddButton;