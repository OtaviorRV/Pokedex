import { CircularLoading } from '@/components/icons/CircularLoading'

const FallbackAnimation = () => {
  return (
    <div className=" h-screen w-screen ">
      <div className="flex h-full w-full flex-col items-center justify-center text-center align-middle">
        <CircularLoading className="inline h-16 w-16 animate-spin fill-Identity-Primary text-gray-200 dark:text-gray-600" />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default FallbackAnimation
