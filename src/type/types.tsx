import { IconType } from "react-icons";
import { Variant } from "framer-motion";

export interface servicesType {
  icon: IconType;
  title: string;
  description: string;
  color: string;
  badge: string | null;
};

export interface testimonialsType {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
};

export interface cardVariantType {
  hidden: Variant;
  visible: (index: number) => Variant;
};

export interface faqsType {
  q: string;
  a: string;
};

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
