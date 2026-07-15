import { useHealthCheck } from '@/hooks/useHealthCheck'

function App() {
  const { data, isLoading, isError, error } = useHealthCheck()

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">
              Phase 1
            </p>
            <h1 className="text-xl font-semibold">Marketplace Platform</h1>
          </div>
          <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">
            Admin-Controlled Multi-Vendor
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12">
        <section className="rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-xl">
          <h2 className="text-2xl font-semibold text-white">
            Project setup complete
          </h2>
          <p className="mt-3 max-w-2xl text-slate-400">
            Monorepo scaffold with React 19, Vite, Tailwind CSS, Express API,
            Prisma, and shared TypeScript packages.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Frontend
              </p>
              <p className="mt-2 font-medium">React + Vite</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Backend
              </p>
              <p className="mt-2 font-medium">Express + Prisma</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Shared
              </p>
              <p className="mt-2 font-medium">@marketplace/shared</p>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
            <p className="text-sm font-medium text-slate-300">API health check</p>

            {isLoading && (
              <p className="mt-2 text-sm text-slate-500">Checking backend...</p>
            )}

            {isError && (
              <p className="mt-2 text-sm text-rose-400">
                Backend unavailable:{' '}
                {error instanceof Error ? error.message : 'Unknown error'}
              </p>
            )}

            {data && (
              <dl className="mt-3 grid gap-2 text-sm sm:grid-cols-3">
                <div>
                  <dt className="text-slate-500">Status</dt>
                  <dd className="font-mono text-emerald-400">{data.status}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Version</dt>
                  <dd className="font-mono">{data.version}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Timestamp</dt>
                  <dd className="font-mono text-xs">{data.timestamp}</dd>
                </div>
              </dl>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
