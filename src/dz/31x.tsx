import React from "react";
import { reverse } from "dns";

const str1: string = "ab1";
export const Dz31x = () => {
  //strings
  const str2: string = "ab2";
  const str3: string = "ab3";
  const str4: string = "ab4";
  const str5: string = "ab5";
  const str6: string = "ab6";
  const str7: string = "ab7";
  const str8: string = "ab8";
  const str9: string = "ab9";
  const str10: string = "ab10";

  //numbers
  const num1: number = 121;
  const num2: number = 122;
  const num3: number = 123;
  const num4: number = 124;
  const num5: number = 125;
  const num6: number = 126;
  const num7: number = 127;
  const num8: number = 128;
  const num9: number = 129;
  const num10: number = 1230;

  //booleans
  const boolean1: Boolean = true;
  const Boolean2: Boolean = true;
  const Boolean3: Boolean = false;
  const Boolean4: Boolean = true;
  const Boolean5: Boolean = true;
  const Boolean6: Boolean = false;
  const Boolean7: Boolean = false;
  const Boolean8: Boolean = true;
  const Boolean9: Boolean = false;
  const Boolean10: Boolean = true;

  //objects
  type CustomObj = {
    text: string;
    num: number;
  };

  const oOj1: CustomObj = {
    text: "anythink",
    num: 123,
  };
  const Obj2: CustomObj = {
    text: "anythink",
    num: 122,
  };
  const Obj3: CustomObj = {
    text: "anythink",
    num: 1233,
  };
  const Obj14: CustomObj = {
    text: "anythink",
    num: 1423,
  };
  const Obj5: CustomObj = {
    text: "anythink",
    num: 523,
  };
  const Obj6: CustomObj = {
    text: "anythink",
    num: 163,
  };
  const Obj7: CustomObj = {
    text: "anythink",
    num: 173,
  };
  const Obj8: CustomObj = {
    text: "anythink",
    num: 823,
  };
  const Obj9: CustomObj = {
    text: "anythink",
    num: 829,
  };
  const Obj810: CustomObj = {
    text: "anythink",
    num: 82103,
  };

  //Arraeis
  const ArrayNum1: Array<number> = [1, 2, 3];
  const ArrayNum2: Array<number> = [2, 5, 8];
  const ArrayStr1: Array<string> = ["a", "b", "c"];
  const ArrayStr2: Array<string> = ["d", "e", "f"];
  const ArrayNum3: Array<number> = [1, 9, 3];
  const ArrayNum4: Array<number> = [9, 5, 8];
  const ArrayStr3: Array<string> = ["a", "b", "d"];
  const ArrayStr4: Array<string> = ["c", "e", "f"];
  const ArrayNum5: Array<number> = [0, 1, 2];
  const ArrayStr5: Array<string> = ["la", "la", "la"];

  function sum(a: number, b: number): number {
    console.log(a + b);
    return a + b;
  }

  function multiply(a: number, b: number): number {
    return a * b;
  }

  function esEven(a: number): Boolean {
    return a % 2 === 0 ? true : false;
  }

  function capitalize(p: string): string {
    return capitalize(p);
  }

  function reverseArray(Array: Array<string>): Array<string> {
    return Array.reverse();
  }

  function findMax(Array: Array<number>): Array<number> {
    return findMax(Array);
  }

  function findString(Array: Array<any>): Array<string> {
    return findString(Array);
  }

  function calculateAverage(nums: Array<number>): number {
    const result1: number = nums.reduce((total, num) => total + num, 0);
    const result: number = result1 / nums.length;

    return result;
  }

  function getUniqueValues<T>(arr: T[]): T[] {
    const uniqueValuesSet = new Set(arr);

    const uniqueValuesArray: T[] = Array.from(uniqueValuesSet);

    return uniqueValuesArray;
  }

  type ObjDate = {
    day: number | string;
    month: number | string;
    year: number | string;
  };

  function formatDate(obj: ObjDate): string {
    return `${obj.day}.${obj.month}.${obj.year}`;
  }

  return <span>Hi</span>;
};
