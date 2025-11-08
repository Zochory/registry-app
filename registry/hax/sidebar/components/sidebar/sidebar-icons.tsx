'use client';

import svgPaths from "@/lib/sidebar/svg-paths";
import { useTheme } from "@/components/theme/theme-provider";

function createStrokeIcon(path: string, viewBox: string) {
  return function StrokeIcon() {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    return (
      <div className="overflow-clip relative shrink-0 size-[12.8px]">
        <div className="absolute inset-[12.5%]">
          <div className="absolute inset-[-5.79%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={viewBox}>
              <path
                d={path}
                stroke={isDark ? "white" : "black"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeOpacity="0.55"
                strokeWidth="1.66667"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  };
}

export const NewChatIcon = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={svgPaths.p11a28f00} fill={isDark ? "white" : "black"} fillOpacity="0.85" />
      </svg>
    </div>
  );
};

export const SearchIcon = createStrokeIcon(svgPaths.pd3a6400, "0 0 17 17");
export const BrowseIcon = createStrokeIcon(svgPaths.p1ee16d00, "0 0 17 13");
export const BookmarkIcon = createStrokeIcon(svgPaths.p17a83000, "0 0 13 17");
export const SettingsIcon = createStrokeIcon(svgPaths.p1cc6fd00, "0 0 17 15");
export const AgenticFleetIcon = createStrokeIcon(svgPaths.pbdf3330, "0 0 17 17");
export const AgenticFabricIcon = createStrokeIcon(svgPaths.p13a23500, "0 0 18 18");
export const QlawIcon = createStrokeIcon(svgPaths.p338d0300, "0 0 18 18");
export const MCPIcon = createStrokeIcon(svgPaths.p68e1600, "0 0 17 15");
