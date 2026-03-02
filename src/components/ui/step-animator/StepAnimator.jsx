import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function StepAnimator({ step, direction = "next", children }) {
  const containerRef = useRef(null);
  const [renderedStep, setRenderedStep] = useState(step);
  const [phase, setPhase] = useState("idle");
  const [dir, setDir] = useState(direction);
  const ghostRef = useRef(null);
  const [prevContent, setPrevContent] = useState(null);

  useEffect(() => {
    if (step === renderedStep) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: orchestrated multi-state animation sequence
    setDir(direction);
    setPrevContent(children(renderedStep));
    setPhase("leave");
    const leaveTimeout = setTimeout(() => {
      setRenderedStep(step);
      setPhase("enter");
    }, 300);

    const enterTimeout = setTimeout(() => {
      setPhase("idle");
      setPrevContent(null);
    }, 300 + 500);

    return () => {
      clearTimeout(leaveTimeout);
      clearTimeout(enterTimeout);
    };
  }, [step, renderedStep, direction, children]);

  useLayoutEffect(() => {
    const el = containerRef.current;
    const ghost = ghostRef.current;
    if (!el || !ghost || phase === "idle") return;

    const from = el.getBoundingClientRect().height;
    const to = ghost.getBoundingClientRect().height;

    el.style.height = `${from}px`;
    el.getBoundingClientRect();
    el.style.transition = "height 500ms cubic-bezier(0.4, 0, 0.2, 1)";
    el.style.height = `${to}px`;

    const reset = () => {
      el.style.transition = "";
      el.style.height = "auto";
    };
    const timeoutId = setTimeout(reset, 520);
    return () => clearTimeout(timeoutId);
  }, [renderedStep, phase]);

  return (
    <div className="relative">
      <div ref={containerRef} className="min-h-[220px] relative overflow-hidden">
        {phase === "leave" && prevContent && (
          <div
            className="absolute inset-0 z-10"
            style={{
              pointerEvents: "none",
              animation: "fadeSlideOut 300ms ease forwards",
              "--x-to": dir === "next" ? "-20px" : "20px",
            }}
          >
            {prevContent}
          </div>
        )}

        <div ref={ghostRef} className="invisible absolute -z-10">
          {children(step)}
        </div>

        <div
          style={{
            "--x-from": dir === "next" ? "20px" : "-20px",
            ...(phase === "enter"
              ? { animation: "fadeSlideIn 500ms ease forwards" }
              : {}),
            ...(phase === "leave" ? { opacity: 0 } : {}),
          }}
          className="relative"
        >
          {children(step)}
        </div>
      </div>
    </div>
  );
}
