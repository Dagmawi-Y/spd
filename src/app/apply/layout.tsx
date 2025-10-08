import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Apply - Side Project with Daggy (SPD)',
  description: 'Apply for the 3-month mentorship program and start building amazing projects.',
};

export default function ApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}