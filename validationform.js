function validationform() {
  var nama = document.getElementById("nama").value;
  var alamat = document.getElementById("alamat").value;
  var noTelp = document.getElementById("noTelp").value;
  var password = document.getElementById("password").value;

  var alphabetPattern = /^[a-zA-Z. ]+$/;
  var alphanumericPattern = /^[a-zA-Z0-9. ]+$/;
  var numericPattern = /^[0-9. ]+$/;

  var isValid = true;

  // Validasi Nama
  if (!alphabetPattern.test(nama)) {
    document.getElementById("namaError").innerHTML =
      "Hanya menerima masukan alfabet";
    isValid = false;
    alert("Nama hanya boleh berisi alfabet.");
  } else {
    document.getElementById("namaError").innerHTML = "";
  }

  // Validasi Alamat
  if (!alphanumericPattern.test(alamat)) {
    document.getElementById("alamatError").innerHTML =
      "Hanya menerima masukan alfanumerik dan simbol tertentu";
    isValid = false;
    alert("Alamat hanya boleh berisi alfanumerik dan simbol tertentu.");
  } else {
    document.getElementById("alamatError").innerHTML = "";
  }

  // Validasi No Telp
  if (!numericPattern.test(noTelp)) {
    document.getElementById("noTelpError").innerHTML =
      "Hanya menerima masukan numerik";
    isValid = false;
    alert("Nomor telepon hanya boleh berisi numerik.");
  } else {
    document.getElementById("noTelpError").innerHTML = "";
  }

  // Validasi Password
  if (!alphanumericPattern.test(password)) {
    document.getElementById("passwordError").innerHTML =
      "Hanya menerima masukan alfanumerik dan simbol tertentu";
    isValid = false;
    alert("Password hanya boleh berisi alfanumerik dan simbol tertentu");
  } else {
    document.getElementById("passwordError").innerHTML = "";
  }

  // Cek apakah formulir valid
  if (isValid) {
    alert("Formulir berhasil disubmit!");
  } else {
    alert("Formulir tidak valid. Harap periksa kembali input Anda.");
  }

  return isValid;
}
