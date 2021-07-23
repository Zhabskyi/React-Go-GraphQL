import React from "react";

interface Props {
  title: string;
}

const Categories = (props: Props) => {
  const { title } = props;

  return <h2>Category: {title}</h2>;
};

export default Categories;
