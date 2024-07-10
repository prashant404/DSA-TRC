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
      <div className={percentage !== 100 ?
        "flex items-center m-2 justify-between border-purple-300 shadow-lg font-open-sans border-spacing-1.5 border-2 w-auto rounded-lg box-border p-8" :
        "flex items-center m-2 justify-between border-purple-300 shadow-lg font-open-sans border-spacing-1.5 border-2 w-auto rounded-lg box-border p-8 bg-green-100"}>

        <img className='w-6 h-6 mr-3 mt-0 align-top' src={arrayImage} alt='array' />

        <div>
          <h2 className='text-xl text-slate-600 font-bold mt-2'>{name}</h2>
          <h4 className='text-bg font-bold text-zinc-700 mt-2 mb-1'>Total Questions: {qno}</h4>

          {ans === 0 ? (
            <h6 className='text-orange-800 mt-2'>Click to Start</h6 >
          ) : (
            percentage !== 100 ? (
              <div>
                <div className='justify-between mt-2 text-center flex'>
                  <h6 className='rounded-xl bg-green-300 pt-1 w-16 text-slate-700 text-xs text-center'>Completed</h6>
                  <h6 className='text-green-700'>{percentage} %</h6>
                </div>
                <div style={containerStyles}>
                  <div style={fillerStyles}>
                    <span style={labelStyles}></span>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className='justify-between mt-2 text-center flex'>
                  <h6 className='rounded-xl bg-green-00 pt-1 w-16 text-slate-700 text-xs'>FINISHED</h6>
                  <img src="https://cdn.shopify.com/s/files/1/1061/1924/products/Clapping_Hands_Emoji_ios10_d7ab242e-7230-47bf-b1e2-d46a4bc51b5b_grande.png?v=1571606090" alt="clap" className='w-5 h-5' />
                  <h6 className='text-green-700'>100%</h6>
                </div>
                <div className="h-2 rounded-lg w-full mt-1 bg-green-500">
                  <div className="h-2 rounded-lg bg-green-500 w-2"></div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </Link>
  );
}
