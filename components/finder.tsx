'use client';
import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, X } from 'lucide-react';
import practitioners from '@/content/practitioners.json';
import { categories } from '@/lib/business';
import { PractitionerCard } from './practitioner-card';
export function Finder() {
 const params=useSearchParams(); const initial=params.get('category')||'all'; const category=categories.some(c=>c.id===initial)?initial:'all'; const [query,setQuery]=useState('');
 const filtered=useMemo(()=>practitioners.filter(p=>(category==='all'||p.categories.includes(category))&&`${p.name} ${p.role} ${p.intro} ${p.location}`.toLowerCase().includes(query.trim().toLowerCase())),[category,query]);
 function choose(id:string){ const url=new URL(window.location.href);if(id==='all')url.searchParams.delete('category');else url.searchParams.set('category',id);window.history.replaceState(null,'',url);}
 return <><div className="finder-tools"><label className="search-field"><Search size={20}/><span className="sr-only">Search practitioners, therapies or locations</span><input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="A person, a practice, a place…"/>{query && <button type="button" aria-label="Clear search" onClick={()=>setQuery('')}><X size={17}/></button>}</label><div className="filter-list" role="group" aria-label="Filter practitioners by offering"><button type="button" aria-pressed={category==='all'} onClick={()=>choose('all')}>Everyone</button>{categories.map(c=><button key={c.id} type="button" aria-pressed={category===c.id} onClick={()=>choose(c.id)}>{c.short}</button>)}</div></div><p className="result-count" role="status">{filtered.length} {filtered.length===1?'offering':'offerings'} to explore{query&&` for “${query}”`}</p>{filtered.length ? <div className="practitioner-grid directory-grid">{filtered.map(p=><PractitionerCard key={p.slug} person={p}/>)}</div> : <div className="empty-results"><h2>Let’s try a different path.</h2><p>We couldn’t find a match. Try a name, a practice like yoga, or a nearby location.</p><button className="button" onClick={()=>{setQuery('');choose('all');}}>Show everyone</button></div>}</>;
}
