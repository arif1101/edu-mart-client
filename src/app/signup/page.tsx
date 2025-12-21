import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import SignupForm from "@/components/page/signup/SignupForm"
import RegisterForm from "@/components/page/signup/SignupForm"


export default function Page() {
  return (
    <div className="flex min-h-screen">

      {/* -------- Left: Signup Form -------- */}
      <div className="w-full md:w-6/12 flex items-center justify-center px-6">
        <Card className="w-full max-w-md shadow-lg rounded-2xl border">

          <CardContent className="pt-8">
            <SignupForm/>
          </CardContent>

          <CardFooter className="flex flex-col gap-3 pb-8">
            <Button
              variant="outline"
              className="w-full rounded-xl shadow-sm hover:bg-sky-50 border-sky-200 text-sky-600"
            >
              Sign up with Google
            </Button>

            <p className="text-sm text-center text-gray-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-sky-600 font-medium hover:underline"
              >
                Login
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>

      {/* -------- Right: Image -------- */}
      <div className="w-6/12 hidden md:block">
        <Image
          src="/loginImage.jpg"
          alt="Login illustration"
          className="h-screen w-full object-cover"
          width={800}
          height={600}
          priority
        />
      </div>
    </div>
  )
}
