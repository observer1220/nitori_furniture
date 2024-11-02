// models/product.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    discount_price: {
      type: DataTypes.INTEGER,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    tableName: "products",
    timestamps: false,
  }
);

module.exports = Product;
