import React from "react"
import PhoneSignUpForm from "./src/components/PhoneSignUpForm"
import Header from "@/components/common/Header"

export default function PhoneSignInPage() {
  return (
    <>
      <Header previousRoute="/auth/sign-up" type="exit" />
      <PhoneSignUpForm />
      {/* 서버로 post요청 보내고 상세정보 페이지로 이동  */}
    </>
  )
}
