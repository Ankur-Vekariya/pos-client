import { useRef, useEffect } from "react";

const ResponsiveHeight = () => {
  let height = 0;

  height = useRef(window.innerHeight);

  return height;
};

const ResponsiveWidth = () => {
  let width = 0;

  width = useRef(window.innerWidth);

  return width;
};

export default function Responsive() {
  //   useEffect(() => {
  let height = ResponsiveHeight();
  let width = ResponsiveWidth();
  return { height, width };
  //   }, []);
}
