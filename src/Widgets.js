import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <iframe
        title="test iframe"
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Flalsalu.page%2Fposts%2F3305421609553663&show_text=true&width=340&appId=224447881643903&height=498"
        width="340"
        style={{ border: "none", overflow: "hidden" }}
        height="500"
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}

export default Widgets;
