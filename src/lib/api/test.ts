import client from "lib/api/client"

// ����m�F�p
export const execTest = () => {
  return client.get("/test")
}