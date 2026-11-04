import Link from 'next/link';
export function BrandMark({ className = '' }: { className?: string }) {
  return <svg className={className} width="62" height="48" viewBox="0 0 62 48" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" aria-hidden="true"><path d="M3 35c17-12 33 11 56-3M3 41c17-11 33 11 56-3M18 28a13 13 0 0 1 26-1M31 4v7M18 7l3 7M8 15l6 4M3 26l7 1M44 7l-3 7M54 15l-6 4M59 26l-7 1"/></svg>;
}
export function Brand({ inverse = false }: { inverse?: boolean }) {
  return <Link href="/" className={`brand${inverse ? ' brand-inverse' : ''}`} aria-label="Sera Liora Wilde — The Wellness Collective home"><BrandMark/><span className="brand-type"><span>Sera Liora Wilde</span><small>The Wellness Collective</small></span></Link>;
}
