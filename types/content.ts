// Types for the Home Page Hero section
export interface HeroSectionContent {
  badge: {
    text: string;
  };
  solutions: {
    title: string;
    categories: Array<{
      title: string;
      description: string;
    }>;
    stats: Array<{
      value: string;
      label: string;
    }>;
    features: string[];
  };
  title: {
    main: string;
    highlight: string;
  };
  description: string;
  keyBenefits: Array<{
    value: string;
    label: string;
    color: string;
  }>;
  ctaButtons: Array<{
    text: string;
    href?: string;
    icon: string;
    variant: 'primary' | 'outline';
    className: string;
  }>;
  trustIndicators: Array<{
    value: string;
    label: string;
  }>;
  floatingIcons: Array<{
    icon: string;
    position: string;
    size: string;
    color: string;
    animationDelay: string;
  }>;
  backgroundElements: Array<{
    position: string;
    size: string;
    color: string;
    animationDelay: string;
  }>;
}

export interface HomePageContent {
  heroSection: HeroSectionContent;
}

// Types for the CBG/RNG Hero section
export interface CBGRNGHeroContent {
  badge: {
    icon: string;
    text: string;
  };
  title: {
    main: string;
    highlight: string;
  };
  description: string;
  stats: Array<{
    value: string;
    label: string;
    color: string;
  }>;
  buttons: Array<{
    text: string;
    href: string;
    variant: 'primary' | 'outline';
    icon?: string;
  }>;
  process: {
    title: string;
    steps: Array<{
      icon: string;
      label: string;
      value: string;
    }>;
  };
}

// Types for the CBG/RNG Benefits section
export interface CBGRNGBenefitsContent {
  hero: {
    title: string;
    description: string;
  };
  benefits: Array<{
    icon: string;
    title: string;
    description: string;
    metrics: string[];
    color: string;
    bgColor: string;
  }>;
  applications: Array<{
    title: string;
    description: string;
    specs: string[];
  }>;
  economicImpact: {
    title: string;
    description: string;
    metrics: Array<{
      value: string;
      label: string;
    }>;
  };
}

export interface ApplicationsContent {
  cbgRngHero: CBGRNGHeroContent;
  cbgRngBenefits: CBGRNGBenefitsContent;
}
