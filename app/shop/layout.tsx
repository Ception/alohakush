import React from "react";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="shop-layout">
      <div className="shop-content">{children}</div>
    </div>
  );
}
