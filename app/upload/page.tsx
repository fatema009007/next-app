"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { Result } from "postcss";

interface CloudnaryResult {
  public_id: string;
}

export const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      {publicId ? (
        <CldImage
          width="960"
          height="600"
          src={'cld-sample'}
          sizes="100vw"
          alt="Description of my image"
        />
      ) : null}
      <CldUploadWidget
        uploadPreset="yfnfuwbm"
        onUpload={(result, widget) => {
          console.log("result", result);
          if (result.event !== "success") return;
          const info = result.info as CloudnaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => {
          return <button onClick={() => open()}>Upload an Image</button>;
        }}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
