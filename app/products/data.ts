export type Product = {
  slug: string;
  title: string;
  short: string;
  description: string;
  features: string[];
  image: string;
  price?: string;
};

export const products: Record<string, Product> = {
  'smart-doorbell': {
    slug: 'smart-doorbell',
    title: 'Smart Doorbell Camera',
    short: 'High-definition doorbell with motion alerts and two-way audio.',
    description:
      'Our Smart Doorbell Camera brings high-definition video, two-way audio, and motion detection to your doorstep. Easy to install and integrated with your existing CCTV setup — perfect for homes and small businesses. The device supports remote access, night vision, and stores event logs for review.',
    features: [
      '1080p / 2K HD video',
      'Night vision & motion alerts',
      'Weather-resistant casing',
      'Two-way audio + remote access',
    ],
  // image moved to /public/products for better organization. If you haven't moved
  // the files yet, see `scripts/MOVE_IMAGES.md` for instructions.
  image: '/products/door_bell_3.jpg',
    price: 'Contact for pricing',
  },
  'NVR Systems': {
    slug: 'nvr-systems',
    title: 'NVR Systems',
    short: 'High-definition NVR systems for seamless video surveillance.',
    description:
      'Our NVR Systems provide high-definition video recording and storage for your CCTV cameras. With advanced features like remote access, motion detection, and easy integration with existing setups, our NVR solutions are perfect for both homes and businesses.',
    features: [
      '1080p / 2K HD video',
      'Night vision & motion alerts',
      'Weather-resistant casing',
      'Two-way audio + remote access',
    ],
  // image moved to /public/products for better organization. If you haven't moved
  // the files yet, see `scripts/MOVE_IMAGES.md` for instructions.
  image: '/products/door_bell_3.jpg',
    price: 'Contact for pricing',
  },
};
