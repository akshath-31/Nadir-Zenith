
import * as React from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { Diamond, Sparkles } from "lucide-react";

// cn function
function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(" ");
}

// Number Ticker Component for the counting effect
const NumberTicker = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const springValue = useSpring(0, {
    stiffness: 100,
    damping: 30,
  });

  const displayValue = useTransform(springValue, (current) => 
    Math.round(current).toLocaleString()
  );

  React.useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  return (
    <span ref={ref}>
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
};

// Button
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold uppercase tracking-widest ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-[#00f2ff] text-[#0a0a0b] hover:shadow-[0_0_25px_rgba(0,242,255,0.5)] hover:scale-[1.02]",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline: "border border-[#00f2ff]/30 bg-transparent text-[#00f2ff] hover:bg-[#00f2ff]/10 hover:border-[#00f2ff]",
        secondary: "bg-white/10 text-white hover:bg-white/20",
        ghost: "hover:bg-white/5 hover:text-white",
        link: "text-[#00f2ff] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-14 px-8 py-3",
        sm: "h-9 rounded-md px-3",
        lg: "h-14 rounded-md px-10",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

interface PricingCardProps {
  title: string;
  subtitle: string;
  priceValue?: number;
  customPriceText?: string;
  currencyPrefix?: string;
  priceSuffix?: string;
  priceDescription: string;
  description: string;
  features: string[];
  buttonText: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  useSparkles?: boolean;
  showDisclaimer?: boolean;
}

const cardVariants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -8,
    boxShadow: "0px 25px 50px -12px rgba(0, 242, 255, 0.2)",
    transition: { type: "spring", stiffness: 400, damping: 25 },
  },
};

const imageVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.15,
    rotate: -5,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const PricingCard = React.forwardRef<HTMLDivElement, PricingCardProps>(
  (
    {
      className,
      title,
      subtitle,
      priceValue,
      customPriceText,
      currencyPrefix = "₹",
      priceSuffix = "",
      priceDescription,
      description,
      features,
      buttonText,
      imageSrc,
      imageAlt,
      useSparkles = false,
      showDisclaimer = false,
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="initial"
        whileHover="hover"
        className={cn(
          "relative flex flex-col justify-between rounded-none border border-white/5 bg-[#0a0a0b] p-10 text-white shadow-2xl transition-all duration-500 overflow-hidden group",
          className
        )}
        {...props}
      >
        {/* Accent Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f2ff]/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-[#00f2ff]/10 transition-colors"></div>

        <div className="flex flex-col space-y-8 relative z-10">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#00f2ff] block mb-2">
                {subtitle}
              </span>
              <h3 className="text-3xl font-heading font-black tracking-tighter uppercase">{title}</h3>
              <div className="mt-6">
                <div className="flex items-baseline gap-1">
                   <span className="text-4xl md:text-5xl font-heading font-black text-[#00f2ff]">
                     {customPriceText ? (
                        <span>{customPriceText}</span>
                     ) : (
                        <>
                          {currencyPrefix}
                          <NumberTicker value={priceValue || 0} suffix={priceSuffix} />
                        </>
                     )}
                   </span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mt-2">
                  {priceDescription}
                </p>
              </div>
            </div>
            {imageSrc && (
              <motion.img
                src={imageSrc}
                alt={imageAlt || title}
                className="w-24 h-24 object-contain select-none grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                variants={imageVariants}
              />
            )}
          </div>

          <p className="text-slate-400 font-light leading-relaxed text-sm min-h-[40px]">
            {description}
          </p>

          <ul className="space-y-5 pt-8 border-t border-white/10">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-4">
                {useSparkles ? (
                  <Sparkles className="h-4 w-4 text-[#00f2ff]" />
                ) : (
                  <Diamond className="h-3 w-3 text-[#00f2ff]" />
                )}
                <span className="text-[13px] font-medium tracking-wide text-slate-300 group-hover:text-white transition-colors">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 relative z-10">
          <Button className="w-full">{buttonText}</Button>
          <p className={cn(
            "mt-3 text-[9px] text-center uppercase tracking-[0.15em] font-medium leading-tight px-4 transition-colors",
            showDisclaimer ? "text-slate-600" : "text-transparent select-none pointer-events-none"
          )}>
            Price may increase or decrease based on your requirements.
          </p>
        </div>
      </motion.div>
    );
  }
);
PricingCard.displayName = "PricingCard";

export default function PricingSection() {
  const plans: PricingCardProps[] = [
    {
      title: "Starter",
      subtitle: "The Foundation",
      priceValue: 6999,
      currencyPrefix: "₹",
      priceDescription: "One-time Baseline",
      description: "High-end landing pages optimized for impact and conversion.",
      features: [
        "High-end Landing Page",
        "SEO Optimization",
        "Mobile Responsive",
        "Basic Animations",
      ],
      buttonText: "Start Your Ascension",
      imageSrc: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=200",
      imageAlt: "Foundation Blueprint",
      showDisclaimer: true,
    },
    {
      title: "Builder",
      subtitle: "The Expansion",
      priceValue: 14999,
      currencyPrefix: "₹",
      priceDescription: "One-time Development",
      description: "Dynamic web platforms engineered for technical longevity.",
      features: [
        "Multi-page Dynamic Site",
        "CMS Integration",
        "Advanced UI/UX",
        "API Connections",
      ],
      buttonText: "Start Your Ascension",
      imageSrc: "https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?auto=format&fit=crop&q=80&w=200",
      imageAlt: "Expansion Node",
      showDisclaimer: true,
    },
    {
      title: "Zenith",
      subtitle: "The Peak",
      customPriceText: "Custom",
      priceDescription: "Contact for Quote",
      description: "Custom software and web apps for global digital ecosystems.",
      features: [
        "Android App Development",
        "Full-stack Web Apps",
        "Custom Architecture",
        "Priority Support",
      ],
      buttonText: "Start Your Ascension",
      imageSrc: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=200",
      imageAlt: "Peak Jewel",
      useSparkles: true,
      showDisclaimer: false,
    },
  ];

  return (
    <section className="flex w-full flex-col items-center justify-center bg-[#0a0a0b] px-6 py-32 animate-on-scroll opacity-0">
      <div className="w-full max-w-[1400px] space-y-12">
        {/* Title Section - Top Left Positioned */}
        <div className="text-left max-w-full space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#00f2ff] block">
            Investment Structure
          </span>
          <h2 className="text-5xl md:text-6xl font-heading font-black text-white leading-[1.1] tracking-tighter">
            Transparent Scaling. <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00f2ff] to-[#00f2ff]/30">Zero Friction.</span>
          </h2>
          <p className="text-slate-500 font-light text-base max-w-2xl pt-2">
            Select the tier that aligns with your current elevation. We handle the technical ascent.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>

        {/* Custom Request Card */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="rounded-none border border-white/5 bg-gradient-to-br from-[#111113] via-[#0a0a0b] to-[#0a0a0b] p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden group"
        >
           <div className="absolute inset-0 bg-[#00f2ff]/[0.02] pointer-events-none"></div>
           <div className="max-w-3xl relative z-10">
             <div className="flex items-center gap-4 mb-6">
               <div className="h-[1px] w-12 bg-[#00f2ff]"></div>
               <h3 className="text-4xl font-heading font-black uppercase tracking-tighter">Unique Requirements</h3>
             </div>
             <p className="text-slate-400 font-light text-lg leading-relaxed">
               Every peak is different. If your vision demands a bespoke technical route, we engineer a product tailored to the true zenith of your performance needs.
             </p>
           </div>
           <div className="flex-shrink-0 relative z-10">
                <Button variant="outline" size="lg" className="min-w-[240px]">Consultation →</Button>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
