/**
 * v0 by Vercel.
//  * @see https://v0.dev/t/De2LYkQsWYh
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-start">
      <div className="flex flex-col items-center space-y-2">
        <img
          alt="Photo"
          className="aspect-[4/3] rounded-lg overflow-hidden object-cover border border-gray-200 w-full animate-pulse"
          height={150}
          src="/placeholder.svg"
          width={200}
        />
        <div className="flex flex-col space-y-1">
          <h3 className="text-sm font-semibold leading-none">Perfect Alignment</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Smooth and precise</p>
        </div>
        <Button className="w-full mt-auto justify-center animate-bounce">
          <span>Buy Now</span>
        </Button>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <img
          alt="Photo"
          className="aspect-[4/3] rounded-lg overflow-hidden object-cover border border-gray-200 w-full animate-pulse"
          height={150}
          src="/placeholder.svg"
          width={200}
        />
        <div className="flex flex-col space-y-1">
          <h3 className="text-sm font-semibold leading-none">Crystal Clear</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">See the details</p>
        </div>
        <Button className="w-full mt-auto justify-center animate-bounce">
          <span>Buy Now</span>
        </Button>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <img
          alt="Photo"
          className="aspect-[4/3] rounded-lg overflow-hidden object-cover border border-gray-200 w-full animate-pulse"
          height={150}
          src="/placeholder.svg"
          width={200}
        />
        <div className="flex flex-col space-y-1">
          <h3 className="text-sm font-semibold leading-none">Sunset Vibes</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Feel the warmth</p>
        </div>
        <Button className="w-full mt-auto justify-center animate-bounce">
          <span>Buy Now</span>
        </Button>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <img
          alt="Photo"
          className="aspect-[4/3] rounded-lg overflow-hidden object-cover border border-gray-200 w-full animate-pulse"
          height={150}
          src="/placeholder.svg"
          width={200}
        />
        <div className="flex flex-col space-y-1">
          <h3 className="text-sm font-semibold leading-none">Urban Adventure</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Explore the city</p>
        </div>
        <Button className="w-full mt-auto justify-center animate-bounce">
          <span>Buy Now</span>
        </Button>
      </div>
    </div>
  )
}

