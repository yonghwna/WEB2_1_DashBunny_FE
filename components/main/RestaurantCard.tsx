"use client"
import Image from "next/image"
import RatingStarIcon from "../icons/iconComponents/RatingStarIcon"
import CouponBadge from "./CouponBadge"
import Link from "next/link"
import { usePathname } from "next/navigation"
import SaveHeartNavFillIcon from "../icons/iconComponents/SaveHeartNavFillIcon"
import { UsersStoreListResponseDto } from "@/types/Store"
import { useUpdateWish } from "@/app/wishList/hooks/useUpdateWish"

export default function RestaurantCard({
  storeId,
  storeName,
  rating,
  reviewCount,
  deliveryTip,
  discountPrice,
  storeLogo,
  maxDeliveryTime,
  minDeliveryTime,
  status,
}: UsersStoreListResponseDto) {
  const pathName = usePathname()
  const { updateWishMutation } = useUpdateWish()
  return (
    <Link href={`/restaurant/${storeId}`}>
      <div className="flex gap-4 py-2 relative">
        <Image
          width={84}
          height={84}
          src={"https://placehold.co/100x100"}
          alt={storeName}
          className="w-[84px] h-[84px] rounded-lg object-cover"
        />
        <div>
          <div className=" flex items-center justify-between">
            <h3 className="text-lg font-extrabold text-black-700">{storeName}</h3>
          </div>
          <div className="flex items-center gap-1 ">
            <RatingStarIcon />
            <span className="text-lg font-semibold text-black-700">{rating}</span>
            <span className="text-black-500 text-sm font-medium">({reviewCount})</span>
            <p className=" text-black-500 text-nowrap text-sm font-medium ">
              배달비 {deliveryTip.toLocaleString()}원
            </p>
          </div>
        </div>
        {pathName == "/wishList" && (
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              updateWishMutation.mutate({ storeId })
            }}
            className="absolute left-[340px] top-9"
          >
            <SaveHeartNavFillIcon />
          </button>
        )}
      </div>
    </Link>
  )
}
//path가 wishList면 WishButton을 렌더링한다.
