export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5e582914622c0d0bffbac7a3',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog2-studio',
                  apiId: 'e261bff8-916e-47e2-b7e2-94556f5ab470'
                },
                {
                  buildHookId: '5e5829140a5c802af5a6ee92',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog2',
                  apiId: '7ee3bf8d-223b-41c1-98b3-c958ade7f59d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jvankralingen/sanity-sapper-blog2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog2.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
