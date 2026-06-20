"use client" // Client component because we'll use signOut

import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  // If session is still loading, show a loader
  if (status === "loading") {
    return <div className="p-8">Loading...</div>
  }

  // If not logged in, redirect to login
  if (!session) {
    router.push("/login")
    return null
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-muted/20 px-4 py-10">
      <div className="p-5 bg-white shadow-md rounded-md w-full max-w-md text-center sm:p-8">
        <h1 className="text-xl font-bold mb-4 break-words sm:text-2xl">
          Welcome, {session.user.name || session.user.email}!
        </h1>
        <p className="mb-6 text-gray-600">
          You are logged in with {session.user.email}.
        </p>

        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="px-6 py-2 rounded-md bg-black text-white hover:bg-gray-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  )
}
