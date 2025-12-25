import Image from "next/image";
import { ImageIcon } from "lucide-react";

type TOrderItemProps = {
  product: string;
  address: string;
  price: string | number;
  status: "Shipped" | "Processing" | "Cancelled" | "Paid" | "Pending";
  image: string;
};

export function OrderItem({
  product,
  address,
  price,
  status,
  image,
}: TOrderItemProps) {
  const statusColors = {
    Shipped: "text-green-300 ",
    Processing: "text-yellow-400 ",
    Cancelled: "text-red-300",
    Paid: "text-green-600 ",
    Pending: "text-yellow-400",
  } as const;

  return (
    <div className="flex items-center justify-between  py-4 px-6 hover:bg-gray-50 transition-colors">
      <div className="flex items-center gap-3 flex-1">
        {/* <Image
          src={image}
          alt={product}
          width={48}
          height={48}
          className="rounded-lg object-cover bg-gray-100 md:block hidden"
        />
        <Image
          src={image}
          alt={product}
          width={36}
          height={36}
          className="rounded-lg object-cover bg-gray-100 md:hidden block"
        /> */}

        <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-xs">
          IMG
        </div>
        <div className="max-w-24 md:max-w-none">
          <h4 className="text-sm font-medium line-clamp-1 md:line-clamp-none text-gray-900 mb-1">
            {product}
          </h4>
          <p className="text-xs text-gray-600 truncate">{address}</p>
        </div>
      </div>

      <div className="flex items-center flex-col gap-1">
        <span className="text-sm font-semibold text-gray-900">{price}</span>
        <span
          className={`text-xs font-medium px-3 py-1  ${statusColors[status]}`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}
