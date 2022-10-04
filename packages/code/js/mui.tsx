// export {default as Fab} from "@mui/material/Fab/Fab"
// export {default as ToggleButtonGroup} from "@mui/material/ToggleButtonGroup/ToggleButtonGroup"
// export {default as ToggleButton} from "@mui/material/ToggleButton/ToggleButton"

import {Suspense, lazy} from "react";

import type {
  Fab as MuiFab,
    ToggleButton as MuiToggleButton,
    ToggleButtonGroup as MuiToggleButtonGroup,
  } from "@mui/material";
  // import type{ ReactNode } from "react";
//   
//   const ToggleButtonGroup = muiToggleButtonGroup as typeof MuiToggleButtonGroup;
//   const ToggleButton = muiToggleButton as typeof MuiToggleButton;

const FabLazy = lazy(()=>import("@mui/material/Fab"))
export const Fab: typeof MuiFab = (props)=> <Suspense><FabLazy {...props}></FabLazy></Suspense>

const ToggleButtonLazy = lazy(()=>import("@mui/material/ToggleButton"));
export const ToggleButton: typeof MuiToggleButton = (props) => <Suspense><ToggleButtonLazy {...props} /></Suspense>

const ToggleButtonGroupLazy = lazy(()=>import("@mui/material/ToggleButtonGroup"));
export const ToggleButtonGroup: typeof MuiToggleButtonGroup  = (props) => <Suspense><ToggleButtonGroupLazy {...props}/></Suspense>
