import MapMark from "components/common/map/MapMark";
import { NicknameComponent } from "components/signin/NicknameComponent";
import SignInComponent from "components/signin/SignInComponent";
import React, { useState } from "react";
import Footer from "shared/Layout/Footer";
import Header from "components/signin/Header";

export default function SignIn() {
  
  return (
    <>
    <Header/>
      <SignInComponent />
    </>
  );
}
