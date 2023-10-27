import React from 'react'
import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
  return (
    <div>
      <SignUp afterSignInUrl="/new-user" redirectUrl="/new-user" />
    </div>
  )
}

export default SignUpPage
