import { useState, useEffect } from 'react';
import Link from 'next/link';
import { API } from 'aws-amplify';
import { listPosts } from '../graphql/queries';
export default function Home() {
  return (
    <div className=''>
      <h1 className='bg-red-500'>hello</h1>
    </div>
  );
}
