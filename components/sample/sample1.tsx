import React, { memo } from "react";

const Sample1 = () => {
  console.log("サンプルコンポーネント1");
  return <div>サンプルコンポーネント1</div>;
};

export const Sample1Memo = memo(Sample1);
