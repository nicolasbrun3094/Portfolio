import React from "react";
import LogoDev from "../../assets/images/code-solid.svg";
import "./services.css";

const services = () => {
  return (
    <div className="services-container">
      <h2>
        My <b>Services</b>
      </h2>
      <div className="dev-container">
        <img
          className="logo-dev"
          src={LogoDev}
          alt="Logo Dev"
          style={{ filter: "invert(1) grayscale(100%)" }}
        />

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
          sunt unde doloremque sapiente, explicabo eos perferendis ipsam labore.
          Dolore facilis asperiores libero nostrum, inventore sunt fugiat eos
          excepturi? Atque, aliquam?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic at
          dolorem veniam consectetur molestiae perferendis, inventore placeat
          nam, maxime deleniti repellendus libero recusandae voluptas nulla.
          Omnis dicta fuga tempore quis.
        </p>
      </div>
    </div>
  );
};

export default services;
