const fs = require('fs');
const path = require('path');

// URLBASE needs to be set for the push to Github Pages, but otherwise
// it can be empty for local, now.sh, or netlify.
const urlBase = process.env.URLBASE || "/";


const findChildren = folder => {
    const dir = path.join(__dirname, '..', folder)
    const children = fs.readdirSync(dir)
    return children.filter(ch => ch.endsWith('.md'))
}

const sections = {
    manual: {
        name: 'User Manual',
        url: '/manual/'
    },
    dev: {
        name: 'Developer Guide',
        url: '/contributing/',
    }
}

module.exports = {
    title: 'FSU-ACM/Contest-Server',
    description: "For running Fall & Spring Programming Contests",
    base: urlBase,
    themeConfig: {
        repo: 'fsu-acm/contest-server',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: 'Edit this page on Github',
        nav: [
            { text: 'Home', link: '/' },
            { text: sections.manual.name, link: sections.manual.url },
            { text: sections.dev.name, link: sections.dev.url },
        ],
        sidebar: {
            [sections.manual.url]: [
                {
                    title: 'Running the Software',
                    collapsable: false,
                    children: [
                        '',
                        'getting_started.md',
                        'configuration.md',
                        'deployment',
                        'extra_credit',
                    ]
                },
            ],
        }
    }
}
