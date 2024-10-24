import React from 'react'
import { Link } from 'react-router-dom'

interface AuthFormProps {
  title: string
  buttonText: string
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  children: React.ReactNode
  footer?: React.ReactNode
}

export default function AuthForm({ title, buttonText, onSubmit, children, footer }: AuthFormProps) {
  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      {children}
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {buttonText}
        </button>
      </div>
      {footer && <div className="mt-4 text-sm text-center">{footer}</div>}
    </form>
  )
}