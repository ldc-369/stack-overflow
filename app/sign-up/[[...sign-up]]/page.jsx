import AuthLayout from '@/components/AuthlLayout'
import { SignUp } from '@clerk/nextjs'

export default function Page () {
  return (
    <AuthLayout>
      <SignUp fallbackRedirectUrl='/' signInUrl='/sign-in' path='/sign-up' />
    </AuthLayout>
  )
}
