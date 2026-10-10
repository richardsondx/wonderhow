"use client";

import { useRouter } from "next/navigation";
import { use } from "react";
import ExplainerPlayer from "../../../components/ExplainerPlayer";
import { getExplainer, getScene, audioUrl } from "../../../lib/registry";

export default function ExplorePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const router = useRouter();
  const def = getExplainer(slug);
  const Scene = getScene(slug);

  if (!def || !Scene) {
    return (
      <div className="ask-page">
        <div className="ask-wrap">
          <div className="ask-error">Hmm, I cannot find that story. Let us pick another one!</div>
          <br />
          <button className="wh-btn" onClick={() => router.push("/")}>Back home</button>
        </div>
      </div>
    );
  }

  return (
    <ExplainerPlayer
      title={def.title}
      question={def.question}
      theme={def.theme}
      icon={def.icon}
      steps={def.steps}
      Scene={Scene}
      audioFor={(i) => audioUrl(def.slug, i)}
      onExit={() => router.push("/")}
    />
  );
}
