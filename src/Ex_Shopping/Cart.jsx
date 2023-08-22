import React from "react";

export default function Cart({ onCloseCart, cart }) {
  return (
    <>
      <div style={{ display: "block" }} className="modal show" tabIndex={-1}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ Hàng </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onCloseCart}
              />
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <td>Mã Sản Phẩm</td>
                    <td>Hình Ảnh</td>
                    <td>Tên Sản Phẩm</td>
                    <td>Số Lượng</td>
                    <td>Đơn Giá</td>
                    <td>Thành Tiền</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>
                          <img
                            src={item.img}
                            alt={item.name}
                            width="70px"
                            height="70px"
                          />
                        </td>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity * item.price}</td>
                        <td>
                          <button className="btn btn-danger">X</button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onCloseCart}
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal-backdrop fade show"></div>
    </>
  );
}
