"use client";
const Footer = () => {
  return (
    <div className="bg-[#F5F3ECE0]">
      <div className="px-6 sm:px-10 lg:px-16 py-28 lg:py-40 text-center relative overflow-hidden ">
        <div className="flex flex-col items-center text-center gap-5">
          <p className=" text-sm text-[#8A8880]">OPEN TO OPPORTUNITIES</p>
          <h2 className="font-display text-2xl text-[#0A0A0A] mt-2 text-[64px]">
            Say hello.{" "}
            <em className="block italic text-[#8A8880]">
              I always write back.
            </em>
          </h2>
          <a
            href="ohianisammy2005@gmail.com"
            className="no-underline border-b mt-5 tracking-widest text-[#8A8880] text-2xl border-[#333] pb-px transition-colors duration-200 hover:text-[#0A0A0A]"
          >
            ohiani.samuel.@gmail.com
          </a>

          <div className="flex gap-9 mt-9">
            <a
              href="https://github.com/samohiani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8A8880] hover:text-[#0A0A0A]"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/samuel-ohiani/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8A8880] hover:text-[#0A0A0A]"
            >
              LinkedIn
            </a>
            <a
              href="ohianisammy2005@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8A8880] hover:text-[#0A0A0A]"
            >
              Email <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t-[0.1px] border-[#363535]/20 p-8 flex justify-between">
        <button
          type="button"
          onClick={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="text-[#8A8880] text-[0.78rem] text-left"
        >
          © 2026 Samuel Ohiani
        </button>
        <a href="#" className="text-[#8A8880] text-[0.78rem]">
          Thanks for viewing ♥︎
        </a>
      </div>
    </div>
  );
};

export default Footer;
