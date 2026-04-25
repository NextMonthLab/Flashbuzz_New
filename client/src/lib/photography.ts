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
  createPhoto(
    "Alastair_a8sq8b",
    "portraits",
    "Alastair — black and white documentary portrait by Flashbuzz"
  ),

  // Couples & Lifestyle - Maddie and Ollie series
  createPhoto(
    "Maddie_and_Ollie_mp4_00_01_50_29_Still003_2c91a2343d_ytruiu",
    "couples",
    "Maddie and Ollie portrait — couple lifestyle photography by Flashbuzz"
  ),
  createPhoto(
    "Maddie_and_Ollie_mp4_00_05_28_39_Still013_4044e692b9_unfimp",
    "couples",
    "Maddie and Ollie candid moment — documentary lifestyle"
  ),
  createPhoto(
    "Maddie_and_Ollie_mp4_00_12_44_28_Still031_7ab448516e_mzt61d",
    "couples",
    "Maddie and Ollie outdoor session — natural light portraiture"
  ),
  createPhoto(
    "Maddie_and_Ollie_mp4_00_14_32_46_Still038_e025bad02b_ztzjwv",
    "couples",
    "Maddie and Ollie countryside walk — lifestyle documentary"
  ),

  // Events & Documentary - P1002 series (UK live event coverage)
  createPhoto(
    "P1002578_gottnv",
    "events",
    "Live event documentary photography — UK event coverage by Flashbuzz"
  ),
  createPhoto(
    "P1002595_szeysh",
    "events",
    "Audience moment at a UK live event — documentary photography by Flashbuzz"
  ),
  createPhoto(
    "P1002596_smef0v",
    "events",
    "Crowd reaction during a UK live event — documentary photography by Flashbuzz"
  ),
  createPhoto(
    "P1002613_cxc4xr",
    "events",
    "Speaker on stage at a UK live event — documentary photography by Flashbuzz"
  ),
  createPhoto(
    "P1002614_biw739",
    "events",
    "Live event atmosphere captured at a UK gathering — documentary photography by Flashbuzz"
  ),
  createPhoto(
    "P1002618_avelct",
    "events",
    "Attendees engaging at a UK live event — documentary photography by Flashbuzz"
  ),
  createPhoto(
    "P1002636_giqny2",
    "events",
    "Behind-the-scenes detail from a UK live event — documentary photography by Flashbuzz"
  ),
  createPhoto(
    "P1002642_vq3tlk",
    "events",
    "Conversation captured at a UK live event — documentary photography by Flashbuzz"
  ),
  createPhoto(
    "P1002643_ckmhvo",
    "events",
    "Live event candid moment — UK documentary photography by Flashbuzz"
  ),
  createPhoto(
    "P1002649_lzzzua",
    "events",
    "Wide view of a UK live event venue — documentary photography by Flashbuzz"
  ),
  createPhoto(
    "P1002657_vq3olj",
    "events",
    "Performer on stage at a UK live event — documentary photography by Flashbuzz"
  ),
  createPhoto(
    "P1002658_qstc2l",
    "events",
    "Detail shot from a UK live event — documentary photography by Flashbuzz"
  ),
  createPhoto(
    "P1002662_xtbg57",
    "events",
    "UK live event interaction — documentary photography by Flashbuzz"
  ),
  createPhoto(
    "P1002668_evy2fa",
    "events",
    "UK live event atmosphere — documentary photography by Flashbuzz"
  ),
  createPhoto(
    "P1002676_k66kwl",
    "events",
    "Audience member at a UK live event — documentary photography by Flashbuzz"
  ),
  createPhoto(
    "P1002680_v5g4hz",
    "events",
    "Live event detail at a UK gathering — documentary photography by Flashbuzz"
  ),
  createPhoto(
    "P1002687_q3c2yz",
    "events",
    "Reaction shot at a UK live event — documentary photography by Flashbuzz"
  ),
  createPhoto(
    "P1002698_pefbxv",
    "events",
    "Closing moment of a UK live event — documentary photography by Flashbuzz"
  ),

  // Documentary - P1007 series
  createPhoto(
    "P1007354_h6clrs",
    "documentary",
    "Black and white documentary photograph from a UK community event by Flashbuzz"
  ),
  createPhoto(
    "P1007366_u0v7hk",
    "documentary",
    "Candid documentary moment from a UK community event by Flashbuzz"
  ),
  createPhoto(
    "P1007555_mmca6i",
    "documentary",
    "Documentary portrait from a UK community event by Flashbuzz"
  ),
  createPhoto(
    "P1007581_tycpth",
    "documentary",
    "Reportage detail from a UK community event by Flashbuzz"
  ),
  createPhoto(
    "P1007588_gkced6",
    "documentary",
    "Documentary photograph capturing a UK community moment by Flashbuzz"
  ),
  createPhoto(
    "P1007596_cmuliz",
    "documentary",
    "Observed moment from a UK community event — documentary photography by Flashbuzz"
  ),
  createPhoto(
    "P1007612_oae16w",
    "documentary",
    "Documentary photograph of a UK community gathering by Flashbuzz"
  ),
  createPhoto(
    "P1007626_vjrxx2",
    "documentary",
    "Detail shot from a UK community event — documentary photography by Flashbuzz"
  ),
  createPhoto(
    "P1007761_hqmzia",
    "documentary",
    "Documentary photograph from a UK community gathering by Flashbuzz"
  ),
  createPhoto(
    "P1007801_qdxced",
    "documentary",
    "Quiet moment captured at a UK community event — documentary photography by Flashbuzz"
  ),
  createPhoto(
    "P1007809_dhpdcq",
    "documentary",
    "Documentary photograph from a UK community gathering by Flashbuzz"
  ),
  createPhoto(
    "P1007816_jfmo4n",
    "documentary",
    "Reportage moment from a UK community event by Flashbuzz"
  ),
  createPhoto(
    "P1007820_w37fd5",
    "documentary",
    "Closing documentary photograph from a UK community event by Flashbuzz"
  ),
];

export function getPhotosByCategory(category: string): Photo[] {
  if (category === "all") return photos;
  return photos.filter((photo) => photo.category === category);
}
