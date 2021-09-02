import path from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons';
import ViteComponents from 'vite-plugin-components';
import Markdown from 'vite-plugin-md';
import WindiCSS from 'vite-plugin-windicss';
import { VitePWA } from 'vite-plugin-pwa';
import Prism from 'markdown-it-prism';
import LinkAttributes from 'markdown-it-link-attributes';
export default defineConfig({
    resolve: {
        alias: {
            '@/': `${path.resolve(__dirname, 'src')}/`,
        },
    },
    plugins: [
        Vue({
            include: [/\.vue$/, /\.md$/],
        }),
        Pages({
            extensions: ['vue', 'md'],
        }),
        Layouts(),
        Markdown({
            wrapperClasses: 'prose prose-sm m-auto text-left',
            headEnabled: true,
            markdownItSetup(md) {
                md.use(Prism);
                md.use(LinkAttributes, {
                    pattern: /^https?:\/\//,
                    attrs: {
                        target: '_blank',
                        rel: 'noopener',
                    },
                });
            },
        }),
        ViteComponents({
            extensions: ['vue', 'md'],
            customLoaderMatcher: id => id.endsWith('.md'),
            globalComponentsDeclaration: true,
            customComponentResolvers: [
                ViteIconsResolver({
                    componentPrefix: '',
                }),
            ],
        }),
        ViteIcons(),
        WindiCSS({
            safelist: 'prose prose-sm m-auto text-left',
        }),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.svg', 'robots.txt', 'safari-pinned-tab.svg'],
            manifest: {
                name: 'Veterinary Education & Training Services',
                short_name: 'VETS',
                theme_color: '#121212',
                icons: [
                    {
                        src: '/pwa-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: '/pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: '/pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable',
                    },
                ],
            },
        }),
    ],
    optimizeDeps: {
        include: [
            'vue',
            'vue-router',
            '@vueuse/core',
        ],
        exclude: [
            'vue-demi',
        ],
    },
});
//# sourceMappingURL=vite.config.js.map