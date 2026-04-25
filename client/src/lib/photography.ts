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
  { id: "portraits", label: "Team portraits & headshots" },
  { id: "brand", label: "Brand stills" },
  { id: "documentary", label: "Documentary portraiture" },
  { id: "events", label: "Events & productions" },
];

export const photos: Photo[] = [
  // Featured Alastair Caldwell commission
  createPhoto(
    "P1011199_ycq6hy",
    "documentary",
    "Alastair Caldwell with his model car collection — Auto Addicts feature shoot by Flashbuzz"
  ),
  createPhoto(
    "P1011152_z2iudk",
    "documentary",
    "Alastair Caldwell in his garage workshop — Auto Addicts feature shoot by Flashbuzz"
  ),
  createPhoto(
    "P1011262_ooaj27",
    "documentary",
    "Alastair Caldwell at the wheel of a vintage sports car — Auto Addicts feature shoot by Flashbuzz"
  ),
  createPhoto(
    "P1011218_mkkje9",
    "documentary",
    "Alastair Caldwell with his Vespa — Auto Addicts feature shoot by Flashbuzz"
  ),

  // Supporting Caldwell images
  createPhoto(
    "P1011230_wozi1z",
    "documentary",
    "Alastair Caldwell at his desk surrounded by motorsport memorabilia — Auto Addicts feature shoot by Flashbuzz"
  ),
  createPhoto(
    "P1011073_mxssvw",
    "documentary",
    "Alastair Caldwell in his classic car garage — Auto Addicts feature shoot by Flashbuzz"
  ),
  createPhoto(
    "P1010972_llgyxw",
    "documentary",
    "Alastair Caldwell working in his classic car workshop — Auto Addicts feature shoot by Flashbuzz"
  ),
  createPhoto(
    "P1011235_rudqjs",
    "documentary",
    "Alastair Caldwell in his conservatory reviewing photographs — Auto Addicts feature shoot by Flashbuzz"
  ),

  // Suzie's Pets small business shoot
  createPhoto(
    "P1010128_wtch8d",
    "portraits",
    "Suzie's Pets dog grooming team portrait with branded mugs — small business photography by Flashbuzz"
  ),
  createPhoto(
    "P1010119_ybboxl",
    "portraits",
    "Suzie's Pets owner portrait — UK small business photography by Flashbuzz"
  ),
  createPhoto(
    "P1009907_iywmuh",
    "brand",
    "Dog groomer with rottweiler at Suzie's Pets — UK small business brand photography by Flashbuzz"
  ),
  createPhoto(
    "P1009933_wq3w7x",
    "brand",
    "Detail of dog grooming work at Suzie's Pets — UK small business brand photography by Flashbuzz"
  ),

  // Corporate event work
  createPhoto(
    "P1023602_cozbb1",
    "portraits",
    "Corporate event portrait — UK professional services photography by Flashbuzz"
  ),
  createPhoto(
    "P1023579_vcgcbu",
    "portraits",
    "Graduate scheme portrait at corporate event — UK professional services photography by Flashbuzz"
  ),
  createPhoto(
    "P1012780_loqrol",
    "events",
    "Group portrait of young professionals in modern boardroom — UK corporate event photography by Flashbuzz"
  ),

  // It's Behind You! film production behind-the-scenes
  createPhoto(
    "P1007897_fgwynu",
    "events",
    "Clapperboard on set during night shoot — film production behind-the-scenes photography by Flashbuzz"
  ),
  createPhoto(
    "P1007761_hqmzia",
    "events",
    "Camera operator and crew on location — film production behind-the-scenes photography by Flashbuzz"
  ),

  // Industrial / corporate facility shoot
  createPhoto(
    "P1002578_gottnv",
    "brand",
    "Boardroom overlooking manufacturing floor — UK industrial facility photography by Flashbuzz"
  ),
  createPhoto(
    "P1002649_lzzzua",
    "brand",
    "Internal warehouse corridor — UK industrial facility photography by Flashbuzz"
  ),

  // Studio and product photography
  createPhoto(
    "P1025491_hhy78b",
    "brand",
    "Music studio mix session with engineer and artist — UK recording studio photography by Flashbuzz"
  ),
  createPhoto(
    "P1012276-Enhanced-NR_ncv0gu",
    "brand",
    "Podcast studio interview setup — UK podcast and broadcast photography by Flashbuzz"
  ),
  createPhoto(
    "P1012292-Enhanced-NR_s4otgi",
    "brand",
    "Studio microphone product still — UK audio brand photography by Flashbuzz"
  ),

  // Lifestyle / family commission
  createPhoto(
    "P1009638_tvl0ti",
    "brand",
    "Family at garden centre with spaniel — UK lifestyle commercial photography by Flashbuzz"
  ),

  // Doorfit team portraits — UK door hardware specialist (April 2026 shoot)
  createPhoto(
    "Doorfit_17_uprzjy",
    "portraits",
    "Doorfit team portrait — UK door hardware specialist headshots by Flashbuzz"
  ),
  createPhoto(
    "Doorfit_37_qe2t0f",
    "portraits",
    "Doorfit leadership portrait — UK door hardware specialist headshots by Flashbuzz"
  ),
  createPhoto(
    "Doorfit_39_lgasav",
    "portraits",
    "Doorfit team member headshot — UK door hardware specialist by Flashbuzz"
  ),
  createPhoto(
    "Doorfit_45_wmbuea",
    "portraits",
    "Doorfit professional portrait — UK door hardware specialist headshots by Flashbuzz"
  ),
  createPhoto(
    "Doorfit_48_k6ls8g",
    "portraits",
    "Doorfit on-location headshot — UK door hardware specialist by Flashbuzz"
  ),
];

export function getPhotosByCategory(category: string): Photo[] {
  return photos.filter((photo) => photo.category === category);
}
