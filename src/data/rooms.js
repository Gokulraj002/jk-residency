import roomDeluxe from "@/assets/room-deluxe.jpeg";
import roomDeluxeTriple from "@/assets/room-twin.jpeg";
import roomExecutive from "@/assets/room-executive.jpeg";
import roomExecutiveTwin from "@/assets/room-family.jpeg";
import roomSeating from "@/assets/room-seating.jpeg";
import roomBathroom from "@/assets/room-bathroom.jpeg";
import roomAmenity from "@/assets/room-amenity.jpeg";

export const rooms = [
  {
    slug: "executive",
    name: "Executive",
    image: roomExecutive,
    images: [roomExecutive, roomSeating, roomBathroom, roomAmenity],
    shortDesc: "Spacious king-bed room with premium comforts.",
    fullDesc:
      "Our Executive room offers a spacious king-bed layout with premium furnishings, warm wood finishes, and thoughtful detailing throughout. Designed for business and leisure travelers alike, it pairs restful comfort with all the amenities you need to feel right at home.",
    capacity: "Up to 3 guests",
    bedType: "1 King Bed",
    size: "Approx. 280 sq.ft",
    price: "From ₹2,000 + GST per night",
    pricing: [
      { occupancy: "Single", rate: 2000 },
      { occupancy: "Double", rate: 2300 },
      { occupancy: "Triple", rate: 2600 },
    ],
    amenities: [
      "Air Conditioning",
      "Free High-Speed Wi-Fi",
      "Smart TV with Cable",
      "Work Desk",
      "Mini Fridge",
      "Tea / Coffee Maker",
      "Hair Dryer",
      "Daily Housekeeping",
    ],
    features: [
      "Premium king-size bed with plush linens",
      "Spacious wardrobe with full-length mirror",
      "Attached private bathroom with hot water",
      "24/7 room service",
    ],
  },
  {
    slug: "executive-twin",
    name: "Executive Twin",
    image: roomExecutiveTwin,
    images: [roomExecutiveTwin, roomSeating, roomBathroom, roomAmenity],
    shortDesc: "Two single beds — ideal for friends or colleagues.",
    fullDesc:
      "The Executive Twin features two comfortable single beds in an elegantly appointed room — perfect for friends, colleagues, or family members who prefer separate sleeping arrangements without compromising on shared space and comforts.",
    capacity: "Up to 3 guests",
    bedType: "2 Single Beds",
    size: "Approx. 280 sq.ft",
    price: "From ₹2,300 + GST per night",
    pricing: [
      { occupancy: "Double", rate: 2300 },
      { occupancy: "Triple", rate: 2600 },
    ],
    amenities: [
      "Air Conditioning",
      "Free High-Speed Wi-Fi",
      "Smart TV with Cable",
      "Work Desk",
      "Tea / Coffee Maker",
      "Hair Dryer",
      "Daily Housekeeping",
    ],
    features: [
      "Two single beds with premium linens",
      "Bright room with large windows",
      "Attached private bathroom with hot water",
      "24/7 room service",
    ],
  },
  {
    slug: "deluxe",
    name: "Deluxe",
    image: roomDeluxe,
    images: [roomDeluxe, roomSeating, roomBathroom, roomAmenity],
    shortDesc: "A warm king-bed retreat with cozy seating.",
    fullDesc:
      "Our Deluxe room is a warm, well-appointed king-bed space with a dedicated seating area — designed for a restful and value-rich stay. Perfect for couples and solo travelers seeking comfort and a touch of charm.",
    capacity: "Up to 3 guests",
    bedType: "1 King Bed",
    size: "Approx. 250 sq.ft",
    price: "From ₹2,200 + GST per night",
    pricing: [
      { occupancy: "Single", rate: 2200 },
      { occupancy: "Double", rate: 2500 },
      { occupancy: "Triple", rate: 2800 },
    ],
    amenities: [
      "Air Conditioning",
      "Free High-Speed Wi-Fi",
      "Smart TV with Cable",
      "Cozy Seating Area",
      "Tea / Coffee Maker",
      "Hair Dryer",
      "Daily Housekeeping",
    ],
    features: [
      "King-size bed with plush linens",
      "Comfortable seating with side table",
      "Attached private bathroom with hot water",
      "24/7 room service",
    ],
  },
  {
    slug: "deluxe-triple",
    name: "Deluxe Triple",
    image: roomDeluxeTriple,
    images: [roomDeluxeTriple, roomSeating, roomBathroom, roomAmenity],
    shortDesc: "Three beds for small families or groups.",
    fullDesc:
      "The Deluxe Triple offers generous space with three beds, designed for small families or groups travelling together. Enjoy all the comforts of our Deluxe category with the added flexibility of a third bed.",
    capacity: "Up to 3 guests",
    bedType: "3 Beds",
    size: "Approx. 320 sq.ft",
    price: "₹3,300 + GST per night",
    pricing: [
      { occupancy: "Triple", rate: 3300 },
    ],
    amenities: [
      "Air Conditioning",
      "Free High-Speed Wi-Fi",
      "Smart TV with Cable",
      "Mini Fridge",
      "Tea / Coffee Maker",
      "Hair Dryer",
      "Daily Housekeeping",
    ],
    features: [
      "Three beds with premium linens",
      "Spacious layout for groups or families",
      "Attached private bathroom with hot water",
      "24/7 room service",
    ],
  },
];
