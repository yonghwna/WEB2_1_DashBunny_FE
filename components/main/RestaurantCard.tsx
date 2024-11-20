import Image from "next/image"
import RatingStarIcon from "../icons/iconComponents/RatingStarIcon"
import CouponBadge from "./CouponBadge"
import Link from "next/link"
import WishButton from "../wishList/WishButton"
import { Store } from "@/shared/model/restaurant"
import { usePathname } from "next/navigation"
import SaveHeartNavFillIcon from "../icons/iconComponents/SaveHeartNavFillIcon"

export default function RestaurantCard({
  store_id,
  store_name,
  rating,
  review_count,
  default_delivery_tip,
  discount_price,
  store_image,
}: Store) {
  const pathName = usePathname()

  return (
    <Link href={`/restaurant/${store_id}`}>
      <div className="flex gap-4 py-2 relative">
        <Image
          width={100}
          height={100}
          src={store_image}
          alt={store_name}
          className="w-[100px] h-[100px] rounded-lg object-cover"
        />
        <div>
          <div className=" flex items-center justify-between">
            <h3 className="text-lg font-extrabold text-black-700">{store_name}</h3>{" "}
            {pathName == "/wishList" && (
              // <WishButton is_wish={true} user_id="imUser" store_id={store_id} />
              <button
                onClick={(e) => {
                  e.preventDefault() // preventDefault 추가
                  e.stopPropagation()
                }}
                className=" absolute left-80 p-2 rounded-full"
              >
                <SaveHeartNavFillIcon />
              </button>
            )}
          </div>
          <div className="flex items-center gap-1 mt-1">
            <RatingStarIcon />
            <span className="text-lg font-semibold text-black-700">{rating}</span>
            <span className="text-black-500 text-sm font-medium">({review_count})</span>
            <p className=" text-black-500 text-nowrap text-sm font-medium ">
              배달비 {default_delivery_tip.toLocaleString()}원
            </p>
          </div>
          <CouponBadge amount={discount_price} />
        </div>
      </div>
    </Link>
  )
}
//path가 wishList면 WishButton을 렌더링한다.