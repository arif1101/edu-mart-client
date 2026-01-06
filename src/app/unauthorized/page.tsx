import Link from "next/link"

export default function UnauthorizedPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-xl font-semibold">
        You are not authorized to access this page
      </h1>

      <Link
        href="/"
        className="rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-black/80"
      >
        Return Home
      </Link>
    </div>
  )
}
