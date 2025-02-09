import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import type { Community } from "@/types/community";

const cache = new Map<string, { data: Community[]; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

async function getCommunities(): Promise<Community[]> {
  const cacheKey = "communities";
  const now = Date.now();

  if (cache.has(cacheKey)) {
    const cachedData = cache.get(cacheKey)!;
    if (now - cachedData.timestamp < CACHE_DURATION) {
      console.log("Returning cached data");
      return cachedData.data;
    }
  }

  const dataFolder = path.join(process.cwd(), "public/data");
  const files = await fs.readdir(dataFolder);
  const communities: Community[] = [];

  for (const file of files) {
    if (file.endsWith(".json")) {
      const filePath = path.join(dataFolder, file);
      const fileData = await fs.readFile(filePath, "utf-8");
      const jsonData: Community = JSON.parse(fileData);
      communities.push(jsonData);
    }
  }

  cache.set(cacheKey, { data: communities, timestamp: now });

  return communities;
}

export async function GET() {
  try {
    const communities = await getCommunities();
    return NextResponse.json(communities);
  } catch (error) {
    console.error("Error fetching communities:", error);
    return NextResponse.json([], { status: 500 });
  }
}
