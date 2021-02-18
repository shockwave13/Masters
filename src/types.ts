interface IRoute {
  key: string;
  name: string;
  params: any;
}

export interface IScreenProps {
  navigation?: any;
  route: IRoute;
}

export interface ICategory {
  id: number;
  title: string;
  img: number;
  sub_category: null;
  slug: null;
  created_at: string;
  updated_at: string;
  photo: IPhoto;
  subs: ISubCategory;
}

interface IPhoto {
  id: number;
  user_id: number;
  url: string;
  title: string;
  service_id: number;
  show: number;
  created_at: string;
  updated_at: string;
  course_id: null;
}

interface ISubCategory {
  id: number;
  title: string;
  img: number;
  sub_category: number;
  slug: null;
  created_at: string;
  updated_at: string;
  spec_count: number;
  specialists: ISpecialist;
}

interface ISpecialist {
  id: number;
  category_id: number;
  specialist_id: number;
  created_at: string;
  updated_at: string;
}
