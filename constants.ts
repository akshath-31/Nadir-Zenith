/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Project, JournalArticle, Product } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'pr1',
    name: 'Aether Platform',
    tagline: 'Global Logistics Redefined.',
    description: 'A high-performance dashboard for real-time supply chain orchestration.',
    longDescription: 'Aether is a bespoke enterprise solution designed for multi-national logistics. Built with React and Go, it handles millions of data points per second, providing predictive analytics and seamless warehouse integration. The platform provides a 360-degree view of global operations, allowing for proactive decision-making and unprecedented efficiency in the supply chain.',
    category: 'Web',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600',
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200'
    ],
    features: ['Real-time Tracking', 'AI Predictions', 'Cloud Native']
  },
  {
    id: 'pr2',
    name: 'Zenith Mobile',
    tagline: 'The Future of Fintech.',
    description: 'A cross-platform mobile application for seamless wealth management.',
    longDescription: 'Zenith Mobile combines rigorous security with an effortless user interface. Featuring biometric authentication and instant asset swapping, it brings institutional-grade finance to the palm of your hand.',
    category: 'Mobile',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000',
    features: ['Biometric Auth', 'Multi-chain Support', 'Low Latency']
  },
  {
    id: 'pr3',
    name: 'Nadir Neural',
    tagline: 'Intelligence at Scale.',
    description: 'Custom LLM integration for automated customer intelligence.',
    longDescription: 'We built a private, fine-tuned model for a Tier-1 retailer to handle complex support queries. The result was a 40% reduction in support costs and a 25% increase in customer satisfaction scores.',
    category: 'AI',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    features: ['Custom Finetuning', 'On-prem Deployment', 'High Accuracy']
  },
  {
    id: 'pr4',
    name: 'Elysian Hub',
    tagline: 'Smart Home Central.',
    description: 'An IoT ecosystem for sustainable luxury living.',
    longDescription: 'Elysian integrates thousands of sensors into a unified, privacy-first interface. It optimizes energy consumption while maintaining the ultimate comfort for high-end residential complexes. Using cutting-edge edge computing, the system learns occupant behavior to create a living environment that is both intelligent and invisible.',
    category: 'Custom',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600',
    gallery: [
      'https://images.unsplash.com/photo-1558002038-103792e073dc?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200'
    ],
    features: ['IoT Integration', 'Energy Analytics', 'Edge Computing']
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Zenith Audio Sphere',
    category: 'Audio',
    price: 599,
    description: 'Immersive sound architecture.',
    longDescription: 'The Zenith Audio Sphere redefines sonic boundaries with spatial audio technology and a hand-polished aluminum chassis.',
    imageUrl: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&q=80&w=1000',
    features: ['Spatial Sound', 'Hand-polished Aluminum', 'Wireless Link']
  },
  {
    id: 'p2',
    name: 'Aether Chronograph',
    category: 'Wearable',
    price: 399,
    description: 'Precision timekeeping for the modern era.',
    longDescription: 'A minimalist masterpiece that balances traditional watchmaking with modern sensors for the ultimate performance tracking.',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000',
    features: ['Titanium Case', 'Biometric Sensors', '7-Day Battery']
  },
  {
    id: 'p3',
    name: 'Nadir Glass V3',
    category: 'Mobile',
    price: 1299,
    description: 'Augmented reality in its purest form.',
    longDescription: 'The Zenith of mobile displays. A 2000-nit panel wrapped in structural glass for unparalleled clarity and durability.',
    imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=1000',
    features: ['Structural Glass', 'Neural Processor', '8K Video']
  },
  {
    id: 'p4',
    name: 'Elysian Smart Hub',
    category: 'Home',
    price: 249,
    description: 'Sustainable luxury living ecosystem.',
    longDescription: 'The heart of your smart home. Integrates seamlessly with your environment to optimize comfort and energy usage.',
    imageUrl: 'https://images.unsplash.com/photo-1558002038-103792e073dc?auto=format&fit=crop&q=80&w=1000',
    features: ['IoT Integration', 'Privacy-First', 'Edge Computing']
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
    {
        id: 1,
        title: "The Architecture of Ascension",
        date: "May 2025",
        excerpt: "Why digital performance is the new brand differentiator.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
        content: React.createElement(React.Fragment, null,
            React.createElement("p", { className: "mb-6 text-slate-400" },
                "Ascension is not a destination, but a state of continuous optimization. In the digital realm, this means removing friction until only the experience remains."
            )
        )
    }
];

export const BRAND_NAME = 'Nadir to Zenith';
export const PRIMARY_ACCENT = '#00f2ff';
export const BG_DARK = '#0a0a0b';
