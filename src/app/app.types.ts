import store from "./store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type Employee = { id: string; name: string; src: string; role: string };
export type SVGIcon = React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
export type DroneTypes = "idle" | "circle" | "helix" | "rocket" | "zoom" | "fly" | "z0";
export type ReactChildren = React.ReactNode | React.ReactNode[];
