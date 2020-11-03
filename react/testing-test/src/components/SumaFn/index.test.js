import { Suma } from './index';

describe("SumaFN", () => {
  it("Suma bien", () =>{
    const a = 1;
    const b = 2;
    expect(Suma(a,b)).toBe(3);
  });
});