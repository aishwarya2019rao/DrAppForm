from flask import Blueprint, request, jsonify

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/api/login", methods=["POST"])
def login():
    data = request.get_json()
    if data["username"] == "admin" and data["password"] == "admin123":
        return jsonify({"success": True, "message": "Login successful"})
    return jsonify({"success": False, "message": "Invalid credentials"}), 401

