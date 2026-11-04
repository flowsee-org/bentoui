import { useId } from 'react'
import { stories, layouts, orders, fourColumns } from '../data'
export type Pattern = 'showcase' | 'editorial' | 'mixed'
export type StoryKey = 'dashboard' | 'identity' | 'thinking' | 'systems' | 'analytics'
export interface Story {
  key: StoryKey
  kind: 'project' | 'article'
  cover: 'dashboard' | 'identity' | 'thinking' | 'systems'
  title: string
  category: string
  meta: string
  summary?: string
  href: string
}
interface CardProps { story: Story; placement?: string; tall?: boolean; eager?: boolean }
const asset = (name: string) => `${import.meta.env.BASE_URL}bento/${name}`
export function BentoArrow() {
  return <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-full bg-tint dark:bg-orange-950/60">
    <img src={asset('arrow.svg')} alt="" width="40" height="40" className="block ltr:-scale-x-100" />
  </span>
}
export function BentoCover({ cover, eager = false }: Pick<Story, 'cover'> & { eager?: boolean }) {
  return <div className="relative min-h-[120px] flex-1 overflow-hidden rounded-2xl">
    <img src={asset(`${cover}.png`)} alt="" width="744" height="440" loading={eager ? 'eager' : 'lazy'} decoding="async" className="absolute inset-0 h-full w-full object-cover" />
  </div>
}
function BaseCard({ story, placement = '', tall = false, eager = false, action }: CardProps & { action: string }) {
  const titleId = useId()
  return <article data-card={story.key} className={`min-w-0 ${placement}`}>
    <div aria-labelledby={titleId} className="flex h-full min-h-[360px] flex-col gap-4 rounded-3xl border border-line bg-white p-3 pb-5 text-start text-ink dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100">
      <BentoCover cover={story.cover} eager={eager} />
      <div className="flex shrink-0 flex-col gap-2 px-2">
        <div className="flex min-h-[22px] flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs leading-5">
          <span className="text-muted dark:text-neutral-400"><bdi>{story.meta}</bdi></span>
          <span className="text-accent dark:text-orange-300"><bdi>{story.category}</bdi></span>
        </div>
        <h3 id={titleId} className="wrap-break-word text-2xl font-bold leading-9"><bdi>{story.title}</bdi></h3>
        {tall && story.summary && <p className="hidden text-sm leading-[22px] text-muted dark:text-neutral-400 lg:block">{story.summary}</p>}
        <div className="flex min-h-10 items-center justify-between gap-4"><span className="text-xs leading-5">{action}</span><BentoArrow /></div>
      </div>
    </a>
  </article>
}
export function ProjectCard(props: CardProps) { return <BaseCard {...props} action="مشاهده کیس‌استادی" /> }
export function ArticleCard(props: CardProps) { return <BaseCard {...props} action="خواندن یادداشت" /> }
export function HeroBentoCard(props: CardProps) { return <ProjectCard {...props} eager /> }
type SectionProps = { items?: Story[]; title?: string; allHref?: string } & (
  { pattern?: 'showcase'; columns?: 3 | 4 } |
  { pattern: 'editorial' | 'mixed'; columns?: 3 }
)
export function BentoSection({ pattern = 'showcase', columns = 3, items, title, allHref = '/work' }: SectionProps) {
  const headingId = useId()
  const content = items ?? orders[pattern].map(key => stories[key])
  const positions = columns === 4 ? fourColumns : layouts[pattern]
  const titles = { showcase: 'از ایده تا تجربه', editorial: 'فکرها، پشت کارها', mixed: 'کار می‌کنیم، یاد می‌گیریم' }
  return <section aria-labelledby={headingId} className="mx-auto flex w-full max-w-[1200px] flex-col gap-8">
    <header className="flex flex-col gap-3 text-start">
      <p className="text-xs leading-5 text-accent dark:text-orange-300">منتخب کارها و نوشته‌ها</p>
      <h2 id={headingId} className="text-[30px] font-bold leading-[44px] text-ink dark:text-neutral-100 md:text-[40px] md:leading-[52px]">{title ?? titles[pattern]}</h2>
      <p className="text-sm leading-[22px] text-muted dark:text-neutral-400">روایت پروژه‌ها، تجربه‌ها و ایده‌هایی که به محصول تبدیل می‌شوند.</p>
    </header>
    <div data-pattern={pattern} className={`grid grid-cols-1 auto-rows-[minmax(360px,auto)] gap-6 md:grid-cols-2 ${columns === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
      {content.map(story => {
        const tall = (pattern === 'showcase' && story.key === 'identity') || (pattern === 'editorial' && story.key === 'thinking')
        const props = { story, tall, placement: positions[story.key] }
        return story.key === 'dashboard' ? <HeroBentoCard key={story.key} {...props} /> : story.kind === 'article' ? <ArticleCard key={story.key} {...props} /> : <ProjectCard key={story.key} {...props} />
      })}
    </div>
    <a href={allHref} className="self-start rounded-lg py-3 text-sm text-accent underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent dark:text-orange-300">مشاهده همهٔ کارها و نوشته‌ها</a>
  </section>
}
