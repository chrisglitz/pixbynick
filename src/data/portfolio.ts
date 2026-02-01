export type Category =
  | "all"
  | "events"
  | "holidays"
  | "nature"
  | "sports"
  | "architecture"
  | "portraits"
  | "street";

export interface Photo {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: Exclude<Category, "all">;
  width: number;
  height: number;
}

export const categories: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "events", label: "Events" },
  { id: "holidays", label: "Holidays" },
  { id: "nature", label: "Nature" },
  { id: "sports", label: "Sports" },
  { id: "architecture", label: "Architecture" },
  { id: "portraits", label: "Portraits" },
  { id: "street", label: "Street" },
];

// Portfolio photos - add your photos here
// When adding photos, place the image file in /public/images/portfolio/
// and reference it as /images/portfolio/filename.jpg
export const photos: Photo[] = [
  // Example entries (replace with actual photos):
  // {
  //   id: "1",
  //   src: "/images/portfolio/sunset-beach.jpg",
  //   alt: "Beautiful sunset over the ocean",
  //   title: "Sunset Beach",
  //   category: "nature",
  //   width: 1600,
  //   height: 1200,
  // },
];

export function getPhotosByCategory(category: Category): Photo[] {
  if (category === "all") return photos;
  return photos.filter((photo) => photo.category === category);
}
