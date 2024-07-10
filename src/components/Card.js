import React from 'react';
import { Link } from "react-router-dom";
import arrayImage from '../assets/1d-array.png';

export default function Card({ name, no, qno }) {
  let op = JSON.parse(localStorage.getItem('Checked' + `${no}`));
  let kk = 0;

  if (op != null) {
    op = [...new Set(op)];
    for (let i = 0; i < op.length; i++) {
      if (
        (op[i] !== ',' && op[i] !== '/' && op[i] !== '"' && op[i] !== '[' &&
          op[i] !== ']' && (op[i] < 'a' || op[i] > 'z') && op[i] !== "\\" && op[i] !== '+') ||
        op.length === 3
      ) {
        kk++;
      }
    }
  }

  let ans = op != null ? kk : 0;
  let percentage = Math.round((ans * 100) / qno);

  const fillerStyles = {
    height: '100%',
    width: `${percentage}%`,
    backgroundColor: "#22C55E",
    borderRadius: 'inherit'
  };

  const containerStyles = {
    height: 10,
    backgroundColor: "#e0e0de",
    borderRadius: 10,
    marginTop: 5
  };

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  };

  return (
    <Link to={name} className='w-[290px] lg:mx-8 lg:my-2 md:mx-6 md:my-1'>
      <div className="shadow-lg rounded-lg p-4 border border-purple-300 bg-white">
        <div className="flex items-center">
          <img className='w-6 h-6 mr-3 mt-0 align-top' src={arrayImage} alt='array' />
          <div>
            <h2 className='text-xl text-slate-600 font-bold mt-2'>{name}</h2>
            {ans === 0 ? (
              <h6 className='text-orange-800 mt-2'>Click to Start</h6 >
            ) : (
              <div>
                <div style={containerStyles}>
                  {<div style={fillerStyles}></div>}
                  <span style={labelStyles}></span>
                </div>
              </div>

            )}
          </div>
        </div>
      </div>
    </Link >
  );
}
