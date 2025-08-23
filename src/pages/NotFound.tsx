import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-8xl font-display font-bold text-gradient-brand mb-4">404</h1>
          <h2 className="text-2xl font-display font-semibold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            Oops! The page you're looking for doesn't exist. 
            It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link to="/">
            <Button size="lg" className="gradient-brand text-white hover-lift mr-4">
              Return Home
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="hover-glow">
              Contact Support
            </Button>
          </Link>
        </div>
        
        <div className="mt-8 text-sm text-muted-foreground">
          <p>If you believe this is an error, please contact our support team.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
