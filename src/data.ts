import type {Pattern,StoryKey,Story} from './components/Bento'
export const stories: Record<StoryKey, Story> = {
 dashboard:{key:'dashboard',kind:'project',cover:'dashboard',title:'فضای کار برای تیم‌های فردا',category:'طراحی محصول / SaaS',meta:'۱۴۰۵',href:'/work/team-workspace'},
 identity:{key:'identity',kind:'project',cover:'identity',title:'هویتی برای یک شروع تازه',category:'هویت بصری / برندینگ',meta:'۱۴۰۵',summary:'از مسئله تا تجربه‌ای روشن؛ طراحی یک محصول برای تیم‌های در حال رشد.',href:'/work/fresh-identity'},
 thinking:{key:'thinking',kind:'article',cover:'thinking',title:'طراحی بهتر، با تصمیم‌های کمتر',category:'بلاگ / تجربه کاربری',meta:'۵ دقیقه مطالعه',summary:'چطور با حذف پیچیدگی‌ها، مسیر کاربر را کوتاه‌تر و تجربه را روشن‌تر کنیم؟',href:'/blog/fewer-decisions'},
 systems:{key:'systems',kind:'article',cover:'systems',title:'یک سیستم، هزار امکان',category:'بلاگ / دیزاین سیستم',meta:'۸ دقیقه مطالعه',href:'/blog/design-systems'},
 analytics:{key:'analytics',kind:'project',cover:'dashboard',title:'داده‌ها، روشن‌تر از همیشه',category:'داشبورد / تجربه کاربری',meta:'۱۴۰۴',href:'/work/analytics'}
}
export const orders: Record<Pattern, StoryKey[]> = {showcase:['dashboard','identity','thinking','systems'],editorial:['thinking','systems','dashboard','identity'],mixed:['dashboard','thinking','identity','systems','analytics']}
export const layouts: Record<Pattern, Partial<Record<StoryKey,string>>> = {
  "showcase": {
    "dashboard": "md:col-start-2 md:row-start-1 lg:col-span-2 lg:row-start-1",
    "identity": "md:col-start-1 md:row-start-2 lg:row-span-2 lg:row-start-1",
    "thinking": "md:col-start-1 md:row-start-1 lg:col-start-3 lg:row-start-2",
    "systems": "md:col-start-2 md:row-start-2 lg:col-start-2 lg:row-start-2"
  },
  "editorial": {
    "thinking": "md:col-start-2 md:row-start-1 lg:col-start-3 lg:row-span-2",
    "systems": "md:col-start-1 md:row-start-1 lg:col-span-2 lg:row-start-1",
    "dashboard": "md:col-start-2 md:row-start-2 lg:col-start-2 lg:row-start-2",
    "identity": "md:col-start-1 md:row-start-2 lg:col-start-1 lg:row-start-2"
  },
  "mixed": {
    "dashboard": "md:col-start-2 md:row-start-1 lg:col-span-2",
    "thinking": "md:col-start-1 md:row-start-1",
    "identity": "md:col-start-1 md:row-start-2 lg:col-start-2",
    "systems": "md:col-start-2 md:row-start-2 lg:col-start-3",
    "analytics": "md:col-span-2 md:row-start-3 lg:col-span-1 lg:col-start-1 lg:row-start-2"
  }
}
export const fourColumns: Partial<Record<StoryKey,string>> = {
  "dashboard": "md:col-start-2 md:row-start-1 lg:col-start-3 lg:col-span-2",
  "identity": "md:col-start-1 md:row-start-2 lg:col-span-2 lg:row-span-2 lg:row-start-1",
  "thinking": "md:col-start-1 md:row-start-1 lg:col-start-4 lg:row-start-2",
  "systems": "md:col-start-2 md:row-start-2 lg:col-start-3 lg:row-start-2"
}
