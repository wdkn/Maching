import client from "lib/api/client"
import Cookies from "js-cookie"

import { SignUpFormData, SignInData } from "interfaces/index"

// TCAbv
export const signUp = (data: SignUpFormData) => {
  return client.post("auth", data)
}

// TCC
export const signIn = (data: SignInData) => {
  return client.post("auth/sign_in", data)
}

// TCAEg
export const signOut = () => {
  return client.delete("auth/sign_out", {
    headers: {
      "access-token": Cookies.get("_access_token") || "",
      "client": Cookies.get("_client") || "",
      "uid": Cookies.get("_uid") || ""
    }
  })
}

// FŘ[U[Ěîńđćž
export const getCurrentUser = () => {
  if (!Cookies.get("_access_token") || !Cookies.get("_client") || !Cookies.get("_uid")) return
  return client.get("auth/sessions", {
    headers: {
      "access-token": Cookies.get("_access_token") || "",
      "client": Cookies.get("_client") || "",
      "uid": Cookies.get("_uid") || ""
    }
  })
}