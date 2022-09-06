from flask import Flask
from flask_restx import Api
from models import Profile, User
from exts import db
from flask_jwt_extended import JWTManager
from profiles import profile_ns
from auth import auth_ns
from flask_cors import CORS


def create_app(config):
    app = Flask(__name__)
    app.config.from_object(config)

    CORS(app)

    db.init_app(app)

    JWTManager(app)

    api = Api(app, doc="/docs")
    api.add_namespace(profile_ns)
    api.add_namespace(auth_ns)

    # model serialization

    @app.shell_context_processor
    def make_shell_context():
        return {"db": db, "profile": Profile}

    return app
