import React from "react";

export default function ErrorBox({errMessage}) {
  return (
    <div className="bg-red-700 text-white py-4 text-center rounded-md">
      <h1 className="text-3xl">
        هیچ {errMessage} پیدا نشد 
      </h1>
    </div>
  );
}
