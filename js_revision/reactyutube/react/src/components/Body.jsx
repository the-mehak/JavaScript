import { Link } from "react-router-dom";

export function Body() {
  return (
    <>
      <div className="w-screen h-screen font-sans  bg-slate-300 ">
        <div>
          <nav className=" flex bg-blue-300 justify-between items-center gap-50  p-5   ">
            <h2 className=" ml-32 text-5xl">logo</h2>
            <div className="flex gap-30 text-2xl">
              <Link to={"/resume"}>Resume</Link>
              <Link to={"/projects"}>Projects</Link>
              <Link to={"/about"}>About us</Link>
              <Link to={"/contact"} className="mr-10">
                Contact us
              </Link>
            </div>
          </nav>
        </div>
        <section className="text-black-300 text-center  mt-30 text-3xl">
          <h1>home component</h1>
        </section>
      </div>
    </>
  );
}
