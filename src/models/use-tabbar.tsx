import React, { useState } from "react";
import { createModel } from "hox";

const useTabbar = () => {
  const [activeBar, setActiveBar] = useState("system-setting");

  return {
    activeBar,
    setActiveBar,
  };
};

export default createModel(useTabbar);
type ActiveBar = "system-setting" | "realtime-monitor" | "history-data";
