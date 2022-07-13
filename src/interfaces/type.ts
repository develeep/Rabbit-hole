// 주로 atom에서 사용

export type ModalTypes = null | 'Login' | 'Posting'

export type AuthTypes = {
  userName: string,
  token: string,
  expire: string,
  userId: string,
} | null
