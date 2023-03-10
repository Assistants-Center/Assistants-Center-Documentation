export default {
    head: [
        ['script', { async: '', src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3673520795587574', crossorigin: 'anonymous' }]
    ],
    title: 'Assistants Center Documentation',
    description: 'Assistants Center Documentation Projects\' Documentation',
    cleanUrls: 'with-subfolders',
    lastUpdated: true,
    themeConfig: {
        lastUpdatedText: 'Last Updated',
        siteTitle: 'Assistants Center Docs',
        nav: [
            { text: 'Discord Support Server', link: 'https://discord.gg/Nkc8MWxHRD' },
            { text: 'GitHub', link: 'https://github.com/Assistants-Center' },
        ],
        sidebar: {
            '/discord-dashboard/v2': [
                {
                    text: 'Discord-Dashboard v2 Documentation',
                    items: [],
                },
                {
                    text: 'Getting Started',
                    items: [
                        { text: 'Introduction', link: '/discord-dashboard/v2/' },
                        { text: 'Code Example', link: '/discord-dashboard/v2/code-example' },
                        { text: 'Get Help', link: '/discord-dashboard/v2/get-help' },
                        { text: 'Video Tutorials', link: "/discord-dashboard/v2/video-tutorials" },
                        { text: 'Installation', link: '/discord-dashboard/v2/installation' },
                        { text: 'First Steps', link: '/discord-dashboard/v2/first-steps' },
                        { text: 'Themes Available', link: '/discord-dashboard/v2/themes' },
                    ]
                },
                {
                    text: 'Required Configuration',
                    items: [
                        { text: 'Port', link: '/discord-dashboard/v2/config/port' },
                        { text: 'Client', link: "/discord-dashboard/v2/config/client" },
                        { text: 'Redirect URI', link: '/discord-dashboard/v2/config/redirect-uri' },
                        { text: "Domain", link: '/discord-dashboard/v2/config/domain' },
                        { text: 'Discord.js Bot Client', link: '/discord-dashboard/v2/config/discord-js-bot-client' },
                        { text: 'Theme Module', link: '/discord-dashboard/v2/config/theme-module' },
                        { text: 'Settings', link: '/discord-dashboard/v2/config/settings' }
                    ]
                },
                {
                    text: 'Optional Configuration',
                    items: [
                        { text: 'Session Store', link: '/discord-dashboard/v2/optional-config/session-store' },
                        { text: 'Required Permissions', link: '/discord-dashboard/v2/optional-config/required-permissions' },
                        { text: 'Rate Limits', link: '/discord-dashboard/v2/optional-config/rate-limits' },
                        { text: 'Accept Privacy Policy', link: '/discord-dashboard/v2/optional-config/accept-privacy-policy' },
                        { text: 'Don\'t create server', link: '/discord-dashboard/v2/optional-config/dont-create-server' },
                        { text: 'SSL', link: '/discord-dashboard/v2/optional-config/ssl' },
                        { text: 'Minimized Console Logs', link: '/discord-dashboard/v2/optional-config/minimized-console-logs' },
                        { text: 'Invite Endpoint', link: '/discord-dashboard/v2/optional-config/invite-endpoint' },
                        { text: 'Support Server', link: '/discord-dashboard/v2/optional-config/support-server' },
                        { text: 'Join Guild After Authorization', link: '/discord-dashboard/v2/optional-config/guild-after-authorization' },
                        { text: 'Efficient Saving System', link: '/discord-dashboard/v2/optional-config/efficient-saving-system' },
                        { text: 'Under Maintenance Mode', link: '/discord-dashboard/v2/optional-config/under-maintenance-mode' },
                    ]
                },
                {
                    text: 'Methods',
                    items: [
                        { text: 'Settings Handler', link: '/discord-dashboard/v2/methods/settings-handler' },
                        { text: 'Generate Sample', link: '/discord-dashboard/v2/methods/generate-sample' },
                        { text: 'Create Form Type', link: '/discord-dashboard/v2/methods/create-form-type' },
                        { text: 'Create Custom Page', link: '/discord-dashboard/v2/methods/create-custom-page' },
                        { text: 'Use 3rd Party Module', link: '/discord-dashboard/v2/methods/3rd-party-module' },
                        { text: 'Dashboard Events', link: '/discord-dashboard/v2/methods/dashboard-events' },
                        { text: 'Web Sockets', link: '/discord-dashboard/v2/methods/web-sockets' }
                    ]
                },
            ],
            '/discord-multi-handler/': [
                {
                    text: 'Discord-Multi-Handler Documentation',
                    items: [
                        {
                            text: 'Getting Started',
                            link: '/discord-multi-handler/getting-started/',
                            items: [
                                { text: 'Introduction', link: '/discord-multi-handler/getting-started/' },
                                { text: 'Installation', link: '/discord-multi-handler/getting-started/installation' },
                                { text: 'Basic Setup', link: '/discord-multi-handler/getting-started/basic-setup' },
                                { text: 'Full Example', link: '/discord-multi-handler/getting-started/full-example' },
                            ]
                        },
                        {
                            text: 'Handlers',
                            link: '/discord-multi-handler/handlers/',
                            items: [
                                {
                                    text: 'Command', link: '/discord-multi-handler/handlers/command/', items: [
                                        { text: 'Fetch Commands', link: '/discord-multi-handler/handlers/command/fetch-commands' },
                                        { text: 'Add Command', link: '/discord-multi-handler/handlers/command/add-command' },
                                        { text: 'Reload Command', link: '/discord-multi-handler/handlers/command/reload-command' },
                                    ]
                                },
                                {
                                    text: 'Event', link: '/discord-multi-handler/handlers/event/', items: [
                                        { text: 'Fetch Events', link: '/discord-multi-handler/handlers/event/fetch-events' }
                                    ]
                                },
                                {
                                    text: 'Function', link: '/discord-multi-handler/handlers/function/', items: [
                                        { text: 'Fetch Functions', link: '/discord-multi-handler/handlers/function/fetch-functions' },
                                        { text: 'Reload Function', link: '/discord-multi-handler/handlers/function/reload-function' }
                                    ]
                                }
                            ]
                        }
                    ],
                }
            ]
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022 - Assistants Center',
        },
    },
}
