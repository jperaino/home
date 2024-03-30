import React from "react";
import { CardDescription, CardTitle } from "@/components/ui/card";

export interface SpatioMetricsPageProps {}

const SpatioMetricsPage = ({}: SpatioMetricsPageProps) => {
  return (
    <div className={`mt-auto px-3 space-y-2 py-3`}>
      <CardTitle>Spatio Metrics</CardTitle>
      <div className="space-y-6 pt-10">
        <CardDescription>
          I co-founded Spatio Metrics in 2018 to break down barriers to
          leveraging data in building design and operations.
        </CardDescription>
        <div>
          <div
            className="bg-slate-100"
            style={{ padding: "56.25% 0 0 0", position: "relative" }}
          >
            <iframe
              src="https://player.vimeo.com/video/927782960?badge=0&autopause=0&player_id=0&app_id=58479&controls=0&autoplay=1&loop=1"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              title="Spatio Metrics Product Demo"
            ></iframe>
          </div>
          <CardDescription className="pt-2">
            Watch video with voiceover on{" "}
            <a
              href="https://vimeo.com/manage/videos/926916579\"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vimeo.
            </a>
          </CardDescription>
        </div>

        <CardDescription>
          Spatio’s software provides architects with the design analysis and
          data visualization tools they need to scale consistent, evidence-based
          workflows. Our design analytics help architects and their clients
          analyze floor plans and bridge the gap between design, data, and
          operations. By automatically calculating research-backed metrics for
          any floor plan, our data-driven software saves architects hours of
          manual analysis, identifies tactical improvements, and uses intuitive
          visualizations to communicate a business case for design choices.
        </CardDescription>
        <CardDescription>
          Spatio&apos;s founders{" "}
          <a
            href="https://www.prnewswire.com/news-releases/founders-of-spatial-analytics-startup-spatio-metrics-join-outer-labs-to-accelerate-data-driven-real-estate-solutions-301748122.html?tc=eml_cleartime"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            joined Outer Labs
          </a>{" "}
          in 2023.
        </CardDescription>
        <div>
          <CardDescription className="font-semibold">Stack</CardDescription>
          <CardDescription>
            React, TypeScript, D3, Firebase, MUI, Rhino.Compute, Grasshopper,
            AWS, Python, C#
          </CardDescription>
        </div>
      </div>
    </div>
  );
};

export default SpatioMetricsPage;
