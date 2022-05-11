export const fetchOnServer = async <T>(num1: number, num2: number): Promise<T> => {
  const API_HOST = process.env.NEXT_API_HOST
  const rawRsponse = await fetch(`${API_HOST}${num1}/${num2}`, { method: 'GET' })
  const response = await rawRsponse.json()
  return response as T
}
