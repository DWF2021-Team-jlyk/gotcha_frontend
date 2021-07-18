import React from 'react';
import sanitizeHtml from 'sanitize-html';

export const sanitizeOption = {
  allowedTags: [
    'h1',
    'h2',
    'b',
    'i',
    's',
    'ul',
    'ol',
    'li',
    'blockquote',
    'a',
    'img',
  ],
  allowedAttributes: {
    a: ['href', 'name', 'target'],
    img: ['src'],
    li: ['class'],
  },
  allowedSchemes: ['data', 'http'],
};

export const removeHtml = (content) => {
  const filtered = sanitizeHtml(content, {
    allowedTags: [],
  });
  return filtered;
};
