import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";
import User from "./User";

interface UserDataAttributes {
  userId: number;
  privateName?: string;
  familyName?: string;
  age?: Date;
  address?: string;
  job?: string;
}

interface UserDataCreationAttributes
  extends Optional<UserDataAttributes, "userId"> {}

class UserData
  extends Model<UserDataAttributes, UserDataCreationAttributes>
  implements UserDataAttributes
{
  public userId!: number;
  public privateName?: string;
  public familyName?: string;
  public age?: Date;
  public address?: string;
  public job?: string;
}

UserData.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: User,
        key: "id",
      },
      onDelete: "CASCADE", // Ensures that when a user is deleted, their associated userData is also deleted
    },
    privateName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    familyName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    age: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    job: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "userData",
  }
);

// Define association
User.hasOne(UserData, {
  foreignKey: "userId",
  as: "userData",
});
UserData.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

export default UserData;
