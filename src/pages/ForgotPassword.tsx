import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import AuthForm from '../components/AuthForm'

export default function ForgotPassword() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle forgot password logic here
  }

  return (
    <Layout>
      <AuthForm
        title="Reset your password"
        buttonText="Send reset link"
        onSubmit={handleSubmit}
        footer={
          <>
            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Back to sign in
            </Link>
          </>
        }
      >
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      </AuthForm>
    </Layout>
  )
}