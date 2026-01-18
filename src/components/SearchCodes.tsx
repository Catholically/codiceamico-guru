'use client';

import { useState, useMemo } from 'react';
import { ReferralCode } from '@/data/codes';

interface SearchCodesProps {
  codes: ReferralCode[];
}

export default function SearchCodes({ codes }: SearchCodesProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredCodes = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return codes
      .filter(code =>
        code.name.toLowerCase().includes(q) ||
        code.description.toLowerCase().includes(q) ||
        code.code.toLowerCase().includes(q)
      )
      .slice(0, 5);
  }, [query, codes]);

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Cerca codice amico..."
          className="w-full px-4 py-3 pl-12 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-[#FAFF00] focus:outline-none"
        />
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {/* Results dropdown */}
      {isOpen && filteredCodes.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[#1a1a1a] border border-white/20 shadow-xl z-50">
          {filteredCodes.map((code) => (
            <a
              key={code.id}
              href={`/${code.slug}/`}
              className="block px-4 py-3 hover:bg-white/10 border-b border-white/10 last:border-0"
              onClick={() => setIsOpen(false)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-white">{code.name}</div>
                  <div className="text-sm text-[#999]">{code.description.slice(0, 50)}...</div>
                </div>
                <div className="text-[#FAFF00] font-bold text-sm">{code.bonusInvited}</div>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* No results */}
      {isOpen && query.trim() && filteredCodes.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[#1a1a1a] border border-white/20 px-4 py-3 text-[#999]">
          Nessun codice trovato per "{query}"
        </div>
      )}

      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
