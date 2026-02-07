const o = ({
  id: e,
  type: n = "primary",
  buttonType: t = "button",
  label: r
}) => n === "secondary" ? /* @__PURE__ */ React.createElement(
  "button",
  {
    id: e,
    type: t,
    className: "w-full h-auto px-4 py-2 rounded-lg text-center text-[14px] leading-[20px] text-[#2C3E50] bg-[#F5F7FA] border border-[#D5D8DC] hover:bg-[#EAECEE]"
  },
  r
) : /* @__PURE__ */ React.createElement(
  "button",
  {
    id: e,
    type: t
  },
  r
);
export {
  o as Button
};
