import { cn } from "@/lib/utils"

function LoadingSkeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

function PageLoadingSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation skeleton */}
      <div className="h-16 bg-card border-b border-border">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <LoadingSkeleton className="h-8 w-32" />
          <div className="hidden md:flex space-x-6">
            <LoadingSkeleton className="h-4 w-20" />
            <LoadingSkeleton className="h-4 w-20" />
            <LoadingSkeleton className="h-4 w-16" />
            <LoadingSkeleton className="h-4 w-16" />
          </div>
          <LoadingSkeleton className="h-10 w-24" />
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="relative min-h-[80vh] bg-gradient-primary">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <LoadingSkeleton className="h-16 w-3/4 mx-auto" />
            <LoadingSkeleton className="h-6 w-2/3 mx-auto" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LoadingSkeleton className="h-12 w-40" />
              <LoadingSkeleton className="h-12 w-40" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { LoadingSkeleton, PageLoadingSkeleton }