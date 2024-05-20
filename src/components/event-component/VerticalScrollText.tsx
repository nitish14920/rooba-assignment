// import React, { useRef, useEffect } from "react";

// interface UpwardScrollTextProps {
//   text: string;
//   speed?: number;
// }

// const UpwardScrollText: React.FC<UpwardScrollTextProps> = ({
//   text,
//   speed = 5,
// }) => {
//   const textRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const element = textRef.current;
//     if (!element) return;

//     const scrollText = () => {
//       const scrollAmount = (element.offsetHeight / 100) * speed;
//       element.scrollTop += scrollAmount;

//       if (element.scrollTop >= element.scrollHeight) {
//         element.scrollTop = 0;
//       }
//       requestAnimationFrame(scrollText);
//     };

//     requestAnimationFrame(scrollText);

//     return () => {
//       window.cancelAnimationFrame(requestAnimationFrame(scrollText));
//     };
//   }, [text, speed]);

//   return (
//     <div
//       ref={textRef}
//       style={{
//         height: "fit-content",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       <div style={{ display: "flex", flexDirection: "column-reverse" }}>
//         {text.split("").map((char, index) => (
//           <span key={index} style={{ display: "block" }}>
//             {char}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UpwardScrollText;

import React from "react";

const VerticalScrollText = () => {
  return (
    <div className="vertical-scroll-container">
      <div className="vertical-scroll-text">My name is Nitish</div>
    </div>
  );
};

export default VerticalScrollText;
