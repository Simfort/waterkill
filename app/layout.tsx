import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Footer from "./_components/Footer";
import Script from "next/script";

const InterFont = Inter({
  weight: ["400", "300", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Waterkill — анализ «воды» в тексте | Проверка текста онлайн",
  description:
    "Бесплатный анализ текста: найдите и удалите «воду». Проверьте свой текст за секунды — получите отчёт с процентом «воды» и рекомендациями.",
  keywords: [
    "анализ текста",
    "вода в тексте",
    "проверка текста",
    "SEO анализ",
    "очистка текста",
    "NLP анализ",
    "проверка на воду",
  ],
  openGraph: {
    title: "Waterkill — удали «воду» из текста",
    description:
      "Анализируйте тексты на наличие «воды». Получите отчёт и рекомендации по улучшению.",
    url: "https://waterkill-vdob.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waterkill — анализ «воды» в тексте",
    description: "Бесплатный инструмент для очистки текстов.",
  },
  alternates: {
    canonical: "https://waterkill-vdob.vercel.app/",
  },
  other: { telderi: "477a9495aafa14c90e3eab37a939a337" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${InterFont.className} `}>
        <div className="size-150 fixed -translate-x-27.5 top-0 bottom-0 left-0  rounded-full border -z-10 border-primary max-md:size-50"></div>
        {children} <Footer />
        <div className="h-150 w-150 -z-10 fixed translate-x-27.5 top-[45%] bottom-0 right-0  rounded-full border border-primary max-md:size-50"></div>{" "}
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=105929081', 'ym');

            ym(105929081, 'init', {
              ssr: true,
              webvisor: true,
              clickmap: true,
              ecommerce: "dataLayer",
              accurateTrackBounce: true,
              trackLinks: true
            });
          `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/105929081"
              className="absolute left-[-9999px]"
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
<meta name="telderi" content="477a9495aafa14c90e3eab37a939a337" />;
