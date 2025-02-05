"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { Globe, Twitter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Community } from "@/types/community";

interface CommunityCardProps {
  community: Community;
  isHovered: boolean;
}

export const CommunityCard = forwardRef<HTMLLIElement, CommunityCardProps>(
  ({ community, isHovered }, ref) => {
    const { id, name, shortDescription, category, website, twitter } =
      community;
    return (
      <li ref={ref} className={`list-none`}>
        <Link href={`/community/${id}`} className="block">
          <Card
            className={`p-4 pb-4 border-b border-border transition-colors ${
              isHovered
                ? "bg-gray-100 bg-opacity-30"
                : "bg-gray-200 dark:bg-gray-800"
            }`}
          >
            <CardHeader className="p-0 mb-2">
              <CardTitle className="text-xl font-semibold">{name}</CardTitle>
              <p
                className={`${
                  isHovered
                    ? "text-muted-foreground dark:text-white"
                    : "text-muted-foreground"
                } text-sm`}
              >
                {shortDescription}
              </p>
            </CardHeader>
            <CardContent className="flex items-center justify-between p-0">
              <Badge variant="secondary">{category}</Badge>
              <div className="flex gap-1" onClick={(e) => e.preventDefault()}>
                {website && (
                  <a href={website} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon">
                      <Globe className="w-4 h-4" />
                    </Button>
                  </a>
                )}
                {twitter && (
                  <a
                    href={`https://twitter.com/${twitter}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="ghost" size="icon">
                      <Twitter className="w-4 h-4" />
                    </Button>
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        </Link>
      </li>
    );
  }
);

CommunityCard.displayName = "CommunityCard";
