import {
  BsGithub as GithubIcon,
  BsPinterest as PinterestIcon,
  BsTwitter as TwitterIcon,
} from "react-icons/bs";
import EmailForm from "../components/organisms/EmailForm";

const page = () => {
  return (
    <main className="container mx-auto flex flex-col gap-5 items-center">
      <section>
        <ul className="flex justify-between w-36">
          <a href="https://twitter.com/Joun53498183" target="_blank">
            <li className="text-2xl hover:text-slate-600">
              <TwitterIcon />
            </li>
          </a>
          <a href="https://www.pinterest.co.kr/404joun" target="_blank">
            <li className="text-2xl hover:text-slate-600">
              <PinterestIcon />
            </li>
          </a>
          <a href="https://github.com/urbanscratcher" target="_blank">
            <li className="text-2xl hover:text-slate-600">
              <GithubIcon />
            </li>
          </a>
        </ul>
      </section>
      <section>
        <h2 className="font-bold">Email</h2>
        <EmailForm />
      </section>
    </main>
  );
};

export default page;
