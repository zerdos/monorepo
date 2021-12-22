/** @jsx jsx */

import { css, jsx } from "@emotion/react";

import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Button, Fab, ToggleButton, ToggleButtonGroup } from "./mui";
import Share from "./icons/Share.jsx";
import Tablet from "./icons/TabletAndroid.jsx";
import Tv from "./icons/Tv.jsx";
import Phone from "./icons/PhoneAndroid.jsx";
import { QRButton } from "./Qr.jsx";

import { motion } from "framer-motion";

// const {motion} = Motion;

const breakPoints = [640, 1024, 1920];

const sizes = [10, 25, 50, 75, 100];

interface DraggableWindowProps {
  onShare: () => void;
  onRestore: () => void;
  session: {
    i: number;
    url: string;
    html: string;
    errorText: string;
    children: any;
    room: string;
    setChild: any;
  };
  position?: string;
}

const LazySpikeLandComponent: React.FC<{ name: string }> = ({ name }) => {
  const Sanyi = lazy(() => generator(name));
  return (
    <Suspense fallback={<div></div>}>
      <Sanyi />
    </Suspense>
  );

  function generator(name: string) {
    // return import("./Qr")
    return import(`https://code.spike.land/api/room/${name}/js`);
  }
};

export const DraggableWindow: React.FC<DraggableWindowProps> = (
  { onShare, onRestore, position, session },
) => {
  const [isStable, setIsStable] = useState(false);
  const [scaleRange, changeScaleRange] = useState(75);
  const [height, changeHeight] = useState(innerHeight);
  const [childArray, setChild] = useState(
    session.children
      ? [session.children]
      : [<LazySpikeLandComponent name={session.room} />],
  );

  session.setChild = setChild;

  const [qrUrl, setQRUrl] = useState(session.url);
  const [errorText, setErrorText] = useState(" ");

  const [width, setWidth] = useState(breakPoints[1]);
  const ref = useRef<HTMLDivElement>(null);
  const zbody = useRef<HTMLDivElement>(null);

  const child = childArray[childArray.length - 1] || (
    <div>
      <h1>eyyy ha</h1>
    </div>
  );

  useEffect(() => {
    window.addEventListener("resize", () => changeHeight(window.innerHeight));
  });

  useEffect(() => {
    const handler = setInterval(() => {
      if (errorText !== session.errorText) {
        const newErr = session.errorText;
        setErrorText(newErr);
        setIsStable(false);
        setTimeout(() => {
          if (session.errorText === newErr) {
            setIsStable(true);
          }
        }, 2000);
      }
      if (qrUrl !== session.url) setQRUrl(session.url);
      // setChild(session.children);
    }, 200);

    return () => clearInterval(handler);
  }, [setErrorText, setQRUrl, errorText, qrUrl]);

  const scale = scaleRange / 100;

  return (
    <motion.div
      ref={ref}
      css={css`
            right: 20px;
            background-color:rgba(92 ,92, 152, 0.8);
            backdrop-filter: blur(10px);
            bottom: 20px;
            padding: 0px 0px 0px 16px;
            border-radius: 16px;
            white-space: normal;
            position: ${position ? position : "fixed"};
          `}
      dragElastic={0.5}
      dragConstraints={{
        left: 0,
        right: width - 20 - width / 6,
        top: -height + 100,
        bottom: innerHeight - 100,
      }}
      dragMomentum={false}
      drag={true}
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
          <ToggleButtonGroup
            value={scaleRange}
            size="small"
            exclusive
            onChange={(_e, newScale) => newScale && changeScaleRange(newScale)}
          >
            {sizes.map((size) => (
              <ToggleButton
                key={size}
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

          <motion.div
            animate={{
              width: width * scale / devicePixelRatio,
              height: height * scale,
            }}
            css={css`
              display: block;
              overflow: hidden;
              border-radius: 8px;
              opacity: 0.9;
           `}
          >
            {errorText.trim() !== "" && (
              <pre
                css={css`
                    position: absolute;
                    z-index:3;
                    color: rgb(255, 240, 240);
                    padding: 24px;
                    font-size: 14pt;
                    background-color: rgb(255, 0, 0);
                    flex: 0 0 auto;
                    overflow: auto;
                    margin: 0;
                    font-family: monospace;
                    white-space: pre-wrap;
                `}
              >
                {isStable && errorText.trim()}
                {isStable && errorText.trim() !== "" &&
                  (
                    <div
                      css={css`
                          text-align: right;
                        `}
                    >
                      <Button
                        variant="contained"
                        onClick={() => {
                          onRestore();
                          setErrorText("");
                        }}
                        color="primary"
                      >
                        Restore
                      </Button>
                    </div>
                  )}
              </pre>
            )}

            <motion.div
              animate={{
                transformOrigin: "0px 0px",
                width: width / devicePixelRatio,
                height: height,
                scale,
              }}
              css={css`
                  overflow:overlay;
                  >div{
                    width:100%;
                    height:100%;
                    overflow: overlay;
                    background: white;
                  }
              `}
            >
              {errorText
                ? <div dangerouslySetInnerHTML={createMarkup(session.html)} />
                : (
                  <Suspense fallback={<div>Error fallback</div>}>
                    <div
                      id="zbody"
                      key={session.i}
                      ref={zbody}
                    >
                      {child}
                    </div>
                  </Suspense>
                )}
            </motion.div>
          </motion.div>
          <ToggleButtonGroup
            value={width}
            size="small"
            exclusive
            onChange={(_e, newSize) => newSize && setWidth(newSize)}
          >
            {breakPoints.map((size) => (
              <ToggleButton
                key={size}
                value={size}
              >
                {size === 640
                  ? (
                    <Phone
                      css={css`
                        color: ${
                        width === 640
                          ? "rgba(255,255,255,.8)"
                          : "rgba(0,0,0,.3)"
                      };
                        `}
                    />
                  )
                  : size === 1024
                  ? (
                    <Tablet
                      css={css`
                        color: ${
                        width === 1024
                          ? "rgba(255,255,255,.8)"
                          : "rgba(0,0,0,.3)"
                      };
                        `}
                    />
                  )
                  : (
                    <Tv
                      css={css`
                        color: ${
                        width === 1920
                          ? "rgba(255,255,255,.8)"
                          : "rgba(0,0,0,.3)"
                      };
                      `}
                    />
                  )}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </div>

        <div
          css={css`
              display: flex;
              align-items: center;          
              flex-direction: column;
              padding: 16px;
              `}
        >
          <QRButton url={qrUrl} />

          <Fab
            variant="extended"
            color="primary"
            onClick={() => {
              onShare();
            }}
          >
            <Share />
          </Fab>
          <LazySpikeLandComponent name="sanyi" />
        </div>
      </div>
    </motion.div>
  );
};

function createMarkup(__html: string) {
  return { __html };
}
