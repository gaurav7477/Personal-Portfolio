import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '1auy31dl',
  dataset: 'projects',

  // Specify the desired API version
  apiVersion: '2021-05-19',
  
  useCdn: true,
});

export default client;
