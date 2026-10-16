"use client";

import { useRouter } from "next/navigation";
import { startTransition, useEffect } from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

function Error({ error, reset }: Props) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  const handleRetry = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div className="flex flex-col items-center text-center px-10 py-20">
      <ExclamationTriangleIcon className="h-16 w-16 text-orange-400 mb-4" />

      <h2 className="font-serif text-3xl font-bold mb-2">
        The news is unavailable right now
      </h2>

      <p className="text-gray-500 mb-6 max-w-md">
        We couldn't load the latest articles. Please try again in a few moments.
      </p>

      {process.env.NODE_ENV === "development" && (
        <p className="text-xs text-red-500 mb-6 font-mono">{error.message}</p>
      )}

      <button
        onClick={handleRetry}
        className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-full"
      >
        Try again
      </button>
    </div>
  );
}

export default Error;