import React from "react";
import { CardDescription, CardTitle } from "@/components/ui/card";

export interface SpatioMetricsPageProps {}

const SpatioMetricsPage = ({}: SpatioMetricsPageProps) => {
  return (
    <div className={`mt-auto px-3 space-y-2 py-3`}>
      <CardTitle>Spatio Metrics</CardTitle>
      <CardDescription>More details coming soon...</CardDescription>
    </div>
  );
};

export default SpatioMetricsPage;
