let numberArr = [3, 1, 77, 46];

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
  // Câu 4
  timSoDuongNhoNhat();
  // Câu 3
  timSoNhoNhat();
  // Câu 5
  timSoChanCuoiCung();

  findFirstPrime();
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

// Tìm số nhỏ nhất trong mảng
let timSoNhoNhat = () => {
  let min = numberArr[0];
  numberArr.forEach((item) => {
    if (item < min) {
      min = item;
    }
  });

  // Xuất kết quả
  document.getElementById("txt-so-nho-nhat").innerHTML = `Số nhỏ nhất: ${min}`;
};

// Tìm số chẵn cuôi cùng
let timSoChanCuoiCung = () => {
  let ketQua = -1;
  numberArr.forEach((item) => {
    console.log("item:", item);
    if (item % 2 === 0) {
      ketQua = item;
    }
  });
  document.getElementById(
    "txt-so-chan-cuoi-cung"
  ).innerHTML = `Số chẵn cuối cùng: ${ketQua}`;
};

//  Đổi chỗ 2 giá trị trong mảng theo vị trí
let swapItems = () => {
  let index1 = document.getElementById("index-1").value;
  let index2 = document.getElementById("index-2").value;
  let temp = numberArr[index1];
  numberArr[index1] = numberArr[index2];
  numberArr[index2] = temp;
  document.getElementById("txt-array").innerHTML = `[${numberArr}]`;
};

//Sắp xếp mảng theo thứ tự tăng dần
let sortItems = () => {
  numberArr.sort(function (a, b) {
    return a - b;
  });
  document.getElementById("txt-array").innerHTML = `[${numberArr}]`;
};
