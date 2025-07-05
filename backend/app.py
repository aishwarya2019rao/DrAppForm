from flask import Flask
from flask_cors import CORS
from auth import auth_bp
from doctors import doctors_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(auth_bp)
app.register_blueprint(doctors_bp)

if __name__ == "__main__":
    app.run(debug=True)
