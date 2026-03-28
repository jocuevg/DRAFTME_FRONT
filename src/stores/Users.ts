import type { User } from '@/models/User'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('User', () => {
  const stored = sessionStorage.getItem('user')
  const currentUser = ref<User | null>(stored ? JSON.parse(stored) : null)

  watch(
    currentUser,
    (newValue) => {
      if (newValue) {
        sessionStorage.setItem('user', JSON.stringify(newValue))
      } else {
        sessionStorage.removeItem('user')
      }
    },
    { deep: true }
  )

  function login(user: User) {
    currentUser.value = user
  }

  function logout() {
    currentUser.value = null
  }

  return { currentUser, login, logout }
})
