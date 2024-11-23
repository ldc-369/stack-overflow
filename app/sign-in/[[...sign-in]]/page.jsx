import AuthLayout from '@/components/AuthlLayout'
import { SignIn } from '@clerk/nextjs'

export default function Page () {
  return (
    <AuthLayout>
      <SignIn signUpUrl='/sign-up' path='/sign-in' />
    </AuthLayout>
  )
}
