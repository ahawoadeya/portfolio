import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si'

export const links = [
  {
    id: 1,
    url: '#about',
    text: 'about',
  },
  {
    id: 2,
    url: '#skills',
    text: 'skills',
  },
  {
    id: 3,
    url: '#qualification',
    text: 'qualification',
  },
  // {
  //   id: 4,
  //   url: '#portfolio',
  //   text: 'portfolio',
  // },
  {
    id: 5,
    url: '#contact',
    text: 'contact',
  },
  
];

export const social = [
  {
    id: 1,
    url: 'https://www.linkedin.com/in/ambroseahawo/',
    icon: <FaLinkedin />,
    cName: "linkedin-logo"
  },
  {
    id: 2,
    url: 'https://twitter.com/ambroseahawo',
    icon: <FaTwitter />,
    cName: "twitter-logo"
  },
  {
    id: 3,
    url: 'https://www.instagram.com/ambroseahawo/',
    icon: <FaInstagram />,
    cName: "instagram-logo"
  },
  {
    id: 4,
    url: 'https://www.upwork.com/freelancers/~017699aababbb97cdb',
    icon: <SiUpwork />,
    cName: "up-logo"
  },
  {
    id: 5,
    url: 'https://www.youtube.com/channel/UC_rW0Lkax1-XXZIZ7n9nJYg',
    icon: <FaYoutube />,
    cName: "youtube-logo"
  },
];
