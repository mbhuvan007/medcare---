export function SplashAnimation() {
  return (
    <div className="relative w-48 h-48 mt-8">
      <style jsx>{`
        .scanner-line {
          animation: scan 2s ease-in-out infinite;
        }
        .checkmark {
          animation: pop-in 0.5s ease-out 2s forwards;
        }
        @keyframes scan {
          0%, 100% { top: 0; }
          50% { top: 100%; }
        }
        @keyframes pop-in {
          0% { transform: scale(0); }
          80% { transform: scale(1.2); }
          100% { transform: scale(1); }
        }
      `}</style>
      
      {/* QR Code SVG */}
      <svg className="w-full h-full text-slate-400" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M104 56H56V104H104V56Z" fill="currentColor"/>
        <path d="M56 200H104V152H56V200Z" fill="currentColor"/>
        <path d="M200 56H152V104H200V56Z" fill="currentColor"/>
        <path d="M40 40V120H120V40H40ZM112 112H48V48H112V112Z" fill="currentColor"/>
        <path d="M120 216H40V136H120V216ZM48 144V208H112V144H48Z" fill="currentColor"/>
        <path d="M216 40V120H136V40H216ZM208 112H144V48H208V112Z" fill="currentColor"/>
        <path d="M200 152H152V200H200V152Z" fill="currentColor"/>
        <path d="M136 136H216V120H136V136Z" fill="currentColor"/>
        <path d="M136 216H152V184H184V168H168V136H152V168H136V216Z" fill="currentColor"/>
        <path d="M184 216H200V200H216V168H200V184H184V216Z" fill="currentColor"/>
      </svg>
      
      {/* Scanner animation */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-lg">
        <div className="scanner-line absolute left-0 w-full h-1 bg-primary/70 shadow-[0_0_10px_theme(colors.primary)] rounded-full"></div>
      </div>

      {/* Checkmark */}
      <div className="checkmark absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-lg opacity-0 transform scale-0">
        <svg className="w-24 h-24 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
    </div>
  );
}
