import client from "lib/api/client"

// “®ìŠm”F—p
export const execTest = () => {
  return client.get("/test")
}