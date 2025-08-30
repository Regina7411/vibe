"use client"
import { getQueryClient } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

const Page = async => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.createAI.queryOptions({ text: "Antonio PREFETCH "}));

  return (
    <div>
        {JSON.stringify(data)}
    </div>
  );
};