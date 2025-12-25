import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowLeft,
  ArrowUp,
  CalendarDaysIcon,
  CheckCircle,
  DollarSign,
  FileText,
  MapPin,
  Package,
  Truck,
  User,
} from "lucide-react";
import IncomeChart, { OrdersChart } from "./charts";
import { TInvoice, TOrder, TSale, TStatCard } from "../types/helperFunctions";

import { OrderItem } from "./order";
import { StatCard } from "./statCard";
import { motion } from "framer-motion";
import { useNavigationStore } from "../store/useNavigationStore";

const stats: TStatCard[] = [
  {
    label: "Income per lead",
    value: "$1,870",
    trend: [20, 30, 25, 40, 35, 50, 45, 40, 30, 35],
  },
  {
    label: "New leads",
    value: "2,890",
    trend: [25, 35, 30, 45, 40, 55, 50, 45, 40, 35],
  },
  {
    label: "Conversion rate",
    value: "15.10%",
    trend: [30, 40, 35, 50, 45, 60, 55, 50, 45, 40],
  },
];

const orders: TOrder[] = [
  {
    id: "1",
    product: "Macbook Pro 2013, 16 GB, 256 GB SSD",
    address: "4574 Bashirian Creek Suite 631",
    price: "$118.00",
    status: "Shipped",
    image: "/img.png",
  },
  {
    id: "2",
    product: "Dell XPS, 16 GB, 512 GB SSD, 1050 Ti",
    address: "8874 Candelario Valleys",
    price: "$208.00",
    status: "Processing",
    image: "/img(1).png",
  },
  {
    id: "3",
    product: "Macbook Air 2013, 4GB, 128 GB SSD",
    address: "5124 Flosise Station",
    price: "$118.00",
    status: "Processing",
    image: "/img(2).png",
  },
  {
    id: "4",
    product: "Macbook, 4GB, 128 GB SSD",
    address: "1910 Erdman Station Apt. 696",
    price: "$578.00",
    status: "Shipped",
    image: "/img(3).png",
  },
];

const invoices: TInvoice[] = [
  {
    id: "1",
    number: "#AA-04-19-1890678",
    company: "New Madleton LLC.",
    amount: "$118.00",
    status: "Paid",
  },
  {
    id: "2",
    number: "#AA-04-19-1897890",
    company: "Crystalton INC.",
    amount: "$118.00",
    status: "Pending",
  },
  {
    id: "3",
    number: "#AA-04-19-1890243",
    company: "Tyriguemouth LLC.",
    amount: "$578.00",
    status: "Paid",
  },
  {
    id: "4",
    number: "Invoice #AA-04-19-1893481",
    company: "Lethamouth LLC.",
    amount: "$378.00",
    status: "Paid",
  },
];

const metrics = [
  {
    label: "Sales",
    sublabel: "Week comparison",
    value: "1,345",
    color: "bg-green-500",
  },
  {
    label: "Leads",
    sublabel: "Month comparison",
    value: "3,820",
    color: "bg-[#5E81F4]",
  },
  {
    label: "Income",
    sublabel: "Week comparison",
    value: "$690.00",
    color: "bg-red-500",
  },
];

const sales: TSale[] = [
  {
    id: "1",
    product: "Macbook Pro",
    productId: "ID 10-3290-08",
    customer: "Rodney Cannon",
    email: "rodney.cannon@gmail.com",
    delivery: "United Kingdom",
    address: "193 Cole Plains Suite 649, 89120",
    shipping: "$18.00",
    total: "$118.00",
    status: "Shipped",
    image: "/img.png",
  },
  {
    id: "2",
    product: "Dell Laptop",
    productId: "ID 10-3456-18",
    customer: "Mike Franklin",
    email: "mike.franklin@gmail.com",
    delivery: "United States",
    address: "619 Jeffrey Freeway Apt. 273",
    shipping: "$28.00",
    total: "$208.00",
    status: "Processing",
    image: "/img.png",
  },
];

