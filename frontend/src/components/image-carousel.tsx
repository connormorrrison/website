"use client"

import React, { useEffect, useState, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

interface ImageCarouselProps {
  images: string[]
  alt: string
  onImageClick?: (index: number) => void
}

export function ImageCarousel({ images, alt, onImageClick }: ImageCarouselProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const onSelect = useCallback(() => {
    if (!api) return
    setCurrent(api.selectedScrollSnap())
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [api])

  useEffect(() => {
    if (!api) return
    onSelect()
    api.on("select", onSelect)
    api.on("reInit", onSelect)
    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api, onSelect])

  if (images.length === 0) return null

  return (
    <div className="relative group">
      <Carousel setApi={setApi} opts={{ loop: false }}>
        <CarouselContent className="ml-0">
          {images.map((src, i) => (
            <CarouselItem key={i} className="pl-0">
              <div
                className="rounded-lg border overflow-hidden"
                style={{
                  borderColor: 'light-dark(oklch(0.922 0 0), oklch(1 0 0 / 10%))',
                  background: 'light-dark(oklch(0.96 0 0), oklch(0.18 0 0))',
                }}
              >
                <img
                  src={src}
                  alt={`${alt} screenshot ${i + 1}`}
                  className="w-full h-auto block cursor-zoom-in"
                  onClick={() => onImageClick?.(i)}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Prev arrow */}
        {canScrollPrev && (
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full border cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
            style={{
              background: 'light-dark(oklch(0.98 0 0 / 90%), oklch(0.2 0 0 / 90%))',
              borderColor: 'light-dark(oklch(0.922 0 0), oklch(1 0 0 / 10%))',
            }}
            onClick={() => api?.scrollPrev()}
            aria-label="Previous image"
          >
            <ChevronLeft size={16} />
          </button>
        )}

        {/* Next arrow */}
        {canScrollNext && (
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full border cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
            style={{
              background: 'light-dark(oklch(0.98 0 0 / 90%), oklch(0.2 0 0 / 90%))',
              borderColor: 'light-dark(oklch(0.922 0 0), oklch(1 0 0 / 10%))',
            }}
            onClick={() => api?.scrollNext()}
            aria-label="Next image"
          >
            <ChevronRight size={16} />
          </button>
        )}
        {/* Dot indicators */}
        {images.length > 1 && (
          <div
            className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5 rounded-full px-2 py-1.5"
            style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}
          >
            {images.map((_, i) => (
              <button
                key={i}
                className="rounded-full transition-all cursor-pointer"
                style={{
                  width: i === current ? '16px' : '6px',
                  height: '6px',
                  background: i === current
                    ? 'rgba(255,255,255,0.95)'
                    : 'rgba(255,255,255,0.45)',
                }}
                onClick={() => api?.scrollTo(i)}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </Carousel>
    </div>
  )
}
