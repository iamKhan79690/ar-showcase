'use client'

import { useEffect } from 'react'

interface ModelViewerProps {
  glbUrl: string
  usdzUrl: string
  alt: string
  poster?: string
  autoRotate?: boolean
  style?: React.CSSProperties
}

export default function ModelViewer({
  glbUrl,
  usdzUrl,
  alt,
  poster,
  autoRotate = true,
  style,
}: ModelViewerProps) {
  useEffect(() => {
    import('@google/model-viewer')
  }, [])

  return (
    <model-viewer
      src={glbUrl}
      ios-src={usdzUrl}
      alt={alt}
      poster={poster}
      ar
      ar-modes="webxr scene-viewer quick-look"
      camera-controls
      auto-rotate={autoRotate ? '' : undefined}
      shadow-intensity="1"
      environment-image="neutral"
      style={{
        width: '100%',
        height: '400px',
        backgroundColor: 'transparent',
        ...style,
      }}
    >
      <button
        slot="ar-button"
        style={{
          position: 'absolute',
          bottom: '16px',
          right: '16px',
          background: 'white',
          color: 'black',
          border: 'none',
          borderRadius: '8px',
          padding: '10px 20px',
          fontWeight: 700,
          fontSize: '14px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        📱 View in AR
      </button>
    </model-viewer>
  )
}
