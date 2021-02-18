export const SET_CATALOG = '@app/set_catalog';

interface IPhoto {
  id: number;
  user_id: number;
  url: string;
  title: string;
  service_id: number;
  show: number;
  created_at: string;
  updated_at: string;
  course_id: any;
}

interface ISpecialists {
  id: number;
  category_id: number;
  specialist_id: number;
  created_at: string;
  updated_at: string;
}

interface ISubCategory {
  id: 2;
  title: string;
  img: number;
  sub_category: number;
  slug: null;
  created_at: string;
  updated_at: string;
  spec_count: number;
  photo: IPhoto;
  specialists: ISpecialists[];
}

interface ICategory {
  id: number;
  title: string;
  img: number;
  sub_category: null;
  slug: null;
  created_at: string;
  updated_at: string;
  photo: IPhoto;
  subs: ISubCategory[];
}

interface IService {
  id: number;
  data: null;
  description: string;
  prepare_time: any;
  category_id: number;
  specialist_id: number;
  created_at: string;
  updated_at: string;
  images: any[];
  times: any[];
}
export interface ICatalogStore {
  categories: ICategory[];
  specialists: any[];
  services: any[];
  service: IService;
}
