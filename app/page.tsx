import { NavigationContainer } from "@/components/sidebar/navigation-container"

export default function Page() {
  return (
    <div className="flex h-screen bg-background">
      <NavigationContainer />
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Welcome to v0</h1>
          <p className="text-lg text-muted-foreground">Click the menu icon in the sidebar to explore the navigation</p>
        </div>
      </main>
    </div>
  )
}
