import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Previous Cohorts - Side Project with Daggy (SPD)',
  description: 'Explore amazing projects built by previous SPD cohort participants. Get inspired by real-world applications built during our 3-month mentorship program.',
};

export default function PrevCohortsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}