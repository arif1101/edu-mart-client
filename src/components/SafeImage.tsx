// components/ui/SafeImage.tsx
"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface SafeImageProps extends Omit<ImageProps, 'src' | 'onError'> {
  src: string;
  fallback?: string;
}

const DEFAULT_FALLBACK = "https://placehold.co/600x400/0ea5e9/white?text=No+Image";

export default function SafeImage({ 
  src, 
  fallback = DEFAULT_FALLBACK,
  alt,
  ...props 
}: SafeImageProps) {
  const [imgError, setImgError] = useState(false);
  
  const imageSrc = imgError || !src || src.includes('example.com') 
    ? fallback 
    : src;

  return (
    <Image
      {...props}
      src={imageSrc}
      alt={alt}
      onError={() => setImgError(true)}
      unoptimized={imageSrc === fallback}
    />
  );
}