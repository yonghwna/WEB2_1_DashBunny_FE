"use client"
import ColorButton from "../../../components/common/ColorButton"
interface PaymentButtonProps {
  text: string
}
export default function PaymentButton({ text }: PaymentButtonProps) {
  return (
    <div className="p-3 bg-white fixed bottom-0 max-w-[360px] w-full mx-auto flex justify-center items-center ">
      <ColorButton onClick={() => {}} size="large" text={text} />
    </div>
  )
}
