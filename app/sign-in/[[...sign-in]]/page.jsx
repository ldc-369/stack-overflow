import AuthLayout from '@/components/AuthlLayout'
import { SignIn } from '@clerk/nextjs'

export default function Page () {
  return (
    <AuthLayout>
      <SignIn
      // signUpUrl='/sign-up'
      // signUpFallbackRedirectUrl='/sign-in'
      // path='/sign-in'
      />
    </AuthLayout>
  )
}
