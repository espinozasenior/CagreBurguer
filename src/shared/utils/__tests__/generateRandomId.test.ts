import generateRandomId from "../generateRandomId";

describe("GenerateRandomId", () => {
  
  it("Los valores generados son diferentes en diferentes tiempos", async() => {
      let value1 = generateRandomId();
      await new Promise((r) => setTimeout(r, 1000));
      let value2 = generateRandomId();
      expect(value1).not.toEqual(value2);
  });

});
