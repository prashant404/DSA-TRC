import React, { useEffect } from "react";
import Card from "./Card.js";
import { Link } from "react-router-dom";

export default function Lister({
  Checked1,
  Checked2,
  Checked3,
  Checked4,
  Checked5,
  Checked6,
  Checked7,
  Checked8,
  Checked9,
  Checked10,
  Checked11,
  Checked12,
  count,
  setcount,
}) {

  useEffect(() => {
    let counter = 0;
    for (let no = 0; no <= 12; no++) {
      let op = JSON.parse(localStorage.getItem('Checked' + `${no}`));
      if (op != null) {
        op = [...new Set(op)];
        for (let i = 0; i < op.length; i++) {
          if ((op[i] != ',' && op[i] != '/' && op[i] != '"' && op[i] != '[' && op[i] != ']' && (op[i] < 'a' || op[i] > 'z') && op[i] != "\\" && op[i] != '+') || op.length == 3) {
            counter++;
          }
        }
      }
    }
    setcount(counter);
  }, [setcount]);

  const containerStyles = {
    height: 20,
    backgroundColor: "#e0e0de",
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 30,
  };

  return (
    <div>
      <h1 className="text-3xl mt-8 mb-4 text-center">Start your DSA Journey with Practice Questions</h1>

      <h3 className="text-xl mt-2 mb-6 text-purple-800 text-center">
        For Beginners
      </h3>

      {/* <div className="mx-4 md:mx-8 lg:mx-16" style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${count}% `}</span>
        </div>
      </div> */}

      <div className="flex flex-wrap justify-center px-4 md:px-8 lg:px-16 mb-8">
        {/* Cards Section */}
        <Card qno={23} no={"12"} ans={Checked12} Checked={Checked12} name="Array and String" />
        <Card qno={5} no={"1"} ans={Checked1} Checked={Checked1} name="Greedy Problems" />
        <Card qno={13} no={"2"} ans={Checked2} Checked={Checked2} name="Dynamic Programming" />
        <Card qno={7} no={"3"} ans={Checked3} Checked={Checked3} name="Binary search" />
        <Card qno={5} no={"4"} ans={Checked4} Checked={Checked4} name="Heaps" />
        <Card qno={6} no={"5"} ans={Checked5} Checked={Checked5} name="Recursion" />
        <Card qno={8} no={"6"} ans={Checked6} Checked={Checked6} name="Linked List" />
        <Card qno={8} no={"7"} ans={Checked7} Checked={Checked7} name="Binary Tree" />
        <Card qno={6} no={"8"} ans={Checked8} Checked={Checked8} name="Binary Search Tree" />
        <Card qno={7} no={"9"} ans={Checked9} Checked={Checked9} name="Stack and Queue" />
        <Card qno={6} no={"10"} ans={Checked10} Checked={Checked10} name="Backtracking" />
        <Card qno={6} no={"11"} ans={Checked11} Checked={Checked11} name="Graphs" />
      </div>

      <div className="mb-8 text-center">
        <h6>Questions will be updated Weekly!! Stay Tuned.</h6>
        <Link
          target="_blank"
          className="text-sky-600"
          to="https://github.com/prashant404"
        >
          &nbsp; Github{" "}
        </Link>
      </div>
    </div>
  );
}
