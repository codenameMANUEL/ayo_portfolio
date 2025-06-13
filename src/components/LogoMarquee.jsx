import { Logo } from './Logo';
// import { logos } from '../data/logos';
import { logos } from '../data/logo';


export const LogoMarquee = ({ 
  title = "Trusted by Leading Brands",
  subtitle = "Companies that rely on our services",
  className = "",
  showHeader = true 
}) => {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className={`w-full py-12 bg-neutral-950 ${className}`}>
      <div className="container mx-auto px-4">
        {showHeader && (
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">
              {title}
            </h2>
            <p className="text-neutral-400">
              {subtitle}
            </p>
          </div>
        )}
        
        <div className="relative w-full h-32 overflow-hidden group">
          {/* Enhanced blur gradients */}
          <div className="absolute left-0 top-0 z-10 w-32 h-full bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent" />
          <div className="absolute right-0 top-0 z-10 w-32 h-full bg-gradient-to-l from-neutral-950 via-neutral-950/80 to-transparent" />
          
          {/* Scrolling container */}
          <div className="flex animate-marquee group-hover:animate-marquee-paused whitespace-nowrap">
            {duplicatedLogos.map((logo, index) => (
              <Logo key={`${logo.id}-${index}`} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};