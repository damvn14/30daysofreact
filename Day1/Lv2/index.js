      // Kiểm tra tuổi lái xe
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

      // Trong giỏ hàng sau đây thêm, xóa, chỉnh sửa các mặt hàng
      const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

      // Thêm Meat vào đầu giỏi hàng
      shoppingCart.unshift("Meat");
      console.log(shoppingCart);

      // Thêm đường vào cuối giỏ hàng
      shoppingCart.push("Sugar");
      console.log(shoppingCart);

      //Update Trà thành Trà xanh
      const updateCart = shoppingCart.map((item) =>
        item === "Tea" ? "Green Tea" : item
      );
      console.log(updateCart);

      //Ở các quốc gia, mảng kiểm tra xem 'Ethiopia' có tồn tại trong mảng hay không,
      // in 'ETHIOPIA'. Nếu nó không tồn tại, hãy thêm vào danh sách quốc gia.

      const countries = ["Vietnam", "USA", "Canada", "Australia", "India"];

      //kiểm tra xem ETHIOPIA có tồn tại hay không.
      const checkEthiopia = countries.includes("Ethiopia");

      if (checkEthiopia) {
        console.log("Ethiopia");

        //Thêm Ethiopia vào danh sách các quốc gia
      } else {
        countries.push("Ethiopia");
      }
      console.log(countries);

      //Trong mảng webTechs, hãy kiểm tra xem Sass có tồn tại trong mảng hay không
      // và liệu nó có tồn tại hay không in 'Sass là một tiền xử lý CSS'.
      //Nếu nó không tồn tại, hãy thêm Sass vào mảng và in mảng.

      const webTechs = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Sass"];

      //Kiểm tra xem Sass có tồn tại trong mảng không?
      const checkSass = webTechs.includes("Sass");
      //Nếu tồn tại thì trả ra Sass is a CSS preprocess
      if (checkSass) {
        console.log("Sass is a CSS preprocess");
      } else {
        //Thêm Sass vào danh sách webTech
        webTechs.push("Sass");
        console.log(webTechs);
      }

      //Ghép hai biến sau và lưu trữ nó trong biến fullStack.

      const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
      const backEnd = ["Node", "Express", "MongoDB"];
      //
      const fullStack = frontEnd.concat(backEnd);

      console.log(fullStack);

      
