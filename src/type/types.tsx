import { IconType } from 'react-icons';

export interface servicesType {
    icon: IconType;
    title:string;
    description:string;
    color:string;
    badge:string | null;
};

export interface testimonialsType {
    name: string;
    role: string;
    company: string;
    image: string;
    quote: string;
    rating: number;
};