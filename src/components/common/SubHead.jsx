import * as React from "react";

function SubHead({ text }) {
  return (
    <div className="text-2xl leading-8 text-black capitalize max-w-[238px]">
      {text}
    </div>
  );
}

export default SubHead;
