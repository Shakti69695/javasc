{
  let A = 2,
    B = 5;
  function AddTwoNumbers(a, b) {
    return a + b;
  }

  console.log(AddTwoNumbers(A, B));
}
{
  let A = 5,
    B = 3;
  function IsValid(a, b) {
    if (a < 10 && b < a) {
      return true;
    }
    return false;
  }
  console.log(IsValid(A, B));
}
{
  let A = 12,
    B = 20;
  function Check(a, b) {
    if ((a % 10 == 0 && b % 10 == 0) || a % 10 == 0 || b % 10 == 0) {
      return true;
    }
    return false;
  }
  console.log(IsValid(A, B));
}
{
  let A = 4567;
  function First_Digit(a) {
    return Math.floor(a / 1000);
  }
  console.log(First_Digit(A));
}
{
  let A = 4567;
  function First_Digit(a) {
    return a % 10;
  }
  console.log(First_Digit(A));
}
{
  let A = 2,
    B = 9;
  function First_Digit(a, b) {
    return b % a;
  }
  console.log(First_Digit(A, B));
}
{
  let A = 2,
    B = 5;
  function First_Digit(a, b) {
    return b * a;
  }
  console.log(First_Digit(A, B));
}
{
  let A = 50,
    B = 20,
    C = 100;
  function Sum(a, b, c) {
    return a + b + C;
  }
  function Average(a, b, c) {
    return (a + b + c) / 300;
  }
  console.log(Sum(A, B, C), Average(A, B, C));
}
