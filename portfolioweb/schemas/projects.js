export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',

  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      description: 'Title of the project',
    },
    {
      name: 'smallDescription',
      title: 'Project small Description',
      type: 'text',
      description: 'Description of the project',
    },
    {
      name: 'fullDescription',
      title: 'Project full Description',
      type: 'text',
      description: 'Description of the project',
    },
    // array of technology used
    {
      name: 'technology',
      title: 'Technology Used',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'image',
      title: 'Project Image',
      type: 'image',
      description: 'Image of the project',
    },
    {
      name: 'ProjectLink',
      title: 'Project Link',
      type: 'url',
      description: 'Link to the project',
    },
    {
      name: 'GithubLink',
      title: 'Github Link',
      type: 'url',
      description: 'Link to the project',
    },
    {
      name:'isLatest',
      title:'Type',
      type:'string',
      description:'Type of the project',

    }
  ],
};