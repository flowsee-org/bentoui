<div align="center">

<img src="public/preview/banner.png" alt="BentoUI — Bento Grid Kit for React, TypeScript, and Tailwind CSS 4" width="100%" />

# BentoUI

### Build expressive product grids without starting from zero.

**React · TypeScript · Tailwind CSS 4 · Responsive · RTL/LTR**

[English](#english) · [فارسی](#فارسی) · [Get started](#quick-start)

</div>

---

<a id="english"></a>

## BentoUI — A Bento Grid kit for real product interfaces

BentoUI is a set of reusable Bento Grid compositions and React cards for showcasing products, projects, articles, and ideas. It provides a starting point for landing pages, portfolios, and dashboards, with responsive layouts and right-to-left support.

### What you get

- Three compositions: Showcase, Editorial, and Mixed.
- Three- or four-column desktop Showcase.
- Responsive mobile, tablet, and desktop layouts.
- RTL/LTR support and light/dark themes.
- Reusable React + TypeScript components.
- Local illustrations and icons.

### Quick start

Requires Node.js 20.19+ or 22.12+.

```sh
git clone https://github.com/flowsee-org/bentoui.git
cd bentoui
npm install
npm run dev
```

### Use a section

```tsx
import { BentoSection } from './src/components/Bento'

export function WorkSection() {
  return <BentoSection pattern="showcase" columns={3} />
}
```

Choose `showcase`, `editorial`, or `mixed` with `pattern`. Set `columns={4}` for a four-column Showcase. Pass `items`, `title`, and `allHref` to customize the section.

### Components

`BentoSection`, `HeroBentoCard`, `ProjectCard`, `ArticleCard`, `BentoCover`, and `BentoArrow` are exported from `src/components/Bento.tsx`. The same file exports `Pattern`, `StoryKey`, and `Story`.

### Development commands

```sh
npm run dev
npm run build
npm run preview
npm run lint
```

The production build is generated in `dist/`.

### Deploy to InfinityFree

1. Run `npm run build` locally.
2. Upload the **contents** of `dist/` to your domain's document root, usually `htdocs` (not the `dist` folder itself).
3. If you use client-side routes, configure the host to serve `index.html` for unknown paths. The preview's `/work` and `/blog` links are examples and need real routes or destinations.
4. For a subdirectory deployment, set Vite's `base` option to that path before building. For a root domain, the default `/` is appropriate.

InfinityFree hosts the built static files; it does not run the Vite development server. Re-upload the updated build after changes.

### Notes

- Dana is a commercial font and is not included. Use a licensed font file if you need it.
- Example destinations such as `/work` and `/blog` must be connected to your router or CMS.
- MIT license: see [LICENSE](./LICENSE).

---

<a id="فارسی"></a>

## BentoUI — کیت طراحی Bento Grid برای رابط‌های واقعی

BentoUI مجموعه‌ای از چیدمان‌های آماده و کارت‌های React قابل‌استفادهٔ مجدد برای نمایش محصول، پروژه، مقاله و ایده است. این کیت برای ساخت سریع‌تر صفحهٔ معرفی محصول، پورتفولیو یا داشبورد طراحی شده و از چیدمان واکنش‌گرا و راست‌چین پشتیبانی می‌کند.

### امکانات

- سه ترکیب آماده: Showcase، Editorial و Mixed.
- چیدمان Showcase سه‌ستونه یا چهارستونه در دسکتاپ.
- چیدمان واکنش‌گرا برای موبایل، تبلت و دسکتاپ.
- پشتیبانی از RTL/LTR و تم روشن/تیره.
- کامپوننت‌های قابل‌استفادهٔ مجدد با React و TypeScript.
- تصویرها و آیکن‌های محلی.

### شروع سریع

به Node.js نسخهٔ 20.19 یا 22.12 به بالا نیاز است.

```sh
git clone https://github.com/flowsee-org/bentoui.git
cd bentoui
npm install
npm run dev
```

### استفاده در پروژه

```tsx
import { BentoSection } from './src/components/Bento'

export function WorkSection() {
  return <BentoSection pattern="showcase" columns={3} />
}
```

با پراپ `pattern` یکی از ترکیب‌های `showcase`، `editorial` یا `mixed` را انتخاب کن. برای Showcase چهارستونه، `columns={4}` بگذار. با `items`، `title` و `allHref` می‌توانی محتوا و لینک بخش را تغییر بدهی.

### کامپوننت‌ها

کامپوننت‌های `BentoSection`، `HeroBentoCard`، `ProjectCard`، `ArticleCard`، `BentoCover` و `BentoArrow` از فایل `src/components/Bento.tsx` قابل import هستند. نوع‌های `Pattern`، `StoryKey` و `Story` هم در همان فایل قرار دارند.

### دستورهای توسعه

```sh
npm run dev
npm run build
npm run preview
npm run lint
```

خروجی نسخهٔ production در پوشهٔ `dist/` ساخته می‌شود.

### انتشار روی InfinityFree

1. در سیستم خودت `npm run build` را اجرا کن.
2. **محتویات** پوشهٔ `dist/` را در ریشهٔ سایت، معمولاً `htdocs`، بارگذاری کن؛ خود پوشهٔ `dist` را منتقل نکن.
3. اگر مسیرهای سمت کاربر داری، تنظیم کن که مسیرهای ناشناخته به `index.html` برسند. لینک‌های نمونهٔ `/work` و `/blog` باید به مسیرهای واقعی وصل شوند.
4. برای انتشار در زیرپوشه، مقدار `base` در تنظیمات Vite را پیش از build مطابق مسیر تنظیم کن. برای دامنهٔ اصلی، مقدار پیش‌فرض `/` مناسب است.

InfinityFree فایل‌های استاتیک buildشده را میزبانی می‌کند و سرور توسعهٔ Vite را اجرا نمی‌کند. پس از هر تغییر، build جدید را بارگذاری کن.

### نکته‌ها

- فونت Dana تجاری است و همراه پروژه منتشر نشده؛ برای استفاده از آن باید مجوز داشته باشی.
- لینک‌هایی مثل `/work` و `/blog` نمونه‌اند و باید به روتر یا CMS وصل شوند.
- مجوز پروژه MIT است؛ فایل [LICENSE](./LICENSE) را ببین.
