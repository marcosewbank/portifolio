import React from "react";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import {
  DiReact,
  DiTerminalBadge,
  DiVisualstudio,
  DiMarkdown,
  DiSass,
  DiJavascript1,
  DiHtml5,
  DiGit,
  DiCss3,
  DiCode,
} from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { useTheme } from "next-themes";

export const Parallax = () => {
  const { theme } = useTheme();

  console.log("🚀 ~ file: Parallax.tsx ~ line 23 ~ Parallax ~ theme", theme);

  return (
    <>
      <MouseParallaxContainer
        containerStyles={{
          width: "100%",
          display: "grid",
          height: "100px",
          alignItems: "center",
          justifyContent: "space-evenly",
          gridTemplateColumns:
            "auto auto auto auto auto auto auto auto auto auto auto",
        }}
        resetOnLeave
      >
        <MouseParallaxChild
          factorX={0.03}
          factorY={0.1}
          updateStyles={{
            background:
              theme === "light"
                ? "url(https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"
                : "url(https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
            backgroundPositionY: theme === "light" ? "35%" : "60%",
            transform: "scale(1.1)",
            position: "absolute",
            filter: "blur(2px) brightness(50%)",
            backgroundSize: "auto",
            backgroundRepeat: "repeat",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
          }}
        />
        <MouseParallaxChild
          factorX={0.05}
          factorY={0.05}
          updateStyles={{
            filter: "invert(1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "auto",
            height: "100%",
          }}
        >
          <DiCode size={50} />
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.05}
          factorY={0.05}
          updateStyles={{
            filter: "invert(1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "auto",
            height: "100%",
          }}
        >
          <DiTerminalBadge size={50} />
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.05}
          factorY={0.05}
          updateStyles={{
            filter: "invert(1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "auto",
            height: "100%",
          }}
        >
          <DiVisualstudio size={50} />
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.05}
          factorY={0.05}
          updateStyles={{
            filter: "invert(1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "auto",
            height: "100%",
          }}
        >
          <DiMarkdown size={50} />
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.05}
          factorY={0.05}
          updateStyles={{
            filter: "invert(1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "auto",
            height: "100%",
          }}
        >
          <DiHtml5 size={50} />
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.05}
          factorY={0.05}
          updateStyles={{
            filter: "invert(1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "auto",
            height: "100%",
          }}
        >
          <DiCss3 size={50} />
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.05}
          factorY={0.05}
          updateStyles={{
            filter: "invert(1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "auto",
            height: "100%",
          }}
        >
          <DiSass size={50} />
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.05}
          factorY={0.05}
          updateStyles={{
            filter: "invert(1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "auto",
            height: "100%",
          }}
        >
          <DiJavascript1 size={50} />
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.05}
          factorY={0.05}
          updateStyles={{
            filter: "invert(1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "auto",
            height: "100%",
          }}
        >
          <SiTypescript size={50} />
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.05}
          factorY={0.05}
          updateStyles={{
            filter: "invert(1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "auto",
            height: "100%",
          }}
        >
          <DiReact size={50} />
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.05}
          factorY={0.05}
          updateStyles={{
            filter: "invert(1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "auto",
            height: "100%",
          }}
        >
          <DiGit size={50} />
        </MouseParallaxChild>
      </MouseParallaxContainer>
    </>
  );
};
