"use client";

import dynamic from "next/dynamic";

// Load the 3D scene only on the client to avoid SSR issues
const StarsCanvas = dynamic(() => import("./StarBackground"), {
  ssr: false,
});

const ClientStarsCanvas = () => <StarsCanvas />;

export default ClientStarsCanvas;
