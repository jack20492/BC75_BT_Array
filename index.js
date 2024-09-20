let numberArr = [];

// Submit Array
let submit = () => {
  let numbers = document.getElementById("numbers").value;
  if (numbers.trim() === "") {
    alert("Vui lòng nhập số");
    return;
  }
  numberArr.push(numbers * 1);
  document.getElementById("txt-array").innerHTML = `[${numberArr}]`;
  // Câu 1 & 2
  tinhTongSoDuong();
  // Câu 3
  timSoDuongNhoNhat();
};

// Tính tổng số dương và đếm số dương
let tinhTongSoDuong = () => {
  let ketQua = 0;
  let demSoDuong = 0;
  numberArr.forEach((item) => {
    if (item > 0) {
      ketQua += item;
      demSoDuong++;
    }
  });
  // Xuất kết quả
  document.getElementById(
    "txt-tong-so-duong"
  ).innerHTML = `Tổng số dương: ${ketQua}`;
  document.getElementById(
    "txt-dem-so-duong"
  ).innerHTML = `Số lượng số dương: ${demSoDuong}`;
};

// Tìm số dương nhỏ nhất trong mảng
let timSoDuongNhoNhat = () => {
  let min = numberArr[0];
  numberArr.forEach((item) => {
    if (item < min && item > 0) {
      min = item;
    }
  });

  // Xuất kết quả
  document.getElementById(
    "txt-so-duong-nho-nhat"
  ).innerHTML = `Số dương nhỏ nhất: ${min}`;
};
