'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Brand } from './brand';
const nav = [{ href: '/practitioners', name: 'Our collective' }, { href: '/offerings', name: 'Our offerings' }, { href: '/our-vision', name: 'Our vision' }, { href: '/contact', name: 'Visit us' }];
export function Header() {
 const [open, setOpen] = useState(false); const pathname = usePathname();
 return <><div className="announcement"><span>A little space for you. A whole community behind you.</span></div><header className="site-header"><div className="header-inner"><Brand/><nav className="desktop-nav" aria-label="Main navigation">{nav.map(n => <Link key={n.href} href={n.href} aria-current={pathname === n.href ? 'page' : undefined}>{n.name}</Link>)}<Link className="button button-small" href="/book">Book with Sera <ArrowUpRight size={17}/></Link></nav><button type="button" className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X/> : <Menu/>}</button></div>{open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">{[...nav,{href:'/about',name:'About the collective'},{href:'/s/gift-cards',name:'Gift cards'},{href:'/book',name:'Book with Sera'}].map(n => <Link key={n.href} href={n.href} onClick={() => setOpen(false)} aria-current={pathname === n.href ? 'page' : undefined}>{n.name}<ArrowUpRight size={19}/></Link>)}</nav>}</header></>;
}
