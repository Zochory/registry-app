'use client';

import { motion } from "motion/react";
import { useState } from "react";

import { useTheme } from "@/components/theme/theme-provider";
import { INTERACTION_ANIMATIONS, SPRING_CONFIG, TRANSITIONS } from "@/lib/sidebar/animations";
import { getColor } from "@/lib/sidebar/theme";

interface UserProfileProps {
  isCollapsed?: boolean;
}

export function UserProfile({ isCollapsed = false }: UserProfileProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  if (isCollapsed) {
    return (
      <div className="relative shrink-0 w-full">
        <div className="size-full">
          <div className="flex items-center justify-center px-[12px]">
            <motion.div
              className="size-[36px] rounded-full flex items-center justify-center cursor-pointer overflow-hidden transition-colors duration-300"
              style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={TRANSITIONS.fast}
              data-testid="user-profile"
              data-collapsed={isCollapsed}
            >
              <span className="text-white font-semibold text-[14px]">ZB</span>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] items-start px-[12px] py-0 relative w-full">
          <motion.div
            className="content-stretch flex flex-col items-start relative rounded-[16px] shrink-0 w-full overflow-hidden transition-colors duration-300"
            style={{ backgroundColor: getColor.bg.container(isDark) }}
            whileHover={{ backgroundColor: getColor.bg.hover(isDark) }}
            transition={TRANSITIONS.fast}
            data-testid="user-profile"
            data-expanded={isExpanded}
          >
            <motion.div
              className="relative rounded-[8px] shrink-0 w-full cursor-pointer"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                <div className="box-border content-stretch flex items-center justify-between px-[12px] py-[8px] relative w-full">
                  <div className="content-stretch flex gap-[10px] isolate items-center relative shrink-0">
                    <div className="flex flex-row items-center self-stretch">
                      <div className="content-stretch flex flex-col h-full items-start overflow-clip relative shrink-0 z-[1]">
                        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0">
                          <div
                            className="flex flex-col font-['Inter_Display:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] tracking-[-0.28px] w-full transition-colors duration-300"
                            style={{ color: getColor.text.primary(isDark) }}
                          >
                            <p className="leading-[20px]">Zachary Bensalem</p>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0">
                          <div
                            className="flex flex-col font-['Inter_Display:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] tracking-[-0.5px] w-full transition-colors duration-300"
                            style={{ color: getColor.text.secondary(isDark) }}
                          >
                            <p className="leading-[16px]">Qredence</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    className="flex items-center justify-center relative shrink-0 size-[16px]"
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    transition={SPRING_CONFIG.smooth}
                  >
                    <div className="content-stretch flex items-center justify-center opacity-50 relative size-[16px]">
                      <div className="relative shrink-0 size-[16px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                          <path
                            d="M6 12L10 8L6 4"
                            stroke={getColor.stroke(isDark)}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.33333"
                          />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={false}
              animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full overflow-hidden"
            >
              <div className="px-[12px] pb-[8px] space-y-1">
                {[
                  "Profile Settings",
                  "Workspace",
                  "Sign Out",
                ].map((item) => (
                  <motion.div
                    key={item}
                    className="px-[12px] py-[8px] rounded-[8px] cursor-pointer text-[13px] font-['Inter_Display:Medium',sans-serif] transition-colors duration-300"
                    style={{ color: getColor.text.tertiary(isDark) }}
                    whileHover={{ backgroundColor: getColor.bg.container(isDark) }}
                    whileTap={INTERACTION_ANIMATIONS.scaleSmall.tap}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
