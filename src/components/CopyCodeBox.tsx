'use client';

import { useState } from 'react';

interface CopyCodeBoxProps {
  code: string;
}

export default function CopyCodeBox({ code }: CopyCodeBoxProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="code-box w-full cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
      title="Clicca per copiare"
    >
      {code}
      <div className={`text-xs mt-2 font-normal transition-colors ${copied ? 'text-green-400' : 'text-[#FAFF00]/80'}`}>
        {copied ? 'Copiato!' : 'Clicca per copiare'}
      </div>
    </button>
  );
}
