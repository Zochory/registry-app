'use client';

import { motion } from "motion/react";

import { IconButton } from "@/components/common/icon-button";
import { UserProfile } from "@/components/sidebar/user-profile";
import { containerVariantsDelayed, itemVariantsFromBottom } from "@/lib/sidebar/animations";
import { FOOTER_LINKS } from "@/lib/sidebar/navigation";
import { NavigationProps } from "@/types/navigation";

interface SidebarFooterProps extends NavigationProps {
  isCollapsed?: boolean;
}

export function SidebarFooter({ activeItem, onItemClick, isCollapsed = false }: SidebarFooterProps) {
  return (
    <motion.div
      className="content-stretch flex flex-col gap-[13px] items-start relative shrink-0 w-full"
      variants={containerVariantsDelayed}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={itemVariantsFromBottom} className="w-full">
        <UserProfile isCollapsed={isCollapsed} />
      </motion.div>
      {!isCollapsed && (
        <motion.div variants={itemVariantsFromBottom} className="w-full px-[12px]">
          <div className="flex items-center gap-2">
            {FOOTER_LINKS.map((link) => (
              <IconButton
                key={link.id}
                icon={link.icon}
                label={link.label}
                onClick={() => onItemClick?.(link.id)}
                data-testid={`footer-link-${link.id}`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
