export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61df4a76dd24d652cb53342c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-gvtcp5pp',
                  apiId: '298d2c6c-3fb1-4cf8-90c9-4a2f555e2f59'
                },
                {
                  buildHookId: '61df4a75823cf051e3c58804',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ntbcadi9',
                  apiId: 'ae5ca738-91b9-4f88-b1cd-594175f18aab'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Dublinscope/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ntbcadi9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
