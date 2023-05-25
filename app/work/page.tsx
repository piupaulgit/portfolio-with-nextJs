import { ArrowIcon } from 'components/icons'
import { workContent } from 'content/workContent'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <section>
    <h1 className="font-bold text-3xl font-serif mb-5">Work</h1>
    <div className='flex gap-4'>
    {workContent
      .map((work) => (
        <Link
          key={work.title}
          className="flex gap-4 space-y-1 mb-10 flex-wrap border-[1px] border-neutral-800 p-5 w-[30%]"
          href={`/blog/${work.url}`}
        >
          <div className="w-full">
            <div className=' font-serif text-sm mb-2'>{work.title}</div>
            <div className='text-xs text-neutral-600'>{work.description}</div>
            <button className='text-xs underline flex gap-2 mt-4'>Live Demo <ArrowIcon></ArrowIcon></button>
          </div>
        </Link>
      ))}
    </div>
  </section>
  )
}

export default page