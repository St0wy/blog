import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
	website: "https://blog.stowy.ch",
	author: "Stowy",
	desc: "The game dev blog of Stowy.",
	title: "Stowy's Blog",
	ogImage: "astropaper-og.jpg",
	lightAndDarkMode: true,
	postPerPage: 4,
	scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
	lang: "en", // html lang code. Set this empty and default will be "en"
	langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
	enable: false,
	svg: true,
	width: 216,
	height: 46,
};

export const SOCIALS: SocialObjects = [
	{
		name: "Github",
		href: "https://github.com/St0wy",
		linkTitle: ` ${SITE.title} on Github`,
		active: true,
	},
	{
		name: "GitLab",
		href: "https://gitlab.com/Stowy",
		linkTitle: `${SITE.title} on GitLab`,
		active: true,
	},
	{
		name: "Mastodon",
		href: "https://mastodon.gamedev.place/@stowy",
		linkTitle: `${SITE.title} on Mastodon`,
		active: true,
	},
	{
		name: "Twitter",
		href: "https://twitter.com/St0wy",
		linkTitle: `${SITE.title} on Twitter`,
		active: false,
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/fabian-huber-530b24207/",
		linkTitle: `${SITE.title} on LinkedIn`,
		active: true,
	},
	{
		name: "Mail",
		href: "mailto:stowy@protonmail.ch",
		linkTitle: `Send an email to ${SITE.title}`,
		active: true,
	}
];