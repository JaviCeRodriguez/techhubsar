"use client";

import { useState, useEffect } from "react";

import CommunityList from "../components/CommunityList";
import ArgentinaMap from "../components/ArgentinaMap";
import AddCommunityButton from "../components/AddCommunityButton";

import { fetchCommunities } from "../utils/fetchCommunities";
import type { Community } from "../types/community";

export default function Home() {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [hoveredCommunityId, setHoveredCommunityId] = useState<string | null>(
    null
  );

  useEffect(() => {
    const loadCommunities = async () => {
      const fetchedCommunities = await fetchCommunities();
      setCommunities(fetchedCommunities);
    };
    loadCommunities();
  }, []);

  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tech-gradient">
          Tech Communities in Argentina
        </h1>
        <p className="text-xl text-muted-foreground">
          Discover and connect with tech enthusiasts across the country
        </p>
      </div>
      <div className="flex flex-col gap-8 lg:flex-row">
        <div
          className="hidden w-full lg:w-2/3 lg:block"
          style={{ height: 800 }}
        >
          <ArgentinaMap
            communities={communities}
            onHoverCommunity={setHoveredCommunityId}
          />
        </div>
        <div className="w-full mt-8 lg:w-1/3 lg:mt-0">
          <div className="p-2 bg-white rounded-lg shadow-lg md:p-4 dark:bg-gray-900 ">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Communities</h2>
              <AddCommunityButton />
            </div>
            <CommunityList
              communities={communities}
              hoveredCommunityId={hoveredCommunityId}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
