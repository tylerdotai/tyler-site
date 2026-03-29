import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tyler Delano — AI Agent Builder",
  description: "IT Pro. AI Builder. Co-founder of Flume. Building agentic systems that actually ship.",
  openGraph: {
    title: "Tyler Delano",
    description: "IT Pro. AI Builder. Co-founder of Flume.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#0a0a0a] text-[#f0f0f0] antialiased">
        {/* Agent-node canvas background */}
        <canvas
          id="agent-canvas"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />
        {/* Scratch marks layer */}
        <div
          id="scratch-layer"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9998,
            pointerEvents: 'none',
          }}
        />
        {/* Custom cursor */}
        <div
          id="custom-cursor"
          style={{
            position: 'fixed',
            zIndex: 9999,
            pointerEvents: 'none',
          }}
        />
        {/* Page content */}
        <main style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </main>
      </body>
    </html>
  );
}
