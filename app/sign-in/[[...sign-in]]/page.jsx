import AuthLayout from '@/components/AuthlLayout'
import { SignIn } from '@clerk/nextjs'

export default function Page () {
  return (
    <AuthLayout>
      <SignIn
        signUpUrl='/sign-up'
        signUpFallbackRedirectUrl='/'
        path='/sign-in'
      />
    </AuthLayout>
  )
}
