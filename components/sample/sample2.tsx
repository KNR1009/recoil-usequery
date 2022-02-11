import React, { memo } from "react";

const Sample2 = () => {
  console.log("サンプルコンポーネント2");
  return <div>サンプルコンポーネント2</div>;
};

export const Sample2Memo = memo(Sample2);
