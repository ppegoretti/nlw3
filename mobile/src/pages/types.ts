export interface OrphanageProps {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: string;
  images: {
    id: string;
    url: string;
  }[];
}

export interface OrphanageDetailsRouteParams {
  id: number;
  };