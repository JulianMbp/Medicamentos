"use client";

import React from "react";
import { motion } from "framer-motion";

const Welcome: React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-white dark:bg-zinc-900 ">
      <motion.div 
        className="w-full max-w-md p-6 bg-gradient-to-br from-green-50 to-blue-50 bg-green-600 dark:bg-zinc-800 rounded-lg shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex items-center justify-center mb-4"
          initial={{ rotate: -10 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
        </motion.div>
        
        <motion.h1 
          className="text-3xl font-bold text-center text-gray-800 dark:text-zinc-800  mb-2"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Bienvenido a Med
          <span className="text-green-500 dark:text-green-400">Finder</span>
        </motion.h1>
        
        <motion.h3 
          className="text-lg text-center text-gray-600 dark:text-zinc-800 "
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Encuentra los medicamentos que necesitas
        </motion.h3>
        
        <motion.div 
          className="mt-6 flex justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="w-16 h-16 -mt-4 rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="size-24 dark:fill-black" version="1.0" width="617.000000pt" height="549.000000pt" viewBox="0 0 617.000000 549.000000" preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,549.000000) scale(0.100000,-0.100000)" fill="#4adc83" stroke="none">
                  <path d="M2093 5262 c-39 -4 -75 -11 -80 -15 -4 -5 -10 -346 -13 -758 -4 -652 -7 -751 -20 -759 -17 -11 -6 -11 -880 -19 l-645 -6 -3 -350 c-2 -288 0 -354 12 -370 13 -19 40 -19 927 -22 911 -3 1062 -6 1090 -23 10 -7 16 -40 20 -124 4 -70 11 -122 19 -131 9 -11 34 -15 96 -15 73 0 85 3 94 20 7 13 11 418 13 1279 2 1133 0 1262 -14 1276 -13 13 -56 16 -280 19 -145 3 -296 1 -336 -2z m378 -241 l24 -19 0 -886 c0 -837 -1 -886 -18 -903 -17 -17 -66 -18 -898 -18 -869 0 -881 0 -896 20 -12 16 -14 40 -9 129 4 60 11 116 18 123 8 10 77 13 322 14 171 0 508 4 749 8 391 6 439 9 454 24 16 15 17 76 20 739 2 398 6 733 9 746 6 31 35 41 125 41 61 1 82 -3 100 -18z" />
                  <path d="M3323 5263 c-37 -3 -56 -9 -62 -21 -5 -10 -12 -541 -15 -1222 -4 -663 -9 -1256 -12 -1318 -5 -99 -8 -113 -26 -123 -14 -8 -401 -12 -1277 -16 -691 -3 -1305 -8 -1366 -11 l-110 -7 -3 -431 -2 -432 397 -6 c827 -13 1162 -23 1178 -36 13 -11 15 -88 15 -580 0 -312 3 -656 7 -765 6 -178 8 -200 26 -218 18 -18 33 -19 348 -16 299 4 330 6 346 22 17 17 18 79 23 1107 5 1026 6 1091 23 1107 16 16 39 18 207 18 118 0 193 -4 199 -10 23 -23 31 -336 31 -1230 0 -578 4 -943 10 -964 5 -19 15 -38 22 -43 15 -9 592 -9 688 1 l64 6 12 40 c9 29 13 179 13 526 1 267 4 601 8 743 6 247 7 258 27 269 15 9 223 13 778 17 602 4 760 8 770 18 10 10 13 88 13 358 0 316 -1 347 -17 358 -30 22 -227 26 -1189 26 -838 -1 -934 1 -948 15 -13 13 -16 40 -16 145 0 111 3 132 18 147 17 17 78 18 1068 24 957 6 1053 8 1068 23 14 15 16 60 16 432 0 330 -3 416 -13 423 -19 11 -492 21 -1048 21 -444 0 -483 1 -503 18 l-22 17 -6 764 c-6 696 -8 766 -23 781 -14 14 -48 18 -200 23 -182 7 -417 7 -517 0z m467 -239 c23 -23 27 -159 30 -848 1 -385 4 -705 6 -711 5 -13 480 -24 1124 -26 340 -2 447 -9 462 -30 5 -8 7 -87 3 -194 -5 -138 -10 -184 -21 -195 -13 -13 -130 -15 -932 -15 -504 0 -929 3 -944 8 -20 5 -29 15 -33 40 -3 17 -4 464 -3 993 3 822 5 963 17 978 13 16 31 17 148 14 80 -2 136 -7 143 -14z m-1258 -2722 c21 -21 24 -175 19 -1114 l-4 -878 -36 -10 c-82 -23 -212 -6 -231 30 -6 12 -10 280 -10 762 0 409 -3 753 -6 766 -4 12 -16 25 -28 27 -11 3 -359 9 -773 13 -703 7 -753 8 -770 25 -16 16 -18 38 -18 187 0 120 4 173 12 181 7 7 32 16 55 20 24 3 433 6 910 5 695 -1 870 -4 880 -14z m2878 -129 c9 -9 -2 -248 -12 -260 -8 -10 -95 -13 -367 -14 -621 -1 -1178 -14 -1193 -27 -13 -10 -16 -131 -21 -778 -5 -674 -8 -769 -21 -783 -13 -12 -42 -15 -146 -16 -111 0 -132 2 -147 18 -17 17 -18 69 -21 929 -2 654 1 914 9 924 6 7 37 15 72 17 93 5 1841 -4 1847 -10z" />
                </g>
              </svg>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Welcome;

