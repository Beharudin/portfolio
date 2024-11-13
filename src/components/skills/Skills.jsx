import React from "react";

function Skills({ data }) {
  return (
    <div className="skills flex pr-5 pl-0 py-2">
      <div className="container mt-4">
        <div className="w-full">
          {data &&
            data.map((data) => (
              <div className="w-full mb-6">
                <div className="flex flex-col position-relative">
                  <p className="absolute uppercase font-bold text-santas-gray-700">
                    {data.title}
                  </p>

                  <div
                    class={`inline-block mb-2 py-0.5 px-1.5  text-sm font-medium text-blue-600`}
                    style={{ marginLeft: `calc(${data.value}% - 1.25rem)` }}
                  >
                    {data.value}%
                  </div>
                  <div
                    class="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
                    role="progressbar"
                    aria-valuenow={`${data.value}%`}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <div
                      class="flex flex-col justify-center rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-emerald-500 transition duration-500"
                      style={{ width: `${data.value}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
