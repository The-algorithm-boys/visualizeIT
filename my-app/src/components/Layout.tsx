export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      <header className="bg-white shadow-md p-4">
        <nav className="container mx-auto flex justify-center items-center">
          <div className="text-lg font-semibold">Dijkstra's algorithm visualization</div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-6">{children}</main>
      <footer className="bg-white shadow-md p-4 text-center">
        Footer
      </footer>
    </div>
  );
}
