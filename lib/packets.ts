export type Packet = {
  id: number;
  title?: string;
  type: "classic" | "popular" | "infinity";
  price: number;
  description: string;
};

export const PACKETS: Packet[] = [
  {
    id: 0,
    title: "1 Month",
    type: "classic",
    price: 1.29,
    description: "A one-month subscription for 1.29 $.",
  },
  {
    id: 1,
    title: "1 Year",
    type: "popular",
    price: 9.99,
    description: "A one-month subscription for only 9.99 $ at a great price.",
  },
  {
    id: 2,
    type: "infinity",
    price: 39.99,
    description: "A infinity subscription for only 39.99 $ at a great price.",
  },
];
