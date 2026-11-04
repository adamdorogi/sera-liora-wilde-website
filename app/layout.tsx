import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { business } from '@/lib/business';
const display = localFont({ src: [{ path: '../public/fonts/baskervville-normal-400.ttf', weight: '400', style: 'normal' }, { path: '../public/fonts/baskervville-italic-400.ttf', weight: '400', style: 'italic' }], variable: '--font-display', display: 'swap' });
const sans = localFont({ src: [{ path: '../public/fonts/manrope-normal-400.ttf', weight: '400' }, { path: '../public/fonts/manrope-normal-500.ttf', weight: '500' }, { path: '../public/fonts/manrope-normal-600.ttf', weight: '600' }, { path: '../public/fonts/manrope-normal-700.ttf', weight: '700' }], variable: '--font-sans', display: 'swap' });
export const metadata: Metadata = {
 metadataBase: new URL(business.siteUrl),
 title: { default: 'The Wellness Collective | Sera Liora Wilde · Birkdale', template: '%s | The Wellness Collective' },
 description: 'Find your own way to feeling well. Discover massage, bodywork, yoga, Reiki and independent holistic practitioners in Birkdale and the Redlands Coast.',
 openGraph: { type: 'website', locale: 'en_AU', siteName: 'The Wellness Collective', images: [{ url: '/images/616a7c7e5410.jpg', width: 1200, height: 800, alt: 'Massage and holistic wellbeing at The Wellness Collective' }] },
 twitter: { card: 'summary_large_image' },
};
export const viewport: Viewport = { themeColor: '#203d35', width: 'device-width', initialScale: 1 };
export default function RootLayout({ children }: { children: React.ReactNode }) {
 return <html lang="en-AU" className={`${display.variable} ${sans.variable}`}><body>{children}</body></html>;
}
