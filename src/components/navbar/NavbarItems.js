import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

export const links = [
  {
    id: 1,
    url: '#about',
    text: 'about',
  },
  {
    id: 2,
    url: '#resume',
    text: 'resume',
  },
  {
    id: 3,
    url: '#porfolio',
    text: 'portfolio',
  },
  {
    id: 4,
    url: '#contact',
    text: 'contact',
  },
  
];

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
    cName: "linkedin-logo"
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
    cName: "twitter-logo"
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaInstagram />,
    cName: "instagram-logo"
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
    cName: "fb-logo"
  },
];
