export interface Photo {
  id: string;
  src: string;
  thumbnail: string;
  alt: string;
  category: string;
}

const cloudinaryBase = "https://res.cloudinary.com/drl0fxrkq/image/upload";

function createPhoto(publicId: string, category: string, alt: string): Photo {
  return {
    id: publicId,
    src: `${cloudinaryBase}/q_auto,f_auto,w_1200/${publicId}`,
    thumbnail: `${cloudinaryBase}/q_auto,f_auto,w_600,h_400,c_fill/${publicId}`,
    alt,
    category,
  };
}

export const categories = [
  { id: "all", label: "All" },
  { id: "portraits", label: "Portraits" },
  { id: "couples", label: "Couples & Lifestyle" },
  { id: "events", label: "Events" },
  { id: "documentary", label: "Documentary" },
];

export const photos: Photo[] = [
  // Portraits
  createPhoto("Alastair_a8sq8b", "portraits", "Portrait photography"),
  
  // Couples & Lifestyle - Maddie and Ollie series
  createPhoto("Maddie_and_Ollie_mp4_00_01_50_29_Still003_2c91a2343d_ytruiu", "couples", "Couple portrait"),
  createPhoto("Maddie_and_Ollie_mp4_00_05_28_39_Still013_4044e692b9_unfimp", "couples", "Lifestyle photography"),
  createPhoto("Maddie_and_Ollie_mp4_00_12_44_28_Still031_7ab448516e_mzt61d", "couples", "Candid couple moment"),
  createPhoto("Maddie_and_Ollie_mp4_00_14_32_46_Still038_e025bad02b_ztzjwv", "couples", "Couple photography"),
  
  // Events & Documentary - P1002 series
  createPhoto("P1002578_gottnv", "events", "Event photography"),
  createPhoto("P1002595_szeysh", "events", "Event coverage"),
  createPhoto("P1002596_smef0v", "events", "Live event capture"),
  createPhoto("P1002613_cxc4xr", "events", "Event moments"),
  createPhoto("P1002614_biw739", "events", "Event photography"),
  createPhoto("P1002618_avelct", "events", "Event coverage"),
  createPhoto("P1002636_giqny2", "events", "Event photography"),
  createPhoto("P1002642_vq3tlk", "events", "Live event"),
  createPhoto("P1002643_ckmhvo", "events", "Event moments"),
  createPhoto("P1002649_lzzzua", "events", "Event photography"),
  createPhoto("P1002657_vq3olj", "events", "Event coverage"),
  createPhoto("P1002658_qstc2l", "events", "Live event"),
  createPhoto("P1002662_xtbg57", "events", "Event photography"),
  createPhoto("P1002668_evy2fa", "events", "Event moments"),
  createPhoto("P1002676_k66kwl", "events", "Event coverage"),
  createPhoto("P1002680_v5g4hz", "events", "Event photography"),
  createPhoto("P1002687_q3c2yz", "events", "Event moments"),
  createPhoto("P1002698_pefbxv", "events", "Event photography"),
  
  // Documentary - P1007 series
  createPhoto("P1007354_h6clrs", "documentary", "Documentary photography"),
  createPhoto("P1007366_u0v7hk", "documentary", "Documentary coverage"),
  createPhoto("P1007555_mmca6i", "documentary", "Documentary moments"),
  createPhoto("P1007581_tycpth", "documentary", "Documentary photography"),
  createPhoto("P1007588_gkced6", "documentary", "Documentary coverage"),
  createPhoto("P1007596_cmuliz", "documentary", "Documentary moments"),
  createPhoto("P1007612_oae16w", "documentary", "Documentary photography"),
  createPhoto("P1007626_vjrxx2", "documentary", "Documentary coverage"),
  createPhoto("P1007761_hqmzia", "documentary", "Documentary moments"),
  createPhoto("P1007801_qdxced", "documentary", "Documentary photography"),
  createPhoto("P1007809_dhpdcq", "documentary", "Documentary coverage"),
  createPhoto("P1007816_jfmo4n", "documentary", "Documentary moments"),
  createPhoto("P1007820_w37fd5", "documentary", "Documentary photography"),
];

export function getPhotosByCategory(category: string): Photo[] {
  if (category === "all") return photos;
  return photos.filter((photo) => photo.category === category);
}
