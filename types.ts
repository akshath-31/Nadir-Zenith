
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

// Added missing Product interface to satisfy shop component requirements
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  longDescription?: string;
  imageUrl: string;
  features: string[];
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription?: string;
  price?: number; // Optional for agency
  category: 'Web' | 'Mobile' | 'Custom' | 'AI';
  imageUrl: string;
  gallery?: string[];
  features: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface JournalArticle {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export type ViewState = 
  | { type: 'home' }
  | { type: 'work' }
  | { type: 'services' }
  | { type: 'about' }
  | { type: 'pricing' }
  | { type: 'project', project: Project };
