import React from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="about-layout">
      <div className="about-content">{children}</div>
    </div>
  );
}
