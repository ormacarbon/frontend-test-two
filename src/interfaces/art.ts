interface IConstituents {
  constituentID: number,
  role: string,
  name: string,
  constituentULAN_URL: string,
  constituentWikidata_URL: string,
  gender: string,
}

interface IMeasurements {
  elementName: string,
  elementDescription: any,
  elementMeasurements: {
    Height: number,
    Width: number
  }
}

interface ITags {
  term: string,
  AAT_URL: string,
  Wikidata_URL: string,
}

export interface IArt {
  objectID: number,
  isHighlight: boolean
  accessionNumber: string,
  accessionYear: string
  isPublicDomain: boolean,
  primaryImage: string,
  primaryImageSmall: string,
  additionalImages: string[],
  constituents: IConstituents[],
  department: string,
  objectName: string,
  title: string,
  culture: string,
  period: string,
  dynasty: string,
  reign: string,
  portfolio: string,
  artistRole: string,
  artistPrefix: string,
  artistDisplayName: string,
  artistDisplayBio: string,
  artistSuffix: string,
  artistAlphaSort: string,
  artistNationality: string,
  artistBeginDate: string,
  artistEndDate: string,
  artistGender: string,
  artistWikidata_URL: string,
  artistULAN_URL: string,
  objectDate: string,
  objectBeginDate: number,
  objectEndDate: number,
  medium: string,
  dimensions: string,
  measurements: IMeasurements[],
  creditLine: string,
  geographyType: string ,
  city: string,
  state: string,
  county: string,
  country: string,
  region?: string,
  subregion?: string,
  locale?: string,
  locus?: string,
  excavation: string,
  river?: string,
  classification: string,
  rightsAndReproduction: string,
  linkResource: string,
  metadataDate: Date,
  repository: string,
  objectURL: string,
  tags: ITags[],
  objectWikidata_URL: string,
  isTimelineWork: boolean,
  GalleryNumber: string,
}
