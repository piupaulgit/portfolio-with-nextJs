import { ArrowIcon, GitHubIcon, LinkedInIcon, StackOverflowIcon } from "components/icons";
import { Tab, Tabs } from "components/Tabs";

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        A talented and detail-oriented UI Developer with a passion for creating
        visually stunning and user-friendly interfaces. With a strong background
        in design principles and front-end technologies.I have dedicated my
        career to crafting exceptional user experiences.
      </p>
      <hr className=" border-neutral-800"></hr>
      <div className="mt-6">
        <h2 className="font-bold text-2xl font-serif mb-10">
          Companies I worked with
        </h2>
        <Tabs>
          <Tab title="Delloite">
            <p className="text-sm">During my time at Deloitte, I served as a Frontend Developer, contributing to the development of cutting-edge web applications. I collaborated with cross-functional teams to translate design concepts into responsive and interactive user interfaces. I leveraged my expertise in HTML, CSS, JavaScript, react and various frontend frameworks to deliver high-quality solutions that met client requirements. Additionally, I actively participated in code reviews and continuous improvement initiatives to enhance the overall development process.</p>
            <h4 className=" font-serif mt-10">Technologies used</h4>
            <ul className="flex gap-3 mt-4">
              {
                ['html','css','javascript','typescript','react','node','okta','github'].map((item,index) => {
                  return (
                    <li key={index} className=" text-xs bg-neutral-800 rounded-sm py-1 px-2">{item}</li>
                  )
                })
              }
            </ul>
          </Tab>
          <Tab title="Genpact">
            <p className="text-sm">As a Frontend Developer at Genpact, I played a key role in creating visually appealing and intuitive user interfaces for web applications. I collaborated with designers and backend developers to implement responsive designs and optimize performance. I leveraged my expertise in JavaScript, angular, typescript and frontend frameworks to deliver high-quality solutions that aligned with client objectives.</p>
            <h4 className=" font-serif mt-10">Technologies used</h4>
            <ul className="flex gap-3 mt-4">
              {
                ['html','css','javascript','typescript','react','node','okta','github'].map((item,index) => {
                  return (
                    <li key={index} className=" text-xs bg-neutral-800 rounded-sm py-1 px-2">{item}</li>
                  )
                })
              }
            </ul>
          </Tab>
          <Tab title="MJunction">
            <p className="text-sm">As a UI Developer at mjunction, I excelled in designing and developing visually captivating user interfaces for web applications. I collaborated closely with UX designers and frontend developers to ensure seamless integration of design concepts. Leveraging my expertise in HTML, CSS, and JavaScript, I delivered engaging and user-friendly interfaces that enhanced the overall user experience</p>
            <h4 className=" font-serif mt-10">Technologies used</h4>
            <ul className="flex gap-3 mt-4">
              {
                ['html','css','javascript','typescript','react','node','okta','github'].map((item,index) => {
                  return (
                    <li key={index} className=" text-xs bg-neutral-800 rounded-sm py-1 px-2">{item}</li>
                  )
                })
              }
            </ul>
          </Tab>
          <Tab title="Techmonastic">
            <p className="text-sm">As a Software Developer at Techmonastic, I contributed to the development of robust and scalable software solutions. I actively participated in the entire software development lifecycle, from requirements gathering to deployment and maintenance. Leveraging my skills in programming languages and frameworks, I consistently delivered high-quality code and collaborated effectively with cross-functional teams.</p>
            <ul className="flex gap-3 mt-4">
              {
                ['html','css','javascript','typescript','react','node','okta','github'].map((item,index) => {
                  return (
                    <li key={index} className=" text-xs bg-neutral-800 rounded-sm py-1 px-2">{item}</li>
                  )
                })
              }
            </ul>
          </Tab>
        </Tabs>
        <hr className=" border-neutral-800 py-6 mt-10"></hr>
        <div className="flex flex-col gap-2 md:flex-row md:gap-2">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/DeepKarmakar"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <GitHubIcon />
              <div className="ml-3">Github</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://in.linkedin.com/in/deep-karmakar-b4b0a914b"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <LinkedInIcon />
              <div className="ml-3">LinkedIn</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href=""
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <StackOverflowIcon />
              <div className="ml-3">StackOverflow</div>
            </div>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
