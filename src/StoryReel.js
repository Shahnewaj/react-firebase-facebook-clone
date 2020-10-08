import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyreel">
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Expn7398_%2839695069782%29.jpg/500px-Expn7398_%2839695069782%29.jpg"
        profileSrc="https://pickaface.net/gallery/avatar/unr_demo_181102_1037_17ut.png"
        title="shahnewaj Imran"
      />
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Bachalpsee_reflection.jpg/500px-Bachalpsee_reflection.jpg"
        profileSrc="https://pickaface.net/gallery/avatar/unr_demo_181102_1037_17ut.png"
        title="nishat sultana"
      />
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Levi%2C_Kittila_-_Finland_-_panoramio_-_aristidov_%287%29.jpg/500px-Levi%2C_Kittila_-_Finland_-_panoramio_-_aristidov_%287%29.jpg"
        profileSrc="https://pickaface.net/gallery/avatar/unr_demo_181102_1037_17ut.png"
        title="Dr Steven"
      />
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Galunggung.jpg/500px-Galunggung.jpg"
        profileSrc="https://pickaface.net/gallery/avatar/unr_demo_181102_1037_17ut.png"
        title="Forqan Sir "
      />
    </div>
  );
}

export default StoryReel;
