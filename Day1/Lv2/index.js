
        // Sử dụng hàm prompt để nhận dữ liệu đầu vào từ người dùng
        var tuoi = prompt("Nhập tuổi của bạn:");
        tuoi = parseInt(tuoi);
        // Kiểm tra xem người dùng đủ tuổi hay không
        if (tuoi >= 18) {
            alert("Bạn đủ tuổi lái xe");
        } else {
            var soNamChoDoi = 18 - tuoi;
            alert("Bạn cần đợi thêm " + soNamChoDoi + " năm để đủ tuổi lái xe");
        }
