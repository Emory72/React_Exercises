import React from "react";

export default function ProductDetails({ onCloseDesc, product }) {
  if (!product) {
    return null;
  }
  return (
    <>
      <div style={{ display: "block" }} class="modal show" tabindex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Product Details</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onCloseDesc}
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-5">
                  <h3 className="text-center">{product.name}</h3>
                  <img
                    src={product.img}
                    alt={product.name}
                    width="100%"
                    height="500px"
                  />
                </div>

                <div className="col-md-6">
                  <h3>Technical Information</h3>
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Type</td>
                        <td>{product.alias}</td>
                      </tr>
                      <tr>
                        <td>Price </td>
                        <td>{product.price}</td>
                      </tr>
                      <tr>
                        <td>Description</td>
                        <td>{product.shortDescription}</td>
                      </tr>
                      <tr>
                        <td>Quantity</td>
                        <td>{product.quantity}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal-backdrop fade show"></div>
    </>
  );
}
