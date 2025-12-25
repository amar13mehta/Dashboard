export type TStatCard = {
  label: string;
  value: string;
  trend: number[];
};

export type TEvent = {
  id: string;
  time: string;
  title: string;
  description: string;
  color: "blue" | "yellow" | "green";
};

export type TOrder = {
  id: string;
  product: string;
  address: string;
  price: string;
  status: "Shipped" | "Processing" | "Cancelled" | "Paid" | "Pending";
  image: string;
};

export type TInvoice = {
  id: string;
  number: string;
  company: string;
  amount: string;
  status: "Paid" | "Pending" | "Processing";
};

export type TUpdate = {
  id: string;
  icon: "cart" | "user" | "eye" | "bell" | "mail";
  text: string;
  meta: string;
};

export type TSale = {
  id: string;
  product: string;
  productId: string;
  customer: string;
  email: string;
  delivery: string;
  address: string;
  shipping: string;
  total: string;
  status: "Shipped" | "Processing";
  image: string;
};

export type TStatCardProps = {
  label: string;
  value: string | number;
  trend: number[];
  trendColor?: "blue" | "red";
};

export const ChartsData = [
  { month: "Jan", green: 32000, blue: 28000 },
  { month: "Feb", green: 30000, blue: 26000 },
  { month: "Mar", green: 25000, blue: 24000 },
  { month: "Apr", green: 42000, blue: 38000 },
  { month: "Jun", green: 48200, blue: 31000 },
  { month: "Jul", green: 35000, blue: 27000 },
  { month: "Aug", green: 28000, blue: 32000 },
  { month: "Sep", green: 24000, blue: 34000 },
  { month: "Oct", green: 30000, blue: 29000 },
  { month: "Nov", green: 39000, blue: 33000 },
  { month: "Dec", green: 36000, blue: 37000 },
];

export const invoiceData = [
  { month: "Jan", value: 100 },
  { month: "Feb", value: 90 },
  { month: "Mar", value: 70 },
  { month: "Apr", value: 60 },
  { month: "Jun", value: 50 },
  { month: "Jul", value: 65 },
];

export type TActivityType = "sale" | "lead" | "upload" | "email";

export type TActivityItem = {
  id: string;
  title: string;
  meta: string; // time or amount
  type: TActivityType;
};
