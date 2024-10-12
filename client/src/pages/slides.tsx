import { Chat } from "@/components/chat";
import { NextPage } from "next";
import dynamic from "next/dynamic";
const SlidesComponent = dynamic(() => import("../components/slides.js"), { ssr: false });

const Slides: NextPage = () => {
  return (
    <div className="h-[max(100%,calc(100dvh-200px)] flex">
      <SlidesComponent />
      {/* <Chat /> */}
    </div>
  );
};

export default Slides;