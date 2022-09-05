from flask import Flask, request, jsonify
from flask_restx import Api, Resource, fields
from config import DevConfig
from models import Profile, User
from exts import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import (
    JWTManager,
    create_access_token,
    create_refresh_token,
    jwt_required,
)

app = Flask(__name__)
app.config.from_object(DevConfig)

db.init_app(app)

JWTManager(app)

api = Api(app, doc="/docs")

# model serialization
profile_model = api.model(
    "Profile",
    {
        "password": fields.String(),
        "nickname": fields.String(),
        "dog_name": fields.String(),
        "age": fields.Integer(),
        "description": fields.String(),
        "title_img": fields.String(),
        "other_imgs": fields.String(),
        "likes": fields.String(),
        "dislikes": fields.String(),
        "matches": fields.String(),
    },
)

signup_model = api.model(
    "SignUp",
    {
        "username": fields.String(),
        "email": fields.String(),
        "password": fields.String(),
    },
)

login_model = api.model(
    "Login", {"username": fields.String(), "password": fields.String()}
)


@api.route("/hello")
class HelloResource(Resource):
    def get(self):
        return {"message": "hello world"}


@api.route("/signup")
class SignUp(Resource):
    @api.expect(signup_model)
    def post(self):
        data = request.get_json()

        username = data.get("username")

        db_user = User.query.filter_by(username=username).first()

        if db_user is not None:
            return jsonify({"message": f"User with {username} already exists!"})

        new_user = User(
            username=data.get("username"),
            email=data.get("email"),
            password=generate_password_hash(data.get("password")),
        )

        new_user.save()

        return jsonify(
            {"message": f"User - {new_user.username} - succesfully created!"}
        )


@api.route("/login")
@api.expect(login_model)
class Login(Resource):
    def post(self):
        data = request.get_json()

        username = data.get("username")
        password = data.get("password")

        db_user = User.query.filter_by(username=username).first()

        if db_user.username == username and check_password_hash(
            db_user.password, password
        ):
            access_token = create_access_token(identity=db_user.username)
            refresh_token = create_refresh_token(identity=db_user.username)

            return jsonify(
                {
                    "message": "You have successully logged in!",
                    "access_token": access_token,
                    "refresh_token": refresh_token,
                }
            )

        else:
            return jsonify(
                {
                    "message": "Wrong login credentials, please try again with correct ones!"
                }
            )


@api.route("/profiles")
class ProfilesResource(Resource):
    @api.marshal_list_with(profile_model)
    def get(self):
        profiles = Profile.query.all()
        return profiles

    @api.marshal_with(profile_model)
    @api.expect(profile_model)
    @jwt_required()
    def post(self):
        """create new profile"""
        data = request.get_json()
        new_profile = Profile(
            password=data.get("password"),
            nickname=data.get("nickname"),
            dog_name=data.get("dog_name"),
            age=data.get("age"),
            description=data.get("description"),
            title_img=data.get("title_img"),
            other_imgs=data.get("other_imgs"),
            likes=data.get("likes"),
            dislikes=data.get("dislikes"),
            matches=data.get("matches"),
        )
        new_profile.save()
        return new_profile, 201


@api.route("/profiles/<int:id>")
class ProfilesResource(Resource):
    @api.marshal_with(profile_model)
    def get(self, id):
        """get particular profile"""
        profile = Profile.query.get_or_404(id)
        return profile

    @jwt_required()
    @api.marshal_with(profile_model)
    def delete(self, id):
        profile_to_delete = Profile.query.get_or_404(id)
        profile_to_delete.delete()
        return profile_to_delete

    @jwt_required()
    @api.marshal_with(profile_model)
    def put(self, id):
        """update particular profile"""
        profile_to_update = Profile.query.get_or_404(id)
        data = request.get_json()
        profile_to_update.update(
            data.get("nickname"),
            data.get("dog_name"),
            data.get("age"),
            data.get("description"),
            data.get("title_img"),
            data.get("other_imgs"),
            data.get("likes"),
            data.get("dislikes"),
            data.get("matches"),
        )
        return profile_to_update


@app.shell_context_processor
def make_shell_context():
    return {"db": db, "profile": Profile}


if __name__ == "__main__":
    app.run(debug=True)
