import { css } from "@emotion/react";
import type { FC } from "react";
import { useEffect, useRef, useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { MdFullscreen as FullscreenIcon } from "react-icons/md";
import { QRButton } from "./Qr";
import { Terminal } from 'xterm';
// import { WebLinksAddon } from 'xterm-addon-web-links';
import { FitAddon } from 'xterm-addon-fit';
// import { SearchAddon } from 'xterm-addon-search';
import { SerializeAddon } from "xterm-addon-serialize";
const serializeAddon = new SerializeAddon();
const fitAddon = new FitAddon();
const origConsole = console.log;

var terminal = new Terminal({allowProposedApi: true, allowTransparency: true, altClickMovesCursor: true});

terminal.loadAddon(serializeAddon);
terminal.termOff= () => console.log = origConsole;


// terminal.loadAddon(new WebLinksAddon());
terminal.loadAddon(fitAddon);
Object.assign(globalThis, {terminal})
// Import { useSpring, a } from '@react-spring/web'

import { Fab, ToggleButton, ToggleButtonGroup } from "./mui";

import { Phone, Share, Tablet, Tv } from "./icons";
import { sendChannel, startVideo } from "ws";

const breakPoints = [680, 768, 1920];
const breakPointHeights = [1137, 1024, 1080];

const sizes = [10, 25, 50, 75, 100];

const bg = `rgba(${Math.random() * 128 + 64}, ${Math.random() * 128 + 64}, ${
  Math.random() * 128 + 64
}, ${!navigator.userAgent.includes("Firefox") ? 0.3 : 0.7})`;

type DraggableWindowProps = {
  // OnRestore: (() => void);
  hashCode: number;
  position?: string;
  room: string;
  children: JSX.Element;
};

export const DraggableWindow: FC<DraggableWindowProps> = (
  {
    children,
    // OnRestore,
    room,
    // HashCode,
  },
) => {
  const [scaleRange, changeScaleRange] = useState(100);

  const startPositions = { bottom: 0, right: 0 };

  const [{ bottom, right }, setPositions] = useState(startPositions);
  const [width, setWidth] = useState(window.innerWidth * devicePixelRatio);
  const [height, setHeight] = useState(window.innerHeight * devicePixelRatio);
  const videoRef = useRef<HTMLVideoElement>(null);

  const scale = scaleRange / 100;

  // UseEffect(()=> {

  //   ref.current?.appendChild(document.getElementById("root")!)

  // }
  //   , [ref]);

 const terminalRef =  useRef(null);



 useEffect(() => {
  if (!terminalRef?.current) return;




  terminal.open(terminalRef.current)
  fitAddon.activate(terminal)
  fitAddon.fit();

  globalThis.terminal.ON = ()=>{


    console.log = (...data) => {
     const params = data.map (d=> typeof d === "object"? JSON.stringify(d, null, 2): d);
      terminal.write(params.join(" - ") + "\r\n");
      origConsole.apply(console, data);
    }
   return ()=> console.log = origConsole;
  }
 }, [terminalRef]);

  useEffect(() => {
    const reveal = async () => {
      setPositions({
        bottom: window.innerHeight * 0.2,
        right: window.innerWidth * 0.2,
      });

      if (window.innerWidth / devicePixelRatio < 600) {
        changeScaleRange(50);
        setWidth(breakPoints[0]);
        setHeight(breakPointHeights[0]);
      }

      if (window.innerWidth / devicePixelRatio < 1200) {
        changeScaleRange(100);
        setWidth(breakPoints[0]);
        setHeight(breakPointHeights[0]);
      } else if (window.innerWidth / devicePixelRatio < 1800) {
        setWidth(breakPoints[1]);
        setHeight(breakPointHeights[1]);

        changeScaleRange(50);
      } else if (window.innerWidth / devicePixelRatio < 2500) {
        setWidth(breakPoints[1]);
        setHeight(breakPointHeights[1]);

        changeScaleRange(75);
      } else if (window.innerWidth / devicePixelRatio > 2500) {
        setWidth(breakPoints[1]);
        setHeight(breakPointHeights[1]);

        changeScaleRange(100);
      }

      setPositions({
        bottom: 20,
        right: 20,
      });
    };

    reveal();
    // SetTimeout(reveal, 200);
  }, []);

  const c = window.getComputedStyle(
    document.body,
    null,
  ).getPropertyValue("background-color")
    .slice(4, -1).split(",")
    .slice(0, 3)
    .map((x) => Number(x) || "0").join(",");

  const [bgCV, setBG] = useState(c);

  useEffect(() => {
    setInterval(() => {
      const c = window.getComputedStyle(
        document.body,
        null,
      ).getPropertyValue("background-color")
        .slice(4, -1).split(",")
        .slice(0, 3)
        .map((x) => Number(x) || "0").join(",");
 
      if (c !== bgCV) setBG(c);
    }, 1000 / 2);
  }, []);

  const [clients, setClients] = useState(Object.keys(sendChannel.rtcConns));

  useEffect(() => {
    setClients([...Object.keys(sendChannel.rtcConns)]);
  }, [sendChannel.webRtcArray.length, setClients]);

  return (
    <LayoutGroup>
    
      <motion.div
        transition={{ delay: 0, duration: 0.4 }}
        initial={{
          top: 0,
          padding: 0,
          right: 0,
          borderRadius: 0,
        }}
        animate={{
          top: bottom,
          padding: 8,
          right,
          borderRadius: 16,
        }}
        css={css`
            touch-action: pinch-zoom;
            background-color: ${bg};
            backdrop-filter: blur(15px);
            z-index: 10;

            white-space: normal;
            position: fixed;
          `}
        drag={true}
        dragMomentum={false}
        dragConstraints={{
          left: 0,
          right: width - 20 - width / 6,
          bottom: innerHeight,
        }}
        dragElastic={0.5}
      >
        <div
          css={css` 
              display: flex;
              
                `}
        >
          <div
            css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
          `}
          >
            <motion.div
              transition={{ delay: 0, duration: 0.4 }}
              initial={{ height: 0, width: 0 }}
              animate={{ height: "auto", width: "auto" }}
            >
              <ToggleButtonGroup
                value={scaleRange}
                size="small"
                exclusive
                onChange={(_e: unknown, newScale: number) => {
                  newScale && changeScaleRange(newScale);
                }}
              >
                {sizes.map((size, ind) => (
                  <ToggleButton
                    key={ind}
                    value={size}
                  >
                    <span
                      css={css`
                       color: ${
                        size === scaleRange
                          ? "rgba(255,255,255,.8)"
                          : "rgba(0,0,0,.3)"
                      };
                       `}
                    >
                      {size}%
                    </span>
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </motion.div>
            {/* <span>{width}*{height}</span> */}

            <motion.div
              transition={{ delay: 0, duration: 0.4 }}
              initial={{
                width: window.innerWidth,
                height: window.innerHeight,
                borderRadius: 0,
                // Opacity: isFullScreen ? 1 : 0.7,
              }}
              animate={{
                width: width * scale / devicePixelRatio,
                height: height * scale / devicePixelRatio,
                borderRadius: 8,
                // Opacity: isFullScreen ? 1 : 0.7,
              }}
              css={css`

                display: block;
                overflow: hidden;
                overflow-y: hidden;
            `}
            >
              <motion.div
                transition={{ delay: 0, duration: 0.4 }}
                initial={{
                  width: window.innerWidth,
                  height: window.innerHeight,
                  background: "rgba(0,0,0, 1)",
                  scale: 1,
                }}
                animate={{
                  background: "rgba(" + bgCV + ", 0.5)",
                  transformOrigin: "0px 0px",
                  width: width / devicePixelRatio,
                  height: height / devicePixelRatio,
                  scale: scaleRange / 100,
                }}
                data-test-id="z-body"
                css={css`
                  overflow:overlay;
                  overflow-y: hidden;
              `}
              >
                {children}
              </motion.div>
              <div css={css`   
              position: relative;
              
              `}>
              <div css={css`
              height: 240px;
              width: ${width/devicePixelRatio}px;
              display: block;
              border-radius: 0 0 8px 8px;
              top: -240px;
              opacity: 0.5;
              background: rgba(84,24,24,.8);
              position: absolute;
              `} ><div  ref={terminalRef} /></div></div>
            </motion.div>
            <motion.div
              transition={{ delay: 0, duration: 0.4 }}
            >
              <ToggleButtonGroup
                value={width}
                size="small"
                exclusive
                onChange={(_e: unknown, newSize: number) => {
                  if (newSize) {
                    setHeight(breakPointHeights[breakPoints.indexOf(newSize)]);
                    setWidth(newSize);
                  }
                }}
              >
                {breakPoints.map((size, ind) => (
                  <ToggleButton
                    key={ind}
                    value={size}
                  >
                    {size === 680
                      ? (
                        <span
                          css={css`
                        color: ${
                            width === 680
                              ? "rgba(255,255,255,.8)"
                              : "rgba(0,0,0,.3)"
                          };
                        `}
                        >
                          <Phone />
                        </span>
                      )
                      : (size === 768
                        ? (
                          <span
                            css={css`
                        color: ${
                              width === 768
                                ? "rgba(255,255,255,.8)"
                                : "rgba(0,0,0,.3)"
                            };
                        `}
                          >
                            <Tablet />
                          </span>
                        )
                        : (
                          <span
                            css={css`
                        color: ${
                              width === 1920
                                ? "rgba(255,255,255,.8)"
                                : "rgba(0,0,0,.3)"
                            };
                      `}
                          >
                            <Tv />
                          </span>
                        ))}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </motion.div>
          </div>

          <motion.div
            transition={{ delay: 0, duration: 0.4 }}
            initial={{ height: 0, width: 0 }}
            animate={{ height: "100%", width: "auto" }}
          >
            <div
              css={css`
              padding: 16px;
              display: flex;
              overflow: "hidden";
              align-items: center;          
              flex-direction: column;
              `}
            >
              <Fab
                key="fullscreen"
                onClick={() => {
                  document.querySelector("#root")?.requestFullscreen();
                }}
              >
                <span
                  css={css`
                font-size: 20pt;
              `}
                >
                  <FullscreenIcon key="fs" />
                </span>
              </Fab>

              <QRButton
                url={location.origin + `/live/${room}/public`}
              />

              {
                /* <Fab
                key="video"
                onClick={() => open(`/live/${room}/public`)}
              >
                <Share />
              </Fab> */
              }

              {false && (
                <>
                  <video
                    ref={videoRef}
                    onClick={() => startVideo(videoRef.current!)}
                    playsInline={true}
                    autoPlay={true}
                  >
                  </video>
                  {clients.map((k, index) => (
                    <video
                      id={`video-${k}`}
                      key={index}
                      ref={videoRef}
                      playsInline={true}
                      autoPlay={true}
                    >
                    </video>
                  ))}
                </>
              )}
              <Fab
                key="Share"
                onClick={() => open(`/live/${room}/public`)}
              >
                <Share />
              </Fab>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </LayoutGroup>
  );
};

export default DraggableWindow;

