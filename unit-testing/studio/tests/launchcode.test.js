// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  test("should pass the value of org as nonprofit.", function() {
    let result = launchcode.organization;
    expect(result).toBe('nonprofit');
  });
  
  test("should pass the vaule of executiveDirector as 'Jeff'", function() {
    let result = launchcode.executiveDirector;
    expect(result).toBe("Jeff");
  });

  test("should pass the value of 'percentageCoolEmployees' as '100'", function() {
    let result = launchcode.percentageCoolEmployees;
    expect(result).toBe(100);
  });

  test("should contain the 3 programs in programsOffered", function() {
    let result = launchcode.programsOffered;
    expect(result).toContain('Web Development');
    expect(result).toContain('Data Analysis');
    expect(result).toContain('Liftoff');
    expect(result.length).toBe(3);
  });

  test("should return 'Launch!' when num divisible by 2", function() {
    let result = launchcode.launchOutput(2);
    expect(result).toBe("Launch!");
  });

  test("should return 'Code!' when num divisible by 3", function() {
    let result = launchcode.launchOutput(3);
    expect(result).toBe("Code!");
  });

  test("should return 'Rocks!' when num divisible by 5", function() {
    let result = launchcode.launchOutput(5);
    expect(result).toBe("Rocks!");
  });

  test("should return Code Rocks! when passed num divisible by only 3 and 5", function() {
    let result = launchcode.launchOutput(15);
    expect(result).toBe("Code Rocks!");
  });

  test("should return 'Launch Rocks! (CRASH!!!!)' when passed num divisible by only 2 and 5", function() {
    let result = launchcode.launchOutput(10);
    expect(result).toBe('Launch Rocks! (CRASH!!!!)');
  });

  test("should return LaunchCode Rocks! when passed num divisible by only 2 and 3 and 5", function() {
    let result = launchcode.launchOutput(30);
    expect(result).toBe("LaunchCode Rocks!");
  });

  test("should return 'Rutabagas! That doesn't work.' when passed num not divisible by only 2 and 3 and 5", function() {
    let result = launchcode.launchOutput(7);
    expect(result).toBe("Rutabagas! That doesn't work.");
  });

});