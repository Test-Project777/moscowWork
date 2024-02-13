import React from 'react';
import Email from './ui/Email';
import './style.css';
import FeedBackForm from './ui/FeedBackForm';

export default function Contact(): JSX.Element {
  return (
    <div className="boxContact">
      <Email />
      <FeedBackForm />
    </div>
  );
}
