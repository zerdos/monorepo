/** @jsx jsx */

import Fab from "@material-ui/core/Fab";
import ToggleButton from "@material-ui/core/ToggleButton";
import ToggleButtonGroup from "@material-ui/core/ToggleButtonGroup";
import QrCode from "@material-ui/icons/QrCode";
import Share from "@material-ui/icons/Share";

import Tablet from "@material-ui/icons/TabletAndroid";
import Tv from "@material-ui/icons/Tv";
import Phone from "@material-ui/icons/PhoneAndroid";

import { css, jsx, motion, QR, React, render } from "./renderer";

const breakPoints = [640, 1024, 1920];

const sizes = [10, 25, 50, 75, 100];

interface DraggableWindowProps {
  onShare: () => void;
  session: {
    url: string;
  };
  position?: string;
}

export const DraggableWindow: React.FC<DraggableWindowProps> = (
  { onShare, position, session, children },
) => {
  const [showQR, setQR] = React.useState(false);
  const [scaleRange, changeScaleRange] = React.useState(75);
  const [height, changeHeight] = React.useState(innerHeight);

  const [width, setWidth] = React.useState(breakPoints[1]);
  const ref = React.useRef<HTMLDivElement>(null);
  const zbody = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    window.addEventListener("resize", () => changeHeight(innerHeight));
  });

  const scale = scaleRange / 100;

  return (
    <motion.div
      ref={ref}
      css={css`
            right: 20px;
            background-color:rgba(54, 93, 152, 0.8);
            backdrop-filter: blur(10px);
            top: 20px;
            padding: 0px 0px 0px 16px;
            border-radius: 16px;
            white-space: normal;
            position: ${position ? position : "fixed"};
          `}
      dragElastic={0.5}
      dragMomentum={false}
      drag={true}
    >
      <div css={{ display: "flex" }}>
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ToggleButtonGroup
            value={scaleRange}
            size="small"
            exclusive
            color="white"
            onChange={(_e, newScale) => newScale && changeScaleRange(newScale)}
          >
            {sizes.map((size) =>
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
                  }`}
                >
                  {size}%
                </span>
              </ToggleButton>
            )}
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
            <motion.div
              animate={{
                transformOrigin: "top left",
                width: width / devicePixelRatio,
                height: height,
                scale,
              }}
              css={`
                  overflow:overlay;
                  >div{
                    width:100%;
                    height:100%;
                    overflow: overlay;
                    background: white;
                  }
              `}
            >
              <div
                id="zbody"
                ref={zbody}
              >
                {children}
              </div>
            </motion.div>
          </motion.div>
          <ToggleButtonGroup
            value={width}
            size="small"
            exclusive
            onChange={(_e, newSize) => newSize && setWidth(newSize)}
          >
            {breakPoints.map((size) =>
              <ToggleButton
                key={size}
                value={size}
              >
                {size === 640
                  ? <Phone
                    css={`color: ${
                      width === 640 ? "rgba(255,255,255,.8)" : "rgba(0,0,0,.3)"
                    }`}
                  />
                  : size === 1024
                  ? <Tablet
                    css={`color: ${
                      width === 1024 ? "rgba(255,255,255,.8)" : "rgba(0,0,0,.3)"
                    }`}
                  />
                  : <Tv
                    css={`color: ${
                      width === 1920 ? "rgba(255,255,255,.8)" : "rgba(0,0,0,.3)"
                    }`}
                  />}
              </ToggleButton>
            )}
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
          <motion.div
            animate={{
              width: showQR ? 220 : 0,
              height: showQR ? 240 : 0,
            }}
            onClick={(e) => {
              setQR(!showQR);
            }}
          >
            {showQR && <QR url={session.url + "edit/"} />}
          </motion.div>

          <div css="margin:0px 0px 16px">
            <Fab
              variant="extended"
              color="secondary"
              onClick={() => {
                setQR(!showQR);
              }}
            >
              <QrCode />
            </Fab>
          </div>

          <div>
            <Fab
              variant="extended"
              color="primary"
              onClick={() => {
                onShare();
              }}
            >
              <Share />
            </Fab>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface IRenderProps extends DraggableWindowProps {
  children: React.ReactNode;
}

export const renderDraggableWindow = (
  props: IRenderProps,
  element: HTMLElement,
) =>
  render(
    <DraggableWindow {...props}>{props.children}</DraggableWindow>,
    element,
  );
