import { useRef } from "react";
import Style from "./events-search.module.css";
import Button from "./ui/Button";
interface propsData {
  onSearch: (a: number, b: number) => void;
}

const EventSearch: React.FC<propsData> = (props) => {
  const yearRef = useRef<HTMLSelectElement>(null);
  const monthRef = useRef<HTMLSelectElement>(null);
  const fromSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const selectedYear = +yearRef.current!.value;
    const selectedMonth = +monthRef.current!.value;

    props.onSearch(selectedYear, selectedMonth);
  };
  return (
    <form onSubmit={fromSubmitHandler} className={Style.form}>
      <div className={Style.controls}>
        <div className={Style.control}>
          <label htmlFor="year">year</label>
          <select name="" id="year" ref={yearRef}>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={Style.control}>
          <label htmlFor="month">month</label>
          <select name="" id="month" ref={monthRef}>
            <option value="0">Jan</option>
            <option value="1">Feb</option>
            <option value="2">Mar</option>
            <option value="3">Apr</option>
            <option value="4">May</option>
            <option value="5">Jun</option>
            <option value="6">Jul</option>
            <option value="7">Aug</option>
            <option value="8">Sep</option>
            <option value="9">Oct</option>
            <option value="10">Nov</option>
            <option value="11">Dec</option>
          </select>
        </div>
      </div>
      <Button>Save Filter </Button>
    </form>
  );
};

export default EventSearch;
