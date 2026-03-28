import { verifyPassword } from '@/helpers/hasher'
import type { User } from '@/models/User'
import instance from '@/services/api'
import { useUserStore } from '@/stores/Users'

export const useUser = () => {
  const UserStore = useUserStore()

  async function exists(username: string): Promise<boolean> {
    let exist: boolean = false
    await instance
      .get<User>(`User/${username}`)
      .then((response) => {
        exist=true
      })
      .catch((error) => {
        exist = false
      })
    return exist
  }

  async function login(username: string, password: string): Promise<string | undefined> {
    let errors: string | undefined
    await instance
      .get<User>(`User/${username}`)
      .then(async (response) => {
        if (response.data.username != username ||  !await verifyPassword(password, response.data.passwordHash) ) {
          errors = 'Credenciales incorrectas'
          return errors
        }
        UserStore.login(response.data)
        return undefined
      })
      .catch((error) => {
          errors = 'Credenciales incorrectas'
      })
    return errors
  }

  async function singin(user: User): Promise<string | undefined> {
    let errors: string | undefined = undefined
    await instance
      .post<User>('User', user)
      .then((response) => {
        UserStore.login(response.data)
        return undefined
      })
      .catch((error) => {
        errors = error.response.data.description
      })
    return errors
  }

  return { login, singin, exists }
}
