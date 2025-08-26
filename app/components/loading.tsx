import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="loader">
        <img src="/loader.gif" alt="Loading..." width={100} height={100} />
      </div>
    </div>
  );
}
