import Link from 'next/link';
import Image from 'next/image';
import {
  BlogIcon,
  GitHubIcon,
  LinkedInIcon
} from 'components/icons';
import { name, about, bio, avatar } from 'lib/info';
import { skills } from 'lib/skills';

export const revalidate = 60;

export default async function HomePage() {

  return (
    <section>
      <div className='flex justify-between items-center mb-10'>
        <h1 className="font-bold text-3xl font-serif">{name}</h1>
        <button className=' bg-neutral-800 px-4 py-2 text-sm rounded-md hover:bg-neutral-500'>
          Download CV
        </button>
      </div>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={name}
          className="rounded-full grayscale"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/DeepKarmakar"
            className="flex items-center gap-2"
          >
            <GitHubIcon />
            <p>20 projects on github</p>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/DeepKarmakar"
            className="flex items-center gap-2"
          >
            <LinkedInIcon />
            <p>Professional Profile</p>
          </a>
          <Link href="/blog" className="flex items-center">
            <BlogIcon />
             <p className='ml-2'>10 blogs written</p>
          </Link>
        </div>
      </div>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>
      <div className='mt-8'>
        <h3 className='font-serif text-xl mb-3'>Skills</h3>
        <ul className='flex gap-2 flex-wrap'>
          {
            skills.map((skill, index) => {
              return (
                <li key={index} className="px-4 rounded-md py-2 bg-neutral-800">{skill}</li>
              )
            })
          }
        </ul>
      </div>
      
    </section>
  );
}
