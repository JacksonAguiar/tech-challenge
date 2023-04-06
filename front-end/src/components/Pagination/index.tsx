import React from "react";
import "./styles.css";

interface Props {
  onChange: Function;
  total: number;
  current: number;
}

const PaginationComponent: React.FC<Props> = ({
  onChange,
  total,
  current,
  ...props
}: Props) => {
  return (
    <div className="content-pagination">
      {Array.from(Array(total).keys()).map((n) => (
        <div key={`id-${n}`} className={`item-pagination ${n+1===current? "active": "inactive"}`} onClick={() => onChange(n)}>
          {n + 1}
        </div>
      ))}
    </div>
  );
};

export default PaginationComponent;
