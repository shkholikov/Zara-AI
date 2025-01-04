import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	lang: "ru-RU",
	title: "ZARA AI",
	description: "АВТОМАТИЗАЦИЯ БИЗНЕС ПРОЦЕССОВ И ПРОДАЖ",
	themeConfig: {
		siteTitle: "ZARA AI",
		logo: "/image.png",
		search: {
			provider: "local"
		},
		socialLinks: [{ icon: "telegram", link: "https://t.me/ithinkuzbot" }],
		footer: {
			message: `<b>Создано компанией <a href="https://www.ithink.uz" target="_blank">ITHINK</a> — ваш партнер в мире IT и инноваций.</b>`,
			copyright: `© ${new Date().getFullYear()} Все права защищены.`
		},
		carbonAds: {
			code: "your-carbon-code",
			placement: "your-carbon-placement"
		}
	},
	vite: {
		css: {
			preprocessorOptions: {
				css: {
					additionalData: `@import "/Users/shakhzodkholikov/Desktop/ithink-ai-bot/docs/.vitepress/tailwind.css";`
				}
			}
		}
	}
});
