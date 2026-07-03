// Sanity CMS Schema definition structures

export const projectSchema = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', title: 'Project Title', type: 'string' },
    { name: 'artist', title: 'Artist Name', type: 'string' },
    { name: 'year', title: 'Release Year', type: 'string' },
    { name: 'role', title: 'Jon\'s Role', type: 'string' },
    { name: 'image', title: 'Main Project Image', type: 'image', options: { hotspot: true } },
    { name: 'videoUrl', title: 'Archival Video URL (YouTube/Vimeo)', type: 'url' },
    { name: 'description', title: 'Short Description', type: 'text' },
    { name: 'story', title: 'Behind the Scenes Story', type: 'text' },
    { 
      name: 'credits', 
      title: 'Detailed Credits', 
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Role Label (e.g. Director)', type: 'string' },
            { name: 'value', title: 'Name/Value', type: 'string' }
          ]
        }
      ]
    },
    {
      name: 'gallery',
      title: 'Production Stills Gallery',
      type: 'array',
      of: [{ type: 'image' }]
    }
  ]
};

export const bookSchema = {
  name: 'book',
  title: 'Book Store Item',
  type: 'document',
  fields: [
    { name: 'title', title: 'Book Title', type: 'string' },
    { name: 'subtitle', title: 'Book Subtitle', type: 'string' },
    { name: 'tagline', title: 'Store Tagline', type: 'string' },
    { name: 'description', title: 'Detailed Overview', type: 'text' },
    { name: 'price', title: 'Retail Price ($)', type: 'number' },
    { name: 'coverImage', title: 'Book Cover Image', type: 'image' },
    {
      name: 'gallery',
      title: 'Additional Book Photos',
      type: 'array',
      of: [{ type: 'image' }]
    },
    {
      name: 'quotes',
      title: 'Promo Quotes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'text', title: 'Quote Text', type: 'string' },
            { name: 'author', title: 'Quoted Critic/Publication', type: 'string' }
          ]
        }
      ]
    },
    {
      name: 'reviews',
      title: 'Editorial Praise Reviews',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'text', title: 'Review Excerpt', type: 'string' },
            { name: 'author', title: 'Reviewer Name/Agency', type: 'string' }
          ]
        }
      ]
    },
    {
      name: 'details',
      title: 'Book Metadata Specifications',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Meta Label (e.g. Publisher)', type: 'string' },
            { name: 'value', title: 'Meta Value', type: 'string' }
          ]
        }
      ]
    }
  ]
};

export const biographySchema = {
  name: 'biography',
  title: 'Jon\'s Biography',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'title', title: 'Hero Headline', type: 'string' },
    { name: 'bioShort', title: 'Introary Bio summary', type: 'text' },
    {
      name: 'bioLong',
      title: 'Full Bio Narrative Paragraphs',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'roles',
      title: 'Specialty Badges & Roles',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ]
};

export const timelineSchema = {
  name: 'timeline',
  title: 'Timeline Milestones',
  type: 'document',
  fields: [
    { name: 'year', title: 'Year', type: 'string' },
    { name: 'artist', title: 'Artist/Event Label', type: 'string' },
    { name: 'title', title: 'Milestone Title', type: 'string' },
    { name: 'description', title: 'Short Overview', type: 'text' },
    { name: 'details', title: 'Extended Story Details', type: 'text' },
    { name: 'role', title: 'Jon\'s Role Tag', type: 'string' },
    {
      name: 'category',
      title: 'Category Type',
      type: 'string',
      options: {
        list: [
          { title: 'Music Video', value: 'music-video' },
          { title: 'TV & Agency', value: 'agency' },
          { title: 'Keynote & Speaking', value: 'speaker' }
        ]
      }
    },
    { name: 'videoUrl', title: 'Video Link Overlay', type: 'url' }
  ]
};

export const collaborationSchema = {
  name: 'collaboration',
  title: 'Legendary Collaborations',
  type: 'document',
  fields: [
    { name: 'artist', title: 'Artist Name', type: 'string' },
    { name: 'image', title: 'Featured Chapter Photo', type: 'image' },
    { name: 'story', title: 'Story Details', type: 'text' },
    { name: 'contribution', title: 'Jon\'s Contribution Summary', type: 'string' },
    {
      name: 'gallery',
      title: 'Archival Chapters Gallery Stills',
      type: 'array',
      of: [{ type: 'image' }]
    }
  ]
};

export const schemaTypes = [
  projectSchema,
  bookSchema,
  biographySchema,
  timelineSchema,
  collaborationSchema
];
