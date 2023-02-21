import Link from "next/link";
import React from "react";
import style from "./button.module.css";
interface propsData {
  link?: string;
  children: React.ReactNode;
  onClick?: () => void;
}
const Button: React.FC<propsData> = (props) => {
  if (props.link) {
    return (
      <Link href={props.link} className={style.btn}>
        {props.children}
      </Link>
    );
  }
  return (
    <button onClick={props.onClick} className={style.btn}>
      {props.children}
    </button>
  );
};

export default Button;
