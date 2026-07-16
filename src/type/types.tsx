import { IconType } from "react-icons";
import { Variant } from "framer-motion";

export interface servicesType {
  icon: IconType;
  title: string;
  description: string;
  color: string;
  badge: string | null;
}

export interface testimonialsType {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

// export interface cardVariantType {
//   hidden: Variant;
//   visible: (index: number) => Variant;
// }

export interface faqsType {
  q: string;
  a: string;
}

export type SignUpFormType = {
  name: string;
  email: string;
  password: string;
  imageUrl: string;
};

export type LoginFormType = {
  email: string;
  password: string;
};

export interface CourseInputTypes {
  uid: string;
  title: string;
  instructorName: string;
  category: string;
  price: number;
  duration: string;
  thumbnailUrl: string;
  description: string;
}

export interface Course {
  _id: string;
  title: string;
  instructorName: string;
  category: string;
  price: number;
  duration: number | string;
  thumbnailUrl: string;
  description: string;
}

export interface UserType {
  name: string;
  email: string;
  emailVerified: boolean;
  createdAt: string;
  updatedAt: string;
  id: string;
}
export interface CourseCardProps {
  course: Course;
  onDelete: (id: string) => void;
}
export interface CourseCardPropsPublic {
  course: Course;
}
