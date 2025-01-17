import { StoreStatus, UsersStoreDetailResponseDto } from "@/types/Store"

export const mockStoreDetailResponse: UsersStoreDetailResponseDto = {
  storeId: "store_123456",
  storeName: "맛있는 치킨",
  rating: 4.5,
  reviewCount: 128,
  defaultDeliveryTip: 3000,
  minDeliveryTime: "30",
  maxDeliveryTime: "45",
  storeImage: "https://example.com/store/images/chicken.jpg",
  minimumOrderPrice: 15000,
  ownerCouponId: 1234,
  storeStatus: StoreStatus.OPEN,
  wishStatus: true,
  usersMenuGroup: [
    {
      groupId: 1,
      groupName: "인기 메뉴",
      menus: [
        {
          menuId: 101,
          menuName: "후라이드 치킨",
          price: 18000,
          menuContent: "바삭바삭한 후라이드 치킨",
          menuImage: "https://example.com/menu/fried-chicken.jpg",
          menuOption: 1,
          isSoldOut: false,
        },
        {
          menuId: 102,
          menuName: "양념 치킨",
          price: 19000,
          menuContent: "매콤달콤한 양념 치킨",
          menuImage: "https://example.com/menu/seasoned-chicken.jpg",
          menuOption: 1,
          isSoldOut: false,
        },
      ],
    },
    {
      groupId: 2,
      groupName: "사이드 메뉴",
      menus: [
        {
          menuId: 201,
          menuName: "감자튀김",
          price: 5000,
          menuContent: "바삭한 감자튀김",
          menuImage: "https://example.com/menu/french-fries.jpg",
          menuOption: 0,
          isSoldOut: false,
        },
        {
          menuId: 202,
          menuName: "콜라",
          price: 2000,
          menuContent: "시원한 콜라 500ml",
          menuImage: "https://example.com/menu/cola.jpg",
          menuOption: 0,
          isSoldOut: false,
        },
      ],
    },
  ],
  usersMenus: [
    {
      menuId: 101,
      menuName: "후라이드 치킨",
      price: 18000,
      menuContent: "바삭바삭한 후라이드 치킨",
      menuImage: "https://example.com/menu/fried-chicken.jpg",
      menuOption: 1,
      isSoldOut: false,
    },
    {
      menuId: 102,
      menuName: "양념 치킨",
      price: 19000,
      menuContent: "매콤달콤한 양념 치킨",
      menuImage: "https://example.com/menu/seasoned-chicken.jpg",
      menuOption: 1,
      isSoldOut: false,
    },
    {
      menuId: 201,
      menuName: "감자튀김",
      price: 5000,
      menuContent: "바삭한 감자튀김",
      menuImage: "https://example.com/menu/french-fries.jpg",
      menuOption: 0,
      isSoldOut: false,
    },
    {
      menuId: 202,
      menuName: "콜라",
      price: 2000,
      menuContent: "시원한 콜라 500ml",
      menuImage: "https://example.com/menu/cola.jpg",
      menuOption: 0,
      isSoldOut: false,
    },
  ],
}
