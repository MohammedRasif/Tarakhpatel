'use client'

import React from 'react'

export default function WarningPage({
  title = "Website Not Available",
  message = "This website is currently not available. We're working hard to get it back online as soon as possible.",
  description = "Please check back shortly or contact us if you have any questions."
}) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-2xl">

        {/* Warning Icon */}
        <div className="mb-8 flex justify-center">
          <div className="text-8xl font-bold text-primary/20">
            ⚠️
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
          {title}
        </h1>

        {/* Main Message */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed text-balance">
          {message}
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-muted-foreground/80 mb-12 leading-relaxed">
          {description}
        </p>

        {/* Decorative Line */}
        <div className="flex justify-center mb-12">
          <div className="h-1 w-12 bg-primary rounded-full" />
        </div>

        {/* Support Text */}
        <p className="text-sm text-muted-foreground">
          If the problem persists, please reach out to our support team for assistance.
        </p>
      </div>
    </div>
  )
}
