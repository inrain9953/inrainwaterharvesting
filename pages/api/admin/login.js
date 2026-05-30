import jwt from "jsonwebtoken";
import cookie from "cookie";

export default async function handler(req, res) {
  // Allow only POST request
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  try {
    const { username, password } = req.body;

    // Validation
    if (!username || !password) {
      return res.status(400).json({
        message: "Username and password required",
      });
    }

    // Admin Credentials
    const ADMIN_USERNAME =
      process.env.ADMIN_USERNAME;

    const ADMIN_PASSWORD =
      process.env.ADMIN_PASSWORD;

    // Check credentials
    if (
      username !== ADMIN_USERNAME ||
      password !== ADMIN_PASSWORD
    ) {
      return res.status(401).json({
        success: false,
        message:
          "Invalid username or password",
      });
    }

    // Create JWT Token
    const token = jwt.sign(
      {
        username,
        role: "admin",
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    // Set Cookie
    res.setHeader(
      "Set-Cookie",
      cookie.serialize(
        "adminToken",
        token,
        {
          httpOnly: true,
          secure:
            process.env.NODE_ENV ===
            "production",
          sameSite: "strict",
          maxAge: 60 * 60 * 24 * 7,
          path: "/",
        }
      )
    );

    // RETURN TOKEN HERE
    return res.status(200).json({
      success: true,
      message: "Login successful",
      token, // IMPORTANT
    });
  } catch (error) {
    console.log(
      "Login Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Internal server error",
    });
  }
}