import { useState, useEffect } from 'react';

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  skeletonClassName?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  onClick?: () => void;
}

export function ImageWithSkeleton({
  src,
  alt,
  className = '',
  containerClassName = '',
  skeletonClassName = '',
  loading = 'lazy',
  decoding = 'async',
  onClick,
}: ImageWithSkeletonProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Reset states if source changes
  useEffect(() => {
    setIsLoaded(false);
    setError(false);
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Shimmer/Pulse Skeleton State */}
      {!isLoaded && !error && (
        <div
          className={`absolute inset-0 w-full h-full bg-slate-800/60 animate-pulse flex items-center justify-center ${skeletonClassName}`}
        >
          {/* Subtle animated loading indicator inside skeleton */}
          <div className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/20 animate-ping opacity-30" />
        </div>
      )}

      {/* Actual Image Element */}
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding={decoding}
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        onClick={onClick}
        className={`transition-opacity duration-500 ease-in-out ${
          isLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0 w-full h-full'
        } ${className}`}
      />

      {/* Image Error Fallback */}
      {error && (
        <div className="absolute inset-0 w-full h-full bg-slate-800/80 flex flex-col items-center justify-center p-4 text-center border border-white/5">
          <svg
            className="w-8 h-8 text-slate-500 mb-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375 0 11-.75 0 .375 0 01.75 0z"
            />
          </svg>
          <span className="text-xs text-slate-500 font-medium">Failed to load asset</span>
        </div>
      )}
    </div>
  );
}
