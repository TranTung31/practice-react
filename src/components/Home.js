const Home = () => {
  return (
    <>
      <div className="home-container" style={{ marginTop: "20px" }}>
        <span>Yêu cầu: </span> <br />
        <span>Sử dụng API từ trang web https://reqres.in để tạo website.</span>
        <br />
        <span>
          Sử dụng thư viện React để tạo một màn hình website cơ bản bao gồm các
          chức năng:
        </span>
        <br />
        <ul>
          <li>1. Đăng nhập</li>
          <li>2. Thêm User</li>
          <li>3. Sửa User</li>
          <li>4. Xóa User</li>
          <li>5. Hiển thị tất cả User</li>
          <li>6. Tìm kiếm User theo id</li>
          <li>7. Sắp xếp theo FirstName</li>
          <li>8. Import User từ file .csv</li>
          <li>9. Export User từ file .csv</li>
        </ul>
        <span>Tự do tùy chỉnh html, css để có một website đẹp.</span>
        <br />
        <span>Commit và đẩy sources code lên github public.</span>
        <br />
        <span>Triển khai website lên Heroku để demo.</span>
        <br />
        <br />
        <b>Result: </b>
        <span>Thời gian hoàn thành 1-3 ngày</span> <br />
        <span>Yêu cầu backend (Không bắt buộc)</span> <br />
        <span>
          Sử dụng python django rest framework, tạo các API như trên trang web:
          https://reqres.in
        </span>
      </div>
    </>
  );
};

export default Home;
