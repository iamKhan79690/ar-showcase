declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      src?: string
      'ios-src'?: string
      alt?: string
      ar?: boolean | string
      'ar-modes'?: string
      'camera-controls'?: boolean | string
      'auto-rotate'?: boolean | string
      'shadow-intensity'?: string
      'environment-image'?: string
      poster?: string
      style?: React.CSSProperties
      slot?: string
    }
  }
}
