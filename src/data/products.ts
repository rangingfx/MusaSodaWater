import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'mint',
    name: 'Mint Sparkling',
    tagline: 'Cooling garden freshness in every sparkle',
    colorName: 'mint',
    badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    bannerGradient: 'from-emerald-950 via-[#0a1f16] to-[#040c09]',
    accentColor: '#10b981', // emerald-500
    description: 'Crisp hand-picked garden mint leaves infused with hyper-purified carbonated spring water for an instant chilling sensation.',
    longDescription: 'Our signature Mint Sparkling is a masterclass in clean refreshment. Crafted with organic peppermint extracts from the northern foothills, each bottle bursts with robust cooling complexity. There are no artificial thickeners—just pure high-pressure carbonation paired with the invigorating sting of real garden mint. Perfect as a standalone palette cleanser or a premium modifier for signature summer drinks.',
    size: '300ml Glass (Sting Bottle)',
    bestServed: 'Sub-zero chilled, ideally in a tall frosted glass with a sprig of fresh mint.',
    tasteNotes: ['Direct Peppermint Sting', 'Sweet Herbal Finish', 'Maximum Carbonation'],
    ingredients: ['Carbonated Filtered Spring Water', 'Natural Mint Extract', 'Organic Cane Sugar (Minimal)', 'Citric Acid'],
    nutrition: {
      calories: '42 kcal',
      sodium: '15 mg',
      carbs: '10.5g',
      sugars: '9.8g'
    }
  },
  {
    id: 'lemon',
    name: 'Lemon Zest',
    tagline: 'Sizzling citrus shockwave for real energy',
    colorName: 'lemon',
    badgeColor: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    bannerGradient: 'from-amber-950 via-[#221c08] to-[#0a0802]',
    accentColor: '#eab308', // yellow-500
    description: 'The electric, zesty punch of ripe Pakistan-grown lemons, delivering a crisp, tangy bite that awakens the senses.',
    longDescription: 'MUSA Lemon Zest honors local citrus heritage. We extract oils directly from prime quality citrus skins to create a complex, non-cloying premium flavor. It avoids the heavy artificial syrups found in mainstream mass-market drinks, keeping the taste highly acidic, extremely crisp, and incredibly dry. Ideal for the hot Pakistani summer afternoon.',
    size: '300ml Glass (Sting Bottle)',
    bestServed: 'Ice-cold over crushed ice with a slice of fresh lemon.',
    tasteNotes: ['Sharp Citric Acid Bite', 'Essential Citrus Oils', 'Ultra-fizzy Finish'],
    ingredients: ['Carbonated Filtered Spring Water', 'Natural Lemon Extract', 'Citric Acid', 'Liquid Sugar', 'Ascorbic Acid (Vitamin C)'],
    nutrition: {
      calories: '48 kcal',
      sodium: '12 mg',
      carbs: '12.0g',
      sugars: '11.2g'
    }
  },
  {
    id: 'blueberry',
    name: 'Blueberry Splash',
    tagline: 'Deep mountain berries met with electric fizz',
    colorName: 'blueberry',
    badgeColor: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
    bannerGradient: 'from-indigo-950 via-[#0b1029] to-[#03040e]',
    accentColor: '#6366f1', // indigo-500
    description: 'A vibrant fusion of sweet mountain berries and our signature micro-bubbles, creating an exotic premium experience.',
    longDescription: 'MUSA Blueberry Splash is designed for those seeking a fruitier, more energetic profile. We import peak-season wild blueberries and compress them into an hyper-refined flavor essence. The high-level carbonation adds a prickly texture that beautifully offsets the round berry sweetness, delivering a multi-layered gourmet soda experience that stands shoulder to shoulder with the finest beverages globally.',
    size: '300ml Glass (Sting Bottle)',
    bestServed: 'Chilled to 3°C, best paired with savory dishes or premium barbecues.',
    tasteNotes: ['Ripe Berry Sweetness', 'Tangy Autumn Undertones', 'Crisp Sparkle'],
    ingredients: ['Carbonated Filtered Spring Water', 'Concentrated Blueberry Extract', 'Natural Flavors', 'Cane Sugar', 'Tartaric Acid'],
    nutrition: {
      calories: '54 kcal',
      sodium: '18 mg',
      carbs: '13.5g',
      sugars: '12.8g'
    }
  },
  {
    id: 'imli',
    name: 'Imli Royal',
    tagline: 'Traditional tamarind elevated with royal sparkle',
    colorName: 'imli',
    badgeColor: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    bannerGradient: 'from-orange-950 via-[#1f1107] to-[#0d0702]',
    accentColor: '#f97316', // orange-500
    description: 'A luxurious tribute to our local heritage—rich tamarind with a perfect balance of sour tang and sweet warmth, elevated by carbonation.',
    longDescription: 'Imli Royal is MUSA\'s crown jewel. Tamarind (Imli) is a beloved local flavor, historically served as an artisanal cool drink. We took this legendary recipe and refined it for a modern bottleneck. Slow-cooked tamarind fruit pulp is carefully filtered and combined with fine sparkling carbon water. It yields a gorgeous reddish-brown, semi-translucent color, offering a complex sweet-and-sour depth that is deeply satisfying and uniquely Pakistani.',
    size: '300ml Glass (Sting Bottle)',
    bestServed: 'Chilled with a tiny pinch of rock salt (Kala Namak) for an ultra-authentic local taste.',
    tasteNotes: ['Complex Sweet-and-Sour Dynamic', 'Smoky Caramelized Tones', 'Distinct Local Spice Touch'],
    ingredients: ['Carbonated Water', 'Concentrated Pure Tamarind Extract', 'Organic Cane Sugar', 'Citric Acid', 'Touch of Local Spices'],
    nutrition: {
      calories: '58 kcal',
      sodium: '32 mg',
      carbs: '14.2g',
      sugars: '13.5g'
    }
  }
];
