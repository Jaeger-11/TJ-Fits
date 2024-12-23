import { createClient } from 'next-sanity'
import imageUrlBuilder from "@sanity/image-url";

import { apiVersion, dataset, projectId, useCdn, token } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token : token
})

const builder = imageUrlBuilder(client);

export const forUrl = (source:string) => {
  return builder.image(source);
}