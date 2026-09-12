export function Footer() {
  return (
    <footer className="bg-chocolate-900 pb-28 pt-12 text-center lg:pb-24" style={{ paddingBottom: 'max(env(safe-area-inset-bottom), 6rem)' }}>
      <div className="mx-auto max-w-4xl px-5">
        <div className="flex items-center justify-center gap-2">
          <span className="text-2xl">🍫</span>
          <span className="font-display text-xl font-bold text-cream-50">Trufas Lucrativas</span>
        </div>

        <p className="mt-3 text-sm text-chocolate-200">Material digital educacional.</p>

        <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2">
          <span className="text-sm text-chocolate-300 underline-offset-2 hover:underline">
            <a href="#" rel="noopener">Termos de Uso</a>
          </span>
          <span className="text-sm text-chocolate-300 underline-offset-2 hover:underline">
            <a href="#" rel="noopener">Política de Privacidade</a>
          </span>
          <span className="text-sm text-chocolate-300 underline-offset-2 hover:underline">
            <a href="#" rel="noopener">Suporte</a>
          </span>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-xs leading-relaxed text-chocolate-300">
          Resultados financeiros variam de acordo com execução, região, custos, demanda e estratégia
          de venda. O material não garante resultados financeiros específicos.
        </p>
      </div>
    </footer>
  );
}
