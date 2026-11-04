import { useState } from 'react'
import { BentoSection } from './components/Bento'
import type { Pattern } from './components/Bento'

export default function App() {
  const [dark, setDark] = useState(false)
  const [direction, setDirection] = useState<'rtl' | 'ltr'>('rtl')
  const [pattern, setPattern] = useState<Pattern>('showcase')
  const [columns, setColumns] = useState<3 | 4>(3)
  const control = 'rounded-xl border border-line bg-white px-4 py-3 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:border-neutral-700 dark:bg-neutral-900'
  return <div className={dark ? 'dark' : ''} dir={direction}>
    <div className="min-h-screen bg-canvas font-sans text-ink antialiased dark:bg-neutral-950 dark:text-neutral-100">
      <nav aria-label="تنظیمات پیش‌نمایش" className="mx-auto flex max-w-[1232px] flex-wrap items-center gap-3 px-4 py-6">
        <button className={control} onClick={() => setDark(!dark)} aria-pressed={dark}>تم تیره</button>
        <button className={control} onClick={() => setDirection(direction === 'rtl' ? 'ltr' : 'rtl')} aria-pressed={direction === 'ltr'}>چیدمان LTR</button>
        <label className="flex items-center gap-2 text-sm">ترکیب
          <select value={pattern} className={control} onChange={event => setPattern(event.target.value as Pattern)}>
            <option value="showcase">Showcase</option><option value="editorial">Editorial</option><option value="mixed">Mixed</option>
          </select>
        </label>
        {pattern === 'showcase' && <button className={control} aria-pressed={columns === 4} onClick={() => setColumns(columns === 3 ? 4 : 3)}>دسکتاپ چهارستونه</button>}
      </nav>
      <main className="px-4 pb-16">
        {pattern === 'showcase' ? <BentoSection pattern="showcase" columns={columns} /> : <BentoSection pattern={pattern} />}
      </main>
    </div>
  </div>
}
