/* 
PENDING   → recién registrado
ACTIVE    → verificado
BLOCKED   → bloqueado por admin
 */

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },

    lastName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    passwordHash: {
      type: String,
      required: true,
      select: false, // Obliga a usar .select("+password") solo cuando sea necesario
    },

    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
      required: true,
    },

    status: {
      type: String,
      enum: ["PENDING", "ACTIVE", "BLOCKED"],
      default: "PENDING",
    },

    emailVerified: {
      type: Boolean,
      default: false,
    },

    verificationCode: {
      type: String,
    },

    verificationCodeExpiresAt: {
      type: Date,
    },

    resetPasswordToken: {
      type: String,
    },

    lastPasswordChangeAt: {
      type: Date,
    },

    resetPasswordExpiresAt: {
      type: Date,
    },

    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true, // createdAt + updatedAt
  }
);

export const User = mongoose.model("User", userSchema);
