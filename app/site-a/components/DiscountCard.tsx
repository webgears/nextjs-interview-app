"use client";

import { ClipboardDocumentIcon, LinkIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type DiscountCardProps = {
  code: string;
  description: string;
  shopLink: string;
  expiration: string | null;
};

export default function DiscountCard({
  code,
  description,
  expiration,
  shopLink,
}: DiscountCardProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
  };

  const buildCheckoutLink = () =>
    `/checkout?url=${encodeURIComponent(shopLink)}`;

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-semibold">{code}</h3>
        <div className="space-x-2 flex flex-row">
          <Button onClick={handleCopy} className="flex items-center">
            <ClipboardDocumentIcon className="h-5 w-5 mr-1" /> Copy
          </Button>
          <Button asChild className="flex items-center">
            <Link href={buildCheckoutLink()} className="flex items-center">
              <LinkIcon className="h-5 w-5 mr-1" /> Go to shop
            </Link>
          </Button>
        </div>
      </div>
      <p className="text-gray-700">{description}</p>
      {expiration && (
        <p className="text-sm text-gray-500 mt-2">Expires: {expiration}</p>
      )}
    </div>
  );
}
