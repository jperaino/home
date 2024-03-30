import React from "react";
import { PADDING_X } from "../page";
import { CardDescription, CardTitle } from "@/components/ui/card";

export interface SpatioMetricsPageProps {}

const SpatioMetricsPage = ({}: SpatioMetricsPageProps) => {
  return (
    <div className={`mt-auto px-${PADDING_X} space-y-2 py-${PADDING_X}`}>
      <CardTitle>Spatio Metrics</CardTitle>
      <CardDescription>More details coming soon...</CardDescription>
    </div>
  );
};

export default SpatioMetricsPage;
