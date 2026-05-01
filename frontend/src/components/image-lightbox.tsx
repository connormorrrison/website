"use client"
import React, { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Dialog as DialogPrimitive } from "radix-ui"
import { Dialog, DialogPortal, DialogOverlay, DialogTitle } from "@/components/ui/dialog"
import { Button2 } from "@/components/button-2"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

interface ImageLightboxProps {
  images: string[] | null
  index: number
  alt?: string
  onClose: () => void
}

export function ImageLightbox({ images, index, alt = "Screenshot", onClose }: ImageLightboxProps) {
  const isOpen = !!images && images.length > 0
  const [api, setApi] = useState<CarouselApi>()
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  useEffect(() => {
    if (!api) return
    const onSelect = () => {
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }
    onSelect()
    api.on("select", onSelect)
    api.on("reInit", onSelect)
    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api])

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose() }}>
      <DialogPortal>
        <DialogOverlay className="backdrop-blur-sm" />
        <DialogPrimitive.Content
          className="fixed top-[50%] left-[50%] z-50 translate-x-[-50%] translate-y-[-50%] p-0 border-0 bg-transparent shadow-none max-w-[90vw] w-auto outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 duration-200"
        >
          <DialogTitle className="sr-only">{alt}</DialogTitle>
          <div className="absolute top-3 right-3 z-20">
            <Button2 aria-label="Close" onClick={onClose}>
              <X style={{ width: '1.25rem', height: '1.25rem' }} />
            </Button2>
          </div>
          {images && (
            <Carousel
              key={String(isOpen) + index}
              setApi={setApi}
              opts={{ startIndex: index, loop: false }}
            >
              <CarouselContent className="ml-0">
                {images.map((src, i) => (
                  <CarouselItem key={i} className="pl-0 flex items-center justify-center">
                    <img
                      src={src}
                      alt={`${alt} ${i + 1}`}
                      className="max-w-[90vw] max-h-[90vh] rounded-xl object-contain block"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              {canScrollPrev && (
                <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10">
                  <Button2 aria-label="Previous image" onClick={() => api?.scrollPrev()}>
                    <ChevronLeft />
                  </Button2>
                </div>
              )}
              {canScrollNext && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2 z-10">
                  <Button2 aria-label="Next image" onClick={() => api?.scrollNext()}>
                    <ChevronRight />
                  </Button2>
                </div>
              )}
            </Carousel>
          )}
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  )
}
