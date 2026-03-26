export function Logo() {
  return (
    <div className="flex items-center gap-3 group">
      {/* NCM Logo - Network/Security inspired monogram */}
      <div className="relative">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform group-hover:scale-105"
        >
          {/* Outer hexagon - representing network structure */}
          <path
            d="M20 2L35 11V29L20 38L5 29V11L20 2Z"
            stroke="url(#logo-gradient)"
            strokeWidth="1.5"
            fill="none"
            className="transition-all"
          />
          
          {/* Inner connection nodes */}
          <circle cx="20" cy="20" r="2" fill="url(#logo-gradient)" />
          <circle cx="20" cy="12" r="1.5" fill="url(#logo-gradient)" opacity="0.6" />
          <circle cx="20" cy="28" r="1.5" fill="url(#logo-gradient)" opacity="0.6" />
          <circle cx="13" cy="20" r="1.5" fill="url(#logo-gradient)" opacity="0.6" />
          <circle cx="27" cy="20" r="1.5" fill="url(#logo-gradient)" opacity="0.6" />
          
          {/* Connection lines */}
          <line x1="20" y1="12" x2="20" y2="18" stroke="url(#logo-gradient)" strokeWidth="1" opacity="0.4" />
          <line x1="20" y1="22" x2="20" y2="28" stroke="url(#logo-gradient)" strokeWidth="1" opacity="0.4" />
          <line x1="13" y1="20" x2="18" y2="20" stroke="url(#logo-gradient)" strokeWidth="1" opacity="0.4" />
          <line x1="22" y1="20" x2="27" y2="20" stroke="url(#logo-gradient)" strokeWidth="1" opacity="0.4" />
          
          {/* NCM monogram */}
          <text
            x="20"
            y="24"
            textAnchor="middle"
            fill="url(#logo-gradient)"
            fontSize="9"
            fontWeight="600"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            NCM
          </text>
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#e879f9" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 blur-xl bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
      </div>
      
      {/* Name */}
      <div className="hidden md:flex flex-col leading-tight">
        <span className="font-semibold text-foreground">Nicolae Marosan</span>
        <span className="text-xs text-muted-foreground">Systems & Security</span>
      </div>
    </div>
  );
}

export function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg 
        viewBox="0 0 36 36" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path 
          d="M18 2L31 10V26L18 34L5 26V10L18 2Z" 
          stroke="#10b981" 
          strokeWidth="2"
          fill="none"
        />
        <circle cx="18" cy="18" r="2" fill="#10b981" />
        <circle cx="18" cy="10" r="1.5" fill="#14b8a6" opacity="0.8" />
        <circle cx="18" cy="26" r="1.5" fill="#14b8a6" opacity="0.8" />
        <circle cx="11" cy="14" r="1.5" fill="#14b8a6" opacity="0.8" />
        <circle cx="25" cy="14" r="1.5" fill="#14b8a6" opacity="0.8" />
        <circle cx="11" cy="22" r="1.5" fill="#14b8a6" opacity="0.8" />
        <circle cx="25" cy="22" r="1.5" fill="#14b8a6" opacity="0.8" />
        <line x1="18" y1="18" x2="18" y2="10" stroke="#10b981" strokeWidth="0.5" opacity="0.6" />
        <line x1="18" y1="18" x2="18" y2="26" stroke="#10b981" strokeWidth="0.5" opacity="0.6" />
        <line x1="18" y1="18" x2="11" y2="14" stroke="#10b981" strokeWidth="0.5" opacity="0.6" />
        <line x1="18" y1="18" x2="25" y2="14" stroke="#10b981" strokeWidth="0.5" opacity="0.6" />
        <line x1="18" y1="18" x2="11" y2="22" stroke="#10b981" strokeWidth="0.5" opacity="0.6" />
        <line x1="18" y1="18" x2="25" y2="22" stroke="#10b981" strokeWidth="0.5" opacity="0.6" />
      </svg>
    </div>
  );
}