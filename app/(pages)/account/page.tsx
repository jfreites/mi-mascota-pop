import AccountForm from '@/components/account-form'
import { getUserOrRedirect } from '@/utils/auth'

export default async function Account() {
  const user = await getUserOrRedirect()

  return <AccountForm user={user} />
}