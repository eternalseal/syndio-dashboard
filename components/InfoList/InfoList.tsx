import React from "react";

import { CategorizedData } from "../../types/groups/group-by-data";

type Props = {
  data: CategorizedData;
};

const InfoBox = ({ data }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      <article className="p-6 bg-white" id="budget">
        <header className="mb-4 text-xs text-inactive-text">
          {data.payEquityGap.label}
        </header>

        <p className="text-lg text-black">
          {data.payEquityGap.data.majority.label} earn{" "}
          <span className="font-bold">
            {data.payEquityGap.data.majority.value}
          </span>{" "}
          for every{" "}
          <span className="font-bold">
            {data.payEquityGap.data.minority.value}
          </span>{" "}
          earned by comparable {data.payEquityGap.data.minority.label}
        </p>
      </article>
      <article className="p-6 bg-white" id="budget">
        <header className="pl-2 mb-4 text-xs text-inactive-text">
          {data.employeeComparison.label}
        </header>

        <p className="text-lg text-black">
          {data.employeeComparison.data.label} make up{" "}
          <span className="font-bold">
            {data.employeeComparison.data.value}
          </span>{" "}
          of employees
        </p>
      </article>
      <article className="p-6 bg-white" id="budget">
        <header className="pl-2 mb-4 text-xs text-inactive-text">
          {data.budget.label}
        </header>

        <p className="text-lg text-black">
          <span className="font-bold">{data.budget.data.value}</span> minimum
          recommended budget to reduce pay equity gap
        </p>
      </article>
    </div>
  );
};

export default InfoBox;
