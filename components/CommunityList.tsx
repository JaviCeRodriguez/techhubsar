"use client";

import { useRef, useEffect } from "react";
import type { Community } from "../types/community";
import { CommunityCard } from "./CommunityCard";
import { useIsMobile } from "@/hooks/use-mobile";

interface CommunityListProps {
  communities: Community[];
  hoveredCommunityId: string | null;
}

export default function CommunityList({
  communities,
  hoveredCommunityId,
}: CommunityListProps) {
  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<{ [key: string]: HTMLLIElement | null }>({});
  const isMobile = useIsMobile();

  useEffect(() => {
    if (
      !isMobile &&
      hoveredCommunityId &&
      itemRefs.current[hoveredCommunityId] &&
      listRef.current
    ) {
      itemRefs.current[hoveredCommunityId]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [hoveredCommunityId, isMobile]);

  return (
    <ul
      ref={listRef}
      className="space-y-2 md:space-y-4 overflow-y-auto max-h-[500px] lg:max-h-[calc(100vh-200px)]"
    >
      {communities.map((community) => (
        <CommunityCard
          key={community.id}
          ref={(el) => {
            if (el) {
              itemRefs.current[community.id] = el;
            }
          }}
          community={community}
          isHovered={hoveredCommunityId === community.id}
        />
      ))}
    </ul>
  );
}
