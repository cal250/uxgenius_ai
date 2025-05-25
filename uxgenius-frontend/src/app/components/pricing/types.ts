export interface PricingFeature {
     text: string;
}

export interface PricingPlan {
     name: string;
     price: string;
     description: string;
     features: string[];
     cta: string;
     popular?: boolean;
} 