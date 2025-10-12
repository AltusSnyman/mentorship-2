"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("Application error:", error);
    }
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F9F9FB] to-[#01F1EB]/10 px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="text-6xl">⚠️</div>
        <h1 className="text-3xl font-bold text-[#01355A]">
          Something went wrong
        </h1>
        <p className="text-[#267090]">
          We apologize for the inconvenience. An unexpected error occurred.
        </p>
        {process.env.NODE_ENV === "development" && error.message && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-left">
            <p className="text-sm text-red-800 font-mono">{error.message}</p>
          </div>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-[#01F1EB] text-[#01303E] font-bold rounded-lg hover:bg-[#01F1EB]/90 transition-all"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-3 bg-[#01355A] text-white font-bold rounded-lg hover:bg-[#267090] transition-all"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
