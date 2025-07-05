from flask import Blueprint, request, jsonify
import os

doctors_bp = Blueprint("doctors", __name__)
UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@doctors_bp.route("/api/doctors", methods=["POST"])
def submit_doctor():
    form = request.form
    file = request.files.get("photo")

    filename = file.filename
    file.save(os.path.join(UPLOAD_FOLDER, filename))

    # You can store the form data into a DB here
    print(form.to_dict(), "Photo saved as:", filename)

    return jsonify({"status": "Doctor data saved"})
