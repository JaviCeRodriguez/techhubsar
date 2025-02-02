import Link from "next/link";
import { Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted mt-auto">
      <div className="container mx-auto px-4 pt-8 pb-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">About TechHubsAr</h3>
            <p className="text-sm text-muted-foreground">
              TechHubsAr is a community-driven project showcasing tech
              communities across Argentina.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Important Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/add-community"
                  className="text-sm text-primary hover:underline"
                >
                  Add New Community
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-primary hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-primary hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Connect</h3>
            <a
              href="https://github.com/yourusername/TechHubsAr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm text-primary hover:underline"
            >
              <Github className="h-4 w-4 mr-2" />
              GitHub Repository
            </a>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} TechHubsAr. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
