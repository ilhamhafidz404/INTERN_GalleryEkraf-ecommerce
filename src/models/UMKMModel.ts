type UMKM = {
  id: number;
  name: string;
  slug: string;
  description: string; // HTML content as string
  location: string;
  owner: string;
  image1: string;
  image2: string | null;
  image3: string | null;
  shopee_link: string | null;
  tokopedia_link: string | null;
  instagram_link: string | null;
  tiktok_link: string | null;
  youtube_link: string | null;
  x_link: string | null;
  whatsapp_link: string | null;
  subsector_id: number;
  agreement_id: number;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
  subsector: {
    id: number;
    name: string;
    slug: string;
    description: string | null;
    created_at: string | null;
    updated_at: string | null;
  };
};

export type { UMKM };