export function DashboardView1() {
  const navigateToOrders = useNavigationStore(
    (state) => state.navigateToOrders
  );

  return (
    <motion.div
      key="view1"
      className="space-y-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Orders Section */}
        <div className="col-span-1 bg-white rounded-xl ">
          <div className="p-4 ">
            <div className="flex items-center justify-between ">
              <h2 className="text-base md:text-lg font-semibold text-gray-900">
                Orders
              </h2>
              <div className="flex gap-2">
                <button className="md:flex hidden items-center px-3 justify-center h-9 text-sm text-gray-600 hover:text-gray-900">
                  Day
                </button>
                <button className="md:flex hidden items-center px-3 justify-center h-9 text-sm text-gray-600 hover:text-gray-900">
                  Week
                </button>
                <button className="md:flex hidden items-center px-3 justify-center h-9 text-sm font-medium  rounded-lg border border-gray-100">
                  Month
                </button>
                <button className="flex items-center w-10 justify-center h-9 text-sm font-medium  rounded-lg bg-[#F5F5FA] text-[#8181A5]">
                  <CalendarDaysIcon className="size-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="px-6 py-3.5 flex items-center justify-between bg-[#F5F5FA]">
            <span className="text-xs text-[#8181A5]">Product</span>
            <span className="text-xs text-[#8181A5]">Details</span>
          </div>

          {orders.map((order) => (
            <OrderItem key={order.id} {...order} />
          ))}

          <div className="p-4 flex gap-4 items-center">
            <button
              onClick={navigateToOrders}
              className="w-max px-4 md:px-8 py-2 bg-[#5e81f4] text-white rounded-lg text-sm  md:font-medium hover:bg-[#2348c2] transition-colors"
            >
              All Orders
            </button>
            <p className="text-center text-sm text-gray-600 ">
              2,480 Total Orders
            </p>
          </div>
        </div>

        {/* Invoices */}
        <div className="bg-white col-span-1 rounded-xl ">
          <div className="p-4 ">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Invoices</h2>
              <div className="flex gap-2">
                <button className="md:flex hidden px-3 items-center justify-center h-9 text-sm text-gray-600 hover:text-gray-900">
                  Day
                </button>
                <button className="md:flex hidden px-3 items-center justify-center h-9 text-sm text-gray-600 hover:text-gray-900">
                  Week
                </button>
                <button className="md:flex hidden px-3 items-center justify-center h-9 text-sm font-medium  rounded-lg border border-gray-100">
                  Month
                </button>
                <button className="flex items-center w-10 justify-center h-9 text-sm font-medium  rounded-lg bg-[#F5F5FA] text-[#8181A5]">
                  <CalendarDaysIcon className="size-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="px-6 py-3.5 flex items-center justify-between bg-[#F5F5FA]">
            <span className="text-xs text-[#8181A5]">Number</span>
            <span className="text-xs text-[#8181A5]">Details</span>
          </div>

          {invoices.map((invoice) => (
            <div
              key={invoice.id}
              className="flex items-center justify-between py-4 px-6 hover:bg-gray-50 min-h-20"
            >
              <div className="flex items-center gap-3">
                <FileText className="md:size-10 size-9 text-[#5E81F4]" />
                <div className="max-w-24 md:max-w-none ">
                  <h4 className=" text-xs md:text-sm font-medium text-gray-900">
                    {invoice.number}
                  </h4>
                  <p className="text-xs text-gray-600 line-clamp-1">
                    {invoice.company}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-sm font-semibold text-gray-900">
                  {invoice.amount}
                </span>
                <span
                  className={`text-xs font-medium py-1 rounded-full ${
                    invoice.status === "Paid"
                      ? "text-green-300 "
                      : "text-yellow-400 "
                  }`}
                >
                  {invoice.status}
                </span>
              </div>
            </div>
          ))}

          <div className="p-4 flex gap-4 items-center">
            <button className="w-max shrink-0 px-4 md:px-8 py-2 bg-[#5e81f4] text-white rounded-lg text-sm  md:font-medium hover:bg-[#2348c2] transition-colors">
              All Invoices
            </button>
            <p className="text-center text-sm text-gray-600 ">
              1,520 Total Invoices
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function DashboardView2() {
  const navigateToOverview = useNavigationStore(
    (state) => state.navigateToOverview
  );

  return (
    <motion.div
      key="view2"
      className="space-y-6"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <button
        onClick={navigateToOverview}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {metrics.map((metric, i) => (
          <div
            key={i}
            className="bg-white flex flex-col rounded-xl p-4 border border-gray-200"
          >
            <div className="flex justify-between">
              <div className="flex flex-col">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  {metric.label}
                </h3>
                <p className="text-xs text-gray-600">{metric.sublabel}</p>
              </div>

              <div className="flex items-center gap-1">
                <span className="text-xl font-bold text-gray-900">
                  {metric.value}
                </span>
                <ArrowUp className="w-5 h-5 text-green-500" />
              </div>
            </div>

            <div className="mt-4 h-1 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${metric.color} rounded-full`}
                style={{ width: "70%" }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 bg-white rounded-xl 0 p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Orders</h2>
            <div className="flex gap-2">
              <button className="px-3 py-1 cursor-pointer text-sm text-gray-600 hover:text-gray-900">
                Day
              </button>
              <button className="px-3 py-1 cursor-pointer text-sm text-gray-600 hover:text-gray-900">
                Week
              </button>
              <button className="px-3 py-1 cursor-pointer text-sm font-medium border border-gray-200 rounded-lg">
                Month
              </button>
            </div>
          </div>
          <OrdersChart />
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Planned Income
          </h2>
          <IncomeChart />
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">
              Latest sales
            </h2>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900">
                Day
              </button>
              <button className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900">
                Week
              </button>
              <button className="px-3 py-1 text-sm font-medium  rounded-lg ">
                Month
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="lg:flex flex-col hidden w-full">
            <table className="w-full ">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600">
                    Product
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600">
                    Delivery
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600">
                    Shipping
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600">
                    Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 flex justify-end">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {sales.map((sale) => (
                  <tr key={sale.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-xs">
                          IMG
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {sale.product}
                          </p>
                          <p className="text-xs text-gray-600">
                            {sale.productId}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm text-gray-900 lg:font-medium">
                          {sale.customer}
                        </p>
                        <p className="text-xs text-gray-600">{sale.email}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm text-gray-900 lg:font-medium">
                          {sale.delivery}
                        </p>
                        <p className="text-xs text-gray-600">{sale.address}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm lg:font-medium text-gray-900">
                      {sale.shipping}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      {sale.total}
                    </td>
                    <td className="px-6 py-4 flex  justify-end  items-ends">
                      <span
                        className={`text-xs font-medium  px-6 py-1 rounded-md ${
                          sale.status === "Shipped"
                            ? "text-green-600 bg-green-50"
                            : "text-yellow-600 bg-yellow-50"
                        }`}
                      >
                        {sale.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col lg:hidden w-full">
            <Accordion type="multiple" className=" w-full">
              {sales.map((sale) => (
                <AccordionItem
                  key={sale.id}
                  value={`item-${sale.id}`}
                  className="border-0"
                >
                  <AccordionTrigger className="hover:bg-gray-50 px-4 py-4 hover:no-underline items-center">
                    <div className="flex items-center gap-3 flex-1 min-w-0 text-left">
                      <div className="w-10 h-10 bg-linear-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center shrink-0">
                        <Package className="w-5 h-5 text-[#5E81F4]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {sale.product}
                        </p>
                        <p className="text-xs text-gray-500">{sale.customer}</p>
                      </div>
                      <span className="text-sm font-semibold text-gray-900 ml-2">
                        {sale.total}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pt-0">
                    <div className="space-y-3 bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                        <Package className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-gray-500 mb-1">
                            Product ID
                          </p>
                          <p className="text-sm text-gray-900">
                            {sale.productId}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                        <User className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-gray-500 mb-1">Customer</p>
                          <p className="text-sm text-gray-900">
                            {sale.customer}
                          </p>
                          <p className="text-xs text-gray-500 break-all">
                            {sale.email}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 bg-white rounded-lg">
                        <MapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-gray-500 mb-1">Delivery</p>
                          <p className="text-sm text-gray-900">
                            {sale.delivery}
                          </p>
                          <p className="text-xs text-gray-500">
                            {sale.address}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-start gap-2 p-3 bg-white rounded-lg">
                          <Truck className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                          <div>
                            <p className="text-xs text-gray-500 mb-1">
                              Shipping
                            </p>
                            <p className="text-sm text-gray-900">
                              {sale.shipping}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2 p-3 bg-white rounded-lg">
                          <DollarSign className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Total</p>
                            <p className="text-sm font-semibold text-gray-900">
                              {sale.total}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-3 bg-white rounded-lg">
                        <p className="text-xs text-gray-500 mb-2">Status</p>
                        <span
                          className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full ${
                            sale.status === "Shipped"
                              ? "text-green-700 bg-green-50"
                              : "text-yellow-700 bg-yellow-50"
                          }`}
                        >
                          {sale.status === "Shipped" ? (
                            <CheckCircle className="w-3.5 h-3.5" />
                          ) : (
                            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                          )}
                          {sale.status}
                        </span>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
